import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg fill="none" viewBox="0 0 180 120" ref={ref} {...props}>
    <path
      fill="url(#empty-no-resource__a)"
      stroke="url(#empty-no-resource__b)"
      d="M50.5 47a9.5 9.5 0 0 1 9.5-9.5h60a9.5 9.5 0 0 1 9.5 9.5v51a9.5 9.5 0 0 1-9.5 9.5H60a9.5 9.5 0 0 1-9.5-9.5V47Z"
    />
    <g filter="url(#empty-no-resource__c)">
      <path
        fill="url(#empty-no-resource__d)"
        d="M58 26a8 8 0 0 1 8-8h40l16 16v54a8 8 0 0 1-8 8H66a8 8 0 0 1-8-8V26Z"
      />
      <path
        stroke="url(#empty-no-resource__e)"
        d="M58.5 26a7.5 7.5 0 0 1 7.5-7.5h39.793L121.5 34.207V88a7.5 7.5 0 0 1-7.5 7.5H66a7.5 7.5 0 0 1-7.5-7.5V26Z"
      />
    </g>
    <rect width={24} height={4} x={70} y={30} fill="#fff" rx={1} />
    <rect width={10} height={4} x={70} y={38} fill="#fff" rx={1} />
    <path
      fill="url(#empty-no-resource__f)"
      stroke="url(#empty-no-resource__g)"
      d="M106.5 31.12V19.207L120.793 33.5H108.88a2.38 2.38 0 0 1-2.38-2.38Z"
    />
    <g filter="url(#empty-no-resource__h)">
      <path
        fill="url(#empty-no-resource__i)"
        d="M45 57c0-5.523 4.477-10 10-10h23.233a4 4 0 0 1 3.066 1.431l7.402 8.838a4 4 0 0 0 3.066 1.431H125c5.523 0 10 4.477 10 10V100c0 5.523-4.477 10-10 10H55c-5.523 0-10-4.477-10-10V57Z"
      />
      <path
        stroke="url(#empty-no-resource__j)"
        d="M45.5 57a9.5 9.5 0 0 1 9.5-9.5h23.233a3.5 3.5 0 0 1 2.683 1.253l7.402 8.837a4.5 4.5 0 0 0 3.45 1.61H125a9.5 9.5 0 0 1 9.5 9.5V100a9.5 9.5 0 0 1-9.5 9.5H55a9.5 9.5 0 0 1-9.5-9.5V57Z"
      />
    </g>
    <rect
      width={10}
      height={4}
      x={55}
      y={65}
      fill="url(#empty-no-resource__k)"
      rx={0.9}
    />
    <rect width={10} height={4} x={55} y={65} fill="#93B9F6" rx={0.9} />
    <rect
      width={22}
      height={4}
      x={55}
      y={57}
      fill="url(#empty-no-resource__l)"
      rx={0.9}
    />
    <rect width={22} height={4} x={55} y={57} fill="#FEBCA2" rx={0.9} />
    <defs>
      <linearGradient
        id="empty-no-resource__a"
        x1={93.636}
        x2={96.261}
        y1={108}
        y2={43.582}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FAFBFC" />
        <stop offset={1} stopColor="#DBE0EA" />
      </linearGradient>
      <linearGradient
        id="empty-no-resource__b"
        x1={51.339}
        x2={49.327}
        y1={37}
        y2={107.981}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DBE0EA" />
        <stop offset={1} stopColor="#FAFBFC" />
      </linearGradient>
      <linearGradient
        id="empty-no-resource__d"
        x1={61.65}
        x2={62.55}
        y1={15.3}
        y2={144}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FAFBFC" />
        <stop offset={1} stopColor="#DBE0EA" />
      </linearGradient>
      <linearGradient
        id="empty-no-resource__e"
        x1={58.684}
        x2={55.707}
        y1={18}
        y2={95.687}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DBE0EA" />
        <stop offset={1} stopColor="#FAFBFC" />
      </linearGradient>
      <linearGradient
        id="empty-no-resource__f"
        x1={107.454}
        x2={114}
        y1={32.545}
        y2={26}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FAFBFC" />
        <stop offset={1} stopColor="#DBE0EA" />
      </linearGradient>
      <linearGradient
        id="empty-no-resource__g"
        x1={114}
        x2={103.862}
        y1={25.636}
        y2={36.195}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DBE0EA" />
        <stop offset={1} stopColor="#FAFBFC" />
      </linearGradient>
      <linearGradient
        id="empty-no-resource__i"
        x1={45}
        x2={45}
        y1={45.8}
        y2={110.6}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FAFBFC" />
        <stop offset={1} stopColor="#DBE0EA" />
      </linearGradient>
      <linearGradient
        id="empty-no-resource__j"
        x1={46.506}
        x2={45.016}
        y1={45.8}
        y2={110.6}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DBE0EA" />
        <stop offset={1} stopColor="#FAFBFC" />
      </linearGradient>
      <linearGradient
        id="empty-no-resource__k"
        x1={59.167}
        x2={59.008}
        y1={65}
        y2={68.996}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1F61E8" />
        <stop offset={1} stopColor="#6BA1F1" />
      </linearGradient>
      <linearGradient
        id="empty-no-resource__l"
        x1={64.167}
        x2={64.094}
        y1={57}
        y2={61.001}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FC5F3A" />
        <stop offset={1} stopColor="#FD9F7F" />
      </linearGradient>
      <filter
        id="empty-no-resource__c"
        width={76.96}
        height={90.96}
        x={51.52}
        y={14.4}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={2.88} />
        <feGaussianBlur stdDeviation={3.24} />
        <feColorMatrix values="0 0 0 0 0.160784 0 0 0 0 0.203922 0 0 0 0 0.294118 0 0 0 0.06 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_284_313" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={0.72} />
        <feGaussianBlur stdDeviation={0.72} />
        <feColorMatrix values="0 0 0 0 0.160784 0 0 0 0 0.203922 0 0 0 0 0.294118 0 0 0 0.04 0" />
        <feBlend
          in2="effect1_dropShadow_284_313"
          result="effect2_dropShadow_284_313"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_284_313"
          result="shape"
        />
      </filter>
      <filter
        id="empty-no-resource__h"
        width={106.2}
        height={79.2}
        x={36.9}
        y={42.5}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={3.6} />
        <feGaussianBlur stdDeviation={4.05} />
        <feColorMatrix values="0 0 0 0 0.160784 0 0 0 0 0.203922 0 0 0 0 0.294118 0 0 0 0.06 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_284_313" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={0.9} />
        <feGaussianBlur stdDeviation={0.9} />
        <feColorMatrix values="0 0 0 0 0.160784 0 0 0 0 0.203922 0 0 0 0 0.294118 0 0 0 0.04 0" />
        <feBlend
          in2="effect1_dropShadow_284_313"
          result="effect2_dropShadow_284_313"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_284_313"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
