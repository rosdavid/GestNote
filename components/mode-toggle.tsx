"use client";

// Import necessary modules and libraries
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

// Import necessary components from the UI library
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

/**
Function to render a theme toggle button, allowing users to switch between light, dark, and system themes.
**/
export function ModeToggle() {
  const { setTheme } = useTheme(); // Access the setTheme function from the useTheme hook

  return (
    <DropdownMenu>
      {/* Create a DropdownMenu component */}
      <DropdownMenuTrigger asChild>
        {/* Create a DropdownMenuTrigger as a child component */}
        <Button variant="outline" size="icon">
          {/* Create a Button component with outline style and icon size */}
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          {/* Renders the Sun icon. */}
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          {/* Renders the Moon icon. */}
          <span className="sr-only">Toggle theme</span>
          {/* Adds a screen reader only text for accessibility. */}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {/* Renders the DropdownMenuContent component and aligns it to the end. */}
        <DropdownMenuItem onClick={() => setTheme("light")}>
          {/* Renders the DropdownMenuItem and sets the theme to light when clicked. */}
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          {/* Renders the DropdownMenuItem and sets the theme to dark when clicked. */}
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          {/* Renders the DropdownMenuItem and sets the theme to system when clicked. */}
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
