import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg width={128} height={128} fill="none" ref={ref} {...props}>
    <rect width={18.8} height={4} x={58.184} y={38} fill="#6AA1FF" rx={2} />
    <rect width={47} height={4} x={58.184} y={50} fill="#BEDAFF" rx={2} />
    <rect width={47} height={4} x={58.184} y={62} fill="#BEDAFF" rx={2} />
    <rect width={34.075} height={4} x={58.184} y={74} fill="#BEDAFF" rx={2} />
    <rect width={34.075} height={4} x={58.184} y={86} fill="#BEDAFF" rx={2} />
    <path
      fill="#6AA1FF"
      d="M23 50.987 28.968 38h2.303l5.968 12.987h-2.873l-1.216-2.819h-6.06l-1.198 2.819H23zm7.092-9.948-2.045 4.9h4.164l-2.082-4.9h-.037zM41.18 51.19c-.675 0-1.27-.13-1.787-.387a3.227 3.227 0 0 1-1.234-1.05 2.63 2.63 0 0 1-.442-1.492c0-.651.172-1.173.516-1.566.344-.393.903-.67 1.676-.83.774-.171 1.8-.257 3.077-.257h.663v-.313c0-.54-.123-.921-.369-1.142-.245-.234-.663-.35-1.252-.35-.492 0-1.014.08-1.566.24a7.03 7.03 0 0 0-1.621.68l-.755-1.86a5.942 5.942 0 0 1 1.16-.57 8.115 8.115 0 0 1 1.455-.388 7.507 7.507 0 0 1 1.437-.147c1.4 0 2.444.32 3.132.958.688.626 1.031 1.602 1.031 2.929v5.342h-2.597v-1.363c-.184.479-.497.86-.94 1.142-.43.282-.957.424-1.584.424zm.627-1.861c.515 0 .951-.178 1.307-.534.357-.356.535-.817.535-1.382v-.368h-.645c-.946 0-1.615.086-2.008.258-.393.16-.59.442-.59.847 0 .344.117.626.35.847.246.221.596.332 1.05.332z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;