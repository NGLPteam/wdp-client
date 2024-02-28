import Props from "./iconType";

const IconCheckbox = ({
  title: _title,
  fill: _fill,
  ...props
}: CheckboxProps) => {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      {...props}
    >
      <rect
        x=".5"
        y=".5"
        width="15"
        height="15"
        rx="3.5"
        stroke="currentColor"
        fill="none"
        data-path-name="box"
      />
      <path
        d="M3 8l4 3.5 6-7"
        stroke="currentColor"
        fill="none"
        data-path-name="check"
      />
      <path d="M4 8H12" stroke="none" data-path-name="indeterminate" />
    </svg>
  );
};

interface CheckboxProps extends Props {
  checked?: boolean;
}

export default IconCheckbox;
