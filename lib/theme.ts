/**
 * Global design tokens shared by styled-components and globals.css.
 * Exposed as CSS custom properties so both systems stay in sync.
 */
export const theme = {
  colors: {
    bg: "#050507",
    bgElevated: "#0a0a0e",
    surface: "#0e0e14",
    border: "rgba(255, 255, 255, 0.08)",
    borderStrong: "rgba(255, 255, 255, 0.14)",
    text: "#fafafa",
    textSecondary: "#9ca0ab",
    textMuted: "#6b6f7a",
    accentViolet: "#8b5cf6",
    accentBlue: "#4f7dff",
    accentCyan: "#22d3ee",
    positive: "#34d399",
    negative: "#f87171",
    warning: "#fbbf24",
  },
  fonts: {
    body: "var(--font-inter)",
    display: "var(--font-display)",
    mono: "var(--font-mono)",
  },
  radius: {
    sm: "10px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    pill: "999px",
  },
  gradient: {
    primary: "linear-gradient(135deg, #8b5cf6 0%, #4f7dff 55%, #22d3ee 100%)",
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
} as const;

export type Theme = typeof theme;
