import Props from "./iconType";

function IconStatusAlert({ title: _title, ...props }: Props) {
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
        d="M21.587 19.538l-8.7-16.677a1 1 0 00-1.773 0L2.413 19.538A1 1 0 003.3 21h17.4a1 1 0 00.887-1.462zm-7.814-17.14c-.747-1.433-2.798-1.433-3.546 0l-8.7 16.677C.831 20.406 1.796 22 3.3 22h17.4c1.503 0 2.469-1.594 1.774-2.925l-8.7-16.676z"
      />
      <path d="M10.5 17.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zM11.5 14.5h1l1-6.5h-3l1 6.5z" />
    </svg>
  );
}

export default IconStatusAlert;
