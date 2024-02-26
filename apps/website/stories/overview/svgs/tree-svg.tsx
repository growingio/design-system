import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg width={128} height={128} fill="none" ref={ref} {...props}>
    <rect width={36} height={2} x={50} y={42} fill="#6AA1FF" rx={1} />
    <rect width={28} height={2} x={58} y={52} fill="#BEDAFF" rx={1} />
    <rect width={20} height={2} x={66} y={62} fill="#BEDAFF" rx={1} />
    <rect width={20} height={2} x={66} y={72} fill="#BEDAFF" rx={1} />
    <path fill="#6AA1FF" d="m48 41-3 4-3-4h6zm-5 39 4 3-4 3v-6z" />
    <path fill="#BEDAFF" d="m56 51-3 4-3-4h6z" />
    <rect width={36} height={2} x={50} y={82} fill="#6AA1FF" rx={1} />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
