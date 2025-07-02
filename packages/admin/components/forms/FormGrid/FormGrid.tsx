import * as Styled from "./FormGrid.styles";

const FormGrid = ({ children, onKeyDown }: Props) => {
  return <Styled.Grid onKeyDown={onKeyDown}>{children}</Styled.Grid>;
};

interface Props {
  children: React.ReactNode;
  onKeyDown?: (e: React.KeyboardEvent) => void;
}

export default FormGrid;
