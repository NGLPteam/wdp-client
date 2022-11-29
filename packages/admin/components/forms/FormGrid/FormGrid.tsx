import * as Styled from "./FormGrid.styles";

const FormGrid = ({ children }: Props) => {
  return <Styled.Grid>{children}</Styled.Grid>;
};

interface Props {
  children: React.ReactNode;
}

export default FormGrid;
