import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={128} height={128} fill="none" {...props}>
    <rect width={22} height={22} x={53} y={53} fill="#E8F3FF" rx={1} />
    <path
      fill="#4080FF"
      fillRule="evenodd"
      d="M69.638 57.906a.5.5 0 0 0-.735.031l-6.938 8.212L59.2 63.26a.5.5 0 0 0-.714-.007l-1.532 1.532a.5.5 0 0 0-.007.7l4.677 4.883a.5.5 0 0 0 .528.126.5.5 0 0 0 .423-.176l.979-1.158.662-.663-.055-.056 7.04-8.331a.5.5 0 0 0-.03-.677l-1.532-1.527z"
      clipRule="evenodd"
    />
    <rect width={22} height={22} x={53} y={53} stroke="#4080FF" strokeWidth={2} rx={1} />
  </svg>
);

export default SvgComponent;
