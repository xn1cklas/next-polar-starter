"use client";

import LogoIcon from "@/components/Brand/LogoIcon";
import Link from "next/link";
import LogoType from "@/components/Brand/LogoType";

import { twMerge } from "tailwind-merge";

export const BrandingMenu = ({
  logoVariant = "icon",
  size,
  className,
  logoClassName,
}: {
  logoVariant?: "icon" | "logotype";
  size?: number;
  className?: string;
  logoClassName?: string;
}) => {
  return (
    <div className={twMerge("relative flex flex-row items-center", className)}>
      <Link href="https://polar.sh" target="_blank" rel="noopener noreferrer">
        {logoVariant === "logotype" ? (
          <LogoType
            className={twMerge(
              "-ml-2 text-blue-500 md:ml-0 dark:text-white",
              logoClassName
            )}
            width={size ?? 100}
          />
        ) : (
          <LogoIcon
            className={twMerge("text-blue-500 dark:text-white", logoClassName)}
            size={size ?? 42}
          />
        )}
      </Link>
    </div>
  );
};
