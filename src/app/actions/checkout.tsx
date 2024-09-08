"use server";

import { polar } from "@/utils/polar-client";
import { redirect } from "next/navigation";

export async function checkout({
  productPriceId,
  successUrl,
}: {
  productPriceId: string | undefined;
  successUrl: string;
}) {
  "use server";

  if (!productPriceId) {
    redirect(successUrl);
  }

  const result = await polar.checkouts.create({
    productPriceId: productPriceId,
    successUrl: successUrl,
  });

  if (result.url) {
    redirect(result.url);
  }
}
