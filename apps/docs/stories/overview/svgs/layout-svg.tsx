import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg width={128} height={128} fill="none" ref={ref} {...props}>
    <rect width={72} height={56} x={28} y={36} fill="#BEDAFF" rx={4} />
    <path fill="#E8F3FF" d="M30 42h16v48H32a2 2 0 0 1-2-2V42z" />
    <path fill="#94BFFF" d="M28 40a4 4 0 0 1 4-4h64a4 4 0 0 1 4 4v4H28v-4z" />
    <rect
      width={70}
      height={54}
      x={29}
      y={37}
      stroke="#4080FF"
      strokeWidth={2}
      rx={3}
    />
    <rect width={72} height={56} x={28} y={36} fill="#BEDAFF" rx={4} />
    <path fill="#E8F3FF" d="M30 42h16v48H32a2 2 0 0 1-2-2V42z" />
    <path fill="#94BFFF" d="M28 40a4 4 0 0 1 4-4h64a4 4 0 0 1 4 4v4H28v-4z" />
    <rect
      width={70}
      height={54}
      x={29}
      y={37}
      stroke="#4080FF"
      strokeWidth={2}
      rx={3}
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
