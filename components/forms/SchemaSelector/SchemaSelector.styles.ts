import styled from "styled-components";
import { pxToRem } from "theme/mixins/functions";

// The SchemaSelector is currently a stand alone form,
// and should be outside of any form provider
export const FieldWrapper = styled.div`
  padding-block-end: var(--form-grid-row-gap);
`;

export const Field = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  min-height: ${pxToRem(42)};
  background-color: var(--input-background-color);

  /* TODO: Create FormFieldButton or something to cover these slightly different buttons... */
  > button {
    border-color: var(--input-border-color);
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    padding-inline-start: ${pxToRem(16)};
    padding-inline-end: ${pxToRem(16)};
  }
`;

export const VersionText = styled.span`
  display: flex;
  align-items: center;
  position: relative;
  padding-inline-start: ${pxToRem(16)};
  flex: 1 1 auto;
  border: 1px solid var(--input-border-color);
  border-right: 0;
  border-top-left-radius: ${pxToRem(4)};
  border-bottom-left-radius: ${pxToRem(4)};
`;

export const ModalContent = styled.div`
  /* TODO: Create a form footer component that can be used in Mutation Form and Schema Form Actions */
  footer {
    padding-block-start: ${pxToRem(44)};
    padding-block-end: 0;
    border-top: 0;

    > button {
      flex: 1 1 auto;
    }
  }
`;
