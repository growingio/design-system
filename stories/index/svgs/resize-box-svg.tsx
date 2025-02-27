import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={128} height={128} fill="none" {...props}>
    <rect
      width={30}
      height={30}
      x={49}
      y={49}
      fill="#E8F3FF"
      stroke="#4080FF"
      strokeWidth={2}
      rx={1}
    />
    <path
      fill="#4080FF"
      d="M98 31a1 1 0 0 0-1-1h-9a1 1 0 1 0 0 2h8v8a1 1 0 1 0 2 0v-9zM83.707 45.707l14-14-1.414-1.414-14 14 1.414 1.414zM30 97a1 1 0 0 0 1 1h9a1 1 0 1 0 0-2h-8v-8a1 1 0 1 0-2 0v9zm14.293-14.707-14 14 1.414 1.414 14-14-1.414-1.414z"
    />
  </svg>
);
export default SvgComponent;
