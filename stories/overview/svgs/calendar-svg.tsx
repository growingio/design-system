import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg width={128} height={128} fill="none" ref={ref} {...props}>
    <rect
      width={54}
      height={46}
      x={37}
      y={44}
      fill="#E8F3FF"
      stroke="#4080FF"
      strokeWidth={2}
      rx={3}
    />
    <path
      fill="#94BFFF"
      stroke="#4080FF"
      strokeWidth={2}
      d="M40 44h48a3 3 0 0 1 3 3v3H37v-3a3 3 0 0 1 3-3z"
    />
    <rect width={19} height={4} x={61} y={59} fill="#BEDAFF" rx={2} />
    <rect width={32} height={4} x={48} y={69} fill="#BEDAFF" rx={2} />
    <rect width={16} height={4} x={48} y={79} fill="#BEDAFF" rx={2} />
    <rect width={4} height={10} x={48} y={38} fill="#4080FF" rx={2} />
    <rect width={4} height={10} x={76} y={38} fill="#4080FF" rx={2} />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
