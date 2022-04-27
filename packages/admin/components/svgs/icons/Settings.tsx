import Props from "./iconType";

function IconSettings({ title, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      {...props}
    >
      <title>{title || "Settings"}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.95 12a2.5 2.5 0 0 1-4.9 0H1v-1h2.05a2.5 2.5 0 0 1 4.9 0H15v1H7.95ZM7 11.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM8.05 5a2.5 2.5 0 0 0 4.9 0H15V4h-2.05a2.5 2.5 0 0 0-4.9 0H1v1h7.05ZM9 4.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default IconSettings;
