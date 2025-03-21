import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={128} height={128} fill="none" {...props}>
    <rect width={8} height={8} x={46} y={68} fill="#4080FF" rx={4} transform="rotate(-90 46 68)" />
    <rect width={8} height={8} x={60} y={82} fill="#6AA1FF" rx={4} transform="rotate(-90 60 82)" />
    <rect width={8} height={8} x={60} y={54} fill="#BEDAFF" rx={4} transform="rotate(-90 60 54)" />
    <rect width={8} height={8} x={74} y={68} fill="#94BFFF" rx={4} transform="rotate(-90 74 68)" />
  </svg>
);

export default SvgComponent;
