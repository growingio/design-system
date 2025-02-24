import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg width={128} height={128} fill="none" ref={ref} {...props}>
    <rect
      width={70}
      height={54}
      x={29}
      y={37}
      fill="#E8F3FF"
      stroke="#4080FF"
      strokeWidth={2}
      rx={3}
    />
    <rect width={18} height={6} x={66} y={76} fill="#6AA1FF" rx={1} />
    <rect width={18} height={6} x={44} y={76} fill="#BEDAFF" rx={1} />
    <rect width={48} height={4} x={40} y={56} fill="#BEDAFF" rx={2} />
    <rect width={24} height={4} x={55} y={48} fill="#6AA1FF" rx={2} />
    <rect width={32} height={4} x={48} y={64} fill="#BEDAFF" rx={2} />
    <rect width={4} height={4} x={49} y={48} fill="#6AA1FF" rx={2} />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
