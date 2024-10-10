import {
  maybeHtml,
  maybeReactNode,
} from "@/components/templates/helpers/maybeHtml";

type TitleBlockData = {
  header: string;
  headerAside: string;
  headerSummary: string;
};

export default function TitleBlock(data: TitleBlockData) {
  return (
    <div>
      <h1 {...maybeHtml(data.header)}>{maybeReactNode(data.header)}</h1>
      <h2 {...maybeHtml(data.headerSummary)}>
        {maybeReactNode(data.headerSummary)}
      </h2>
      <span {...maybeHtml(data.headerAside)}>
        {maybeReactNode(data.headerAside)}
      </span>
    </div>
  );
}
