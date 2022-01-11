import Props from "./iconType";

export default function CreativeCommons({ title, ...props }: Props) {
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
        d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12Zm0 1A7 7 0 1 0 8 1a7 7 0 0 0 0 14Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5 6.5a1.5 1.5 0 1 0 1.3 2.25l.865.5A2.5 2.5 0 0 1 3 8a2.5 2.5 0 0 1 4.665-1.25l-.865.5a1.5 1.5 0 0 0-1.3-.75ZM10.5 6.5a1.5 1.5 0 1 0 1.3 2.25l.865.5A2.5 2.5 0 0 1 8 8a2.5 2.5 0 0 1 4.665-1.25l-.865.5a1.5 1.5 0 0 0-1.3-.75Z"
        fill="currentColor"
      />
    </svg>
  );
}
