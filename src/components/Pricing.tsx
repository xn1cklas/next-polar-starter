"use client";

import { useState, useEffect } from "react";
import { checkout } from "@/app/actions/checkout";
import { ProductOutput } from "@polar-sh/sdk/models/components";
import Link from "next/link";

export function Pricing({ products }: { products: ProductOutput[] }) {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section
      className="container mx-auto px-4"
      aria-labelledby="pricing-heading"
    >
      <h2
        id="pricing-heading"
        className="text-3xl font-bold text-center mb-8 text-gray-950"
      >
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
        {products.length === 0 && <Warning />}

        {products.map((plan) => (
          <div key={plan.id} className="flex-1 w-full md:w-auto">
            <ProductCard product={plan} isAnnual={isAnnual} />
          </div>
        ))}
      </div>
    </section>
  );
}

function Warning() {
  return (
    <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4 mx-auto mb-8">
      <div className="flex">
        <div className="flex-shrink-0">
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
            className="h-5 w-5 text-yellow-400"
            aria-hidden="true"
          >
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
          </svg>
        </div>
        <div className="ml-3">
          <h3 className="text-sm text-yellow-700 mb-2">
            No products found. This could be caused by one of the following:
          </h3>
          <ul role="list" className="list-disc space-y-1 pl-5  text-yellow-700">
            <li>
              Your Polar dashboard is empty.{" "}
              <Link
                href="https://polar.sh/dashboard"
                className="font-medium underline hover:text-yellow-600"
              >
                Create a product in the Polar dashboard
              </Link>
            </li>
            <li>Your environment variables are not set correctly</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function ProductCard({
  product,
  isAnnual,
}: {
  product: ProductOutput;
  isAnnual: boolean;
}) {
  const [price, setPrice] = useState<string>("N/A");
  const [priceId, setPriceId] = useState<string | undefined>(undefined);
  const [period, setPeriod] = useState<string>("/mo");
  const [isFree, setIsFree] = useState<boolean>(false);

  useEffect(() => {
    const selectedPrice = product.prices.find(
      (p) =>
        p.type === "recurring" &&
        p.recurringInterval === (isAnnual ? "year" : "month")
    );

    if (selectedPrice && selectedPrice.priceAmount > 0) {
      setPrice((selectedPrice.priceAmount / 100).toString());
      setPriceId(selectedPrice.id);
      setPeriod(isAnnual ? "/year" : "/mo");
      setIsFree(false);
    } else {
      setPrice("Free");
      setPriceId(undefined);
      setPeriod("");
      setIsFree(true);
    }
  }, [product, isAnnual]);

  const currencySymbol = product.prices[0]?.priceCurrency === "EUR" ? "€" : "$";

  return (
    <article
      className="flex h-full flex-col"
      aria-labelledby={`plan-${product.id}`}
    >
      <div className="border bg-white text-gray-950 shadow-none dark:text-white dark:bg-polar-900 rounded-4xl relative flex flex-col gap-y-6 overflow-hidden border-none hover:bg-gray-50 p-8 min-h-[400px] h-full">
        <div className="flex flex-col space-y-1.5 grow gap-y-6 p-0">
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-row items-center justify-between">
              <span className="dark:text-polar-500 text-xs text-gray-500">
                {product.type || "For Everyone"}
              </span>
            </div>
            <div className="flex justify-between">
              <h3
                id={`plan-${product.id}`}
                className="truncate font-medium text-lg"
              >
                {product.name}
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-y-8 text-[--var-fg-color] dark:text-[--var-dark-fg-color]">
            <div
              className="text-5xl !font-[200]"
              aria-label={
                isFree ? "Free" : `Price: ${currencySymbol}${price}${period}`
              }
            >
              {isFree ? (
                "Free"
              ) : (
                <>
                  {currencySymbol} {price}
                  <span className="dark:text-polar-500 ml-2 text-xl font-normal text-gray-500">
                    {period}
                  </span>
                </>
              )}
            </div>
            <div className="text-sm prose dark:prose-invert prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg prose-h5:text-md prose-h6:text-sm dark:prose-headings:text-polar-50 dark:text-polar-300 max-h-64 max-w-4xl overflow-hidden text-gray-800">
              <p>{product.description}</p>
            </div>
          </div>
        </div>
        <hr className="shrink-0 h-[1px] w-full dark:bg-polar-700 bg-gray-200" />
        <ul className="flex h-full grow flex-col gap-y-2 p-0 list-none">
          {product.benefits.map((benefit, index) => (
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
              <span className="ml-3 text-sm leading-relaxed">
                {benefit.description}
              </span>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-y-4 mt-auto">
          <form
            action={() =>
              checkout({
                productPriceId: priceId,
              })
            }
          >
            <button
              type="submit"
              className="hover:bg-primary/90 relative font-normal inline-flex items-center select-none justify-center ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap bg-blue-500 text-white hover:opacity-85 transition-opacity duration-100 h-8 px-4 py-1.5 rounded-full text-sm w-full"
            >
              Subscribe
            </button>
          </form>
        </div>
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
