import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={128} height={128} fill="none" {...props}>
    <path stroke="#E8F3FF" strokeLinecap="round" strokeWidth={2} d="M28 80h72" />
    <path stroke="#4080FF" strokeLinecap="round" strokeWidth={2} d="M28 80h29" />
    <rect width={4} height={4} x={55} y={78} fill="#E8F3FF" rx={2} />
    <rect width={4} height={4} x={55} y={78} stroke="#4080FF" strokeWidth={2} rx={2} />
    <mask id="slider-svg-a" fill="#fff">
      <path
        fillRule="evenodd"
        d="M36 45a2 2 0 0 0-2 2v21a2 2 0 0 0 2 2h16l4.375 3.5a1 1 0 0 0 1.25 0L62 70h17a2 2 0 0 0 2-2V47a2 2 0 0 0-2-2H36z"
        clipRule="evenodd"
      />
    </mask>
    <path
      fill="#E8F3FF"
      fillRule="evenodd"
      d="M36 45a2 2 0 0 0-2 2v21a2 2 0 0 0 2 2h16l4.375 3.5a1 1 0 0 0 1.25 0L62 70h17a2 2 0 0 0 2-2V47a2 2 0 0 0-2-2H36z"
      clipRule="evenodd"
    />
    <path
      fill="#4080FF"
      d="m52 70 1.25-1.562-.548-.438H52v2zm5.625 3.5-1.25-1.561 1.25 1.561zM62 70v-2h-.702l-.547.438L62 70zM36 47v-4a4 4 0 0 0-4 4h4zm0 21V47h-4v21h4zm0 0h-4a4 4 0 0 0 4 4v-4zm16 0H36v4h16v-4zm-1.25 3.562 4.376 3.5 2.499-3.123-4.376-3.5-2.498 3.123zm4.376 3.5a3 3 0 0 0 3.748 0l-2.499-3.123a1 1 0 0 1 1.25 0l-2.5 3.123zm3.748 0 4.375-3.5-2.498-3.124-4.376 3.5 2.5 3.124zM79 68H62v4h17v-4zm0 0v4a4 4 0 0 0 4-4h-4zm0-21v21h4V47h-4zm0 0h4a4 4 0 0 0-4-4v4zm-43 0h43v-4H36v4z"
      mask="url(#slider-svg-a)"
    />
    <path
      fill="#4080FF"
      d="M52.991 63v-1.876h-4.298v-1.316L53.3 53.13h1.484v6.51h1.386v1.484h-1.386V63h-1.792zm0-3.36v-3.766l-2.576 3.766h2.576zM57.62 63v-1.33l3.192-3.402c.43-.466.737-.877.924-1.232a2.4 2.4 0 0 0 .28-1.106c0-.952-.574-1.428-1.722-1.428-.896 0-1.722.336-2.478 1.008l-.602-1.344c.392-.354.882-.64 1.47-.854a5.308 5.308 0 0 1 1.834-.322c1.055 0 1.862.238 2.422.714.57.476.854 1.158.854 2.044 0 .598-.145 1.172-.434 1.722-.28.55-.723 1.144-1.33 1.778l-2.17 2.268h4.312V63H57.62z"
    />
  </svg>
);
export default SvgComponent;
