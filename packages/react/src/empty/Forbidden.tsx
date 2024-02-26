import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg viewBox="0 0 180 120" fill="none" ref={ref} {...props}>
    <g filter="url(#empty-forbidden__a)">
      <path
        fill="url(#empty-forbidden__b)"
        d="M52 18c0-5.523 4.477-10 10-10h48l22 22v68c0 5.523-4.477 10-10 10H62c-5.523 0-10-4.477-10-10V18Z"
      />
      <path
        stroke="url(#empty-forbidden__c)"
        d="M52.5 18A9.5 9.5 0 0 1 62 8.5h47.793L131.5 30.207V98a9.5 9.5 0 0 1-9.5 9.5H62a9.5 9.5 0 0 1-9.5-9.5V18Z"
      />
    </g>
    <rect width={36} height={4} x={64} y={20} fill="#DBE0EA" rx={1} />
    <rect width={56} height={4} x={64} y={55} fill="#DBE0EA" rx={1} />
    <rect width={56} height={4} x={64} y={65} fill="#DBE0EA" rx={1} />
    <rect width={56} height={4} x={64} y={75} fill="#DBE0EA" rx={1} />
    <rect width={16} height={4} x={64} y={30} fill="#DBE0EA" rx={1} />
    <path
      fill="url(#empty-forbidden__d)"
      stroke="url(#empty-forbidden__e)"
      d="M110.5 26V9.207L130.793 29.5H114a3.5 3.5 0 0 1-3.5-3.5Z"
    />
    <g fillRule="evenodd" clipRule="evenodd" filter="url(#empty-forbidden__f)">
      <path
        fill="#1F61E8"
        d="M53 81c-3.866 0-7 3.1-7 6.926V92h-2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h18a4 4 0 0 0 4-4V96a4 4 0 0 0-4-4h-2v-4.074C60 84.1 56.866 81 53 81Zm2.545 11v-4.074c0-1.739-1.272-2.519-2.545-2.519s-2.545.78-2.545 2.519V92h5.09Z"
      />
      <path
        fill="url(#empty-forbidden__g)"
        d="M53 81c-3.866 0-7 3.1-7 6.926V92h-2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h18a4 4 0 0 0 4-4V96a4 4 0 0 0-4-4h-2v-4.074C60 84.1 56.866 81 53 81Zm2.545 11v-4.074c0-1.739-1.272-2.519-2.545-2.519s-2.545.78-2.545 2.519V92h5.09Z"
      />
    </g>
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M54 102.732a2 2 0 1 0-2 0V105a1 1 0 0 0 2 0v-2.268Z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="empty-forbidden__b"
        x1={66}
        x2={66.5}
        y1={8}
        y2={128.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FAFBFC" />
        <stop offset={1} stopColor="#DBE0EA" />
      </linearGradient>
      <linearGradient
        id="empty-forbidden__c"
        x1={48.506}
        x2={44.37}
        y1={6}
        y2={113.899}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DBE0EA" />
        <stop offset={1} stopColor="#FAFBFC" />
      </linearGradient>
      <linearGradient
        id="empty-forbidden__d"
        x1={112}
        x2={121}
        y1={28}
        y2={19}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FAFBFC" />
        <stop offset={1} stopColor="#DBE0EA" />
      </linearGradient>
      <linearGradient
        id="empty-forbidden__e"
        x1={121}
        x2={107.061}
        y1={18.5}
        y2={33.019}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DBE0EA" />
        <stop offset={1} stopColor="#FAFBFC" />
      </linearGradient>
      <linearGradient
        id="empty-forbidden__g"
        x1={51.5}
        x2={51.486}
        y1={81}
        y2={112}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FEBCA2" />
        <stop offset={1} stopColor="#FC5F3A" />
      </linearGradient>
      <filter
        id="empty-forbidden__a"
        width={98}
        height={118}
        x={43}
        y={3}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={4.5} />
        <feColorMatrix values="0 0 0 0 0.160784 0 0 0 0 0.203922 0 0 0 0 0.294118 0 0 0 0.06 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_284_164" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={1} />
        <feColorMatrix values="0 0 0 0 0.160784 0 0 0 0 0.203922 0 0 0 0 0.294118 0 0 0 0.04 0" />
        <feBlend
          in2="effect1_dropShadow_284_164"
          result="effect2_dropShadow_284_164"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_284_164"
          result="shape"
        />
      </filter>
      <filter
        id="empty-forbidden__f"
        width={36}
        height={41}
        x={35}
        y={77}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feMorphology
          in="SourceAlpha"
          operator="dilate"
          radius={1}
          result="effect1_dropShadow_284_164"
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.160784 0 0 0 0 0.203922 0 0 0 0 0.294118 0 0 0 0.1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_284_164" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_284_164"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
