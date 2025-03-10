import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={128} height={128} fill="none" {...props}>
    <rect width={16} height={2} x={20} y={47} fill="#BEDAFF" rx={1} />
    <rect width={20} height={2} x={20} y={55} fill="#6AA1FF" rx={1} />
    <rect width={16} height={2} x={20} y={71} fill="#BEDAFF" rx={1} />
    <rect width={24} height={2} x={20} y={79} fill="#6AA1FF" rx={1} />
    <rect width={16} height={2} x={52} y={47} fill="#BEDAFF" rx={1} />
    <rect width={21} height={2} x={52} y={55} fill="#6AA1FF" rx={1} />
    <rect width={16} height={2} x={52} y={71} fill="#BEDAFF" rx={1} />
    <rect width={21} height={2} x={52} y={79} fill="#6AA1FF" rx={1} />
    <rect width={16} height={2} x={84} y={47} fill="#BEDAFF" rx={1} />
    <rect width={21} height={2} x={84} y={55} fill="#6AA1FF" rx={1} />
    <rect width={24} height={2} x={84} y={71} fill="#BEDAFF" rx={1} />
    <rect width={16} height={2} x={84} y={79} fill="#6AA1FF" rx={1} />
  </svg>
);
export default SvgComponent;
