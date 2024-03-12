import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg width={128} height={128} fill="none" ref={ref} {...props}>
    <rect width={24} height={8} x={52} y={90} fill="#6AA1FF" rx={1} />
    <rect
      width={30}
      height={30}
      x={49}
      y={31}
      fill="#E8F3FF"
      stroke="#4080FF"
      strokeWidth={2}
      rx={15}
    />
    <rect width={20} height={4} x={54} y={70} fill="#6AA1FF" rx={2} />
    <rect width={54} height={4} x={37} y={78} fill="#BEDAFF" rx={2} />
    <path
      fill="#4080FF"
      fillRule="evenodd"
      d="M64.863 49.234c.368 0 .667.298.667.666v1.734a.667.667 0 0 1-.667.666H63.13a.667.667 0 0 1-.667-.666V49.9c0-.368.298-.666.667-.666h1.733zm0-9.792c.368 0 .667.299.667.667v7.014a.667.667 0 0 1-.667.666H63.13a.667.667 0 0 1-.667-.666v-7.014c0-.368.298-.667.667-.667h1.733z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
