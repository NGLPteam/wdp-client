import Props from "./iconType";

// This icon uses a lighter color than the default,
// so if no class name is passed "t-copy-lighter" is applied
function Avatar60({ title, fill: _fill, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 60 60"
      width="60"
      height="60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      className={props.className || "t-copy-lighter"}
      {...props}
    >
      {title && <title>{title}</title>}
      <mask
        id="a"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="60"
        height="60"
      >
        <path
          d="M59.25 30c0 16.154-13.096 29.25-29.25 29.25S.75 46.154.75 30 13.846.75 30 .75 59.25 13.846 59.25 30z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </mask>
      <g mask="url(#a)" stroke="currentColor" strokeWidth="1.5" fill="none">
        <path d="M59.25 30c0 16.154-13.096 29.25-29.25 29.25S.75 46.154.75 30 13.846.75 30 .75 59.25 13.846 59.25 30z" />
        <path d="M41 25c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11zM12 58c0-9.481 1.171-16 18-16s18 6.519 18 16" />
      </g>
    </svg>
  );
}

export default Avatar60;
