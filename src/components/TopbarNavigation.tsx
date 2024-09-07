import Link from "next/link";

export const TopbarNavigation = () => {
  return (
    <div className="absolute left-1/2 hidden -translate-x-1/2 flex-row items-center gap-x-4 text-sm md:flex">
      <Link
        className="dark:hover:bg-polar-800 rounded-full px-4 py-2 hover:bg-gray-100"
        href="/#pricing"
      >
        Pricing
      </Link>
      <Link
        className="dark:hover:bg-polar-800 rounded-full px-4 py-2 hover:bg-gray-100"
        href="https://docs.polar.sh/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Docs
      </Link>
    </div>
  );
};
