import Props from "./iconType";

export default function Text32({ title, ...props }: Props) {
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
        d="M20.586 3H7v26h18V7.414L20.586 3zM21 2H6v28h20V7l-5-5z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.5 2.5h1V7h4v1h-5V2.5zM19.5 12h-9v-1h9v1zm2 3h-11v-1h11v1zm-2 3h-9v-1h9v1zm2 3h-11v-1h11v1z"
        fill="currentColor"
      />
    </svg>
  );
}
