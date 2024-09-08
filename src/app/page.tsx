import { fetchProducts } from "@/lib/fetch-products";
import { Pricing } from "@/components/Pricing";

export default async function Page() {
  const products = await fetchProducts();

  return (
    <div className="flex w-full flex-col items-center max-w-[100vw] md:max-w-7xl">
      <section
        className="flex flex-col gap-y-24 md:pt-24"
        aria-labelledby="hero-heading"
      >
        <div className="flex w-full flex-col items-center gap-24 md:pb-16">
          <div className="relative z-20 flex w-full flex-col items-center gap-y-12 text-center">
            <a
              href="https://www.producthunt.com/posts/polar-5?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-polar&#0045;5"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Polar on Product Hunt"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=484271&theme=dark"
                alt="Polar - An open source monetization platform for developers | Product Hunt"
                width="250"
                height="54"
              />
            </a>
            <div className="z-20 flex flex-col items-center gap-y-8">
              <h1
                id="hero-heading"
                className="text-balance text-5xl !leading-tight text-gray-950 md:text-7xl dark:text-white"
              >
                Next.js Polar starter kit
              </h1>
              <div className="flex flex-col items-center gap-y-4 xl:w-2/3">
                <p className="dark:text-polar-400 text-lg leading-relaxed text-gray-500">
                  An easy to use setup for polar.sh with Next.js
                </p>
              </div>
            </div>
            <div className="z-20 flex flex-row items-center gap-x-4"></div>
          </div>
        </div>
      </section>
      <section className="relative flex w-full flex-col items-center justify-stretch dark:bg-black">
        <Pricing products={products} />
      </section>
    </div>
  );
}
