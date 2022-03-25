import Props from "./iconType";

export default function Minus({ title, ...props }: Props) {
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
      <path d="M14.015 8.515v-1l-12-.001v1h12Z" fill="currentColor" />
    </svg>
  );
}
