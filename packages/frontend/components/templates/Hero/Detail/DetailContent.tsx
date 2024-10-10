import {
  maybeHtml,
  maybeReactNode,
} from "@/components/templates/helpers/maybeHtml";

type DetailContentData = {
  subheader: string;
  subheaderAside: string;
  summary: string;
  metadata: string;
  cta: string;
  contributors: boolean;
};

export default function TitleBlock(data: DetailContentData) {
  return (
    <div>
      <h2>
        <span {...maybeHtml(data.subheader)}>
          {maybeReactNode(data.subheader)}
        </span>
        <span {...maybeHtml(data.subheaderAside)}>
          {maybeReactNode(data.subheaderAside)}
        </span>
      </h2>
      {data.contributors && <Contributors />}
      <span {...maybeHtml(data.metadata)}>{maybeReactNode(data.metadata)}</span>
      <p {...maybeHtml(data.summary)}>{maybeReactNode(data.summary)}</p>
      <Styled.CtaButton {...maybeHtml(data.cta)} />
    </div>
  );
}
