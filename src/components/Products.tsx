import { polar } from "@/utils/PolarClient";
import {
  ProductOutput,
  ProductPriceOutput,
} from "@polar-sh/sdk/models/components";

export interface PricingData {
  id: string;
  title: string;
  forType: string;
  monthlyPrice: string;
  annualPrice: string;
  monthlyPriceId?: string;
  annualPriceId?: string;
  currency: "USD" | "EUR";
  description: string;
  features: string[];
}

export const mockPricingData: PricingData[] = [
  {
    id: "basic",
    title: "Basic Plan",
    forType: "For Individuals",
    monthlyPrice: "9",
    annualPrice: "90",
    currency: "USD",
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
    monthlyPrice: "29",
    annualPrice: "290",
    currency: "USD",
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
    currency: "USD",
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

export async function Products(): Promise<PricingData[]> {
  try {
    const result = await polar.products.list({
      organizationId: process.env.NEXT_PUBLIC_POLAR_ORGANIZATION_ID,
    });
    const products = result.result.items;
    // console.log(products);

    return products.length > 0
      ? mapProductsToPricingData(products)
      : mockPricingData;
  } catch (error) {
    console.error("Error fetching products:", error);
    return mockPricingData;
  }
}

function mapProductsToPricingData(products: ProductOutput[]): PricingData[] {
  return products
    .filter((product) => product.name !== "Free") // this is a polyfill to ignore the free plan, until you can remove it from products
    .map((product) => {
      const monthlyPrice = product.prices.find(
        //@ts-expect-error there seems to be a type issue for recurringInterval
        (p) => p.recurringInterval === "month"
      ) as ProductPriceOutput;
      const annualPrice = product.prices.find(
        //@ts-expect-error there seems to be a type issue for recurringInterval
        (p) => p.recurringInterval === "year"
      ) as ProductPriceOutput;
      return {
        id: product.id,
        monthlyPriceId: monthlyPrice.id,
        annualPriceId: annualPrice.id,
        title: product.name,
        forType: product.type || "For Everyone",
        description: product.description || "",
        monthlyPrice: monthlyPrice
          ? (monthlyPrice.priceAmount / 100).toString()
          : "N/A",
        annualPrice: annualPrice
          ? (annualPrice.priceAmount / 100).toString()
          : "N/A",
        currency: (monthlyPrice?.priceCurrency ||
          annualPrice?.priceCurrency ||
          "USD") as "USD" | "EUR",
        features: product.benefits.map((benefit) => benefit.description),
      };
    });
}
