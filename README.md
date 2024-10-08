# Next.js Polar subscriptions starter

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) with a basic [polar](https://polar.sh) setup, supporting loading products and creating a checkout.

Created by N1cklas.

Follow me on [X](https://x.com/xn1cklas)

## Features

- Fetch products, benefits and prices from your polar organization using the polar sdk
- Create checkout for each product

## Demo

[![Screenshot of demo](./public/demo.png)](https://next-polar-starter.vercel.app/)

## Getting Started

### Setup your environment variables.

You need a `Personal Access Tokens` that you can create in your polar dashboard, as well as your organization id.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

### The Polar sdk

To learn more about the powerful polar sdk follow the [docs](https://docs.polar.sh/api/sdk#sdk)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Aknowledgements

SVGs Icons used in this project are created by [Lucide](https://lucide.dev/) and licensed under MIT.
