import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg width={128} height={128} fill="none" ref={ref} {...props}>
    <rect width={64} height={48} x={32} y={40} fill="#BEDAFF" rx={2} />
    <path
      fill="#6AA1FF"
      d="m46.725 74.002 5.254-9.128a2 2 0 0 1 3.069-.492l6.421 5.759a2 2 0 0 0 3.147-.641l6.737-14.384c.738-1.576 2.997-1.523 3.66.086l7.848 19.036A2 2 0 0 1 81.012 77H48.46c-1.539 0-2.501-1.664-1.734-2.998z"
    />
    <circle cx={50} cy={53} r={4} fill="#6AA1FF" />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
