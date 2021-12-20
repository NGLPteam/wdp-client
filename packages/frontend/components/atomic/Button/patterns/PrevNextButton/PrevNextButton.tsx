import React, { forwardRef } from "react";
import Button from "../..";
import * as Styled from "./PrevNextButton.styles";
import type { MaybeButtonRef } from "types/ref";

const PrevNextButton = forwardRef(
  ({ label, ...props }: Props, ref: MaybeButtonRef) => {
    return (
      <Styled.FixedWidthButton ref={ref} className="t-capitalize" {...props}>
        {label}
      </Styled.FixedWidthButton>
    );
  }
);

type BaseProps = React.ComponentProps<typeof Button>;

type Props = BaseProps & {
  label?: string;
};

export default PrevNextButton;
