import Props from "./iconType";

export default function User({ title, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      {...props}
    >
      {title && <title>{title}</title>}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 2.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM4.5 5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0ZM3.741 11.657c-.608.66-.743 1.604-.743 2.843h-1c0-1.247.116-2.553 1.008-3.52.895-.973 2.451-1.48 4.993-1.48 2.541 0 4.097.503 4.992 1.473C13.883 11.94 14 13.247 14 14.5h-1c0-1.247-.135-2.19-.743-2.848C11.652 10.997 10.458 10.5 8 10.5c-2.458 0-3.652.5-4.258 1.157Z"
        fill="currentColor"
      />
    </svg>
  );
}
