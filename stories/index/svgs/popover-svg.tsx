import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={128} height={128} fill="none" {...props}>
    <mask id="a" fill="#fff">
      <path
        fillRule="evenodd"
        d="M20 38a4 4 0 0 0-4 4v40a4 4 0 0 0 4 4h37l4.375 3.5a1 1 0 0 0 1.25 0L67 86h41a4 4 0 0 0 4-4V42a4 4 0 0 0-4-4H20z"
        clipRule="evenodd"
      />
    </mask>
    <path
      fill="#E8F3FF"
      fillRule="evenodd"
      d="M20 38a4 4 0 0 0-4 4v40a4 4 0 0 0 4 4h37l4.375 3.5a1 1 0 0 0 1.25 0L67 86h41a4 4 0 0 0 4-4V42a4 4 0 0 0-4-4H20z"
      clipRule="evenodd"
    />
    <path
      fill="#4080FF"
      d="m57 86 1.25-1.562-.548-.438H57v2zm5.625 3.5-1.25-1.561 1.25 1.561zM67 86v-2h-.702l-.547.438L67 86zM18 42a2 2 0 0 1 2-2v-4a6 6 0 0 0-6 6h4zm0 40V42h-4v40h4zm2 2a2 2 0 0 1-2-2h-4a6 6 0 0 0 6 6v-4zm37 0H20v4h37v-4zm-1.25 3.562 4.376 3.5 2.499-3.123-4.376-3.5-2.498 3.123zm4.376 3.5a3 3 0 0 0 3.748 0l-2.499-3.123a1 1 0 0 1 1.25 0l-2.5 3.123zm3.748 0 4.375-3.5-2.498-3.124-4.376 3.5 2.5 3.124zM108 84H67v4h41v-4zm2-2a2 2 0 0 1-2 2v4a6 6 0 0 0 6-6h-4zm0-40v40h4V42h-4zm-2-2a2 2 0 0 1 2 2h4a6 6 0 0 0-6-6v4zm-88 0h88v-4H20v4z"
      mask="url(#a)"
    />
    <rect width={16} height={4} x={29} y={49} fill="#6AA1FF" rx={2} />
    <rect width={36} height={4} x={29} y={61} fill="#BEDAFF" rx={2} />
    <rect width={69} height={4} x={29} y={69} fill="#BEDAFF" rx={2} />
  </svg>
);
export default SvgComponent;
