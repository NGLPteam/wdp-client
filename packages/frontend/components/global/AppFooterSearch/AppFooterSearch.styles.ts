import { pxToRem } from "@wdp/lib/theme/functions";
import { aInputReset } from "@wdp/lib/theme/mixins";
import styled from "styled-components";

export const SearchForm = styled.form`
  align-items: stretch;
  padding-block: 0;
  height: ${pxToRem(32)};
`;

export const SearchLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled.input`
  ${aInputReset}
  flex: 1 1 auto;
`;
