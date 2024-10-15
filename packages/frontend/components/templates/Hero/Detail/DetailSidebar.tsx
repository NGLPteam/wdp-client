import {
  maybeHtml,
  maybeReactNode,
} from "@/components/templates/helpers/maybeHtml";
import type { Slot } from "../../templates.types";

type SidebarData = {
  sidebar: Slot | null;
};

export default function Sidebar(data: SidebarData) {
  const { sidebar } = data;

  return (
    !!sidebar?.content && (
      <aside {...maybeHtml(sidebar.content)}>
        {maybeReactNode(sidebar.content)}
      </aside>
    )
  );
}
