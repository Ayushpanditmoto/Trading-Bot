/**
 * Centralized app constants.
 * Update these links once and the whole landing page follows.
 */

export const BRAND_NAME = "Trading Bot";
export const BRAND_FULL = "Trading Bot Signals";

/** Primary conversion link (Quotex partner registration / get started). */
export const CTA_LINK = "https://panditrader.vercel.app/quotex";

/** Partner registration link — register for a Quotex account here. */
export const REGISTER_LINK = "https://panditrader.vercel.app/quotex";

/** Login link — place your dashboard/partner login URL here when available. */
export const LOGIN_LINK = "https://panditrader.vercel.app/quotex";

/** Anchor navigation used by the navbar & CTAs. */
export const NAV_ITEMS = [
  { label: "Product", href: "#product" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "AI Technology", href: "#ai-technology" },
  { label: "FAQ", href: "#faq" },
] as const;

export const SECTION_IDS = {
  product: "product",
  features: "features",
  howItWorks: "how-it-works",
  aiTechnology: "ai-technology",
  tradeExamples: "trade-examples",
  showcase: "showcase",
  access: "access",
  faq: "faq",
} as const;
