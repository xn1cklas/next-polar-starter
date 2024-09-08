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

  if (!productPriceId) {
    redirect(productConfig.successUrl);
  }

  const result = await polar.checkouts.create({
    productPriceId: productPriceId,
    successUrl: productConfig.successUrl,
  });

  if (result.url) {
    redirect(result.url);
  }
}
