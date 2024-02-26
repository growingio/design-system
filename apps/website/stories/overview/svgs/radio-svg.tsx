import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg width={128} height={128} fill="none" ref={ref} {...props}>
    <rect width={22} height={22} x={53} y={53} fill="#E8F3FF" rx={11} />
    <rect width={8} height={8} x={60} y={60} fill="#4080FF" rx={4} />
    <rect
      width={22}
      height={22}
      x={53}
      y={53}
      stroke="#4080FF"
      strokeWidth={2}
      rx={11}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
