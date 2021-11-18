import Props from "./iconType";

export default function Search32({ title, ...props }: Props) {
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
        d="M14 6a8 8 0 100 16 8 8 0 000-16zM4 14C4 8.477 8.477 4 14 4s10 4.477 10 10a9.958 9.958 0 01-2.257 6.329L27.413 26 26 27.414l-5.672-5.67A9.958 9.958 0 0114 24C8.477 24 4 19.523 4 14z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth=".5"
      />
    </svg>
  );
}
