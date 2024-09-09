"use server";

import { polar } from "@/lib/polar/polar-client";
import { redirect } from "next/navigation";
import { productConfig } from "@/lib/config";

export async function checkout({
  productPriceId,
}: {
  productPriceId: string | undefined;
}) {
  "use server";

  let result = null;

  if (!productPriceId) {
    redirect(productConfig.successUrl);
  }
  try {
    result = await polar.checkouts.create({
      productPriceId: productPriceId,
      successUrl: productConfig.successUrl,
    });
  } catch (error) {
    console.error("Checkout error:", error);
  } finally {
    if (result?.url) {
      redirect(result.url);
    } else {
      redirect(productConfig.successUrl);
    }
  }
}
