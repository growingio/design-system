import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={128} height={128} fill="none" {...props}>
    <rect width={36} height={2} x={48} y={43} fill="#BEDAFF" rx={1} />
    <rect width={36} height={2} x={48} y={53} fill="#6AA1FF" rx={1} />
    <rect width={36} height={2} x={48} y={63} fill="#BEDAFF" rx={1} />
    <rect width={36} height={2} x={48} y={73} fill="#BEDAFF" rx={1} />
    <rect width={36} height={2} x={48} y={83} fill="#BEDAFF" rx={1} />
    <path stroke="#BEDAFF" strokeLinecap="round" strokeWidth={2} d="M44 43v42" />
    <path stroke="#165DFF" strokeLinecap="round" strokeWidth={2} d="M44 51v6" />
  </svg>
);
export default SvgComponent;
