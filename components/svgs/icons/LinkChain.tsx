import Props from "./iconType";

function IconLinkChain({ title, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      {...props}
    >
      <title>{title || "Link chain"}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.207 11.96a2.5 2.5 0 010-3.535L5.622 7.01l-.708-.707L3.5 7.718a3.5 3.5 0 004.95 4.95l1.414-1.415-.707-.707-1.414 1.414a2.5 2.5 0 01-3.536 0zm5.304-6.01L5.975 9.485l.707.707 3.536-3.535-.707-.707zm-2.475-.354L8.45 4.182a2.5 2.5 0 113.536 3.536L10.57 9.132l.707.707 1.415-1.414a3.5 3.5 0 00-4.95-4.95L6.329 4.889l.707.707z"
        fill="currentColor"
      />
    </svg>
  );
}

export default IconLinkChain;
