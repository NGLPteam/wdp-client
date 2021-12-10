import Props from "./iconType";

export default function Audio32({ title, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 32 32"
      width="32"
      height="32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      {...props}
    >
      {title && <title>{title}</title>}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 7.715v16.57L9.89 20.5H3v-9h6.89L18 7.715zm-1 1.57L10.11 12.5H4v7h6.11L17 22.715V9.285z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 20v-8h1v8H6z"
        fill="currentColor"
      />
      <path
        d="M21.175 18.257l.701.718a4.498 4.498 0 00-1.078-6.845l-.724.743a3.5 3.5 0 011.101 5.384z"
        fill="currentColor"
      />
      <path
        d="M23.275 20.41l.699.717A7.474 7.474 0 0026 16a7.49 7.49 0 00-3.072-6.054l-.706.724A6.493 6.493 0 0125 16a6.477 6.477 0 01-1.725 4.41z"
        fill="currentColor"
      />
      <path
        d="M25.371 22.56l.699.717A10.465 10.465 0 0029 16a10.48 10.48 0 00-3.963-8.217l-.702.72A9.484 9.484 0 0128 16c0 2.544-1 4.855-2.629 6.56z"
        fill="currentColor"
      />
    </svg>
  );
}
