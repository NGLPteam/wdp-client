import {
  maybeHtml,
  maybeReactNode,
} from "@/components/templates/helpers/maybeHtml";
import type { Slot } from "../../templates.types";

type SidebarData = {
  sidebar: Slot;
};

export default function Sidebar(data: SidebarData) {
  return (
    <Styled.Wrapper {...maybeHtml(data.sidebar.content)}>
      {maybeReactNode(data.sidebar.content)}
    </Styled.Wrapper>
  );
}
