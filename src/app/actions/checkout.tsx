"use server";

import { polar } from "@/utils/PolarClient";
import { redirect } from "next/navigation";

export async function checkout({
  productPriceId,
}: {
  productPriceId: string | undefined;
  successUrl: string;
}) {
  "use server";
  const successUrl = "https://trained-technologist.com";

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
