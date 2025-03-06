import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={128} height={128} fill="none" {...props}>
    <rect
      width={58}
      height={38}
      x={35}
      y={41}
      fill="#BEDAFF"
      stroke="#4080FF"
      strokeWidth={2}
      rx={1}
    />
    <rect width={4} height={4} x={50} y={84} fill="#6AA1FF" rx={2} />
    <rect width={4} height={4} x={58} y={84} fill="#6AA1FF" rx={2} />
    <rect width={4} height={4} x={66} y={84} fill="#6AA1FF" rx={2} />
    <rect width={4} height={4} x={74} y={84} fill="#6AA1FF" rx={2} />
  </svg>
);
export default SvgComponent;
