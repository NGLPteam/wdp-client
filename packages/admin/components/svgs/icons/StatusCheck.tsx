import Props from "./iconType";

function IconStatusCheck({ title: _title, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 1c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.866 8.841l-7.354 7.879-4.366-4.366.708-.708 3.634 3.634 6.646-7.121.732.682z"
      />
    </svg>
  );
}

export default IconStatusCheck;
