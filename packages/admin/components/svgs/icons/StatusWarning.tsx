import Props from "./iconType";

function IconStatusWarning({ title, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      {...props}
    >
      <path d="M10.5 16.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 1c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
      />
      <path d="M11.5 13.5h1l1-7h-3l1 7z" />
    </svg>
  );
}

export default IconStatusWarning;
