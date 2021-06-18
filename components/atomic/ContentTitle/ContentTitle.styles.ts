import styled from "styled-components";
import { pxToRem } from "theme/mixins/functions";

const ContentTitle = styled.h1`
  border-bottom: 2px solid var(--accent-color);
  // Default bottom padding
  padding-bottom: ${pxToRem("2px")};

  h1& {
    // Specific padding for h1
    padding-bottom: ${pxToRem("5px")};
  }
`;

export default ContentTitle;
