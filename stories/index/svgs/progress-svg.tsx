import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={128} height={128} fill="none" {...props}>
    <path stroke="#E8F3FF" strokeLinecap="round" strokeWidth={4} d="M28 64h72" />
    <path stroke="#4080FF" strokeLinecap="round" strokeWidth={4} d="M28 64h29" />
  </svg>
);

export default SvgComponent;
