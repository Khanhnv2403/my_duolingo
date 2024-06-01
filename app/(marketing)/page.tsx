import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-[964px] mx-auto flex flex-1 flex-col w-full lg:flex-row items-center justify-around p-4 gap-2">
      <div className="relative w-[240px] h-[240px] lg:w-[398px] lg:h-[398px] mb-8 lg:mb-0">
        <Image src="/hero.png" fill alt="Hero" />
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:text-3xl lg:ml-8 font-bold text-neutral-600 max-w-[480px] text-center">
          <span className="text-green-600">Learn, practice</span>, and master
          new languages with <span className="text-green-600">MyDouLingo</span>
        </h1>
        <div>
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton
                mode="modal"
                fallbackRedirectUrl="/learn"
                signInFallbackRedirectUrl="/learn"
              >
                <Button size="lg" variant="secondary" className="w-full">
                  Get Started
                </Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn></SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}
