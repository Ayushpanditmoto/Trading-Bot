"use client";

import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/lib/theme";

/**
 * Client-side providers. styled-components' ThemeProvider is injected here
 * so every styled-component can read the shared design tokens.
 */
export default function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
