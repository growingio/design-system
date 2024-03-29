import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg width={128} height={128} fill="none" ref={ref} {...props}>
    <mask id="result-4__a" fill="#fff">
      <path
        fillRule="evenodd"
        d="M42 50a2 2 0 0 0-2 2v21a2 2 0 0 0 2 2h16l4.375 3.5a1 1 0 0 0 1.25 0L68 75h17a2 2 0 0 0 2-2V52a2 2 0 0 0-2-2H42z"
        clipRule="evenodd"
      />
    </mask>
    <path
      fill="#E8F3FF"
      fillRule="evenodd"
      d="M42 50a2 2 0 0 0-2 2v21a2 2 0 0 0 2 2h16l4.375 3.5a1 1 0 0 0 1.25 0L68 75h17a2 2 0 0 0 2-2V52a2 2 0 0 0-2-2H42z"
      clipRule="evenodd"
    />
    <path
      fill="#4080FF"
      d="m58 75 1.25-1.562-.548-.438H58v2zm5.625 3.5-1.25-1.561 1.25 1.561zM68 75v-2h-.702l-.547.438L68 75zM42 52v-4a4 4 0 0 0-4 4h4zm0 21V52h-4v21h4zm0 0h-4a4 4 0 0 0 4 4v-4zm16 0H42v4h16v-4zm-1.25 3.562 4.376 3.5 2.499-3.123-4.376-3.5-2.498 3.123zm4.376 3.5a3 3 0 0 0 3.748 0l-2.499-3.123a1 1 0 0 1 1.25 0l-2.5 3.123zm3.748 0 4.375-3.5-2.498-3.124-4.376 3.5 2.5 3.124zM85 73H68v4h17v-4zm0 0v4a4 4 0 0 0 4-4h-4zm0-21v21h4V52h-4zm0 0h4a4 4 0 0 0-4-4v4zm-43 0h43v-4H42v4z"
      mask="url(#result-4__a)"
    />
    <path
      fill="#4080FF"
      d="M58.992 68v-1.876h-4.298v-1.316l4.605-6.678h1.484v6.51h1.386v1.484h-1.386V68h-1.791zm0-3.36v-3.766l-2.576 3.766h2.576zM63.62 68v-1.33l3.192-3.402c.43-.467.737-.877.924-1.232a2.4 2.4 0 0 0 .28-1.106c0-.952-.574-1.428-1.722-1.428-.896 0-1.722.336-2.478 1.008l-.602-1.344c.392-.355.882-.64 1.47-.854a5.305 5.305 0 0 1 1.834-.322c1.055 0 1.862.238 2.422.714.57.476.854 1.157.854 2.044a3.66 3.66 0 0 1-.434 1.722c-.28.55-.723 1.143-1.33 1.778l-2.17 2.268h4.312V68H63.62z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
