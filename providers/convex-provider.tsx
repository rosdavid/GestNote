"use client";

// Import necessary modules and libraries
import { ConvexReactClient } from "convex/react";
import { ReactNode } from "react";
import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";

// Initialize ConvexReactClient with the NEXT_PUBLIC_CONVEX_URL environment variable
const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

// ConvexClientProvider component
// This component wraps the children with both ClerkProvider and ConvexProviderWithClerk
// It provides the necessary context for authentication and Convex access to the wrapped components
export const ConvexClientProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ClerkProvider
      // Set the publishableKey using the NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY environment variable
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
    >
      <ConvexProviderWithClerk
        // Pass the useAuth hook and convex client to ConvexProviderWithClerk
        useAuth={useAuth}
        client={convex}
      >
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};
