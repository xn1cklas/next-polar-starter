import { Polar } from "@polar-sh/sdk";

export const polar = new Polar({
  accessToken: process.env["NEXT_PUBLIC_POLAR_ACCESS_TOKEN"] ?? "",
});
