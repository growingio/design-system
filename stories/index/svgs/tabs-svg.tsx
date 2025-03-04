import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={128} height={128} fill="none" {...props}>
    <path fill="#6AA1FF" d="M12 54a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v22H12V54z" />
    <path
      fill="#BEDAFF"
      stroke="#165DFF"
      strokeWidth={2}
      d="M50 53h28a1 1 0 0 1 1 1v21H49V54a1 1 0 0 1 1-1zm36 0h28a1 1 0 0 1 1 1v21H85V54a1 1 0 0 1 1-1z"
    />
    <path fill="#165DFF" d="M8 74h112v2H8z" />
  </svg>
);
export default SvgComponent;
