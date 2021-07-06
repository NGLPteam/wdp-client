import CICInput from "@castiron/components-input";

const Input = ({
  className,
  inputProps = {},
  labelProps = {},
  ...props
}: Props) => {
  inputProps.className = `${className}__input`;
  labelProps.className = `${className}__label`;

  return (
    <CICInput
      className={className}
      inputProps={inputProps}
      labelProps={labelProps}
      {...props}
    />
  );
};

interface Props {
  className: string;
  type?: string;
  inputId: string;
  label: string | React.ReactNode;
  description: string | React.ReactNode;
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
  labelProps: React.HTMLAttributes<HTMLLabelElement>;
}

export default Input;
