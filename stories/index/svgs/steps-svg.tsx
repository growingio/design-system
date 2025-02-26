import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg width={128} height={128} fill="none" ref={ref} {...props}>
    <path
      fill="#4080FF"
      fillRule="evenodd"
      d="M41.9 58.906a.5.5 0 0 0-.734.031l-6.938 8.212-2.766-2.889a.5.5 0 0 0-.715-.007l-1.53 1.532a.5.5 0 0 0-.008.7l4.677 4.883a.5.5 0 0 0 .527.126.5.5 0 0 0 .424-.176l.978-1.158.662-.663-.054-.056 7.039-8.331a.5.5 0 0 0-.03-.677l-1.531-1.527z"
      clipRule="evenodd"
    />
    <rect
      width={26}
      height={26}
      x={24}
      y={51}
      fill="#E8F3FF"
      stroke="#4080FF"
      strokeWidth={2}
      rx={13}
    />
    <rect
      width={22}
      height={22}
      x={84}
      y={53}
      fill="#E8F3FF"
      stroke="#4080FF"
      strokeWidth={2}
      rx={11}
    />
    <path
      fill="#4080FF"
      fillRule="evenodd"
      d="M42.142 58.906a.5.5 0 0 0-.735.031l-6.938 8.212-2.766-2.889a.5.5 0 0 0-.714-.007l-1.532 1.532a.5.5 0 0 0-.007.7l4.677 4.883a.5.5 0 0 0 .528.126.5.5 0 0 0 .423-.176l.979-1.158.661-.663-.054-.056 7.039-8.331a.5.5 0 0 0-.029-.677l-1.532-1.527z"
      clipRule="evenodd"
    />
    <path stroke="#94BFFF" strokeWidth={2} d="M55 64h24" />
    <path
      fill="#4080FF"
      d="M92.12 69v-1.33l3.192-3.402c.43-.467.737-.877.924-1.232a2.4 2.4 0 0 0 .28-1.106c0-.952-.574-1.428-1.722-1.428-.896 0-1.722.336-2.478 1.008l-.602-1.344c.392-.355.882-.64 1.47-.854a5.305 5.305 0 0 1 1.834-.322c1.055 0 1.862.238 2.422.714.57.476.854 1.157.854 2.044a3.66 3.66 0 0 1-.434 1.722c-.28.55-.723 1.143-1.33 1.778l-2.17 2.268h4.312V69H92.12z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
