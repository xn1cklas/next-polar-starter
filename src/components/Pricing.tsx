export function Pricing() {
  return (
    <div>
      <h1>Pricing</h1>
      <div className="flex gap-8">
        <PriceComponent />
        <PriceComponent />
        <PriceComponent />
      </div>
    </div>
  );
}

function PriceComponent() {
  return (
    <div className="flex h-full flex-col">
      <div
        className="border bg-white text-gray-950 shadow-none dark:text-white dark:bg-polar-900 rounded-4xl relative flex flex-col gap-y-6 overflow-hidden border-none hover:bg-gray-50 p-8 min-h-[400px] h-full"
        id="Just an Example"
        data-sentry-element="Card"
        data-sentry-component="SubscriptionTierCard"
        data-sentry-source-file="SubscriptionTierCard.tsx"
        // style="--var-bg-color: rgba(31, 211, 154, 0.2); --var-border-color: rgba(31, 211, 154, 0.2); --var-muted-color: rgba(31, 211, 154, 0.7); --var-fg-color: #1fd39a; --var-dark-glow-color: rgba(31, 211, 154, 0.05); --var-dark-border-color: rgba(31, 211, 154, 0.15); --var-dark-muted-color: rgba(31, 211, 154, 0.5); --var-dark-fg-color: #1fd39a; --x: 101.828125; --y: 93.75;"
      >
        <div
          className="pointer-events-none absolute h-[800px] w-[800px] opacity-0 transition-opacity duration-300"
          //   style="top: calc(var(--y, 0) * 1px - 400px); left: calc(var(--x, 0) * 1px - 400px); background: radial-gradient(var(--var-dark-glow-color), #ffffff00 70%);"
        ></div>
        <div className="flex flex-col space-y-1.5 grow gap-y-6 p-0">
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-row items-center justify-between">
              <span className="dark:text-polar-500 text-xs text-gray-500">
                For Individuals
              </span>
            </div>
            <div className="flex justify-between">
              <h3 className="truncate font-medium text-lg">Just an Example</h3>
              <div
                className="inline-flex items-center text-[--var-icon-color] h-8! w-8! ml-2 text-2xl"
                // style="--var-icon-color: #1fd39a;"
              >
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1cw4hi4"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="VerifiedIcon"
                >
                  <path d="m23 12-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69zm-12.91 4.72-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-8 text-[--var-fg-color] dark:text-[--var-dark-fg-color]">
            <div className="text-5xl !font-[200]">
              $9
              <span className="dark:text-polar-500 ml-2 text-xl font-normal text-gray-500">
                /mo
              </span>
            </div>
            <div className="text-sm prose dark:prose-invert prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg prose-h5:text-md prose-h6:text-sm dark:prose-headings:text-polar-50 dark:text-polar-300 max-h-64 max-w-4xl overflow-hidden text-gray-800">
              <p>
                Polar has no monthly fees. This tier is only an example of what
                you could offer your audience in minutes using Polar.
              </p>
            </div>
          </div>
        </div>
        <div
          data-orientation="horizontal"
          role="none"
          className="shrink-0 h-[1px] w-full dark:bg-polar-700 bg-gray-200"
        ></div>
        <div
          className="flex h-full grow flex-col gap-y-2 p-0"
          data-sentry-element="CardContent"
          data-sentry-source-file="SubscriptionTierCard.tsx"
        >
          <div className="flex flex-row items-start text-[--var-fg-color] dark:text-[--var-dark-fg-color]">
            <span className="flex h-6 w-6 shrink-0 flex-row items-center justify-center rounded-full bg-[--var-border-color] text-[14px] dark:bg-[--var-dark-border-color]">
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit h-4 w-4 css-1cw4hi4"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="GitHubIcon"
              >
                <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
              </svg>
            </span>
            <span className="ml-3 text-sm leading-relaxed">
              Private GitHub repository
            </span>
          </div>
          <div className="flex flex-row items-start text-[--var-fg-color] dark:text-[--var-dark-fg-color]">
            <span className="flex h-6 w-6 shrink-0 flex-row items-center justify-center rounded-full bg-[--var-border-color] text-[14px] dark:bg-[--var-dark-border-color]">
              <svg
                viewBox="0 -28.5 256 256"
                version="1.1"
                preserveAspectRatio="xMidYMid"
                fill="currentColor"
                width="16"
                height="16"
              >
                <g data-sentry-element="g" data-sentry-source-file="utils.tsx">
                  <path
                    d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                    fill-rule="nonzero"
                    data-sentry-element="path"
                    data-sentry-source-file="utils.tsx"
                  ></path>
                </g>
              </svg>
            </span>
            <span className="ml-3 text-sm leading-relaxed">
              Discord Support Channel
            </span>
          </div>
          <div className="flex flex-row items-start text-[--var-fg-color] dark:text-[--var-dark-fg-color]">
            <span className="flex h-6 w-6 shrink-0 flex-row items-center justify-center rounded-full bg-[--var-border-color] text-[14px] dark:bg-[--var-dark-border-color]">
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit h-4 w-4 css-1cw4hi4"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="KeyOutlinedIcon"
              >
                <path d="M21 10h-8.35C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H13l2 2 2-2 2 2 4-4.04zM7 15c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3"></path>
              </svg>
            </span>
            <span className="ml-3 text-sm leading-relaxed">License Key</span>
          </div>
          <div className="flex flex-row items-start text-[--var-fg-color] dark:text-[--var-dark-fg-color]">
            <span className="flex h-6 w-6 shrink-0 flex-row items-center justify-center rounded-full bg-[--var-border-color] text-[14px] dark:bg-[--var-dark-border-color]">
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit h-4 w-4 css-1cw4hi4"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="FileDownloadOutlinedIcon"
              >
                <path d="M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3zm-1-4-1.41-1.41L13 12.17V4h-2v8.17L8.41 9.59 7 11l5 5z"></path>
              </svg>
            </span>
            <span className="ml-3 text-sm leading-relaxed">
              Binary Downloads
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
