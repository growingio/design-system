import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg fill="none" viewBox="0 0 320 224" ref={ref} {...props}>
    <circle cx={270} cy={129.2} r={2.8} stroke="#ECEEF4" strokeWidth={1.6} />
    <circle cx={132} cy={212} r={1.6} stroke="#93B9F6" strokeWidth={1.6} />
    <circle cx={49.6} cy={160.8} r={1.6} stroke="#ECEEF4" strokeWidth={1.6} />
    <circle cx={116} cy={19.2} r={1.6} stroke="#FEBCA2" strokeWidth={1.6} />
    <circle cx={221.772} cy={46.8} r={2.571} fill="#E8EFFF" />
    <circle cx={228.629} cy={46.8} r={2.571} fill="#E8EFFF" />
    <circle cx={225.2} cy={50.228} r={2.571} fill="#E8EFFF" />
    <circle cx={225.2} cy={43.371} r={2.571} fill="#E8EFFF" />
    <path
      stroke="#E8EFFF"
      strokeDasharray="4 4.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="M200.03 73.671c-2.015-1.621-7.23-3.787-11.964.52-5.918 5.383-2.706 12.48-1.978 18.036.728 5.556-.435 9.033-2.507 10.917M148.25 107.294c2.365-1.048 6.681-4.689 5.024-10.87-2.07-7.728-9.85-8.128-15.122-10.029-5.271-1.9-7.827-4.528-8.552-7.233"
    />
    <g filter="url(#result-no-resource__a)">
      <path
        fill="url(#result-no-resource__b)"
        stroke="url(#result-no-resource__c)"
        strokeWidth={1.6}
        d="M71.944 98.26h132.215v100.355H92.384c-11.289 0-20.44-9.152-20.44-20.441V98.26Z"
      />
      <path
        fill="url(#result-no-resource__d)"
        d="M71.144 97.46H204.96l-12.744 29.737H58.4L71.144 97.46Z"
      />
      <path
        fill="url(#result-no-resource__e)"
        stroke="url(#result-no-resource__f)"
        strokeWidth={1.6}
        d="M257.261 98.26H205.76v100.355h31.061c11.289 0 20.44-9.152 20.44-20.441V98.26Z"
      />
      <path
        fill="url(#result-no-resource__g)"
        d="M247.441 112.329c0-1.173-.95-2.124-2.124-2.124h-27.612a2.124 2.124 0 0 0-2.124 2.124v4.248c0 1.173.951 2.124 2.124 2.124h27.612a2.123 2.123 0 0 0 2.124-2.124v-4.248Z"
      />
      <path
        fill="url(#result-no-resource__h)"
        d="M258.061 97.46H204.96l8.496-31.86h53.101l-8.496 31.86Z"
      />
      <path
        fill="url(#result-no-resource__i)"
        d="M71.144 97.46h53.101l-8.496-31.86H62.648l8.496 31.86Z"
      />
    </g>
    <g filter="url(#result-no-resource__j)">
      <circle
        cx={163.2}
        cy={43.2}
        r={26.4}
        fill="url(#result-no-resource__k)"
      />
      <circle
        cx={163.2}
        cy={43.2}
        r={26}
        stroke="url(#result-no-resource__l)"
        strokeWidth={0.8}
      />
    </g>
    <g filter="url(#result-no-resource__m)">
      <circle cx={163.2} cy={43.2} r={20} fill="#FEBCA2" fillOpacity={0.4} />
    </g>
    <mask id="result-no-resource__p" fill="#fff">
      <path
        fillRule="evenodd"
        d="M163.28 30.4a4.079 4.079 0 0 0-4.059 4.485l.961 9.616a3.113 3.113 0 0 0 6.196 0l.961-9.616a4.08 4.08 0 0 0-4.059-4.485Zm0 25.92a3.381 3.381 0 1 0 0-6.762 3.381 3.381 0 0 0 0 6.762Z"
        clipRule="evenodd"
      />
    </mask>
    <path
      fill="#1F61E8"
      fillRule="evenodd"
      d="M163.28 30.4a4.079 4.079 0 0 0-4.059 4.485l.961 9.616a3.113 3.113 0 0 0 6.196 0l.961-9.616a4.08 4.08 0 0 0-4.059-4.485Zm0 25.92a3.381 3.381 0 1 0 0-6.762 3.381 3.381 0 0 0 0 6.762Z"
      clipRule="evenodd"
    />
    <path
      fill="url(#result-no-resource__n)"
      fillRule="evenodd"
      d="M163.28 30.4a4.079 4.079 0 0 0-4.059 4.485l.961 9.616a3.113 3.113 0 0 0 6.196 0l.961-9.616a4.08 4.08 0 0 0-4.059-4.485Zm0 25.92a3.381 3.381 0 1 0 0-6.762 3.381 3.381 0 0 0 0 6.762Z"
      clipRule="evenodd"
    />
    <path
      fill="url(#result-no-resource__o)"
      d="m159.221 34.885-.796.08.796-.08Zm.961 9.616.796-.08-.796.08Zm6.196 0-.796-.08.796.08Zm.961-9.616-.796-.08.796.08Zm-7.322-.08a3.28 3.28 0 0 1 3.263-3.605v-1.6a4.879 4.879 0 0 0-4.855 5.365l1.592-.16Zm.961 9.616-.961-9.615-1.592.159.961 9.615 1.592-.159Zm2.302 2.083c-1.189 0-2.184-.9-2.302-2.083l-1.592.16c.2 2 1.883 3.523 3.894 3.523v-1.6Zm2.302-2.083a2.314 2.314 0 0 1-2.302 2.083v1.6a3.914 3.914 0 0 0 3.894-3.523l-1.592-.16Zm.961-9.615-.961 9.615 1.592.16.961-9.616-1.592-.16ZM163.28 31.2a3.28 3.28 0 0 1 3.263 3.606l1.592.159a4.88 4.88 0 0 0-4.855-5.365v1.6Zm2.581 21.74a2.581 2.581 0 0 1-2.581 2.58v1.6a4.181 4.181 0 0 0 4.181-4.18h-1.6Zm-2.581-2.582a2.581 2.581 0 0 1 2.581 2.581h1.6a4.181 4.181 0 0 0-4.181-4.18v1.6Zm-2.581 2.581a2.581 2.581 0 0 1 2.581-2.58v-1.6a4.181 4.181 0 0 0-4.181 4.18h1.6Zm2.581 2.581a2.581 2.581 0 0 1-2.581-2.58h-1.6c0 2.308 1.872 4.18 4.181 4.18v-1.6Z"
      mask="url(#result-no-resource__p)"
    />
    <path
      fill="url(#result-no-resource__q)"
      d="m159.221 34.885-.796.08.796-.08Zm.961 9.616.796-.08-.796.08Zm6.196 0-.796-.08.796.08Zm.961-9.616-.796-.08.796.08Zm-7.322-.08a3.28 3.28 0 0 1 3.263-3.605v-1.6a4.879 4.879 0 0 0-4.855 5.365l1.592-.16Zm.961 9.616-.961-9.615-1.592.159.961 9.615 1.592-.159Zm2.302 2.083c-1.189 0-2.184-.9-2.302-2.083l-1.592.16c.2 2 1.883 3.523 3.894 3.523v-1.6Zm2.302-2.083a2.314 2.314 0 0 1-2.302 2.083v1.6a3.914 3.914 0 0 0 3.894-3.523l-1.592-.16Zm.961-9.615-.961 9.615 1.592.16.961-9.616-1.592-.16ZM163.28 31.2a3.28 3.28 0 0 1 3.263 3.606l1.592.159a4.88 4.88 0 0 0-4.855-5.365v1.6Zm2.581 21.74a2.581 2.581 0 0 1-2.581 2.58v1.6a4.181 4.181 0 0 0 4.181-4.18h-1.6Zm-2.581-2.582a2.581 2.581 0 0 1 2.581 2.581h1.6a4.181 4.181 0 0 0-4.181-4.18v1.6Zm-2.581 2.581a2.581 2.581 0 0 1 2.581-2.58v-1.6a4.181 4.181 0 0 0-4.181 4.18h1.6Zm2.581 2.581a2.581 2.581 0 0 1-2.581-2.58h-1.6c0 2.308 1.872 4.18 4.181 4.18v-1.6Z"
      mask="url(#result-no-resource__p)"
    />
    <defs>
      <linearGradient
        id="result-no-resource__b"
        x1={138.051}
        x2={140.175}
        y1={97.46}
        y2={196.229}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F1F3F7" />
        <stop offset={1} stopColor="#DBE0EA" />
      </linearGradient>
      <linearGradient
        id="result-no-resource__c"
        x1={155.044}
        x2={155.044}
        y1={199.415}
        y2={101.709}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CED4DF" />
        <stop offset={1} stopColor="#FAFBFC" />
      </linearGradient>
      <linearGradient
        id="result-no-resource__d"
        x1={123.183}
        x2={121.059}
        y1={119.763}
        y2={90.026}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FAFBFC" />
        <stop offset={1} stopColor="#F1F3F7" />
      </linearGradient>
      <linearGradient
        id="result-no-resource__e"
        x1={230.448}
        x2={226.559}
        y1={195.167}
        y2={95.405}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#AAB3C6" />
        <stop offset={1} stopColor="#DBE0EA" />
      </linearGradient>
      <linearGradient
        id="result-no-resource__f"
        x1={254.875}
        x2={231.51}
        y1={135.693}
        y2={199.415}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DBE0EA" />
        <stop offset={1} stopColor="#AAB3C6" />
      </linearGradient>
      <linearGradient
        id="result-no-resource__g"
        x1={229.637}
        x2={226.869}
        y1={109.143}
        y2={129.889}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#AAB3C6" />
        <stop offset={1} stopColor="#DBE0EA" />
      </linearGradient>
      <linearGradient
        id="result-no-resource__h"
        x1={236.82}
        x2={237.26}
        y1={132.507}
        y2={61.322}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#AAB3C6" />
        <stop offset={1} stopColor="#DBE0EA" />
      </linearGradient>
      <linearGradient
        id="result-no-resource__i"
        x1={92.384}
        x2={91.945}
        y1={132.507}
        y2={61.322}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#AAB3C6" />
        <stop offset={1} stopColor="#DBE0EA" />
      </linearGradient>
      <linearGradient
        id="result-no-resource__k"
        x1={163.2}
        x2={163.2}
        y1={16.8}
        y2={72.114}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FAFBFC" />
        <stop offset={1} stopColor="#DBE0EA" />
      </linearGradient>
      <linearGradient
        id="result-no-resource__l"
        x1={137.664}
        x2={147.527}
        y1={16.8}
        y2={73.279}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DBE0EA" />
        <stop offset={1} stopColor="#FAFBFC" />
      </linearGradient>
      <linearGradient
        id="result-no-resource__n"
        x1={163.28}
        x2={171.872}
        y1={65.276}
        y2={52.517}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D03E24" />
        <stop offset={1} stopColor="#FC5F3A" />
      </linearGradient>
      <linearGradient
        id="result-no-resource__o"
        x1={158.876}
        x2={165.181}
        y1={46.924}
        y2={47.058}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFF0E8" />
        <stop offset={1} stopColor="#FFF0E8" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="result-no-resource__q"
        x1={166.976}
        x2={164.119}
        y1={40.444}
        y2={40.388}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D03E24" />
        <stop offset={1} stopColor="#D03E24" stopOpacity={0} />
        <stop offset={1} stopColor="#D03E24" stopOpacity={0} />
      </linearGradient>
      <filter
        id="result-no-resource__a"
        width={236.957}
        height={162.615}
        x={44}
        y={57.6}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={1.6} />
        <feGaussianBlur stdDeviation={1.6} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.160784 0 0 0 0 0.203922 0 0 0 0 0.294118 0 0 0 0.04 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_537_10" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={6.4} />
        <feGaussianBlur stdDeviation={7.2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.160784 0 0 0 0 0.203922 0 0 0 0 0.294118 0 0 0 0.06 0" />
        <feBlend
          in2="effect1_dropShadow_537_10"
          result="effect2_dropShadow_537_10"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_537_10"
          result="shape"
        />
      </filter>
      <filter
        id="result-no-resource__j"
        width={78.4}
        height={78.4}
        x={124}
        y={10.4}
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
        <feGaussianBlur stdDeviation={6.4} />
        <feColorMatrix values="0 0 0 0 0.160784 0 0 0 0 0.203922 0 0 0 0 0.294118 0 0 0 0.05 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_537_10" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={1.6} />
        <feGaussianBlur stdDeviation={1.6} />
        <feColorMatrix values="0 0 0 0 0.160784 0 0 0 0 0.203922 0 0 0 0 0.294118 0 0 0 0.04 0" />
        <feBlend
          in2="effect1_dropShadow_537_10"
          result="effect2_dropShadow_537_10"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_537_10"
          result="shape"
        />
      </filter>
      <filter
        id="result-no-resource__m"
        width={46.4}
        height={46.4}
        x={140}
        y={20}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={1.6} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_537_10"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_backgroundBlur_537_10"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
