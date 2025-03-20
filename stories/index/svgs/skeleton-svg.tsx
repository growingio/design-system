import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={128} height={128} fill="none" {...props}>
    <rect width={13} height={13} x={25} y={44} fill="#6AA1FF" rx={2} />
    <rect width={58} height={4} x={46} y={44} fill="#BEDAFF" rx={2} />
    <rect width={58} height={4} x={46} y={56} fill="#BEDAFF" rx={2} />
    <rect width={35} height={4} x={46} y={68} fill="#BEDAFF" rx={2} />
    <rect width={35} height={4} x={46} y={80} fill="#BEDAFF" rx={2} />
  </svg>
);

export default SvgComponent;
