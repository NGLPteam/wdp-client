import styled from "styled-components";
import { IconFactory } from "components/factories";

export const AccountButton = styled.button`
  display: flex;
  align-items: center;
`;

export const Icon = styled(IconFactory)`
  margin-inline-start: var(--padding-sm);
`;
