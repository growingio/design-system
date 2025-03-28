import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={128} height={128} fill="none" {...props}>
    <rect width={75} height={12} x={27} y={42} fill="#E8F3FF" rx={2} />
    <rect width={75} height={12} x={27} y={58} fill="#E8F3FF" rx={2} />
    <rect width={24} height={8} x={27} y={78} fill="#6AA1FF" rx={1} />
  </svg>
);

export default SvgComponent;
