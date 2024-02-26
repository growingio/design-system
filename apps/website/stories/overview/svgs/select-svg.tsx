import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg width={128} height={128} fill="none" ref={ref} {...props}>
    <rect
      width={70}
      height={22}
      x={29}
      y={53}
      fill="#E8F3FF"
      stroke="#4080FF"
      strokeWidth={2}
      rx={1}
    />
    <path
      fill="#4080FF"
      d="M87.222 62.01a.5.5 0 0 1 .707 0l2.18 2.18 2.117-2.118a.5.5 0 0 1 .707 0l.354.353a.5.5 0 0 1 0 .708L90.46 65.96a.5.5 0 0 1-.707 0l-.354-.354a.496.496 0 0 1-.048-.055l-2.482-2.482a.5.5 0 0 1 0-.707l.354-.354z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
