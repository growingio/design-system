import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg width={128} height={128} fill="none" ref={ref} {...props}>
    <rect width={106} height={22} x={11} y={53} fill="#E8F3FF" rx={1} />
    <rect width={8} height={8} x={22} y={60} fill="#6AA1FF" rx={4} />
    <rect width={72} height={4} x={34} y={62} fill="#BEDAFF" rx={2} />
    <rect
      width={106}
      height={22}
      x={11}
      y={53}
      stroke="#4080FF"
      strokeWidth={2}
      rx={1}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
