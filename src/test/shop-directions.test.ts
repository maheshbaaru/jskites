import { describe, expect, it } from "vitest";
import { DIRECTIONS } from "@/lib/shop";

describe("Shop directions", () => {
  it("opens Google Maps navigation to the shop's street address", () => {
    const url = new URL(DIRECTIONS);
    expect(url.origin).toBe("https://www.google.com");
    expect(url.pathname).toBe("/maps/dir/");
    expect(url.searchParams.get("api")).toBe("1");
    expect(url.searchParams.get("destination")).toBe(
      "Ravindra Bharathi School Road, Kamala Nagar, Vanasthalipuram, Hyderabad, Telangana 500070",
    );
    expect(url.searchParams.get("travelmode")).toBe("driving");
    expect(url.searchParams.get("dir_action")).toBe("navigate");
  });
});