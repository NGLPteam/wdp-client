import CICInput from "@castiron/components-input";
import { useUID } from "react-uid";

const Input = ({
  className,
  inputProps = {},
  labelProps = {},
  ...props
}: Props) => {
  const uid = useUID();
  inputProps.className = `${className}__input`;
  labelProps.className = `${className}__label`;

  return (
    <CICInput
      inputId={uid}
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
  label: string | React.ReactNode;
  description: string | React.ReactNode;
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
  labelProps: React.HTMLAttributes<HTMLLabelElement>;
}

export default Input;
