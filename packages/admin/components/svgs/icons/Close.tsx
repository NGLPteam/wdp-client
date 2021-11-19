import { encodeSvg } from "@wdp/lib/helpers";
import Props from "./iconType";

export function encodedIconClose(props: Props): string {
  return encodeSvg(<IconClose {...props} />);
}

function IconClose({ fill, title, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      {...props}
    >
      <title>{title || "Close"}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9044 12.6101L12.6115 11.9029L8.72183 8.01395L12.6108 4.12574L11.9037 3.41854L8.01466 7.30691L4.12549 3.41845L3.41848 4.12565L7.30749 8.01395L3.41778 11.9029L4.1248 12.6101L8.01466 8.721L11.9044 12.6101Z"
        fill={fill || "currentColor"}
      />
    </svg>
  );
}

export default IconClose;
