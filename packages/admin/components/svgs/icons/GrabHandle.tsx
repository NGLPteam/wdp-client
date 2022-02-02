import Props from "./iconType";

function IconGrabHandle({ title, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="presentation"
      {...props}
    >
      {title && <title>{title}</title>}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 6H1V5L15 5V6Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 11H1V10H15V11Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default IconGrabHandle;
