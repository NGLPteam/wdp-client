import Props from "./iconType";

function IconWarning({ title, ...props }: Props) {
  const backgroundStyle = {
    fill: "var(--icon-background-color, #F7DBD9)",
  };

  const foregroundStyle = {
    fill: "var(--icon-foreground-color, currentColor)",
  };

  return (
    <svg
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      {...props}
    >
      <title>{title || "Magnifying Glass"}</title>
      <path
        d="M15.127 1c.77-1.333 2.695-1.333 3.464 0l13.857 24c.77 1.333-.193 3-1.732 3H3.003c-1.54 0-2.502-1.667-1.732-3L15.127 1z"
        style={backgroundStyle}
      />
      <path
        d="M16.475 19.5h1l1-7.5h-3l1 7.5zM15.5 22.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z"
        style={foregroundStyle}
      />
    </svg>
  );
}

export default IconWarning;
