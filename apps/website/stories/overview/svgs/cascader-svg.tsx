import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg width={128} height={128} fill="none" ref={ref} {...props}>
    <path fill="#E8F3FF" d="M14 36h33v56H14a1 1 0 0 1-1-1V37a1 1 0 0 1 1-1z" />
    <path fill="#BEDAFF" d="M14 40h32v8H14z" />
    <rect width={20} height={2} x={18} y={43} fill="#6AA1FF" rx={1} />
    <rect width={2} height={2} x={40} y={43} fill="#6AA1FF" rx={1} />
    <rect width={20} height={2} x={18} y={53} fill="#BEDAFF" rx={1} />
    <rect width={2} height={2} x={40} y={53} fill="#BEDAFF" rx={1} />
    <rect width={20} height={2} x={18} y={63} fill="#BEDAFF" rx={1} />
    <rect width={2} height={2} x={40} y={63} fill="#BEDAFF" rx={1} />
    <rect width={20} height={2} x={18} y={73} fill="#BEDAFF" rx={1} />
    <rect width={2} height={2} x={40} y={73} fill="#BEDAFF" rx={1} />
    <rect width={20} height={2} x={18} y={83} fill="#BEDAFF" rx={1} />
    <rect width={2} height={2} x={40} y={83} fill="#BEDAFF" rx={1} />
    <path
      stroke="#4080FF"
      strokeWidth={2}
      d="M14 36h33v56H14a1 1 0 0 1-1-1V37a1 1 0 0 1 1-1z"
    />
    <path fill="#E8F3FF" d="M81 36h33a1 1 0 0 1 1 1v54a1 1 0 0 1-1 1H81V36z" />
    <path fill="#BEDAFF" d="M82 40h32v8H82z" />
    <rect width={20} height={2} x={86} y={43} fill="#6AA1FF" rx={1} />
    <rect width={2} height={2} x={108} y={43} fill="#6AA1FF" rx={1} />
    <rect width={20} height={2} x={86} y={53} fill="#BEDAFF" rx={1} />
    <rect width={2} height={2} x={108} y={53} fill="#BEDAFF" rx={1} />
    <rect width={20} height={2} x={86} y={63} fill="#BEDAFF" rx={1} />
    <rect width={2} height={2} x={108} y={63} fill="#BEDAFF" rx={1} />
    <rect width={20} height={2} x={86} y={73} fill="#BEDAFF" rx={1} />
    <rect width={2} height={2} x={108} y={73} fill="#BEDAFF" rx={1} />
    <rect width={20} height={2} x={86} y={83} fill="#BEDAFF" rx={1} />
    <rect width={2} height={2} x={108} y={83} fill="#BEDAFF" rx={1} />
    <path
      stroke="#4080FF"
      strokeWidth={2}
      d="M81 36h33a1 1 0 0 1 1 1v54a1 1 0 0 1-1 1H81V36z"
    />
    <path fill="#E8F3FF" d="M47 36h34v56H47V36z" />
    <rect width={20} height={2} x={52} y={53} fill="#BEDAFF" rx={1} />
    <rect width={2} height={2} x={74} y={53} fill="#BEDAFF" rx={1} />
    <rect width={20} height={2} x={52} y={43} fill="#BEDAFF" rx={1} />
    <rect width={2} height={2} x={74} y={43} fill="#BEDAFF" rx={1} />
    <path fill="#BEDAFF" d="M48 60h32v8H48z" />
    <rect width={20} height={2} x={52} y={63} fill="#6AA1FF" rx={1} />
    <rect width={2} height={2} x={74} y={63} fill="#6AA1FF" rx={1} />
    <rect width={20} height={2} x={52} y={73} fill="#BEDAFF" rx={1} />
    <rect width={2} height={2} x={74} y={73} fill="#BEDAFF" rx={1} />
    <rect width={20} height={2} x={52} y={83} fill="#BEDAFF" rx={1} />
    <rect width={2} height={2} x={74} y={83} fill="#BEDAFF" rx={1} />
    <path stroke="#4080FF" strokeWidth={2} d="M47 36h34v56H47V36z" />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
