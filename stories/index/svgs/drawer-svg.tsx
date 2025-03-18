import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={128} height={128} fill="none" {...props}>
    <path fill="#E8F3FF" d="M24 36h40v56H24z" />
    <path fill="#BEDAFF" d="M64 36h40v56H64z" />
    <path
      fill="#4080FF"
      d="M49.293 63.293a1 1 0 0 0 0 1.414l6.364 6.364a1 1 0 0 0 1.414-1.414L51.414 64l5.657-5.657a1 1 0 0 0-1.414-1.414l-6.364 6.364zM79 63H50v2h29v-2z"
    />
  </svg>
);
export default SvgComponent;
