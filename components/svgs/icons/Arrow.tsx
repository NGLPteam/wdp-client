import Props from "./iconType";

function IconArrow({ title, ...props }: Props) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      {...props}
    >
      <title>{title || "Arrow"}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 8.65272L2.76142 9.33594L7.49805 4.08344L7.49805 14.001H8.50055V4.07979L13.2395 9.32046L14 8.6362L7.99921 2.00012L2 8.65272Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default IconArrow;
