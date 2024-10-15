import {
  maybeHtml,
  maybeReactNode,
} from "@/components/templates/helpers/maybeHtml";
import * as Styled from "./Header.styles";
import type { Slot } from "../../templates.types";

type SidebarData = {
  sidebar: Slot | null;
};

export default function Sidebar(data: SidebarData) {
  return data.sidebar ? (
    <Styled.Right>
      <Styled.Wrapper {...maybeHtml(data.sidebar.content)}>
        {maybeReactNode(data.sidebar.content)}
      </Styled.Wrapper>
    </Styled.Right>
  ) : null;
}
