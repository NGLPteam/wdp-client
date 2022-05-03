import Props from "./iconType";

export default function Email({ title, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      {...props}
    >
      {title && <title>{title}</title>}
      <path
        d="M28.586 7H3.415L16 18.159 28.586 7ZM16 20.584 3 9.057V23a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V9.057L16 20.584Z"
        fill="currentColor"
      />
    </svg>
  );
}
