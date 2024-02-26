import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg width={128} height={128} fill="none" ref={ref} {...props}>
    <path fill="#E8F3FF" d="M48 88V40h32v48z" />
    <path
      stroke="#6AA1FF"
      strokeDasharray="4 4"
      strokeWidth={2}
      d="M48 40v48m32-48v48"
    />
    <path
      fill="#6AA1FF"
      d="m48 64 10 5.773V58.227L48 64zm32 0-10-5.773v11.547L80 64zm-23 1h14v-2H57v2z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
