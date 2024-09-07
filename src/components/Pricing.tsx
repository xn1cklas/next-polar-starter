"use client";

import { useState } from "react";
import { Button } from "./Button";

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Pricing</h1>
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <Button
            variant={isAnnual ? "outline" : "default"}
            className="rounded-r-none"
            onClick={() => setIsAnnual(false)}
          >
            Monthly
          </Button>
          <Button
            variant={isAnnual ? "default" : "outline"}
            className="rounded-l-none"
            onClick={() => setIsAnnual(true)}
          >
            Annual
          </Button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 w-full mx-auto">
        {pricingData.map((plan) => (
          <div key={plan.id} className="flex-1 w-full md:w-auto">
            <PriceComponent {...plan} isAnnual={isAnnual} />
          </div>
        ))}
      </div>
    </div>
  );
}

interface PriceComponentProps {
  id: string;
  title: string;
  forType: string;
  monthlyPrice: string;
  annualPrice: string;
  description: string;
  features: string[];
  isAnnual: boolean;
}

const pricingData: Omit<PriceComponentProps, "isAnnual">[] = [
  {
    id: "basic",
    title: "Basic Plan",
    forType: "For Individuals",
    monthlyPrice: "$9",
    annualPrice: "$90",
    description:
      "Get started with our basic features. Perfect for individual creators and small projects.",
    features: [
      "Private GitHub repository",
      "Discord Support Channel",
      "License Key",
      "Binary Downloads",
    ],
  },
  {
    id: "pro",
    title: "Pro Plan",
    forType: "For Teams",
    monthlyPrice: "$29",
    annualPrice: "$290",
    description:
      "Upgrade to Pro for advanced features and priority support. Ideal for growing teams and businesses.",
    features: [
      "Everything in Basic",
      "Team Collaboration Tools",
      "Advanced Analytics",
      "Priority Support",
      "Custom Integrations",
    ],
  },
  {
    id: "enterprise",
    title: "Enterprise",
    forType: "For Large Organizations",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    description:
      "Tailored solutions for large-scale deployments with dedicated support and custom features.",
    features: [
      "Everything in Pro",
      "Dedicated Account Manager",
      "On-premise Deployment Option",
      "Custom SLA",
      "Advanced Security Features",
    ],
  },
];

function PriceComponent({
  id,
  title,
  forType,
  monthlyPrice,
  annualPrice,
  description,
  features,
  isAnnual,
}: PriceComponentProps) {
  const price = isAnnual ? annualPrice : monthlyPrice;
  const period = isAnnual ? "/year" : "/mo";

  return (
    <div className="flex h-full flex-col">
      <div
        className="border bg-white text-gray-950 shadow-none dark:text-white dark:bg-polar-900 rounded-4xl relative flex flex-col gap-y-6 overflow-hidden border-none hover:bg-gray-50 p-8 min-h-[400px] h-full"
        id={id}
        data-sentry-element="Card"
        data-sentry-component="SubscriptionTierCard"
        data-sentry-source-file="SubscriptionTierCard.tsx"
      >
        <div
          className="pointer-events-none absolute h-[800px] w-[800px] opacity-0 transition-opacity duration-300"
          //   style="top: calc(var(--y, 0) * 1px - 400px); left: calc(var(--x, 0) * 1px - 400px); background: radial-gradient(var(--var-dark-glow-color), #ffffff00 70%);"
        ></div>
        <div className="flex flex-col space-y-1.5 grow gap-y-6 p-0">
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-row items-center justify-between">
              <span className="dark:text-polar-500 text-xs text-gray-500">
                {forType}
              </span>
            </div>
            <div className="flex justify-between">
              <h3 className="truncate font-medium text-lg">{title}</h3>
              <div
                className="inline-flex items-center text-[--var-icon-color] h-8! w-8! ml-2 text-2xl"
                // style="--var-icon-color: #1fd39a;"
              >
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1cw4hi4"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="VerifiedIcon"
                >
                  <path d="m23 12-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69zm-12.91 4.72-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-8 text-[--var-fg-color] dark:text-[--var-dark-fg-color]">
            <div className="text-5xl !font-[200]">
              {price}
              <span className="dark:text-polar-500 ml-2 text-xl font-normal text-gray-500">
                {period}
              </span>
            </div>
            <div className="text-sm prose dark:prose-invert prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg prose-h5:text-md prose-h6:text-sm dark:prose-headings:text-polar-50 dark:text-polar-300 max-h-64 max-w-4xl overflow-hidden text-gray-800">
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div
          data-orientation="horizontal"
          role="none"
          className="shrink-0 h-[1px] w-full dark:bg-polar-700 bg-gray-200"
        ></div>
        <div
          className="flex h-full grow flex-col gap-y-2 p-0"
          data-sentry-element="CardContent"
          data-sentry-source-file="SubscriptionTierCard.tsx"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-row items-start text-[--var-fg-color] dark:text-[--var-dark-fg-color]"
            >
              <span className="flex h-6 w-6 shrink-0 flex-row items-center justify-center rounded-full bg-[--var-border-color] text-[14px] dark:bg-[--var-dark-border-color]">
                <CheckIcon />
              </span>
              <span className="ml-3 text-sm leading-relaxed">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-check"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
};
