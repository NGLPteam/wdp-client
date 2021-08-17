import styled from "styled-components";
import {
  aBaseInput,
  aBaseInputLabel,
  basePadding,
} from "theme/mixins/appearance";
import { pxToRem } from "theme/mixins/functions";
import { IconFactory } from "components/factories";
import { noInsetSupport } from "theme/mixins/base";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  ${aBaseInputLabel};
`;

export const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const SelectInput = styled.select`
  --input-min-height: ${pxToRem("42px")};
  --input-padding: 0 ${basePadding(4)};
  --input-focus-background: var(--brand10);
  ${aBaseInput()}
  width: 100%;
`;

export const Icon = styled(IconFactory)`
  position: absolute;
  inset-inline-end: ${basePadding(4)};
  pointer-events: none;

  ${noInsetSupport(`right: ${basePadding(4)};`)}
`;
