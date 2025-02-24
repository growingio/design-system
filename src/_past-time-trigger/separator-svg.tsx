import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={12}
    height={12}
    fill="none"
    viewBox="0 0 12 12"
    ref={ref}
    {...props}
  >
    <path
      fill="#051025"
      fillOpacity={0.36}
      fillRule="evenodd"
      d="M10.75 6.5h-9.5v-1h9.5v1Z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
