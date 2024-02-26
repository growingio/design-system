import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg width={128} height={128} fill="none" ref={ref} {...props}>
    <rect
      width={70}
      height={78}
      x={29}
      y={25}
      fill="#E8F3FF"
      stroke="#4080FF"
      strokeWidth={2}
      rx={1}
    />
    <path fill="#BEDAFF" d="M34 42h60v40H34z" />
    <rect width={16} height={1} x={34} y={37} fill="#6AA1FF" rx={0.5} />
    <rect width={13} height={1} x={34} y={34} fill="#BEDAFF" rx={0.5} />
    <rect width={8} height={1} x={46} y={86} fill="#6AA1FF" rx={0.5} />
    <rect width={32} height={1} x={46} y={89} fill="#BEDAFF" rx={0.5} />
    <rect width={22} height={1} x={46} y={92} fill="#BEDAFF" rx={0.5} />
    <rect width={8} height={8} x={34} y={86} fill="#BEDAFF" rx={4} />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
