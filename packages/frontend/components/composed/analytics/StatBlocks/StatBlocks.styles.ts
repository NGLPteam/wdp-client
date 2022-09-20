import styled from "styled-components";

export const BlockGroup = styled.div`
  grid-area: stats;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  gap: 30px;
`;
