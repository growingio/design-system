import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={128} height={128} fill="none" {...props}>
    <rect width={12} height={12} x={22} y={45} fill="#6AA1FF" rx={6} />
    <rect width={24} height={4} x={38} y={45} fill="#6AA1FF" rx={2} />
    <rect width={69} height={4} x={38} y={53} fill="#BEDAFF" rx={2} />
    <rect width={69} height={22} x={38} y={61} fill="#BEDAFF" rx={2} />
  </svg>
);
export default SvgComponent;
