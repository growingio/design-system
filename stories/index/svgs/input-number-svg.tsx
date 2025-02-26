import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg width={128} height={128} fill="none" ref={ref} {...props}>
    <g clipPath="url(#input-number__a)">
      <rect width={113} height={38.01} x={25} y={45} fill="#E8F3FF" rx={1} />
      <path
        fill="#4080FF"
        d="M40.298 69.01v-1.876H36v-1.316l4.606-6.678h1.484v6.51h1.386v1.484H42.09v1.876h-1.792zm0-3.36v-3.766l-2.576 3.766h2.576zm4.628 3.36v-1.33l3.192-3.402c.43-.467.738-.877.924-1.232a2.4 2.4 0 0 0 .28-1.106c0-.952-.574-1.428-1.722-1.428-.895 0-1.721.336-2.477 1.008l-.602-1.344c.392-.355.882-.64 1.47-.854A5.306 5.306 0 0 1 47.825 59c1.054 0 1.861.238 2.421.714.57.476.854 1.157.854 2.044 0 .597-.144 1.171-.434 1.722-.28.55-.723 1.143-1.33 1.778l-2.17 2.268h4.313v1.484h-6.553z"
      />
      <rect
        width={113}
        height={38.01}
        x={25}
        y={45}
        stroke="#4080FF"
        strokeWidth={2}
        rx={1}
      />
      <path stroke="#4080FF" d="M56 56v16" />
    </g>
    <defs>
      <clipPath id="input-number__a">
        <path fill="#fff" d="M0 0h128v128H0z" />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
