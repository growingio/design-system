import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg fill="none" viewBox="0 0 180 120" ref={ref} {...props}>
    <path
      fill="#DBE0EA"
      d="M51 47a9 9 0 0 1 9-9h60a9 9 0 0 1 9 9v54a9 9 0 0 1-9 9H60a9 9 0 0 1-9-9V47Z"
    />
    <g filter="url(#empty-no-file__a)">
      <path
        fill="url(#empty-no-file__b)"
        d="M45 56a9 9 0 0 1 9-9h22.122a9 9 0 0 1 6.802 3.107l5.92 6.833a9 9 0 0 0 6.802 3.107H126a9 9 0 0 1 9 9V101a9 9 0 0 1-9 9H54a9 9 0 0 1-9-9V56Z"
      />
      <path
        stroke="url(#empty-no-file__c)"
        d="M45.5 56a8.5 8.5 0 0 1 8.5-8.5h22.122a8.5 8.5 0 0 1 6.424 2.934l5.92 6.833a9.5 9.5 0 0 0 7.18 3.28H126a8.5 8.5 0 0 1 8.5 8.5V101a8.5 8.5 0 0 1-8.5 8.5H54a8.5 8.5 0 0 1-8.5-8.5V56Z"
      />
    </g>
    <rect
      width={22}
      height={3}
      x={53}
      y={58}
      fill="url(#empty-no-file__d)"
      rx={0.8}
    />
    <rect width={22} height={3} x={53} y={58} fill="#93B9F6" rx={0.8} />
    <rect
      width={13}
      height={3}
      x={53}
      y={65}
      fill="url(#empty-no-file__e)"
      rx={0.8}
    />
    <rect width={13} height={3} x={53} y={65} fill="#93B9F6" rx={0.8} />
    <defs>
      <linearGradient
        id="empty-no-file__b"
        x1={43.5}
        x2={43.5}
        y1={43.686}
        y2={111.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FAFBFC" />
        <stop offset={1} stopColor="#ECEEF4" />
      </linearGradient>
      <linearGradient
        id="empty-no-file__c"
        x1={45.076}
        x2={43.517}
        y1={43.686}
        y2={111.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DBE0EA" />
        <stop offset={1} stopColor="#FAFBFC" />
      </linearGradient>
      <linearGradient
        id="empty-no-file__d"
        x1={62.167}
        x2={62.126}
        y1={58}
        y2={61.001}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1F61E8" />
        <stop offset={1} stopColor="#6BA1F1" />
      </linearGradient>
      <linearGradient
        id="empty-no-file__e"
        x1={58.417}
        x2={58.348}
        y1={65}
        y2={68}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1F61E8" />
        <stop offset={1} stopColor="#6BA1F1" />
      </linearGradient>
      <filter
        id="empty-no-file__a"
        width={106.953}
        height={79.954}
        x={36.523}
        y={42.291}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={3.767} />
        <feGaussianBlur stdDeviation={4.238} />
        <feColorMatrix values="0 0 0 0 0.160784 0 0 0 0 0.203922 0 0 0 0 0.294118 0 0 0 0.06 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_328_130" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={0.942} />
        <feGaussianBlur stdDeviation={0.942} />
        <feColorMatrix values="0 0 0 0 0.160784 0 0 0 0 0.203922 0 0 0 0 0.294118 0 0 0 0.04 0" />
        <feBlend
          in2="effect1_dropShadow_328_130"
          result="effect2_dropShadow_328_130"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_328_130"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
