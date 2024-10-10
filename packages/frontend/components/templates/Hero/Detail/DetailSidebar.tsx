import {
  maybeHtml,
  maybeReactNode,
} from "@/components/templates/helpers/maybeHtml";

type SidebarData = {
  sidebar: string;
};

export default function Sidebar(data: SidebarData) {
  return (
    <Styled.Wrapper {...maybeHtml(data.sidebar)}>
      {maybeReactNode(data.sidebar)}
    </Styled.Wrapper>
  );
}
