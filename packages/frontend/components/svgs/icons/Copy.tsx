import Props from "./iconType";

export default function Copy({ title, ...props }: Props) {
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
        d="M4.5 11.5H15V1H4.5V11.5ZM5.5 10.5V2H14V10.5H5.5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 15H12V12.5H11V14H2V5H3.5V4H1V15Z"
        fill="currentColor"
      />
    </svg>
  );
}
