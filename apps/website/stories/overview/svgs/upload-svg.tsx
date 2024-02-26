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
      strokeWidth={2}
      rx={3}
    />
    <path
      fill="#4080FF"
      fillRule="evenodd"
      d="M63.167 58.666a.5.5 0 0 0-.5.5v3.5h-3.5a.5.5 0 0 0-.5.5v1.667a.5.5 0 0 0 .5.5h3.5v3.5a.5.5 0 0 0 .5.5h1.667a.5.5 0 0 0 .5-.5v-3.5h3.5a.5.5 0 0 0 .5-.5v-1.667a.5.5 0 0 0-.5-.5h-3.5v-3.5a.5.5 0 0 0-.5-.5h-1.667z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
