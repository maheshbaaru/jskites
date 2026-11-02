import { createServerFn } from "@tanstack/react-start";

export type ShopRating = { rating: number; count: number };

// Last known values; shown if Google can't be reached.
export const FALLBACK_RATING: ShopRating = { rating: 5, count: 202 };

const PLACE_ID = "ChIJW8zO2W6hyzsRXBV9uO3q14M";
const CACHE_KEY = "https://jskites.cache/rating-v1";
const DAY = 60 * 60 * 24;
let memo: { at: number; value: ShopRating } | null = null;

// Public, takes no input, and is cached for a day — at most ~1 Google call per day per server.
export const getShopRating = createServerFn({ method: "GET" }).handler(async (): Promise<ShopRating> => {
  if (memo && Date.now() - memo.at < DAY * 1000) return memo.value;
  const cache = (globalThis as { caches?: { default?: Cache } }).caches?.default;
  try {
    const hit = await cache?.match(CACHE_KEY);
    if (hit) {
      const value = (await hit.json()) as ShopRating;
      memo = { at: Date.now(), value };
      return value;
    }
  } catch { /* cache unavailable */ }

  const lovableKey = process.env["LOVABLE_API_KEY"];
  const mapsKey = process.env["GOOGLE_MAPS_API_KEY"];
  if (!lovableKey || !mapsKey) return FALLBACK_RATING;
  try {
    const res = await fetch(`https://connector-gateway.lovable.dev/google_maps/places/v1/places/${PLACE_ID}`, {
      headers: {
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": mapsKey,
        "X-Goog-FieldMask": "rating,userRatingCount",
      },
    });
    if (!res.ok) {
      console.error(`Rating fetch failed [${res.status}]: ${await res.text()}`);
      return memo?.value ?? FALLBACK_RATING;
    }
    const j = (await res.json()) as { rating?: number; userRatingCount?: number };
    if (typeof j.rating !== "number" || typeof j.userRatingCount !== "number") return FALLBACK_RATING;
    const value = { rating: j.rating, count: j.userRatingCount };
    memo = { at: Date.now(), value };
    try {
      await cache?.put(CACHE_KEY, new Response(JSON.stringify(value), { headers: { "Cache-Control": `max-age=${DAY}` } }));
    } catch { /* ignore */ }
    return value;
  } catch (e) {
    console.error("Rating fetch error", e);
    return memo?.value ?? FALLBACK_RATING;
  }
});

export const ratingQuery = {
  queryKey: ["shop-rating"] as const,
  queryFn: () => getShopRating(),
  staleTime: DAY * 1000,
};
