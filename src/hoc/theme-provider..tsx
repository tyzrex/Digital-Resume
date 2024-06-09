"use client";

import { ThemeProvider } from "next-themes";

function Theming({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      storageKey="joscript-theme"
      enableSystem
      disableTransitionOnChange
      attribute="class"
    >
      {children}
    </ThemeProvider>
  );
}
export default Theming;
