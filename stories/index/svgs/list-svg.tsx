import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={128} height={128} fill="none" {...props}>
    <rect width={46} height={70} x={41} y={29} fill="#E8F3FF" rx={1} />
    <rect width={20} height={2} x={48} y={39} fill="#6AA1FF" rx={1} />
    <rect width={32} height={1} x={48} y={49} fill="#BEDAFF" rx={0.5} />
    <rect width={20} height={2} x={48} y={58} fill="#6AA1FF" rx={1} />
    <rect width={32} height={1} x={48} y={68} fill="#BEDAFF" rx={0.5} />
    <rect width={20} height={2} x={48} y={77} fill="#6AA1FF" rx={1} />
    <rect width={32} height={1} x={48} y={87} fill="#BEDAFF" rx={0.5} />
    <rect width={46} height={70} x={41} y={29} stroke="#4080FF" strokeWidth={2} rx={1} />
  </svg>
);
export default SvgComponent;
