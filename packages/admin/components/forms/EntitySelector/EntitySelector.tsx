import { forwardRef } from "react";
import { MaybeRef } from "@castiron/common-types";
import BaseInputWrapper from "../BaseInputWrapper";
import Controller from "./EntitySelectorController";
import * as Styled from "./EntitySelector.styles";

type BaseProps = React.ComponentProps<typeof BaseInputWrapper>;
type ControllerProps = React.ComponentProps<typeof Controller>;

interface Props extends Omit<BaseProps, "children">, ControllerProps {
  height?: string;
  isDisclosure?: boolean;
}

function EntitySelector(
  { height = "500px", isDisclosure = false, ...props }: Props,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _ref: MaybeRef<HTMLElement>,
) {
  return isDisclosure ? (
    <Styled.DisclosureWrapper>
      <Styled.Wrapper $height={height}>
        <Controller {...props} isDisclosure />
      </Styled.Wrapper>
    </Styled.DisclosureWrapper>
  ) : (
    <BaseInputWrapper role="group" {...props}>
      <Styled.Wrapper $height={height}>
        <Controller {...props} />
      </Styled.Wrapper>
    </BaseInputWrapper>
  );
}

export default forwardRef(EntitySelector);
