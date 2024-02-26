import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg width={128} height={128} fill="none" ref={ref} {...props}>
    <path
      fill="#E8F3FF"
      stroke="#165DFF"
      strokeWidth={2}
      d="M75.66 54.379a7.748 7.748 0 0 1 .142 10.81l-.147.151-10.82 10.82a1.187 1.187 0 0 1-1.678 0l-10.82-10.82-.147-.15a7.748 7.748 0 0 1 11.099-10.811l.707.707.707-.707a7.748 7.748 0 0 1 10.957 0z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
