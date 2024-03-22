import * as Styled from "./LoadingSpinner.styles";

const LoadingSpinner = ({ className }: Props) => {
  return <Styled.Icon className={className} role="presentation" />;
};

interface Props {
  className?: string;
}

export default LoadingSpinner;
