import { polar } from "@/utils/PolarClient";
import { ProductOutput } from "@polar-sh/sdk/models/components";

export async function Products(): Promise<ProductOutput[]> {
  try {
    const result = await polar.products.list({
      organizationId: process.env.NEXT_PUBLIC_POLAR_ORGANIZATION_ID,
    });
    const products = result.result.items;
    return products;
  } catch (error) {
    console.error(error);
    return [];
  }
}
