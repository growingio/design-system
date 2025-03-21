import { SVGProps, Ref, forwardRef } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg width={166} height={34} fill="none" ref={ref} {...props}>
    <rect width={32} height={32} x={1} y={1} fill="#E8EFFF" rx={2} />
    <rect width={32} height={32} x={1} y={1} stroke="#3D81F5" strokeWidth={2} rx={2} />
    <circle cx={17} cy={17} r={5} fill="#3D81F5" />
    <rect width={32} height={32} x={45} y={1} fill="#E8EFFF" rx={2} />
    <rect width={32} height={32} x={45} y={1} stroke="#3D81F5" strokeWidth={2} rx={2} />
    <circle cx={61} cy={17} r={5} fill="#3D81F5" />
    <rect width={32} height={32} x={89} y={1} fill="#E8EFFF" rx={2} />
    <rect width={32} height={32} x={89} y={1} stroke="#3D81F5" strokeWidth={2} rx={2} />
    <circle cx={105} cy={17} r={5} fill="#3D81F5" />
    <rect width={32} height={32} x={133} y={1} fill="#E8EFFF" rx={2} />
    <rect width={32} height={32} x={133} y={1} stroke="#3D81F5" strokeWidth={2} rx={2} />
    <circle cx={149} cy={17} r={5} fill="#3D81F5" />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export default ForwardRef;
