import styled from "styled-components";
import { respond } from "theme/mixins/base";
import { Fieldset } from "../FieldsetSection/FieldsetSection.styles";

export const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: var(--form-grid-row-gap);
  column-gap: var(--form-grid-column-gap);
  padding-block-end: var(--form-grid-padding-bottom);
  justify-content: space-between;

  ${respond(
    `
    --form-grid-item-width: 100%;
    flex-direction: column;
    `,
    50,
  )}

  fieldset & {
    padding-block-end: 0;
  }

  /* stylelint-disable selector-type-no-unknown */
  > ${Fieldset} + div {
    flex-basis: var(--form-grid-item-width-wide);
    border-top: 1px solid var(--neutral40);
    padding-block-start: var(--form-grid-row-gap);
    margin-block-start: var(--form-grid-row-gap);
  }
  /* stylelint-enable selector-type-no-unknown */
`;
