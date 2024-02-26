import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg width={128} height={128} fill="none" ref={ref} {...props}>
    <path fill="#BEDAFF" d="M12 28h8v72h-8z" />
    <path fill="#E8F3FF" d="M20 28h8v72h-8z" />
    <path fill="#BEDAFF" d="M28 28h8v72h-8z" />
    <path fill="#E8F3FF" d="M36 28h8v72h-8z" />
    <path fill="#BEDAFF" d="M44 28h8v72h-8z" />
    <path fill="#E8F3FF" d="M52 28h8v72h-8z" />
    <path fill="#BEDAFF" d="M60 28h8v72h-8z" />
    <path fill="#E8F3FF" d="M68 28h8v72h-8z" />
    <path fill="#BEDAFF" d="M76 28h8v72h-8z" />
    <path fill="#E8F3FF" d="M84 28h8v72h-8z" />
    <path fill="#BEDAFF" d="M92 28h8v72h-8z" />
    <path fill="#E8F3FF" d="M100 28h8v72h-8z" />
    <path fill="#BEDAFF" d="M108 28h8v72h-8z" />
    <rect
      width={102}
      height={70}
      x={13}
      y={29}
      stroke="#4080FF"
      strokeWidth={2}
      rx={3}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
