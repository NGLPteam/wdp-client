import Props from "./iconType";

// This icon uses a lighter color than the default,
// so if no class name is passed "t-copy-lighter" is applied
function Avatar32({ title, fill: _fill, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 32 32"
      width="32"
      height="32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      className={props.className || "t-copy-lighter"}
      {...props}
    >
      {title && <title>{title}</title>}
      <mask
        id="mask0_2682_15357"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="32"
        height="32"
      >
        <path
          d="M31.25 16C31.25 24.4223 24.4223 31.25 16 31.25C7.57766 31.25 0.75 24.4223 0.75 16C0.75 7.57766 7.57766 0.75 16 0.75C24.4223 0.75 31.25 7.57766 31.25 16Z"
          fill="white"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </mask>
      <g mask="url(#mask0_2682_15357)" fill="none">
        <path
          d="M31.25 16C31.25 24.4223 24.4223 31.25 16 31.25C7.57766 31.25 0.75 24.4223 0.75 16C0.75 7.57766 7.57766 0.75 16 0.75C24.4223 0.75 31.25 7.57766 31.25 16Z"
          fill="white"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M21.8661 13.3335C21.8661 16.5735 19.2396 19.2001 15.9995 19.2001C12.7594 19.2001 10.1328 16.5735 10.1328 13.3335C10.1328 10.0934 12.7594 7.4668 15.9995 7.4668C19.2396 7.4668 21.8661 10.0934 21.8661 13.3335Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M6.40039 30.9337C6.40039 25.8769 7.02512 22.4004 16.0004 22.4004C24.9757 22.4004 25.6004 25.8769 25.6004 30.9337"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
}

export default Avatar32;
