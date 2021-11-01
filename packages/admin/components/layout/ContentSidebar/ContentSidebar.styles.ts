import styled from "styled-components";
import { respond } from "theme/mixins/base";

export const Wrapper = styled.div``;

export const SidebarWrapper = styled.div`
  ${respond("display: none", 70)}
`;
