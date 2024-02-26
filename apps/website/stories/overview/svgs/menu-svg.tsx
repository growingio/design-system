import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg width={128} height={128} fill="none" ref={ref} {...props}>
    <rect width={46} height={69} x={41} y={35} fill="#E8F3FF" rx={1} />
    <rect width={20} height={2} x={48} y={46} fill="#6AA1FF" rx={1} />
    <rect width={32} height={2} x={48} y={55} fill="#BEDAFF" rx={1} />
    <rect width={32} height={2} x={48} y={64} fill="#BEDAFF" rx={1} />
    <rect width={32} height={2} x={48} y={73} fill="#BEDAFF" rx={1} />
    <rect width={20} height={2} x={48} y={82} fill="#6AA1FF" rx={1} />
    <rect width={20} height={2} x={48} y={82} fill="#6AA1FF" rx={1} />
    <rect width={32} height={2} x={48} y={91} fill="#BEDAFF" rx={1} />
    <rect
      width={46}
      height={69}
      x={41}
      y={35}
      stroke="#4080FF"
      strokeWidth={2}
      rx={1}
    />
    <rect width={24} height={8} x={40} y={22} fill="#6AA1FF" rx={2} />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
