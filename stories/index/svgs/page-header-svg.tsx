import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={128} height={128} fill="none" {...props}>
    <g clipPath="url(#b)" filter="url(#a)">
      <path fill="#E8F3FF" d="M24 44h115v40H24z" />
      <path
        fill="#4080FF"
        d="M37.078 69v-9.87h1.792v4.116h5.082V59.13h1.792V69h-1.792v-4.256H38.87V69h-1.792zm12.228 0v-9.87h6.566v1.428h-4.844v2.716h4.536v1.428h-4.536v2.87h4.844V69h-6.566zm8.512 0 4.466-9.87h1.47L68.22 69H66.4l-.98-2.282h-4.816L59.638 69h-1.82zm5.18-7.924L61.22 65.29h3.584l-1.778-4.214h-.028zM70.7 69v-9.87h3.668c1.652 0 2.926.425 3.822 1.274.905.85 1.358 2.067 1.358 3.654 0 1.577-.453 2.795-1.358 3.654-.896.859-2.17 1.288-3.822 1.288H70.7zm1.792-1.484h1.764c2.277 0 3.416-1.153 3.416-3.458 0-2.296-1.139-3.444-3.416-3.444h-1.764v6.902zM82.764 69v-9.87h6.566v1.428h-4.844v2.716h4.536v1.428h-4.536v2.87h4.844V69h-6.566zm9.754 0v-9.87h4.284c1.082 0 1.917.261 2.505.784.588.513.882 1.237.882 2.17 0 .737-.19 1.349-.573 1.834-.383.476-.934.798-1.653.966.477.15.869.509 1.177 1.078L100.79 69h-1.974l-1.707-3.15c-.168-.308-.37-.518-.603-.63-.224-.112-.513-.168-.868-.168h-1.33V69h-1.791zm1.791-5.278h2.184c1.307 0 1.96-.532 1.96-1.596 0-1.055-.653-1.582-1.96-1.582H94.31v3.178z"
      />
    </g>
    <defs>
      <clipPath id="b">
        <path fill="#fff" d="M0 0h128v128H0z" />
      </clipPath>
      <filter
        id="a"
        width={115}
        height={42}
        x={24}
        y={44}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dy={2} />
        <feColorMatrix values="0 0 0 0 0.0862745 0 0 0 0 0.364706 0 0 0 0 1 0 0 0 1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
    </defs>
  </svg>
);
export default SvgComponent;
