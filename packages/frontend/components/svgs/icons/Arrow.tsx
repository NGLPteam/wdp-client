import { encodeSvg } from "@wdp/lib/helpers";
import Props from "./iconType";

export function encodedIconArrowRight(props: Props): string {
  return encodeSvg(<ArrowRight {...props} />);
}

export function ArrowRight({ title, fill, ...props }: Props) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {title && <title>{title}</title>}
      <path
        d="M7.35 2l-.684.761 5.252 4.737H2v1.003h9.922l-5.24 4.739.684.76 6.636-6-6.653-6z"
        fill={fill || "currentColor"}
        stroke={fill || "currentColor"}
        strokeWidth=".5"
      />
    </svg>
  );
}

export function ArrowLeft(props: Props) {
  return <ArrowRight style={{ transform: "rotate(180deg)" }} {...props} />;
}

export function ArrowUp(props: Props) {
  return <ArrowRight style={{ transform: "rotate(270deg)" }} {...props} />;
}

export function ArrowDown(props: Props) {
  return <ArrowRight style={{ transform: "rotate(90deg)" }} {...props} />;
}
