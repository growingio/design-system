import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={128} height={128} fill="none" {...props}>
    <rect
      width={70}
      height={59}
      x={29}
      y={48}
      fill="#E8F3FF"
      stroke="#4080FF"
      strokeWidth={2}
      rx={1}
    />
    <rect width={36} height={2} x={50} y={56} fill="#6AA1FF" rx={1} />
    <rect width={28} height={2} x={58} y={66} fill="#BEDAFF" rx={1} />
    <rect width={20} height={2} x={66} y={76} fill="#BEDAFF" rx={1} />
    <rect width={20} height={2} x={66} y={86} fill="#BEDAFF" rx={1} />
    <path fill="#6AA1FF" d="m48 55-3 4-3-4h6zm-5 39 4 3-4 3v-6z" />
    <path fill="#BEDAFF" d="m56 65-3 4-3-4h6z" />
    <rect width={36} height={2} x={50} y={96} fill="#6AA1FF" rx={1} />
    <rect width={72} height={24} x={28} y={19} fill="#E8F3FF" rx={2} />
    <path
      fill="#4080FF"
      d="M92.778 32.99a.5.5 0 0 1-.707 0l-2.18-2.18-2.117 2.118a.5.5 0 0 1-.707 0l-.354-.353a.5.5 0 0 1 0-.708l2.828-2.828a.5.5 0 0 1 .707 0l.354.354a.496.496 0 0 1 .048.055l2.482 2.482a.5.5 0 0 1 0 .707l-.354.354z"
    />
  </svg>
);
export default SvgComponent;
