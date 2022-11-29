import * as Styled from "./FieldsetSection.styles";

const GroupFieldset = ({ label, children, description, style }: Props) => {
  return (
    <Styled.Fieldset style={style}>
      <Styled.Legend>{label}</Styled.Legend>
      {description && <Styled.Description>{description}</Styled.Description>}
      <Styled.FieldsWrapper>{children}</Styled.FieldsWrapper>
    </Styled.Fieldset>
  );
};

type CSSwithVars = React.CSSProperties & Record<`--${string}`, number | string>;

interface Props {
  label: string;
  children: React.ReactNode;
  description?: string;
  style?: CSSwithVars;
}

export default GroupFieldset;
