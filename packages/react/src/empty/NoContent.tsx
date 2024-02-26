import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg fill="none" viewBox="0 0 180 120" ref={ref} {...props}>
    <g filter="url(#empty-no-content__a)">
      <path
        fill="url(#empty-no-content__b)"
        d="M50 20c0-5.523 4.477-10 10-10h48l22 22v68c0 5.523-4.477 10-10 10H60c-5.523 0-10-4.477-10-10V20Z"
      />
      <path
        stroke="url(#empty-no-content__c)"
        d="M50.5 20a9.5 9.5 0 0 1 9.5-9.5h47.793L129.5 32.207V100a9.5 9.5 0 0 1-9.5 9.5H60a9.5 9.5 0 0 1-9.5-9.5V20Z"
      />
    </g>
    <path
      fill="#DBE0EA"
      fillRule="evenodd"
      d="M91.485 78.763c.283 0 .554.104.753.29.2.185.312.436.312.698v1.977a.953.953 0 0 1-.312.699c-.2.185-.47.289-.753.289h-2.13c-.282 0-.553-.104-.752-.29a.954.954 0 0 1-.312-.698V79.75c0-.262.112-.513.312-.698.2-.186.47-.29.753-.29h2.13ZM90.118 59c2.531 0 4.635.57 6.31 1.707 1.675 1.139 2.512 2.823 2.512 5.057 0 1.37-.364 2.523-1.093 3.46-.426.57-1.242 1.296-2.452 2.181l-1.193.87c-.65.474-1.082 1.028-1.295 1.66-.057.172-.108.492-.152.962a.963.963 0 0 1-.341.642c-.197.167-.454.26-.72.26H89.31c-.283 0-.554-.104-.753-.29a.953.953 0 0 1-.312-.698l.002-.046.003-.045c.137-1.376.284-2.246.441-2.611.29-.68 1.041-1.462 2.251-2.347l1.227-.901c.404-.285 2.481-1.642 2.481-2.844 0-1.203-.225-1.645-.876-2.304-.65-.66-2.115-.873-3.437-.873-1.299 0-2.41.32-2.953 1.131-.25.373-.453.77-.606 1.186-.068.199-.12.401-.155.607a.974.974 0 0 1-.363.588c-.192.15-.435.233-.686.233h-2.508c-.282 0-.553-.104-.753-.29a.953.953 0 0 1-.312-.698l.002-.055.005-.057c.027-.22.055-.405.084-.55.415-2.146 1.466-3.724 3.154-4.733 1.322-.8 2.947-1.202 4.873-1.202Z"
      clipRule="evenodd"
    />
    <path
      fill="#BDD2FA"
      d="M73.776 36.356h-3.029v1.638h2.86v2.158h-2.86v1.69h3.03V44h-5.578v-9.802h5.577v2.158ZM75.171 44l1.664-9.802h2.522l1.963 5.226 1.95-5.226h2.522L87.456 44h-2.535l-.845-5.642L81.762 44h-1.014l-2.197-5.642L77.706 44h-2.535Zm16.447-5.304h.846c.936 0 1.404-.407 1.404-1.222s-.468-1.222-1.404-1.222h-.846v2.444Zm0 5.304h-2.547v-9.802h4.055c1.101 0 1.942.286 2.522.858.59.572.885 1.378.885 2.418 0 1.04-.295 1.846-.885 2.418-.58.572-1.42.858-2.522.858h-1.508V44Zm9.981-7.644V44h-2.548v-7.644h-2.093v-2.158h6.734v2.158h-2.093Zm6.227 2.938-3.575-5.096h3.042l1.82 2.678 1.807-2.678h3.042l-3.588 5.096V44h-2.548v-4.706Z"
    />
    <path
      fill="url(#empty-no-content__d)"
      stroke="url(#empty-no-content__e)"
      d="M108.5 28V11.207L128.793 31.5H112a3.5 3.5 0 0 1-3.5-3.5Z"
    />
    <defs>
      <linearGradient
        id="empty-no-content__b"
        x1={64}
        x2={64.5}
        y1={10}
        y2={130.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FAFBFC" />
        <stop offset={1} stopColor="#DBE0EA" />
      </linearGradient>
      <linearGradient
        id="empty-no-content__c"
        x1={46.506}
        x2={42.37}
        y1={8}
        y2={115.899}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DBE0EA" />
        <stop offset={1} stopColor="#FAFBFC" />
      </linearGradient>
      <linearGradient
        id="empty-no-content__d"
        x1={110}
        x2={119}
        y1={30}
        y2={21}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FAFBFC" />
        <stop offset={1} stopColor="#DBE0EA" />
      </linearGradient>
      <linearGradient
        id="empty-no-content__e"
        x1={119}
        x2={105.061}
        y1={20.5}
        y2={35.019}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DBE0EA" />
        <stop offset={1} stopColor="#FAFBFC" />
      </linearGradient>
      <filter
        id="empty-no-content__a"
        width={98}
        height={118}
        x={41}
        y={5}
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
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_284_385" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={1} />
        <feColorMatrix values="0 0 0 0 0.160784 0 0 0 0 0.203922 0 0 0 0 0.294118 0 0 0 0.04 0" />
        <feBlend
          in2="effect1_dropShadow_284_385"
          result="effect2_dropShadow_284_385"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_284_385"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
