import styled from "styled-components";
import { aBaseInput } from "theme/mixins/appearance";
import { pxToRem } from "theme/mixins/functions";
import { tTruncate } from "theme/mixins/typography";
import { IconFactory } from "components/factories";
import { noInsetSupport } from "theme/mixins/base";

export const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const SelectInput = styled.select`
  --input-min-height: ${pxToRem(42)};
  --input-padding: 0 ${pxToRem(40)} 0 ${pxToRem(16)};
  --input-focus-background: var(--brand10);
  --input-border-radius: ${pxToRem(4)};
  ${aBaseInput()}
  ${tTruncate}
  width: 100%;
  height: var(--input-min-height);
`;

export const Icon = styled(IconFactory)<{ $disabled?: boolean }>`
  position: absolute;
  inset-inline-end: ${pxToRem(16)};
  pointer-events: none;

  ${({ $disabled }) => $disabled && `opacity: var(--input-disabled-opacity);`}

  ${noInsetSupport(`right: ${pxToRem(16)};`)}
`;
