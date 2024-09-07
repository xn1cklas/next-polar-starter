import { BrandingMenu } from "@/components/BrandingMenu";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="w-full max-w-[100vw]  px-4  md:max-w-7xl md:px-12  dark:bg-blac py-4 md:py-8 sticky top-0 z-30 dark:bg-[#0B0C0E] bg-white flex flex-row items-center justify-between bg-transparent">
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
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-500 text-white hover:opacity-85 transition-opacity duration-100 h-8 px-4 py-1.5">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

const TopbarNavigation = () => {
  return (
    <nav className="absolute left-1/2 hidden -translate-x-1/2 flex-row items-center gap-x-4 text-sm md:flex">
      <Link
        className="dark:hover:bg-polar-800 rounded-full px-4 py-2 hover:bg-gray-100"
        href="/#pricing"
      >
        Pricing
      </Link>
      <Link
        className="dark:hover:bg-polar-800 rounded-full px-4 py-2 hover:bg-gray-100"
        href="https://docs.polar.sh/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Docs
      </Link>
    </nav>
  );
};
