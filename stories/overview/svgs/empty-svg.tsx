import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg width={128} height={128} fill="none" ref={ref} {...props}>
    <rect
      width={46}
      height={46}
      x={41}
      y={41}
      fill="#E8F3FF"
      stroke="#4080FF"
      strokeDasharray="4 4"
      strokeWidth={2}
      rx={3}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
