"use client";

import LogoIcon from "@/components/Brand/LogoIcon";
// import {
//   ArrowDownwardOutlined,
//   ContentPasteOutlined,
// } from "@mui/icons-material";
import Link from "next/link";

import LogoType from "@/components/Brand/LogoType";
import { useOutsideClick } from "@/utils/useOutsideClick";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MouseEventHandler, useCallback, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { ArrowDown, ClipboardPasteIcon } from "lucide-react";

export const BrandingMenu = ({
  logoVariant = "icon",
  size,
  className,
  logoClassName,
}: {
  logoVariant?: "icon" | "logotype";
  size?: number;
  className?: string;
  logoClassName?: string;
}) => {
  const brandingMenuRef = useRef<HTMLDivElement>(null);

  useOutsideClick([brandingMenuRef], () => setBrandingMenuOpen(false));

  const [brandingMenuOpen, setBrandingMenuOpen] = useState(false);

  const handleTriggerClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      setBrandingMenuOpen(true);
    },
    []
  );

  const handleCopyLogoToClipboard = useCallback(() => {
    navigator.clipboard.writeText(
      logoVariant === "icon" ? PolarIconSVGString : PolarLogoSVGString
    );
    setBrandingMenuOpen(false);
  }, [logoVariant]);

  return (
    <div className={twMerge("relative flex flex-row items-center", className)}>
      <DropdownMenu open={brandingMenuOpen}>
        <DropdownMenuTrigger onContextMenu={handleTriggerClick}>
          <Link href="/">
            {logoVariant === "logotype" ? (
              <LogoType
                className={twMerge(
                  "-ml-2 text-blue-500 md:ml-0 dark:text-white",
                  logoClassName
                )}
                width={size ?? 100}
              />
            ) : (
              <LogoIcon
                className={twMerge(
                  "text-blue-500 dark:text-white",
                  logoClassName
                )}
                size={size ?? 42}
              />
            )}
          </Link>
        </DropdownMenuTrigger>
        <DropdownMenuContent ref={brandingMenuRef} align="start">
          <DropdownMenuLabel>Platform</DropdownMenuLabel>
          <DropdownMenuItem
            className="flex flex-row gap-x-3"
            onClick={handleCopyLogoToClipboard}
          >
            <ClipboardPasteIcon fontSize="inherit" />
            <span>Copy Logo as SVG</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex flex-row gap-x-3"
            onClick={() => setBrandingMenuOpen(false)}
          >
            <ArrowDown fontSize="inherit" />
            <Link href="/assets/brand/polar_brand.zip">
              Download Branding Assets
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

const PolarIconSVGString = `<svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_4)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M66.4284 274.26C134.876 320.593 227.925 302.666 274.258 234.219C320.593 165.771 302.666 72.7222 234.218 26.3885C165.77 -19.9451 72.721 -2.0181 26.3873 66.4297C-19.9465 134.877 -2.01938 227.927 66.4284 274.26ZM47.9555 116.67C30.8375 169.263 36.5445 221.893 59.2454 256.373C18.0412 217.361 7.27564 150.307 36.9437 92.318C55.9152 55.2362 87.5665 29.3937 122.5 18.3483C90.5911 36.7105 62.5549 71.8144 47.9555 116.67ZM175.347 283.137C211.377 272.606 244.211 246.385 263.685 208.322C293.101 150.825 282.768 84.4172 242.427 45.2673C264.22 79.7626 269.473 131.542 252.631 183.287C237.615 229.421 208.385 265.239 175.347 283.137ZM183.627 266.229C207.945 245.418 228.016 210.604 236.936 168.79C251.033 102.693 232.551 41.1978 195.112 20.6768C214.97 47.3945 225.022 99.2902 218.824 157.333C214.085 201.724 200.814 240.593 183.627 266.229ZM63.7178 131.844C49.5155 198.43 68.377 260.345 106.374 280.405C85.9962 254.009 75.5969 201.514 81.8758 142.711C86.5375 99.0536 99.4504 60.737 116.225 35.0969C92.2678 55.983 72.5384 90.4892 63.7178 131.844ZM199.834 149.561C200.908 217.473 179.59 272.878 152.222 273.309C124.853 273.742 101.797 219.039 100.724 151.127C99.6511 83.2138 120.968 27.8094 148.337 27.377C175.705 26.9446 198.762 81.648 199.834 149.561Z" fill="#0062FF"/>
</g>
<defs>
<clipPath id="clip0_1_4">
<rect width="300" height="300" fill="white"/>
</clipPath>
</defs>
</svg>`;

const PolarLogoSVGString = `<svg width="1020" height="300" viewBox="0 0 1020 300" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M397.382 244.212V53.4181H473.428C483.421 53.4181 492.508 55.962 500.684 61.0499C508.861 65.956 515.311 72.77 520.036 81.492C524.942 90.214 527.395 99.9354 527.395 110.656C527.395 121.74 524.942 131.735 520.036 140.638C515.311 149.542 508.861 156.629 500.684 161.898C492.508 167.167 483.421 169.802 473.428 169.802H421.096V244.212H397.382ZM421.096 146.634H473.972C479.424 146.634 484.33 145.09 488.692 142.001C493.052 138.73 496.505 134.369 499.049 128.918C501.593 123.467 502.865 117.379 502.865 110.656C502.865 104.115 501.593 98.3 499.049 93.2122C496.505 88.1244 493.052 84.0359 488.692 80.9468C484.33 77.8578 479.424 76.3133 473.972 76.3133H421.096V146.634Z" fill="#0062FF"/>
<path d="M615.217 246.937C601.226 246.937 588.688 243.757 577.604 237.397C566.701 230.856 558.071 222.043 551.711 210.959C545.351 199.693 542.171 186.883 542.171 172.528C542.171 158.173 545.351 145.453 551.711 134.369C558.071 123.284 566.701 114.563 577.604 108.203C588.688 101.843 601.226 98.6634 615.217 98.6634C629.209 98.6634 641.656 101.843 652.559 108.203C663.643 114.563 672.274 123.284 678.452 134.369C684.811 145.453 687.991 158.173 687.991 172.528C687.991 186.883 684.811 199.693 678.452 210.959C672.274 222.043 663.643 230.856 652.559 237.397C641.656 243.757 629.209 246.937 615.217 246.937ZM615.217 225.677C624.848 225.677 633.389 223.406 640.838 218.863C648.288 214.139 654.103 207.779 658.283 199.784C662.644 191.789 664.733 182.704 664.552 172.528C664.733 162.352 662.644 153.358 658.283 145.544C654.103 137.549 648.288 131.28 640.838 126.737C633.389 122.195 624.848 119.923 615.217 119.923C605.587 119.923 596.956 122.195 589.324 126.737C581.874 131.28 576.059 137.549 571.88 145.544C567.701 153.539 565.612 162.534 565.612 172.528C565.612 182.704 567.701 191.789 571.88 199.784C576.059 207.779 581.874 214.139 589.324 218.863C596.956 223.406 605.587 225.677 615.217 225.677Z" fill="#0062FF"/>
<path d="M712.897 244.212V42.5156H735.792V244.212H712.897Z" fill="#0062FF"/>
<path d="M826.119 246.937C813.945 246.937 802.86 243.757 792.866 237.397C783.054 230.856 775.241 221.952 769.426 210.686C763.612 199.421 760.704 186.701 760.704 172.528C760.704 158.173 763.702 145.453 769.698 134.369C775.695 123.284 783.69 114.563 793.684 108.203C803.86 101.843 815.217 98.6634 827.754 98.6634C835.204 98.6634 842.019 99.7537 848.196 101.934C854.556 104.115 860.189 107.204 865.096 111.201C870.001 115.017 874.09 119.56 877.361 124.829C880.631 129.917 882.811 135.368 883.902 141.184L877.906 138.457L878.178 101.662H901.073V244.212H878.178V209.597L883.902 206.598C882.63 211.867 880.177 216.955 876.542 221.862C873.09 226.768 868.729 231.128 863.46 234.944C858.372 238.579 852.648 241.486 846.288 243.666C839.928 245.846 833.206 246.937 826.119 246.937ZM831.57 225.404C840.838 225.404 849.014 223.134 856.1 218.591C863.188 214.048 868.821 207.87 873 200.057C877.179 192.061 879.269 182.885 879.269 172.528C879.269 162.352 877.179 153.358 873 145.544C869.002 137.731 863.369 131.552 856.1 127.01C849.014 122.467 840.838 120.196 831.57 120.196C822.303 120.196 814.126 122.467 807.04 127.01C799.953 131.552 794.32 137.731 790.14 145.544C786.143 153.358 784.145 162.352 784.145 172.528C784.145 182.704 786.143 191.789 790.14 199.784C794.32 207.779 799.953 214.048 807.04 218.591C814.126 223.134 822.303 225.404 831.57 225.404Z" fill="#0062FF"/>
<path d="M930.49 244.212V101.662H953.386L953.931 141.728L951.478 134.914C953.476 128.191 956.747 122.104 961.29 116.652C965.832 111.201 971.193 106.84 977.371 103.569C983.73 100.299 990.454 98.6634 997.54 98.6634C1000.63 98.6634 1003.54 98.936 1006.26 99.4811C1009.17 99.8446 1011.53 100.39 1013.35 101.116L1007.08 126.464C1004.72 125.375 1002.27 124.556 999.721 124.012C997.177 123.467 994.814 123.194 992.634 123.194C986.82 123.194 981.46 124.284 976.553 126.464C971.829 128.645 967.74 131.644 964.288 135.46C961.017 139.093 958.383 143.364 956.383 148.27C954.567 153.176 953.658 158.446 953.658 164.078V244.212H930.49Z" fill="#0062FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M64.8636 269.177C130.906 313.882 220.684 296.585 265.388 230.543C310.094 164.501 292.798 74.723 226.756 30.0179C160.714 -14.6872 70.935 2.60972 26.2299 68.6516C-18.4753 134.693 -1.17834 224.472 64.8636 269.177ZM84.0172 270.357C144.43 301.264 221.064 272.251 255.187 205.557C289.309 138.861 267.997 59.7378 207.584 28.8301C147.173 -2.0774 70.5375 26.9345 36.4152 93.63C2.29299 160.325 23.6051 239.448 84.0172 270.357Z" fill="#0062FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M101.233 286.13C155.766 303.879 219.918 256.991 244.522 181.401C269.124 105.812 244.86 30.146 190.327 12.3967C135.794 -5.35246 71.6428 41.5362 47.04 117.126C22.4374 192.715 46.7007 268.381 101.233 286.13ZM117.915 280.385C164.066 290.229 213.97 239.649 229.378 167.414C244.784 95.1779 219.862 28.6392 173.71 18.7955C127.559 8.95174 77.6556 59.5307 62.2482 131.767C46.841 204.002 71.7639 270.541 117.915 280.385Z" fill="#0062FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M130.567 292.297C167.056 296.192 203.471 235.332 211.903 156.36C220.336 77.3886 197.592 10.2109 161.104 6.3148C124.616 2.41866 88.2006 63.2795 79.7681 142.251C71.3357 221.222 94.0792 288.401 130.567 292.297ZM147.642 268.26C174.048 267.843 194.616 214.386 193.58 148.861C192.546 83.3351 170.299 30.5544 143.893 30.9716C117.486 31.3889 96.9186 84.8459 97.9538 150.372C98.9891 215.897 121.235 268.677 147.642 268.26Z" fill="#0062FF"/>
</svg>
`;
