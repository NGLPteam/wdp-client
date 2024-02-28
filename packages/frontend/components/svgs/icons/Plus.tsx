import Props from "./iconType";

export default function Plus({ title: _title, ...props }: Props) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.517 14.015h1v-5.5h5.498v-1H8.517v-5.5h-1v5.5l-5.5-.001v1h5.5v5.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
