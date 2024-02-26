import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg width={128} height={128} fill="none" ref={ref} {...props}>
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
    <rect width={44} height={2} x={42} y={56} fill="#BEDAFF" rx={1} />
    <rect width={44} height={2} x={42} y={66} fill="#BEDAFF" rx={1} />
    <rect width={44} height={2} x={42} y={76} fill="#BEDAFF" rx={1} />
    <rect width={44} height={2} x={42} y={86} fill="#BEDAFF" rx={1} />
    <rect width={44} height={2} x={42} y={96} fill="#BEDAFF" rx={1} />
    <rect width={72} height={24} x={28} y={19} fill="#E8F3FF" rx={2} />
    <path
      fill="#4080FF"
      d="M92.778 32.99a.5.5 0 0 1-.707 0l-2.18-2.18-2.117 2.118a.5.5 0 0 1-.707 0l-.354-.353a.5.5 0 0 1 0-.708l2.828-2.828a.5.5 0 0 1 .707 0l.354.354a.496.496 0 0 1 .048.055l2.482 2.482a.5.5 0 0 1 0 .707l-.354.354z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
