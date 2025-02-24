import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg width={128} height={128} fill="none" ref={ref} {...props}>
    <rect
      width={86}
      height={64}
      x={21}
      y={32}
      fill="#E8F3FF"
      stroke="#4080FF"
      strokeWidth={2}
      rx={2}
    />
    <rect
      width={86}
      height={16}
      x={21}
      y={32}
      fill="#BEDAFF"
      stroke="#4080FF"
      strokeWidth={2}
      rx={2}
    />
    <rect
      width={86}
      height={16}
      x={21}
      y={48}
      fill="#E8F3FF"
      stroke="#4080FF"
      strokeWidth={2}
      rx={2}
    />
    <rect
      width={86}
      height={16}
      x={21}
      y={64}
      fill="#E8F3FF"
      stroke="#4080FF"
      strokeWidth={2}
      rx={2}
    />
    <rect
      width={86}
      height={16}
      x={21}
      y={80}
      fill="#E8F3FF"
      stroke="#4080FF"
      strokeWidth={2}
      rx={2}
    />
    <rect width={47} height={2} x={29} y={55} fill="#BEDAFF" rx={1} />
    <rect width={47} height={2} x={29} y={71} fill="#BEDAFF" rx={1} />
    <rect width={47} height={2} x={29} y={87} fill="#BEDAFF" rx={1} />
    <rect width={16} height={2} x={83} y={55} fill="#BEDAFF" rx={1} />
    <rect width={16} height={2} x={83} y={71} fill="#BEDAFF" rx={1} />
    <rect width={16} height={2} x={83} y={87} fill="#BEDAFF" rx={1} />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
