import Props from "./iconType";

export default function Download({ title, ...props }: Props) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.953 6.794L8 10.336l4.047-3.542.659.753L8 11.664 3.294 7.547l.659-.753z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.5 1.5V11h-1V1.5h1zM3 13.5h10v1H3v-1z"
        fill="currentColor"
      />
    </svg>
  );
}
