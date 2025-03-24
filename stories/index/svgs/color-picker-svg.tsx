import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={128} height={128} fill="none" {...props}>
    <rect width={64} height={64} x={32} y={32} fill="#E8EFFF" rx={4} />
    <rect width={43} height={43} x={43} y={43} fill="#3D81F5" rx={4} />
  </svg>
);

export default SvgComponent;
