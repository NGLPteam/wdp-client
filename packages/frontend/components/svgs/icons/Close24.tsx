import Props from "./iconType";

export default function Download({ title, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      {...props}
    >
      {title && <title>{title}</title>}
      <path
        d="M11.293 12.0001L4.14648 4.85359L4.85359 4.14648L12.0001 11.293L19.1466 4.14648L19.8537 4.85359L12.7072 12.0001L19.8536 19.1465L19.1465 19.8536L12.0001 12.7072L4.85367 19.8536L4.14656 19.1465L11.293 12.0001Z"
        fill="#232324"
      />
    </svg>
  );
}
