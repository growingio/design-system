import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={128} height={128} fill="none" {...props}>
    <mask id="notification-a" fill="#fff">
      <path d="M16 51a4 4 0 0 1 4-4h88a4 4 0 0 1 4 4v27a4 4 0 0 1-4 4H20a4 4 0 0 1-4-4V51z" />
    </mask>
    <path
      fill="#E8F3FF"
      d="M16 51a4 4 0 0 1 4-4h88a4 4 0 0 1 4 4v27a4 4 0 0 1-4 4H20a4 4 0 0 1-4-4V51z"
    />
    <path
      fill="#4080FF"
      d="M20 49h88v-4H20v4zm90 2v27h4V51h-4zm-2 29H20v4h88v-4zm-90-2V51h-4v27h4zm2 2a2 2 0 0 1-2-2h-4a6 6 0 0 0 6 6v-4zm90-2a2 2 0 0 1-2 2v4a6 6 0 0 0 6-6h-4zm-2-29a2 2 0 0 1 2 2h4a6 6 0 0 0-6-6v4zm-88-4a6 6 0 0 0-6 6h4a2 2 0 0 1 2-2v-4z"
      mask="url(#notification-a)"
    />
    <rect width={8} height={8} x={24} y={58} fill="#6AA1FF" rx={4} />
    <rect width={36} height={4} x={36} y={58} fill="#BEDAFF" rx={2} />
    <rect width={69} height={4} x={36} y={67} fill="#BEDAFF" rx={2} />
  </svg>
);
export default SvgComponent;
