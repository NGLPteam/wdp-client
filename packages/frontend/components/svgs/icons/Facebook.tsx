import Props from "./iconType";

export default function Facebook({ title, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      {...props}
    >
      {title && <title>{title}</title>}
      <path
        d="M18.438 30V17.228h4.287l.642-4.977h-4.93V9.073c0-1.441.4-2.423 2.468-2.423l2.635-.002V2.197A35.32 35.32 0 0 0 19.7 2c-3.8 0-6.402 2.32-6.402 6.58v3.67H9v4.978h4.298V30h5.14Z"
        fill="currentColor"
      />
    </svg>
  );
}
