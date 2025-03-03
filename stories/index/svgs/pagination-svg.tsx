import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={128} height={128} fill="none" {...props}>
    <rect width={34} height={34} x={47} y={47} fill="#E8F3FF" rx={1} />
    <path
      fill="#4080FF"
      d="M61.526 69v-1.484h2.226v-6.342L62.03 62.21l-.7-1.316 2.94-1.764h1.274v8.386h2.086V69h-6.104z"
    />
    <rect width={34} height={34} x={47} y={47} stroke="#4080FF" strokeWidth={2} rx={1} />
    <rect width={36} height={36} x={86} y={46} fill="#E8F3FF" rx={2} />
    <path
      fill="#4080FF"
      d="M101.12 69v-1.33l3.192-3.402c.429-.467.737-.877.924-1.232.187-.364.28-.733.28-1.106 0-.952-.574-1.428-1.722-1.428-.896 0-1.722.336-2.478 1.008l-.602-1.344c.392-.355.882-.64 1.47-.854a5.304 5.304 0 0 1 1.834-.322c1.055 0 1.862.238 2.422.714.569.476.854 1.157.854 2.044a3.66 3.66 0 0 1-.434 1.722c-.28.55-.723 1.143-1.33 1.778l-2.17 2.268h4.312V69h-6.552z"
    />
    <rect width={36} height={36} x={6} y={46} fill="#E8F3FF" rx={2} />
    <path
      fill="#E8E9EA"
      fillRule="evenodd"
      d="M15 64a8 8 0 1 1 16 0 8 8 0 1 1-16 0z"
      clipRule="evenodd"
      opacity={0.01}
    />
    <path
      fill="#4080FF"
      d="M20.99 64.08a.497.497 0 0 1 .12-.191l3.535-3.536a.5.5 0 0 1 .707 0l.354.354a.5.5 0 0 1 0 .707l-2.919 2.919 2.858 2.858a.5.5 0 0 1 0 .707l-.353.354a.5.5 0 0 1-.707 0l-3.536-3.536a.5.5 0 0 1-.058-.636z"
    />
  </svg>
);
export default SvgComponent;
