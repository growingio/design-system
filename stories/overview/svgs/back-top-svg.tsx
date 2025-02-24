import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg width={128} height={128} fill="none" ref={ref} {...props}>
    <rect
      width={30}
      height={30}
      x={49}
      y={49}
      fill="#E8F3FF"
      stroke="#4080FF"
      strokeWidth={2}
      rx={15}
    />
    <path
      fill="#4080FF"
      fillRule="evenodd"
      d="M62.4 68.8a17.057 17.057 0 0 1-.827-1.692l-1.966 1.888a7.283 7.283 0 0 0-.152-.457c-.198-.553-.455-1.274-.455-2.399 0-1.209.353-2.051 1.493-2.56-.699-3.655-.22-8.041 3.707-11.58 3.625 3.539 4.067 7.925 3.422 11.58 1.052.509 1.378 1.35 1.378 2.56 0 1.125-.237 1.846-.42 2.4a7.695 7.695 0 0 0-.14.456l-1.815-1.888a17.683 17.683 0 0 1-.764 1.692h-3.46zm3.4-10a1.6 1.6 0 1 1-3.2 0 1.6 1.6 0 0 1 3.2 0z"
      clipRule="evenodd"
    />
    <path
      fill="#4080FF"
      d="M63.979 75.5c3.118-3.118 1.299-4.966 0-5.5-1.3.534-3.118 2.382 0 5.5z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
