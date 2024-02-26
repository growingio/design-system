import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg width={128} height={128} fill="none" ref={ref} {...props}>
    <rect
      width={96}
      height={72}
      x={16}
      y={28}
      fill="#E8F3FF"
      stroke="#4080FF"
      strokeWidth={2}
      rx={2}
    />
    <rect
      width={96}
      height={18}
      x={16}
      y={28}
      fill="#E8F3FF"
      stroke="#4080FF"
      strokeWidth={2}
      rx={2}
    />
    <rect
      width={96}
      height={18}
      x={16}
      y={46}
      fill="#BEDAFF"
      stroke="#4080FF"
      strokeWidth={2}
      rx={2}
    />
    <rect width={28} height={2} x={40} y={54} fill="#6AA1FF" rx={1} />
    <path fill="#6AA1FF" d="m38 53-3 4-3-4h6z" />
    <rect
      width={96}
      height={18}
      x={16}
      y={64}
      fill="#BEDAFF"
      stroke="#4080FF"
      strokeWidth={2}
      rx={2}
    />
    <rect
      width={96}
      height={18}
      x={16}
      y={82}
      fill="#E8F3FF"
      stroke="#4080FF"
      strokeWidth={2}
      rx={2}
    />
    <rect width={36} height={2} x={32} y={36} fill="#6AA1FF" rx={1} />
    <path fill="#6AA1FF" d="m30 35-3 4-3-4h6z" />
    <rect width={36} height={2} x={32} y={90} fill="#6AA1FF" rx={1} />
    <path fill="#6AA1FF" d="m25 88 4 3-4 3v-6z" />
    <rect width={28} height={2} x={48} y={72} fill="#6AA1FF" rx={1} />
    <path fill="#6AA1FF" d="m41 70 4 3-4 3v-6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
