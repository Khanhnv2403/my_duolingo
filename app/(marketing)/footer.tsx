import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/flags/hr.svg"
            alt="Croatian"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Croatian
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/flags/fr.svg"
            alt="French"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          French
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/flags/jp.svg"
            alt="Japanese"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Japanese
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/flags/it.svg"
            alt="Italian"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Italian
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/flags/vn.svg"
            alt="Vietnamese"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Vietnamese
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
