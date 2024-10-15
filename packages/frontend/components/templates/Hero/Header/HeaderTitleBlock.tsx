import {
  maybeHtml,
  maybeReactNode,
} from "@/components/templates/helpers/maybeHtml";
import type { HeroImageLayout } from "@/types/graphql-schema";
import * as Styled from "./Header.styles";
import type { Slot } from "../../templates.types";

type TitleBlockData = {
  header: Slot | null;
  headerAside: Slot | null;
  headerSummary: Slot | null;
  layout?: HeroImageLayout;
};

export default function TitleBlock(data: TitleBlockData) {
  const { header, headerAside, headerSummary, layout } = data;

  return (
    <Styled.Left>
      {!!header?.content && (
        <h1 className="t-h2" {...maybeHtml(header.content)}>
          {maybeReactNode(header.content)}
        </h1>
      )}
      {!!headerAside?.content && (
        <Styled.Aside $layout={layout} {...maybeHtml(headerAside.content)}>
          {maybeReactNode(headerAside.content)}
        </Styled.Aside>
      )}
      {!!headerSummary?.content && (
        <Styled.Summary className="t-h3" {...maybeHtml(headerSummary.content)}>
          {maybeReactNode(headerSummary.content)}
        </Styled.Summary>
      )}
    </Styled.Left>
  );
}
