import LogoType from "@/components/Brand/LogoType";
import Link, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const Footer = () => {
  return (
    <div
      className={twMerge(
        "dark:border-polar-800 dark:bg-polar-950 border-gray-75 flex w-full flex-col items-center space-y-24 border-t bg-white py-24 md:py-32 max-w-7xl"
      )}
    >
      <div
        className={twMerge(
          "flex w-full flex-col gap-x-16 gap-y-24 px-8 md:flex-row md:justify-between md:gap-y-12"
        )}
      >
        <div className="flex flex-col gap-y-6">
          <span className="text-blue-500 dark:text-white">
            <LogoType width={120} />
          </span>
          <span className="dark:text-polar-500 text-gray-500">
            &copy; Polar Software Inc. {new Date().getFullYear()}
          </span>
        </div>
        <div
          className={twMerge(
            "flex flex-col gap-y-12 md:flex-row",
            "gap-x-24 lg:gap-x-32"
          )}
        >
          <div className="flex flex-col gap-y-4">
            <h3 className="text-base dark:text-white">Platform</h3>
            <div className="flex flex-col gap-y-2">
              <FooterLink href="https://api.polar.sh/v1/integrations/github/authorize?return_to=%2Fmaintainer&user_signup_type=maintainer">
                Create an Account
              </FooterLink>
              <FooterLink href="https://polar.sh/issue-funding">
                Issue Funding
              </FooterLink>
              <FooterLink href="https://polar.sh/products">
                Products & Subscriptions
              </FooterLink>
              <FooterLink href="https://polar.sh/donations">
                Donations
              </FooterLink>
              <FooterLink href="https://docs.polar.sh/newsletters">
                Newsletters
              </FooterLink>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <h3 className="text-base dark:text-white">Company</h3>
            <div className="flex flex-col gap-y-2">
              <FooterLink href="https://polar.sh/careers">Careers</FooterLink>
              <FooterLink href="https://blog.polar.sh">Blog</FooterLink>
              <FooterLink href="https://polar.sh/assets/brand/polar_brand.zip">
                Brand Assets
              </FooterLink>
              <FooterLink href="https://polar.sh/legal/terms">
                Terms of Service
              </FooterLink>
              <FooterLink href="https://polar.sh/legal/privacy">
                Privacy Policy
              </FooterLink>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <h3 className="text-lg dark:text-white">Community</h3>
            <div className="flex flex-col gap-y-2">
              <FooterLink href="https://discord.gg/STfRufb32V">
                Join our Discord
              </FooterLink>
              <FooterLink href="https://github.com/polarsource">
                GitHub
              </FooterLink>
              <FooterLink href="https://x.com/polar_sh">X / Twitter</FooterLink>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <h3 className="text-base dark:text-white">Support</h3>
            <div className="flex flex-col gap-y-2">
              <FooterLink href="https://docs.polar.sh">Docs</FooterLink>
              <FooterLink href="https://docs.polar.sh/support/faq">
                FAQ
              </FooterLink>
              <FooterLink href="mailto:support@polar.sh">Contact</FooterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const FooterLink = (props: PropsWithChildren<LinkProps>) => {
  return (
    <Link
      className="dark:text-polar-500 dark:hover:text-polar-50 flex flex-row items-center gap-x-1 text-gray-500 transition-colors hover:text-gray-300"
      {...props}
    >
      {props.children}
    </Link>
  );
};
