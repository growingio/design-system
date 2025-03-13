import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={128} height={128} fill="none" {...props}>
    <rect width={6} height={6} x={47} y={30} fill="#4080FF" rx={3} />
    <rect width={17} height={2} x={57} y={30} fill="#6AA1FF" rx={1} />
    <rect width={32} height={2} x={57} y={34} fill="#E8F3FF" rx={1} />
    <path stroke="#94BFFF" strokeWidth={2} d="M50 40v10m0 14v10m0 14v10" />
    <rect width={6} height={6} x={47} y={54} fill="#4080FF" rx={3} />
    <rect width={17} height={2} x={57} y={54} fill="#6AA1FF" rx={1} />
    <rect width={32} height={2} x={57} y={58} fill="#E8F3FF" rx={1} />
    <rect width={6} height={6} x={47} y={78} fill="#4080FF" rx={3} />
    <rect width={17} height={2} x={57} y={77} fill="#BEDAFF" rx={1} />
    <rect width={32} height={2} x={57} y={81} fill="#E8F3FF" rx={1} />
  </svg>
);
export default SvgComponent;
