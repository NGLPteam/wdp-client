import styled from "styled-components";
import { aBaseInput } from "theme/mixins/appearance";
import { pxToRem } from "theme/mixins/functions";
import { IconFactory } from "components/factories";
import { noInsetSupport } from "theme/mixins/base";

export const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const SelectInput = styled.select`
  --input-min-height: ${pxToRem(42)};
  --input-padding: 0 ${pxToRem(16)};
  --input-focus-background: var(--brand10);
  --input-border-radius: ${pxToRem(4)};
  ${aBaseInput()}
  width: 100%;
`;

export const Icon = styled(IconFactory)`
  position: absolute;
  inset-inline-end: ${pxToRem(16)};
  pointer-events: none;

  ${noInsetSupport(`right: ${pxToRem(16)};`)}
`;
