import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={128} height={128} fill="none" {...props}>
    <rect
      width={38}
      height={22}
      x={45}
      y={53}
      fill="#E8F3FF"
      stroke="#4080FF"
      strokeWidth={2}
      rx={11}
    />
    <circle cx={56} cy={64} r={8} fill="#6AA1FF" />
  </svg>
);

export default SvgComponent;
