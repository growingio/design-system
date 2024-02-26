import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg fill="none" viewBox="0 0 320 224" ref={ref} {...props}>
    <circle cx={275.6} cy={137.6} r={2.8} stroke="#ECEEF4" strokeWidth={1.6} />
    <circle cx={64} cy={122} r={1.6} stroke="#93B9F6" strokeWidth={1.6} />
    <circle cx={46.4} cy={60.4} r={1.6} stroke="#ECEEF4" strokeWidth={1.6} />
    <circle cx={233.2} cy={28.4} r={1.6} stroke="#FEBCA2" strokeWidth={1.6} />
    <g filter="url(#result-402__a)">
      <path
        fill="url(#result-402__b)"
        fillRule="evenodd"
        d="M91 30c0-8.837 7.163-16 16-16h82.768a16 16 0 0 1 10.822 4.215l39.232 36.03A15.999 15.999 0 0 1 245 66.03V192c0 8.837-7.163 16-16 16H107c-8.837 0-16-7.163-16-16V30Z"
        clipRule="evenodd"
      />
      <path
        stroke="url(#result-402__c)"
        strokeWidth={1.6}
        d="M91.8 30c0-8.395 6.805-15.2 15.2-15.2h82.768c3.808 0 7.477 1.43 10.281 4.005l39.232 36.03A15.198 15.198 0 0 1 244.2 66.03V192c0 8.395-6.805 15.2-15.2 15.2H107c-8.395 0-15.2-6.805-15.2-15.2V30Z"
      />
    </g>
    <path
      fill="url(#result-402__d)"
      fillRule="evenodd"
      d="M105 37.6a9.6 9.6 0 0 1 9.6-9.6h72.716a9.6 9.6 0 0 1 6.422 2.464l34.084 30.676A9.6 9.6 0 0 1 231 68.275V184.4a9.6 9.6 0 0 1-9.6 9.6H114.6a9.6 9.6 0 0 1-9.6-9.6V37.6Z"
      clipRule="evenodd"
    />
    <rect width={16} height={8} x={117} y={132} fill="#CED4DF" rx={4} />
    <rect width={8} height={8} x={137} y={132} fill="#CED4DF" rx={4} />
    <g filter="url(#result-402__e)">
      <rect
        width={68}
        height={68}
        x={151}
        y={98}
        fill="url(#result-402__f)"
        rx={6}
      />
      <rect
        width={67.2}
        height={67.2}
        x={151.4}
        y={98.4}
        stroke="url(#result-402__g)"
        strokeWidth={0.8}
        rx={5.6}
      />
    </g>
    <rect width={22} height={8} x={193} y={71} fill="#CED4DF" rx={4} />
    <rect width={50} height={50} x={160} y={107} fill="#CED4DF" rx={4} />
    <rect
      width={30}
      height={30}
      fill="url(#result-402__h)"
      rx={15}
      transform="matrix(-1 0 0 1 200 117)"
    />
    <path
      fill="url(#result-402__i)"
      d="M210 126.026a.137.137 0 0 0-.138-.137h-4.427c-17.116 0-30.991 13.875-30.991 30.991 0 .066.054.12.121.12H206a4 4 0 0 0 4-4v-26.974Z"
    />
    <g filter="url(#result-402__j)">
      <rect
        width={68}
        height={68}
        x={117}
        y={52}
        fill="url(#result-402__k)"
        rx={6}
      />
      <rect
        width={67.2}
        height={67.2}
        x={117.4}
        y={52.4}
        stroke="url(#result-402__l)"
        strokeWidth={0.8}
        rx={5.6}
      />
    </g>
    <g filter="url(#result-402__m)">
      <rect
        width={50}
        height={50}
        x={125}
        y={61}
        fill="#93BEF6"
        fillOpacity={0.4}
        rx={4}
      />
    </g>
    <path
      fill="url(#result-402__n)"
      d="M157 61h-27.556A4.444 4.444 0 0 0 125 65.444V93c17.673 0 32-14.327 32-32Z"
    />
    <path
      fill="url(#result-402__o)"
      d="M175 69c-23.196 0-42 18.804-42 42h37.556a4.444 4.444 0 0 0 4.444-4.444V69Z"
    />
    <path
      fill="#F7F9FA"
      fillRule="evenodd"
      d="M140.1 88.86c4.08 0 5.6-1.28 5.6-5.02 0-3.54-1.34-4.84-5.6-4.84H135v13.88h3.54v-4.02h1.56Zm-.5-2.82h-1.06v-4.3h1.06c1.84 0 2.5.52 2.5 2.18 0 1.62-.64 2.12-2.5 2.12Z"
      clipRule="evenodd"
    />
    <path
      fill="#F7F9FA"
      d="m154.617 81.88-.08 3h-.3c-1.46 0-2.64.62-2.86 2.12v5.88h-3.38v-10.8h3.38v1.9c.58-1.6 1.58-2.1 3.02-2.1h.22Z"
    />
    <path
      fill="#F7F9FA"
      fillRule="evenodd"
      d="M155.711 87.48c0-4.32 1.86-5.6 5.42-5.6 3.54 0 5.4 1.28 5.4 5.6 0 4.32-1.86 5.6-5.4 5.6-3.56 0-5.42-1.28-5.42-5.6Zm5.42 3.1c1.54 0 1.98-.7 1.98-3.1 0-2.4-.46-3.14-1.98-3.14-1.54 0-1.98.74-1.98 3.14 0 2.4.46 3.1 1.98 3.1Z"
      clipRule="evenodd"
    />
    <g filter="url(#result-402__p)">
      <circle cx={104} cy={174} r={38} fill="url(#result-402__q)" />
      <circle
        cx={104}
        cy={174}
        r={37.6}
        stroke="url(#result-402__r)"
        strokeWidth={0.8}
      />
    </g>
    <g filter="url(#result-402__s)">
      <circle cx={104} cy={174} r={30} fill="#FEBCA2" fillOpacity={0.4} />
    </g>
    <path
      fill="#1F61E8"
      d="M94 170.4h.4V164a9.6 9.6 0 0 1 9.6-9.6 9.6 9.6 0 0 1 9.6 9.6v6.4h2.4a3.6 3.6 0 0 1 3.6 3.6v16a3.6 3.6 0 0 1-3.6 3.6H92a3.6 3.6 0 0 1-3.6-3.6v-16a3.6 3.6 0 0 1 3.6-3.6h2Zm5.6-.4v.4h8.8V164a4.4 4.4 0 0 0-8.8 0v6Z"
    />
    <path
      fill="url(#result-402__t)"
      d="M94 170.4h.4V164a9.6 9.6 0 0 1 9.6-9.6 9.6 9.6 0 0 1 9.6 9.6v6.4h2.4a3.6 3.6 0 0 1 3.6 3.6v16a3.6 3.6 0 0 1-3.6 3.6H92a3.6 3.6 0 0 1-3.6-3.6v-16a3.6 3.6 0 0 1 3.6-3.6h2Zm5.6-.4v.4h8.8V164a4.4 4.4 0 0 0-8.8 0v6Z"
    />
    <path
      stroke="url(#result-402__u)"
      strokeWidth={0.8}
      d="M94 170.4h.4V164a9.6 9.6 0 0 1 9.6-9.6 9.6 9.6 0 0 1 9.6 9.6v6.4h2.4a3.6 3.6 0 0 1 3.6 3.6v16a3.6 3.6 0 0 1-3.6 3.6H92a3.6 3.6 0 0 1-3.6-3.6v-16a3.6 3.6 0 0 1 3.6-3.6h2Zm5.6-.4v.4h8.8V164a4.4 4.4 0 0 0-8.8 0v6Z"
    />
    <path
      stroke="url(#result-402__v)"
      strokeWidth={0.8}
      d="M94 170.4h.4V164a9.6 9.6 0 0 1 9.6-9.6 9.6 9.6 0 0 1 9.6 9.6v6.4h2.4a3.6 3.6 0 0 1 3.6 3.6v16a3.6 3.6 0 0 1-3.6 3.6H92a3.6 3.6 0 0 1-3.6-3.6v-16a3.6 3.6 0 0 1 3.6-3.6h2Zm5.6-.4v.4h8.8V164a4.4 4.4 0 0 0-8.8 0v6Z"
    />
    <path
      fill="#F6DDD5"
      d="M105.5 182.599a3 3 0 1 0-3 0v2.901a1.5 1.5 0 0 0 3 0v-2.901Z"
    />
    <defs>
      <linearGradient
        id="result-402__b"
        x1={87.778}
        x2={87.778}
        y1={12}
        y2={212}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FAFBFC" />
        <stop offset={1} stopColor="#DBE0EA" />
      </linearGradient>
      <linearGradient
        id="result-402__c"
        x1={90.456}
        x2={82.478}
        y1={12}
        y2={211.788}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DBE0EA" />
        <stop offset={1} stopColor="#FAFBFC" />
      </linearGradient>
      <linearGradient
        id="result-402__d"
        x1={104.337}
        x2={90.599}
        y1={-25.778}
        y2={198.021}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.017} stopColor="#DBE0EA" />
        <stop offset={1} stopColor="#FAFBFC" />
      </linearGradient>
      <linearGradient
        id="result-402__f"
        x1={185}
        x2={185}
        y1={98}
        y2={169.238}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FAFBFC" />
        <stop offset={1} stopColor="#DBE0EA" />
      </linearGradient>
      <linearGradient
        id="result-402__g"
        x1={152.113}
        x2={164.816}
        y1={98}
        y2={170.738}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DBE0EA" />
        <stop offset={1} stopColor="#FAFBFC" />
      </linearGradient>
      <linearGradient
        id="result-402__h"
        x1={3.797}
        x2={22.782}
        y1={28.071}
        y2={8.786}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CED4DF" />
        <stop offset={1} stopColor="#AAB3C6" />
      </linearGradient>
      <linearGradient
        id="result-402__i"
        x1={205.5}
        x2={186.027}
        y1={155}
        y2={132.393}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CED4DF" />
        <stop offset={1} stopColor="#AAB3C6" />
      </linearGradient>
      <linearGradient
        id="result-402__k"
        x1={151}
        x2={151}
        y1={52}
        y2={123.238}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FAFBFC" />
        <stop offset={1} stopColor="#DBE0EA" />
      </linearGradient>
      <linearGradient
        id="result-402__l"
        x1={118.113}
        x2={130.816}
        y1={52}
        y2={124.738}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DBE0EA" />
        <stop offset={1} stopColor="#FAFBFC" />
      </linearGradient>
      <linearGradient
        id="result-402__n"
        x1={155.5}
        x2={120.2}
        y1={60}
        y2={69.92}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1F61E8" />
        <stop offset={1} stopColor="#6BA1F1" />
      </linearGradient>
      <linearGradient
        id="result-402__o"
        x1={144.846}
        x2={172.063}
        y1={99.288}
        y2={87.553}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1F61E8" />
        <stop offset={1} stopColor="#6BA1F1" />
      </linearGradient>
      <linearGradient
        id="result-402__q"
        x1={104}
        x2={104}
        y1={136}
        y2={215.619}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FAFBFC" />
        <stop offset={1} stopColor="#DBE0EA" />
      </linearGradient>
      <linearGradient
        id="result-402__r"
        x1={67.244}
        x2={81.441}
        y1={136}
        y2={217.296}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DBE0EA" />
        <stop offset={1} stopColor="#FAFBFC" />
      </linearGradient>
      <linearGradient
        id="result-402__t"
        x1={104}
        x2={110.072}
        y1={206.729}
        y2={181.853}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D03E24" />
        <stop offset={1} stopColor="#FC5F3A" />
      </linearGradient>
      <linearGradient
        id="result-402__u"
        x1={85}
        x2={103.415}
        y1={170}
        y2={189.182}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFF0E8" />
        <stop offset={1} stopColor="#FFF0E8" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="result-402__v"
        x1={120}
        x2={112.434}
        y1={185}
        y2={172.361}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D03E24" />
        <stop offset={1} stopColor="#D03E24" stopOpacity={0} />
        <stop offset={1} stopColor="#D03E24" stopOpacity={0} />
      </linearGradient>
      <filter
        id="result-402__a"
        width={182.8}
        height={222.8}
        x={76.6}
        y={6}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={6.4} />
        <feGaussianBlur stdDeviation={7.2} />
        <feColorMatrix values="0 0 0 0 0.160784 0 0 0 0 0.203922 0 0 0 0 0.294118 0 0 0 0.06 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1236_258"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={1.6} />
        <feGaussianBlur stdDeviation={1.6} />
        <feColorMatrix values="0 0 0 0 0.160784 0 0 0 0 0.203922 0 0 0 0 0.294118 0 0 0 0.04 0" />
        <feBlend
          in2="effect1_dropShadow_1236_258"
          result="effect2_dropShadow_1236_258"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_1236_258"
          result="shape"
        />
      </filter>
      <filter
        id="result-402__e"
        width={80.8}
        height={80.8}
        x={144.6}
        y={94.8}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={3.2} />
        <feGaussianBlur stdDeviation={3.2} />
        <feColorMatrix values="0 0 0 0 0.160784 0 0 0 0 0.203922 0 0 0 0 0.294118 0 0 0 0.05 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1236_258"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={0.8} />
        <feGaussianBlur stdDeviation={0.8} />
        <feColorMatrix values="0 0 0 0 0.160784 0 0 0 0 0.203922 0 0 0 0 0.294118 0 0 0 0.04 0" />
        <feBlend
          in2="effect1_dropShadow_1236_258"
          result="effect2_dropShadow_1236_258"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_1236_258"
          result="shape"
        />
      </filter>
      <filter
        id="result-402__j"
        width={80.8}
        height={80.8}
        x={110.6}
        y={48.8}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={3.2} />
        <feGaussianBlur stdDeviation={3.2} />
        <feColorMatrix values="0 0 0 0 0.160784 0 0 0 0 0.203922 0 0 0 0 0.294118 0 0 0 0.05 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1236_258"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={0.8} />
        <feGaussianBlur stdDeviation={0.8} />
        <feColorMatrix values="0 0 0 0 0.160784 0 0 0 0 0.203922 0 0 0 0 0.294118 0 0 0 0.04 0" />
        <feBlend
          in2="effect1_dropShadow_1236_258"
          result="effect2_dropShadow_1236_258"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_1236_258"
          result="shape"
        />
      </filter>
      <filter
        id="result-402__m"
        width={56.4}
        height={56.4}
        x={121.8}
        y={57.8}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={1.6} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_1236_258"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_backgroundBlur_1236_258"
          result="shape"
        />
      </filter>
      <filter
        id="result-402__p"
        width={88.8}
        height={88.8}
        x={59.6}
        y={132.8}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={3.2} />
        <feGaussianBlur stdDeviation={3.2} />
        <feColorMatrix values="0 0 0 0 0.160784 0 0 0 0 0.203922 0 0 0 0 0.294118 0 0 0 0.05 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1236_258"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={0.8} />
        <feGaussianBlur stdDeviation={0.8} />
        <feColorMatrix values="0 0 0 0 0.160784 0 0 0 0 0.203922 0 0 0 0 0.294118 0 0 0 0.04 0" />
        <feBlend
          in2="effect1_dropShadow_1236_258"
          result="effect2_dropShadow_1236_258"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_1236_258"
          result="shape"
        />
      </filter>
      <filter
        id="result-402__s"
        width={66.4}
        height={66.4}
        x={70.8}
        y={140.8}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={1.6} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_1236_258"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_backgroundBlur_1236_258"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
