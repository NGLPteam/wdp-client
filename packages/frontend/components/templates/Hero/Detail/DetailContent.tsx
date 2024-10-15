import {
  maybeHtml,
  maybeReactNode,
} from "@/components/templates/helpers/maybeHtml";
import type { Slot } from "../../templates.types";

type DetailContentData = {
  subheader: Slot;
  subheaderAside: Slot;
  summary: Slot;
  metadata: Slot;
  cta: Slot;
  contributors: boolean;
};

export default function TitleBlock(data: DetailContentData) {
  return (
    <div>
      <h2>
        <span {...maybeHtml(data.subheader.content)}>
          {maybeReactNode(data.subheader.content)}
        </span>
        <span {...maybeHtml(data.subheaderAside.content)}>
          {maybeReactNode(data.subheaderAside.content)}
        </span>
      </h2>
      {data.contributors && <Contributors />}
      <span {...maybeHtml(data.metadata.content)}>
        {maybeReactNode(data.metadata.content)}
      </span>
      <p {...maybeHtml(data.summary.content)}>
        {maybeReactNode(data.summary.content)}
      </p>
      <Styled.CtaButton {...maybeHtml(data.cta.content)} />
    </div>
  );
}
