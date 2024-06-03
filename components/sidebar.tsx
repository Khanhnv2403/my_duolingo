import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SidebarItem from "./sidebar-item";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { Button } from "./ui/button";

type Props = {
  className?: string;
};

const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image
            src="/icons/icons8-hedwig.svg"
            alt="Logo"
            width={44}
            height={44}
          />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            MyDoulingo
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem label="Learn" href="/learn" iconSrc="/icons/home.svg" />
        <SidebarItem
          label="Pronounce"
          href="/pronounce"
          iconSrc="/icons/pronounce.svg"
        />
        <SidebarItem
          label="practice"
          href="/practice"
          iconSrc="/icons/practice.svg"
        />
        <SidebarItem
          label="rankings"
          href="/rankings"
          iconSrc="/icons/rankings.svg"
        />
        <SidebarItem
          label="missions"
          href="/missions"
          iconSrc="/icons/missions.svg"
        />
        <SidebarItem label="store" href="/store" iconSrc="/icons/store.svg" />
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>
    </div>
  );
};

export default Sidebar;
