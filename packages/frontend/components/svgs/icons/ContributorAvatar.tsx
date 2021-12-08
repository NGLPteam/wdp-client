import Props from "./iconType";

function ContributorAvatar({ title, fill, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 60 60"
      width="60"
      height="60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      {...props}
    >
      {title && <title>{title}</title>}
      <path
        d="M59.25 30c0 16.154-13.096 29.25-29.25 29.25S.75 46.154.75 30 13.846.75 30 .75 59.25 13.846 59.25 30z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M41 25c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11zM12 58c0-9.481 1.171-16 18-16s18 6.519 18 16"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default ContributorAvatar;
