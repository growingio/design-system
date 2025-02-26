import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg width={128} height={128} fill="none" ref={ref} {...props}>
    <path fill="#E8F3FF" d="M10 52h108v24H10z" />
    <rect width={8} height={8} x={18} y={60} fill="#6AA1FF" rx={4} />
    <rect width={80} height={4} x={30} y={62} fill="#BEDAFF" rx={2} />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
