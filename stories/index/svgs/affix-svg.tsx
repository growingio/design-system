import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={128} height={128} fill="none" {...props}>
    <rect
      width={70}
      height={54}
      x={29}
      y={37}
      fill="#E8F3FF"
      stroke="#4080FF"
      strokeWidth={2}
      rx={3}
    />
    <path
      fill="#94BFFF"
      stroke="#4080FF"
      strokeWidth={2}
      d="M32 37h64a3 3 0 0 1 3 3v3H29v-3a3 3 0 0 1 3-3z"
    />
    <rect width={24} height={8} x={36} y={76} fill="#6AA1FF" rx={1} />
  </svg>
);

export default SvgComponent;
