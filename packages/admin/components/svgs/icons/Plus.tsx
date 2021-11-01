import Props from "./iconType";

function IconPlus({ title, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      {...props}
    >
      <title>{title || "Plus"}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.51477 14.0146L8.51477 14.0145L8.51427 8.51426L14.0135 8.51477L14.0137 7.51477L8.51418 7.51426L8.51367 2.01465L7.51367 2.01478L7.51418 7.51417L2.0138 7.51367L2.01367 8.51367L7.51427 8.51417L7.51477 14.0146Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default IconPlus;
