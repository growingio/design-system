import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg width={128} height={128} fill="none" ref={ref} {...props}>
    <rect width={64} height={24} x={32} y={32} fill="#BEDAFF" rx={2} />
    <rect width={64} height={24} x={32} y={72} fill="#BEDAFF" rx={2} />
    <path stroke="#165DFF" strokeWidth={2} d="M32 64h64" />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
