"use client";

// Import necessary modules:
// - React: A JavaScript library for building user interfaces
// - ThemeProvider as NextThemesProvider: A theming component from 'next-themes' library
// - type ThemeProviderProps: Type definition for ThemeProvider props from 'next-themes/dist/types'
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

// Functional component for ThemeProvider
// This component accepts 'children' and 'props' as arguments
// It renders the 'NextThemesProvider' component with the received 'props'
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
