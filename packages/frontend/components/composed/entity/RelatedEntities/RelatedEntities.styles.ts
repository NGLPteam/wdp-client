import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";

export const Section = styled.section`
  padding-block-start: ${pxToRem(100)};
  padding-block-end: ${pxToRem(100)};

  > * + * {
    margin-block-start: ${pxToRem(50)};
  }
`;

export const HeaderBlock = styled.header`
  max-width: ${pxToRem(768)};
`;

export const HeaderText = styled.h3`
  margin-block-end: var(--padding-md);
`;

export const List = styled.ul`
  display: grid;
  column-gap: ${pxToRem(36)};
  grid-template-columns: repeat(4, 1fr);
`;

export const ListItem = styled.li``;

export const ItemLink = styled.a`
  display: block;
`;

export const ItemCover = styled.div`
  > figure > span {
    border: 1px solid var(--color-base-neutral20) !important;
  }
`;

export const ItemText = styled.div`
  margin-block-start: ${pxToRem(20)};

  > * + * {
    margin-block-start: ${pxToRem(12)};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
