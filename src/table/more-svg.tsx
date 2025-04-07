import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={12} height={12} fill="none" {...props}>
    <path
      fill="#02060E"
      fillOpacity={0.9}
      fillRule="evenodd"
      d="M1.25 5v2h2V5h-2ZM5 5v2h2V5H5Zm3.75 0v2h2V5h-2Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgComponent;
