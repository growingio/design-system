import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={128} height={128} fill="none" {...props}>
    <g clipPath="url(#auto-complete-svg-a)">
      <rect width={113} height={37.87} x={25} y={28} fill="#E8F3FF" rx={1} />
      <path
        fill="#4080FF"
        d="M36 51.87 40.466 42h1.47l4.466 9.87h-1.82l-.98-2.282h-4.816l-.966 2.282H36zm5.18-7.924-1.778 4.214h3.584l-1.778-4.214h-.028zm6.134 7.924v-6.846h1.708v1.204c.336-.812 1.055-1.26 2.156-1.344l.532-.042.112 1.484-1.008.098c-1.148.112-1.722.7-1.722 1.764v3.682h-1.778z"
      />
      <rect width={113} height={37.87} x={25} y={28} stroke="#4080FF" strokeWidth={2} rx={1} />
      <path stroke="#4080FF" d="M56 39v16" />
      <path fill="#E8F3FF" d="M24 71h103v54a2 2 0 0 1-2 2H24V71z" />
      <rect width={36} height={4} x={36} y={83} fill="#BEDAFF" rx={2} />
      <rect width={69} height={4} x={36} y={91} fill="#BEDAFF" rx={2} />
      <rect width={36} height={4} x={36} y={107} fill="#BEDAFF" rx={2} />
      <rect width={69} height={4} x={36} y={115} fill="#BEDAFF" rx={2} />
    </g>
    <defs>
      <clipPath id="auto-complete-svg-a">
        <path fill="#fff" d="M0 0h128v128H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComponent;
