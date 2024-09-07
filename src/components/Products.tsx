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
  // ... (keep other mock data, update currency if needed)
];

export async function Products(): Promise<PricingData[]> {
  try {
    const result = await polar.products.list({ organizationId: "nsquare" });
    const products = result.result.items;

    return products.length > 0
      ? mapProductsToPricingData(products)
      : mockPricingData;
  } catch (error) {
    console.error("Error fetching products:", error);
    return mockPricingData;
  }
}

function mapProductsToPricingData(products: ProductOutput[]): PricingData[] {
  return products.map((product) => {
    const monthlyPrice = product.prices.find(
      (p) => p.recurringInterval === "month"
    ) as ProductPriceOutput;
    const annualPrice = product.prices.find(
      (p) => p.recurringInterval === "year"
    ) as ProductPriceOutput;
    return {
      id: product.id,
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
