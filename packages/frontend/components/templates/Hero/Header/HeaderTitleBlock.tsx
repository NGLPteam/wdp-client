import {
  maybeHtml,
  maybeReactNode,
} from "@/components/templates/helpers/maybeHtml";
import type { Slot } from "../../templates.types";

type TitleBlockData = {
  header: Slot;
  headerAside: Slot;
  headerSummary: Slot;
};

export default function TitleBlock(data: TitleBlockData) {
  return (
    <div>
      <h1 {...maybeHtml(data.header.content)}>
        {maybeReactNode(data.header.content)}
      </h1>
      <h2 {...maybeHtml(data.headerSummary.content)}>
        {maybeReactNode(data.headerSummary.content)}
      </h2>
      <span {...maybeHtml(data.headerAside.content)}>
        {maybeReactNode(data.headerAside.content)}
      </span>
    </div>
  );
}
