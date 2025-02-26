import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg width={128} height={128} fill="none" ref={ref} {...props}>
    <rect
      width={30}
      height={30}
      x={49}
      y={49}
      fill="#E8F3FF"
      stroke="#4080FF"
      strokeWidth={2}
      rx={15}
    />
    <path
      fill="#4080FF"
      fillRule="evenodd"
      d="M61.26 60.843c0-1.494 1.244-2.705 2.777-2.705 1.534 0 2.777 1.211 2.777 2.706 0 1.494-1.243 2.705-2.777 2.705-1.533 0-2.777-1.211-2.777-2.706zm-2.16 6.855c0-1.793 1.475-3.247 3.293-3.247h3.289c1.817 0 3.292 1.454 3.292 3.247v1.624a.546.546 0 0 1-.549.54H59.65a.546.546 0 0 1-.55-.54v-1.624z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
