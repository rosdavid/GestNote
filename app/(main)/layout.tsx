"use client";

// Import necessary modules and components
import { Spinner } from "@/components/spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import React from "react";
import { Navigation } from "./_components/navigation";
import { SearchCommand } from "@/components/search-command";

// MainLayout component
const MainLayout = ({ children }: { children: React.ReactNode }) => {
  // Get authentication status and loading state from useConvexAuth hook
  const { isAuthenticated, isLoading } = useConvexAuth();

  // If the user is still loading, return a spinner
  if (isLoading)
    return (
      <div className="h-full flex items-center justify-center">
        <Spinner size={"md"} />
      </div>
    );

  // If the user is not authenticated, redirect to the login page
  if (!isAuthenticated) return redirect("/");

  // Main layout structure for authenticated users
  return (
    <div className="h-full flex dark:bg-[#1F1F1F]">
      {/* Navigation component */}
      <Navigation />
      {/* Main content area */}
      <main className="flex-1 h-full overflow-y-auto">
        <SearchCommand />
        {children}
      </main>
    </div>
  );
};

// Export MainLayout component
export default MainLayout;
