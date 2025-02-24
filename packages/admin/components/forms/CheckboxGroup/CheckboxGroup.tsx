import { PropsWithChildren } from "react";
import BaseInputWrapper from "../BaseInputWrapper";
import * as Styled from "./CheckboxGroup.styles";

type BaseProps = Omit<
  React.ComponentProps<typeof BaseInputWrapper>,
  "children"
>;

function CheckboxGroup({
  children,
  className,
  ...props
}: BaseProps & PropsWithChildren & { className?: string }) {
  return (
    <BaseInputWrapper role="group" descriptionTop {...props}>
      <Styled.CheckboxesWrapper className={className}>
        {children}
      </Styled.CheckboxesWrapper>
    </BaseInputWrapper>
  );
}

export default CheckboxGroup;
