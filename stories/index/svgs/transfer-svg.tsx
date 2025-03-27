import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={128} height={128} fill="none" {...props}>
    <rect width={34} height={46} x={20} y={41} fill="#E8F3FF" rx={1} />
    <rect width={24} height={2} x={25} y={48} fill="#BEDAFF" rx={1} />
    <rect width={24} height={2} x={25} y={58} fill="#BEDAFF" rx={1} />
    <rect width={24} height={2} x={25} y={68} fill="#BEDAFF" rx={1} />
    <rect width={24} height={2} x={25} y={78} fill="#BEDAFF" rx={1} />
    <rect width={34} height={46} x={20} y={41} stroke="#4080FF" strokeWidth={2} rx={1} />
    <rect width={34} height={46} x={73} y={41} fill="#E8F3FF" rx={1} />
    <rect width={24} height={2} x={78} y={48} fill="#BEDAFF" rx={1} />
    <rect width={24} height={2} x={78} y={58} fill="#BEDAFF" rx={1} />
    <rect width={24} height={2} x={78} y={68} fill="#BEDAFF" rx={1} />
    <rect width={24} height={2} x={78} y={78} fill="#BEDAFF" rx={1} />
    <rect width={34} height={46} x={73} y={41} stroke="#4080FF" strokeWidth={2} rx={1} />
    <path
      fill="#165DFF"
      d="M64.94 53.287a.3.3 0 0 1 .46.254v4.918a.3.3 0 0 1-.46.254l-3.662-2.289a.5.5 0 0 1 0-.848l3.662-2.29zM61.41 75.4a.3.3 0 0 1-.46-.254v-5.292a.3.3 0 0 1 .46-.255l3.962 2.477a.5.5 0 0 1 0 .848l-3.963 2.477z"
    />
  </svg>
);
export default SvgComponent;
