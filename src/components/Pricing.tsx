"use client";

import { useState } from "react";
import { PricingData } from "./Products";

export function Pricing({ products }: { products: PricingData[] }) {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section
      className="container mx-auto px-4"
      aria-labelledby="pricing-heading"
    >
      <h2 id="pricing-heading" className="text-3xl font-bold text-center mb-8">
        Pricing
      </h2>
      <div className="flex justify-center mb-8">
        <fieldset
          className="inline-flex rounded-md shadow-sm"
          role="radiogroup"
          aria-label="Billing frequency"
        >
          <legend className="sr-only">Choose billing frequency</legend>
          <button
            role="radio"
            aria-checked={!isAnnual}
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-l-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-8 px-4 py-1.5 ${
              isAnnual
                ? "bg-white text-blue-500 border border-blue-500"
                : "bg-blue-500 text-white"
            }`}
            onClick={() => setIsAnnual(false)}
          >
            Monthly
          </button>
          <button
            role="radio"
            aria-checked={isAnnual}
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-r-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-8 px-4 py-1.5 ${
              isAnnual
                ? "bg-blue-500 text-white"
                : "bg-white text-blue-500 border border-blue-500"
            }`}
            onClick={() => setIsAnnual(true)}
          >
            Annual
          </button>
        </fieldset>
      </div>
      <div className="flex flex-col md:flex-row gap-8 w-full mx-auto">
        {products.map((plan) => (
          <div key={plan.id} className="flex-1 w-full md:w-auto">
            <PriceComponent {...plan} isAnnual={isAnnual} />
          </div>
        ))}
      </div>
    </section>
  );
}

interface PriceComponentProps extends PricingData {
  isAnnual: boolean;
}

function PriceComponent({
  id,
  title,
  forType,
  monthlyPrice,
  annualPrice,
  description,
  features,
  isAnnual,
  currency,
}: PriceComponentProps) {
  const price = isAnnual ? annualPrice : monthlyPrice;
  const period = isAnnual ? "/year" : "/mo";

  const currencySymbol = currency === "EUR" ? "€" : "$";

  return (
    <article className="flex h-full flex-col" aria-labelledby={`plan-${id}`}>
      <div className="border bg-white text-gray-950 shadow-none dark:text-white dark:bg-polar-900 rounded-4xl relative flex flex-col gap-y-6 overflow-hidden border-none hover:bg-gray-50 p-8 min-h-[400px] h-full">
        <div className="flex flex-col space-y-1.5 grow gap-y-6 p-0">
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-row items-center justify-between">
              <span className="dark:text-polar-500 text-xs text-gray-500">
                {forType}
              </span>
            </div>
            <div className="flex justify-between">
              <h3 id={`plan-${id}`} className="truncate font-medium text-lg">
                {title}
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-y-8 text-[--var-fg-color] dark:text-[--var-dark-fg-color]">
            <div
              className="text-5xl !font-[200]"
              aria-label={`Price: ${
                price !== "Custom"
                  ? `${currencySymbol}${price}${period}`
                  : price
              }`}
            >
              {price !== "Custom" ? `${currencySymbol} ${price}` : price}
              <span className="dark:text-polar-500 ml-2 text-xl font-normal text-gray-500">
                {price !== "Custom" ? period : ""}
              </span>
            </div>
            <div className="text-sm prose dark:prose-invert prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg prose-h5:text-md prose-h6:text-sm dark:prose-headings:text-polar-50 dark:text-polar-300 max-h-64 max-w-4xl overflow-hidden text-gray-800">
              <p>{description}</p>
            </div>
          </div>
        </div>
        <hr className="shrink-0 h-[1px] w-full dark:bg-polar-700 bg-gray-200" />
        <ul className="flex h-full grow flex-col gap-y-2 p-0 list-none">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex flex-row items-start text-[--var-fg-color] dark:text-[--var-dark-fg-color]"
            >
              <span
                className="flex h-6 w-6 shrink-0 flex-row items-center justify-center rounded-full bg-[--var-border-color] text-[14px] dark:bg-[--var-dark-border-color]"
                aria-hidden="true"
              >
                <CheckIcon />
              </span>
              <span className="ml-3 text-sm leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-check"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
};
