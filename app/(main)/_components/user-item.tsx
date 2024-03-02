"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SignOutButton, useUser } from "@clerk/clerk-react";
import { ChevronsLeftRight } from "lucide-react";

export const UserItem = () => {
  const { user } = useUser();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          role="button"
          className="flex items-center text-sm p-3 w-full h-15 bg-black/10 hover:bg-primary/5"
        >
          <div className="gap-x-2 flex items-center max-w-[160px]">
            <Avatar className="h-5 w-5">
              <AvatarImage src={user?.imageUrl} />
            </Avatar>
            <span className="text-start font-medium line-clamp-1">
              {user?.fullName}&apos;s workspace
            </span>
          </div>
          <ChevronsLeftRight className="rotate-90 ml-2 h-4 w-4 text-muted-foreground" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-80"
        align="start"
        alignOffset={11}
        forceMount
      >
        <div className="flex flex-col space-y-4 p-2">
          <p className="text-xs font-medium leading-none text-muted-foreground">
            {user?.emailAddresses?.[0].emailAddress}
          </p>
          <div className="flex items-center gap-x-2">
            <div className="rounded-md bg-secondary p-1">
              <Avatar className="h-8 w-8">
                <AvatarImage src={user?.imageUrl} />
              </Avatar>
            </div>
            <div className="space-y-1">
              <p className="text-sm line-clamp-1">
                {user?.fullName}&apos;s workspace
              </p>
            </div>
          </div>
        </div>
        <DropdownMenuSeparator />
        <div className="flex justify-between gap-x-6 py-2">
          <DropdownMenuItem
            asChild
            className="cursor-pointer text-muted-foreground"
          >
            <SignOutButton>Logout</SignOutButton>
          </DropdownMenuItem>
          <ModeToggle />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
