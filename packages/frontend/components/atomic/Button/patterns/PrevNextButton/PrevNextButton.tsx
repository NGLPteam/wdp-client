import React, { forwardRef } from "react";
import Button from "../..";
import * as Styled from "./PrevNextButton.styles";
import type { MaybeButtonRef } from "@castiron/common-types";

const PrevNextButton = forwardRef(
  ({ label, ...props }: Props, ref: MaybeButtonRef) => {
    return (
      <Styled.FixedWidthButton ref={ref} className="t-capitalize" {...props}>
        {label}
      </Styled.FixedWidthButton>
    );
  },
);

type BaseProps = Omit<React.ComponentProps<typeof Button>, "as">;

type Props = BaseProps & {
  label?: string | React.ReactElement;
  forwardedAs?: string;
};

export default PrevNextButton;
