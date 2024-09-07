"use client";

import { Section } from "@/components/Landing/Section";

// import GetStartedButton from "@/components/Auth/GetStartedButton";
// import Button from "@/components/ui/atoms/button";

export default function Page() {
  return (
    <div className="flex w-full flex-col items-center">
      <Section className="flex flex-col gap-y-24 md:py-24">
        <div className="flex w-full flex-col items-center gap-24 md:pb-16">
          <div className="relative z-20 flex w-full flex-col items-center gap-y-12 text-center">
            <a
              href="https://www.producthunt.com/posts/polar-5?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-polar&#0045;5"
              target="_blank"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=484271&theme=dark"
                alt="Polar - An&#0032;open&#0032;source&#0032;monetization&#0032;platform&#0032;for&#0032;developers | Product Hunt"
                style={{ width: "250px", height: "54px" }}
                width="250"
                height="54"
              />
            </a>
            <div className="z-20 flex flex-col items-center gap-y-8">
              <h1 className="text-balance text-5xl !leading-tight text-gray-950 md:text-7xl dark:text-white">
                Next.js Polar starter kit
              </h1>
              <div className="flex flex-col items-center gap-y-4 xl:w-2/3">
                <p className="dark:text-polar-400 text-lg leading-relaxed text-gray-500">
                  An easy to use setup for polar.sh with Next.js
                </p>
              </div>
            </div>
            <div className="z-20 flex flex-row items-center gap-x-4"></div>
          </div>
        </div>
      </Section>
    </div>
  );
}
