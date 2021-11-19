import { encodeSvg } from "@wdp/lib/helpers";
import Props from "./iconType";

export function encodedIconClose(props: Props): string {
  return encodeSvg(<Close {...props} />);
}

function Close({ title, fill, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 16 16"
      width="16"
      height="16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      {...props}
    >
      {title && <title>{title}</title>}
      <path
        d="M11.904 12.61l.707-.707-3.89-3.889 3.889-3.888-.707-.707-3.89 3.888L4.126 3.42l-.707.707 3.889 3.888-3.89 3.89.707.707 3.89-3.89 3.89 3.89z"
        fill={fill || "currentColor"}
        stroke={fill || "currentColor"}
        strokeWidth=".5"
      />
    </svg>
  );
}

export default Close;
