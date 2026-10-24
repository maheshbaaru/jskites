// Shared shop details and WhatsApp helpers — used by the home, reviews and contact pages.
export const WHATSAPP = "919989714335";
export const PHONE_DISPLAY = "+91 99897 14335";
export const ADDRESS =
  "Ravindra Bharathi School Road, Kamala Nagar, Vanasthalipuram, Hyderabad, Telangana 500070";
export const MAP_QUERY = encodeURIComponent(`JS Kite Shop, ${ADDRESS}`);
export const WA_TEXT = encodeURIComponent("Hi JS Kite Shop! I'd like to know about your kites.");
export const WA_LINK = `https://wa.me/${WHATSAPP}?text=${WA_TEXT}`;
export const WA_WEB_LINK = `https://web.whatsapp.com/send?phone=${WHATSAPP}&text=${WA_TEXT}`;
export const WA_APP_LINK = `whatsapp://send?phone=${WHATSAPP}&text=${WA_TEXT}`;
// Include the business name: the street address alone resolves to the nearby
// Ravindra Bharathi School instead of the shop. Leave the origin to the visitor.
export const DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}&travelmode=driving&dir_action=navigate`;

// Opens the visitor's own WhatsApp app with a chat to the shop's number.
// Phones: whatsapp:// opens the app directly (wa.me as fallback).
// Computers: whatsapp:// opens WhatsApp Desktop; if it isn't installed, fall back to WhatsApp Web.
export function onWhatsAppClick(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
  let left = false;
  const markLeft = () => { left = true; };
  window.addEventListener("blur", markLeft, { once: true });
  document.addEventListener("visibilitychange", markLeft, { once: true });
  window.location.href = WA_APP_LINK;
  setTimeout(() => {
    window.removeEventListener("blur", markLeft);
    document.removeEventListener("visibilitychange", markLeft);
    if (!left) window.open(isMobile ? WA_LINK : WA_WEB_LINK, "_blank", "noopener,noreferrer");
  }, 2000);
}
