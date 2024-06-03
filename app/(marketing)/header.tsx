"use client";
import logoImage from "@/public/icons/icons8-hedwig.svg";
import Image from "next/image";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
type Props = {};

const Header = (props: Props) => {
  return (
    <header className="h-20 w-full border-b-2 border-slate-200 px-4">
      <div className="lg:max-w-screen-lg xl:max-w-screen-xl md:max-w-screen-md mx-auto flex items-center justify-between h-full">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src={logoImage} alt="Logo" width={44} height={44} />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            MyDoulingo
          </h1>
        </div>
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton
              mode="modal"
              fallbackRedirectUrl="/"
              signUpFallbackRedirectUrl="/onboarding"
            >
              <Button size="lg" variant="ghost">
                Log In
              </Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </header>
  );
};

export default Header;
