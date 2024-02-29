"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4 ">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your second brain. Welcome to{" "}
        <span className="underline">GestNote</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        GestNote is the connected workspace where <br /> better, faster note
        taking happens.
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size={"md"} />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button className="group" asChild>
          <Link href={"/documents"}>
            Enter GestNote{" "}
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton>
          <Button className="group">
            Start for free{" "}
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};

export default Header;
