import Props from "./iconType";

export function ChevronDown({ title, ...props }: Props) {
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
        d="M8 9.702L13.356 5l.643.733-6 5.266L2 5.733 2.643 5 8 9.702z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth=".5"
      />
    </svg>
  );
}

export function ChevronLeft(props: Props) {
  return <ChevronDown style={{ transform: "rotate(90deg)" }} {...props} />;
}

export function ChevronUp(props: Props) {
  return <ChevronDown style={{ transform: "rotate(180deg)" }} {...props} />;
}

export function ChevronRight(props: Props) {
  return <ChevronDown style={{ transform: "rotate(270deg)" }} {...props} />;
}
