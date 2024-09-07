"use server";

import { polar } from "@/utils/PolarClient";
import { redirect } from "next/navigation";

export async function checkout({
  productPriceId,
}: {
  productPriceId: string;
  successUrl: string;
}) {
  "use server";

  const result = await polar.checkouts.create({
    productPriceId: productPriceId,
    successUrl: "https://trained-technologist.com",
  });

  if (result.url) {
    redirect(result.url);
  }
}
