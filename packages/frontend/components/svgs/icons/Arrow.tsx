import Props from "./iconType";

export default function ArrowRight({ title, ...props }: Props) {
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
        d="M7.35 2l-.684.761 5.252 4.737H2v1.003h9.922l-5.24 4.739.684.76 6.636-6-6.653-6z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth=".5"
      />
    </svg>
  );
}
