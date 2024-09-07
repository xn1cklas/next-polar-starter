"use client";

import { Section } from "@/components/Section";
import { TopbarNavigation } from "@/components/TopbarNavigation";
import { BrandingMenu } from "@/components/BrandingMenu";
import Footer from "@/components/Footer";
import Link from "next/link";
import Button from "@/components/ui/atoms/button";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="dark:bg-[#0B0C0E] flex w-full flex-col items-center bg-white">
      <Section
        wrapperClassName="sticky top-0 z-30 dark:bg-[#0B0C0E] bg-white"
        className="py-4 md:py-8"
      >
        <LandingPageTopbar />
      </Section>
      {children}
      <LandingPageFooter />
    </div>
  );
}

const LandingPageTopbar = () => {
  return (
    <div className="relative flex flex-row items-center justify-between bg-transparent">
      <TopbarNavigation />
      <BrandingMenu
        className="mt-1 hidden md:block"
        size={100}
        logoVariant="logotype"
      />
      <BrandingMenu
        className="ml-2 mt-1 md:hidden"
        logoVariant="logotype"
        size={100}
      />
      <div className="flex flex-row items-center gap-x-4">
        <Link href="/login">
          <Button>Login</Button>
        </Link>
      </div>
    </div>
  );
};

const LandingPageFooter = () => {
  return <Footer wide={true} />;
};
