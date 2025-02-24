import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg viewBox="0 0 180 120" fill="none" ref={ref} {...props}>
    <g filter="url(#empty-board__a)">
      <rect
        width={140}
        height={102}
        x={13}
        y={6}
        fill="url(#empty-board__b)"
        rx={10}
      />
      <rect
        width={139}
        height={101}
        x={13.5}
        y={6.5}
        stroke="url(#empty-board__c)"
        rx={9.5}
      />
    </g>
    <path
      fill="url(#empty-board__d)"
      d="M21 28a6 6 0 0 1 6-6h112a6 6 0 0 1 6 6v66a6 6 0 0 1-6 6H27a6 6 0 0 1-6-6V28Z"
    />
    <g filter="url(#empty-board__e)">
      <rect
        width={28}
        height={4}
        x={31}
        y={80}
        fill="url(#empty-board__f)"
        rx={2}
      />
      <rect
        width={26}
        height={2}
        x={32}
        y={81}
        stroke="url(#empty-board__g)"
        strokeWidth={2}
        rx={1}
      />
    </g>
    <rect
      width={18}
      height={4}
      x={31}
      y={80}
      fill="url(#empty-board__h)"
      rx={2}
    />
    <g filter="url(#empty-board__i)">
      <rect
        width={22}
        height={2}
        x={31}
        y={88}
        fill="url(#empty-board__j)"
        rx={1}
      />
      <rect
        width={21}
        height={1}
        x={31.5}
        y={88.5}
        stroke="url(#empty-board__k)"
        rx={0.5}
      />
    </g>
    <rect
      width={10}
      height={2}
      x={31}
      y={88}
      fill="url(#empty-board__l)"
      rx={1}
    />
    <g filter="url(#empty-board__m)">
      <path
        fill="url(#empty-board__n)"
        d="M79 50a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4v34a4 4 0 0 1-4 4H83a4 4 0 0 1-4-4V50Z"
      />
      <path
        stroke="url(#empty-board__o)"
        d="M79.5 50a3.5 3.5 0 0 1 3.5-3.5h48a3.5 3.5 0 0 1 3.5 3.5v34a3.5 3.5 0 0 1-3.5 3.5H83a3.5 3.5 0 0 1-3.5-3.5V50Z"
      />
    </g>
    <rect
      width={23}
      height={6}
      x={95}
      y={59}
      fill="url(#empty-board__p)"
      rx={1}
      transform="rotate(90 95 59)"
    />
    <rect
      width={17}
      height={6}
      x={105}
      y={65}
      fill="url(#empty-board__q)"
      rx={1}
      transform="rotate(90 105 65)"
    />
    <rect
      width={26}
      height={6}
      x={115}
      y={56}
      fill="url(#empty-board__r)"
      rx={1}
      transform="rotate(90 115 56)"
    />
    <rect
      width={12}
      height={6}
      x={125}
      y={70}
      fill="url(#empty-board__s)"
      rx={1}
      transform="rotate(90 125 70)"
    />
    <g filter="url(#empty-board__t)">
      <rect
        width={56}
        height={42}
        x={31}
        y={32}
        fill="url(#empty-board__u)"
        rx={4}
      />
      <rect
        width={55}
        height={41}
        x={31.5}
        y={32.5}
        stroke="url(#empty-board__v)"
        rx={3.5}
      />
    </g>
    <g filter="url(#empty-board__w)">
      <circle cx={152} cy={93} r={19} fill="#1F61E8" />
      <circle cx={152} cy={93} r={19} fill="url(#empty-board__x)" />
      <circle cx={152} cy={93} r={18.5} stroke="url(#empty-board__y)" />
      <circle cx={152} cy={93} r={18.5} stroke="url(#empty-board__z)" />
    </g>
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M154 86a2 2 0 1 0-4 0v5h-5a2 2 0 0 0 0 4h5v5a2 2 0 0 0 4 0v-5h5a2 2 0 1 0 0-4h-5v-5Z"
      clipRule="evenodd"
    />
    <circle cx={29.5} cy={14.5} r={2.5} fill="url(#empty-board__A)" />
    <circle
      cx={40.5}
      cy={14.5}
      r={2.5}
      fill="url(#empty-board__B)"
      fillOpacity={0.5}
    />
    <circle
      cx={51.5}
      cy={14.5}
      r={2.5}
      fill="url(#empty-board__C)"
      fillOpacity={0.5}
    />
    <path
      fill="#1F61E8"
      d="m53.551 52.668-5.789-8.354c-2.066-2.98-6.713-1.895-7.245 1.693L38 63v4.46c0 .299.242.541.541.541h40.918a.541.541 0 0 0 .541-.54v-3.04a.54.54 0 0 0-.103-.318l-10.118-13.96a3.787 3.787 0 0 0-5.365-.786l-5.452 4.163a3.787 3.787 0 0 1-5.411-.852Z"
    />
    <g filter="url(#empty-board__D)">
      <path
        fill="#93BEF6"
        fillOpacity={0.4}
        d="M38.541 68h40.918a.541.541 0 0 0 .541-.541V63l-1.875-13.66c-.503-3.662-5.417-4.508-7.115-1.225l-3.99 7.714a2.705 2.705 0 0 1-4.25.733l-6.208-5.8a5.951 5.951 0 0 0-8.6.498l-9.834 11.589a.54.54 0 0 0-.128.35v4.26c0 .299.242.541.541.541Z"
      />
    </g>
    <defs>
      <linearGradient
        id="empty-board__b"
        x1={13}
        x2={13}
        y1={6}
        y2={108}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FAFBFC" />
        <stop offset={1} stopColor="#DBE0EA" />
      </linearGradient>
      <linearGradient
        id="empty-board__c"
        x1={15.343}
        x2={12.969}
        y1={6}
        y2={107.999}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DBE0EA" />
        <stop offset={1} stopColor="#FAFBFC" />
      </linearGradient>
      <linearGradient
        id="empty-board__d"
        x1={24}
        x2={21}
        y1={-1}
        y2={100}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.017} stopColor="#DBE0EA" />
        <stop offset={1} stopColor="#FAFBFC" />
      </linearGradient>
      <linearGradient
        id="empty-board__f"
        x1={45}
        x2={45}
        y1={80}
        y2={84.191}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FAFBFC" />
        <stop offset={1} stopColor="#DBE0EA" />
      </linearGradient>
      <linearGradient
        id="empty-board__g"
        x1={31.458}
        x2={31.568}
        y1={80}
        y2={84.406}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DBE0EA" />
        <stop offset={1} stopColor="#FAFBFC" />
      </linearGradient>
      <linearGradient
        id="empty-board__h"
        x1={38.5}
        x2={38.412}
        y1={80}
        y2={84}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FC5F3A" />
        <stop offset={1} stopColor="#FD9F7F" />
      </linearGradient>
      <linearGradient
        id="empty-board__j"
        x1={42}
        x2={42}
        y1={88}
        y2={90.095}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FAFBFC" />
        <stop offset={1} stopColor="#DBE0EA" />
      </linearGradient>
      <linearGradient
        id="empty-board__k"
        x1={31.36}
        x2={31.395}
        y1={88}
        y2={90.204}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DBE0EA" />
        <stop offset={1} stopColor="#FAFBFC" />
      </linearGradient>
      <linearGradient
        id="empty-board__l"
        x1={35.167}
        x2={35.127}
        y1={88}
        y2={90}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1F61E8" />
        <stop offset={1} stopColor="#6BA1F1" />
      </linearGradient>
      <linearGradient
        id="empty-board__n"
        x1={107}
        x2={107}
        y1={46}
        y2={90}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FAFBFC" />
        <stop offset={1} stopColor="#DBE0EA" />
      </linearGradient>
      <linearGradient
        id="empty-board__o"
        x1={79.916}
        x2={85.878}
        y1={46}
        y2={91.516}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DBE0EA" />
        <stop offset={1} stopColor="#FAFBFC" />
      </linearGradient>
      <linearGradient
        id="empty-board__p"
        x1={118}
        x2={95}
        y1={62}
        y2={62}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CED4DF" />
        <stop offset={1} stopColor="#AAB3C6" />
      </linearGradient>
      <linearGradient
        id="empty-board__q"
        x1={122}
        x2={105}
        y1={68}
        y2={68}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CED4DF" />
        <stop offset={1} stopColor="#AAB3C6" />
      </linearGradient>
      <linearGradient
        id="empty-board__r"
        x1={141}
        x2={115}
        y1={59}
        y2={59}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CED4DF" />
        <stop offset={1} stopColor="#AAB3C6" />
      </linearGradient>
      <linearGradient
        id="empty-board__s"
        x1={137}
        x2={125}
        y1={73}
        y2={73}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CED4DF" />
        <stop offset={1} stopColor="#AAB3C6" />
      </linearGradient>
      <linearGradient
        id="empty-board__u"
        x1={59}
        x2={59}
        y1={32}
        y2={76}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FAFBFC" />
        <stop offset={1} stopColor="#DBE0EA" />
      </linearGradient>
      <linearGradient
        id="empty-board__v"
        x1={31.916}
        x2={37.878}
        y1={32}
        y2={77.516}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DBE0EA" />
        <stop offset={1} stopColor="#FAFBFC" />
      </linearGradient>
      <linearGradient
        id="empty-board__x"
        x1={152.065}
        x2={152}
        y1={67.478}
        y2={93}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1347C1" />
        <stop offset={1} stopColor="#1F61E8" />
      </linearGradient>
      <linearGradient
        id="empty-board__y"
        x1={152}
        x2={150.914}
        y1={74}
        y2={90.014}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#6BA1F1" />
        <stop offset={1} stopColor="#6BA1F1" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="empty-board__z"
        x1={152}
        x2={152}
        y1={112}
        y2={93}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0A319A" />
        <stop offset={1} stopColor="#0A319A" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="empty-board__A"
        x1={29.5}
        x2={29.188}
        y1={17}
        y2={12}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DBE0EA" />
        <stop offset={1} stopColor="#AAB3C6" />
      </linearGradient>
      <linearGradient
        id="empty-board__B"
        x1={40.5}
        x2={40.188}
        y1={17}
        y2={12}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DBE0EA" />
        <stop offset={1} stopColor="#AAB3C6" />
      </linearGradient>
      <linearGradient
        id="empty-board__C"
        x1={51.5}
        x2={51.188}
        y1={17}
        y2={12}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DBE0EA" />
        <stop offset={1} stopColor="#AAB3C6" />
      </linearGradient>
      <filter
        id="empty-board__a"
        width={158}
        height={120}
        x={4}
        y={1}
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
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_284_263" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={1} />
        <feColorMatrix values="0 0 0 0 0.160784 0 0 0 0 0.203922 0 0 0 0 0.294118 0 0 0 0.04 0" />
        <feBlend
          in2="effect1_dropShadow_284_263"
          result="effect2_dropShadow_284_263"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_284_263"
          result="shape"
        />
      </filter>
      <filter
        id="empty-board__e"
        width={44}
        height={20}
        x={23}
        y={76}
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
        <feGaussianBlur stdDeviation={4} />
        <feColorMatrix values="0 0 0 0 0.160784 0 0 0 0 0.203922 0 0 0 0 0.294118 0 0 0 0.05 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_284_263" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={1} />
        <feColorMatrix values="0 0 0 0 0.160784 0 0 0 0 0.203922 0 0 0 0 0.294118 0 0 0 0.04 0" />
        <feBlend
          in2="effect1_dropShadow_284_263"
          result="effect2_dropShadow_284_263"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_284_263"
          result="shape"
        />
      </filter>
      <filter
        id="empty-board__i"
        width={38}
        height={18}
        x={23}
        y={84}
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
        <feGaussianBlur stdDeviation={4} />
        <feColorMatrix values="0 0 0 0 0.160784 0 0 0 0 0.203922 0 0 0 0 0.294118 0 0 0 0.05 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_284_263" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={1} />
        <feColorMatrix values="0 0 0 0 0.160784 0 0 0 0 0.203922 0 0 0 0 0.294118 0 0 0 0.04 0" />
        <feBlend
          in2="effect1_dropShadow_284_263"
          result="effect2_dropShadow_284_263"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_284_263"
          result="shape"
        />
      </filter>
      <filter
        id="empty-board__m"
        width={72}
        height={58}
        x={71}
        y={42}
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
        <feGaussianBlur stdDeviation={4} />
        <feColorMatrix values="0 0 0 0 0.160784 0 0 0 0 0.203922 0 0 0 0 0.294118 0 0 0 0.05 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_284_263" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={1} />
        <feColorMatrix values="0 0 0 0 0.160784 0 0 0 0 0.203922 0 0 0 0 0.294118 0 0 0 0.04 0" />
        <feBlend
          in2="effect1_dropShadow_284_263"
          result="effect2_dropShadow_284_263"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_284_263"
          result="shape"
        />
      </filter>
      <filter
        id="empty-board__t"
        width={72}
        height={58}
        x={23}
        y={28}
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
        <feGaussianBlur stdDeviation={4} />
        <feColorMatrix values="0 0 0 0 0.160784 0 0 0 0 0.203922 0 0 0 0 0.294118 0 0 0 0.05 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_284_263" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={1} />
        <feColorMatrix values="0 0 0 0 0.160784 0 0 0 0 0.203922 0 0 0 0 0.294118 0 0 0 0.04 0" />
        <feBlend
          in2="effect1_dropShadow_284_263"
          result="effect2_dropShadow_284_263"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_284_263"
          result="shape"
        />
      </filter>
      <filter
        id="empty-board__w"
        width={48}
        height={48}
        x={128}
        y={70}
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
          result="effect1_dropShadow_284_263"
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.160784 0 0 0 0 0.203922 0 0 0 0 0.294118 0 0 0 0.1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_284_263" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_284_263"
          result="shape"
        />
      </filter>
      <filter
        id="empty-board__D"
        width={50}
        height={29.934}
        x={34}
        y={42.066}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={2} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_284_263"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_backgroundBlur_284_263"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
