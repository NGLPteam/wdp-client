import Props from "./iconType";

function IconChevron({ title, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      {...props}
    >
      <title>{title || "Chevron"}</title>
      <path
        d="M8.00037 6.29734L2.644 10.999L2.00074 10.2662L8.00037 4.99988L14 10.2662L13.3567 10.999L8.00037 6.29734Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default IconChevron;
