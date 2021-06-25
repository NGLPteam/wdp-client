import styled from "styled-components";
import { aBaseInput, basePadding } from "theme/mixins/appearance";
import { pxToRem } from "theme/mixins/functions";
import { tLabel } from "theme/mixins/typography";
import InputWrapper from "./Input";
type Props = React.ComponentProps<typeof InputWrapper>;

const Input = styled(InputWrapper)<Props>`
  display: flex;
  flex-direction: column;

  &__label {
    ${tLabel("sm")};
    padding-bottom: ${pxToRem("6px")};
    color: var(--color-light);
  }

  &__input {
    --input-min-height: ${pxToRem("42px")};
    --input-padding: 0 ${basePadding(4)};
    --input-focus-background: var(--brand10);
    ${aBaseInput()}
  }
`;

export default Input;
