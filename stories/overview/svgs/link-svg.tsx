import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg width={128} height={128} fill="none" ref={ref} {...props}>
    <path
      fill="#4080FF"
      d="M55.078 69v-9.87h1.792v8.344h4.732V69h-6.524zm9.262 0v-9.87h1.791V69H64.34zm5.337 0v-9.87h1.344l5.306 6.888V59.13h1.666V69h-1.33l-5.32-6.916V69h-1.666zm11.873 0v-9.87h1.792v4.368h.028l4.354-4.368h2.184l-4.802 4.746L90.146 69h-2.212l-4.564-4.564h-.028V69H81.55zm-36.576-7.255L42.23 64.49a1.313 1.313 0 1 0 1.857 1.857l3.122-3.12a2.182 2.182 0 0 0-3.087-3.087l-3.244 3.245a2.997 2.997 0 1 0 4.238 4.238l2.357-2.356a.444.444 0 0 0-.628-.628l-2.357 2.356a2.109 2.109 0 1 1-2.982-2.982l3.244-3.245a1.294 1.294 0 0 1 1.83 1.83l-3.12 3.122a.425.425 0 0 1-.602-.602l2.744-2.744a.444.444 0 1 0-.628-.628z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
