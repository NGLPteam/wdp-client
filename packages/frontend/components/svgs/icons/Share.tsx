import Props from "./iconType";

export default function Share({ title, ...props }: Props) {
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
        d="M11.064 4.855 8 2.302 4.936 4.855l-.64-.768L8 1l3.704 3.087-.64.768Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.5 2.15V11h-1V2.15h1Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5 7h3v1h-2v6h9V8h-2V7h3v8h-11V7Z"
        fill="currentColor"
      />
    </svg>
  );
}
