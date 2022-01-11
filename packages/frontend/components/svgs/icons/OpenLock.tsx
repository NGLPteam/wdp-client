import Props from "./iconType";

export default function OpenLock({ title, ...props }: Props) {
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
        d="M8 7a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-4.5 3.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z"
        fill="currentColor"
      />
      <path d="M9 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 2c1.091 0 2 .914 2 2.071V7.5h1V4.071C11 2.39 9.67 1 8 1S5 2.389 5 4.071V5h1v-.929C6 2.914 6.909 2 8 2Z"
        fill="currentColor"
      />
    </svg>
  );
}
