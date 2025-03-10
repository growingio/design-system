import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={128} height={128} fill="none" {...props}>
    <path fill="#BEDAFF" d="M48 58a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v27H48V58z" />
    <path fill="#165DFF" d="M41 85h46v2H41z" />
    <path stroke="#6AA1FF" strokeLinecap="round" strokeWidth={2} d="m60 49-4-7m13 7 4-7" />
  </svg>
);
export default SvgComponent;
