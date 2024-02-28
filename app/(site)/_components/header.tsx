"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Header = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your second brain. Welcome to{" "}
        <span className="underline">GestNote</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        GestNote is the connected workspace where <br /> better, faster note
        taking happens.
      </h3>
      <Button className="group">
        Join GestNote{" "}
        <ArrowRight className="h-4 2-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
};

export default Header;
