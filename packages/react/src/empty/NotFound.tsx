import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg fill="none" viewBox="0 0 180 120" ref={ref} {...props}>
    <path
      fill="url(#empty-not-found__a)"
      d="M90.7 25.761 74.725 9.755a.6.6 0 0 1 .394-1.023l23.003-1.187a.6.6 0 0 1 .6.79l-2.061 6.183a.6.6 0 0 1-.663.403L87 13.5l7.526 4.234a.6.6 0 0 1 .256.764l-3.108 7.08a.6.6 0 0 1-.974.183Z"
    />
    <path
      stroke="#FED7C5"
      strokeDasharray="5 6"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M97.5 18c4.167.525 12.5 3.675 12.5 12.075 0 10.5-12.083 13.65-19.583 17.85C82.917 52.125 80 56.325 80 60"
    />
    <g filter="url(#empty-not-found__b)">
      <path
        fill="url(#empty-not-found__c)"
        stroke="url(#empty-not-found__d)"
        d="M42.5 52.5h67v57H52a9.5 9.5 0 0 1-9.5-9.5V52.5Z"
      />
      <path fill="url(#empty-not-found__e)" d="M42 52h68L98 68H30l12-16Z" />
      <path
        fill="url(#empty-not-found__f)"
        stroke="url(#empty-not-found__g)"
        d="M137.5 52.5h-27v57H128a9.5 9.5 0 0 0 9.5-9.5V52.5Z"
      />
      <path
        fill="url(#empty-not-found__h)"
        d="M130 66a1 1 0 0 0-1-1h-12a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2Z"
      />
      <path fill="url(#empty-not-found__i)" d="M138 52h-28l8-14h28l-8 14Z" />
      <path fill="url(#empty-not-found__j)" d="M42 52h29l-7-14H35l7 14Z" />
    </g>
    <defs>
      <linearGradient
        id="empty-not-found__a"
        x1={68.5}
        x2={95.58}
        y1={7}
        y2={11.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1F61E8" />
        <stop offset={1} stopColor="#93B9F6" />
      </linearGradient>
      <linearGradient
        id="empty-not-found__c"
        x1={80}
        x2={80}
        y1={64}
        y2={111}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F1F3F7" />
        <stop offset={1} stopColor="#DBE0EA" />
      </linearGradient>
      <linearGradient
        id="empty-not-found__d"
        x1={80}
        x2={81.5}
        y1={49.5}
        y2={134}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CED4DF" />
        <stop offset={1} stopColor="#FAFBFC" />
      </linearGradient>
      <linearGradient
        id="empty-not-found__e"
        x1={71}
        x2={71.5}
        y1={66}
        y2={52}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#F1F3F7" />
      </linearGradient>
      <linearGradient
        id="empty-not-found__f"
        x1={122.48}
        x2={119.592}
        y1={131.75}
        y2={55.675}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#AAB3C6" />
        <stop offset={1} stopColor="#DBE0EA" />
      </linearGradient>
      <linearGradient
        id="empty-not-found__g"
        x1={134.44}
        x2={123.083}
        y1={75.821}
        y2={106.923}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DBE0EA" />
        <stop offset={1} stopColor="#AAB3C6" />
      </linearGradient>
      <linearGradient
        id="empty-not-found__h"
        x1={122.176}
        x2={120.784}
        y1={64.5}
        y2={74.242}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#AAB3C6" />
        <stop offset={1} stopColor="#DBE0EA" />
      </linearGradient>
      <linearGradient
        id="empty-not-found__i"
        x1={117}
        x2={123.774}
        y1={90.5}
        y2={36.036}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#AAB3C6" />
        <stop offset={1} stopColor="#DBE0EA" />
      </linearGradient>
      <linearGradient
        id="empty-not-found__j"
        x1={74.5}
        x2={58.564}
        y1={89}
        y2={36.91}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#AAB3C6" />
        <stop offset={1} stopColor="#DBE0EA" />
      </linearGradient>
      <filter
        id="empty-not-found__b"
        width={134}
        height={90}
        x={21}
        y={33}
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
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.160784 0 0 0 0 0.203922 0 0 0 0 0.294118 0 0 0 0.06 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_284_245" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.160784 0 0 0 0 0.203922 0 0 0 0 0.294118 0 0 0 0.04 0" />
        <feBlend
          in2="effect1_dropShadow_284_245"
          result="effect2_dropShadow_284_245"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_284_245"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
