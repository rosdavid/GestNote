// Import the Loader component from Lucide React
import type { Metadata } from "next"; // Importing Metadata type from Next.js
import { Inter } from "next/font/google"; // Importing Inter font from Next.js
import "./globals.css"; // Importing global CSS file

// Importing custom providers
import { ThemeProvider } from "@/providers/theme-provider";
import { ConvexClientProvider } from "@/providers/convex-provider";
import { EdgeStoreProvider } from "@/lib/edgestore";

// Importing Toaster component from Sonner
import { Toaster } from "sonner";
import { ModalProvider } from "@/providers/modal-provider";

// Initializing Inter font
const inter = Inter({ subsets: ["latin"] });

// Metadata configuration for the application
export const metadata: Metadata = {
  title: "GestNote",
  description:
    "The connected workspace where better, faster note taking happens.",
  icons: {
    icon: [
      // Light color scheme logo configuration
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.svg",
        href: "/logo.svg",
      },
      // Dark color scheme logo configuration
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-dark.svg",
        href: "/logo-dark.svg",
      },
    ],
  },
};

// Root layout component for the application
export default function RootLayout({
  children, // The child component(s) to be rendered inside the layout
}: Readonly<{
  children: React.ReactNode; // Type annotation for children prop
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* ConvexClientProvider wrapper for providing Convex client to the application */}
        <ConvexClientProvider>
          <EdgeStoreProvider>
            {/* ThemeProvider wrapper for managing and providing theme to the application */}
            <ThemeProvider
              attribute="class" // The attribute where theme class will be applied
              defaultTheme="system" // Default theme for the application
              enableSystem // Enable system theme preference
              disableTransitionOnChange // Disable transition animation when theme changes
              storageKey="gestnote_theme" // Local storage key to store theme preference
            >
              {/* Toaster component for displaying notifications */}
              <Toaster position="bottom-right" />
              <ModalProvider />
              {children}
            </ThemeProvider>
          </EdgeStoreProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
