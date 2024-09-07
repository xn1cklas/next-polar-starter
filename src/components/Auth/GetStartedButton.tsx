import { CONFIG } from "@/utils/config";
import Link from "next/link";
import Button from "@/components/ui/atoms/button";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { ArrowRight } from "lucide-react";

interface GetStartedButtonProps extends ComponentProps<typeof Button> {
  text?: string;
  href?: string;
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({
  text: _text,
  href: _href,
  wrapperClassNames,
  size = "lg",
  ...props
}) => {
  const text = _text || "Get started";

  const signupPath = `${CONFIG.FRONTEND_BASE_URL}/signup?return_to/dashboard`;
  const href = _href ? _href : signupPath;

  return (
    <Link href={href}>
      <Button
        wrapperClassNames={twMerge(
          "flex flex-row items-center gap-x-2",
          wrapperClassNames
        )}
        size={size}
        {...props}
      >
        <div>{text}</div>
        <ArrowRight
          className={size === "lg" ? "text-lg" : "text-md"}
          fontSize="inherit"
        />
      </Button>
    </Link>
  );
};

export default GetStartedButton;
