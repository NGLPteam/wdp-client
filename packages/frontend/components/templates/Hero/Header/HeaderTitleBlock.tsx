import { graphql, useFragment } from "react-relay";
import {
  maybeHtml,
  maybeReactNode,
} from "@/components/templates/helpers/maybeHtml";
import type { HeroImageLayout } from "@/types/graphql-schema";
import {
  useSharedBlockFragment,
  useSharedInlineFragment,
} from "@/components/templates/shared.graphql";
import { HeaderTitleBlockFragment$key } from "@/relay/HeaderTitleBlockFragment.graphql";
import * as Styled from "./Header.styles";

type TitleBlockProps = {
  data?: HeaderTitleBlockFragment$key | null;
  layout?: HeroImageLayout;
};

export default function TitleBlock({ data, layout }: TitleBlockProps) {
  const slots = useFragment(fragment, data);

  const header = useSharedInlineFragment(slots?.header);
  const headerAside = useSharedInlineFragment(slots?.headerAside);
  const summary = useSharedBlockFragment(slots?.summary);

  return (
    <Styled.Left>
      {!!header?.content && header.valid && (
        <h1 className="t-h2" {...maybeHtml(header.content)}>
          {maybeReactNode(header.content)}
        </h1>
      )}
      {!!headerAside?.content && headerAside.valid && (
        <Styled.Aside $layout={layout} {...maybeHtml(headerAside.content)}>
          {maybeReactNode(headerAside.content)}
        </Styled.Aside>
      )}
      {!!summary?.content && summary.valid && (
        <Styled.Summary className="t-h3" {...maybeHtml(summary.content)}>
          {maybeReactNode(summary.content)}
        </Styled.Summary>
      )}
    </Styled.Left>
  );
}

const fragment = graphql`
  fragment HeaderTitleBlockFragment on HeroTemplateInstanceSlots {
    header {
      ...sharedInlineSlotFragment
    }
    headerAside {
      ...sharedInlineSlotFragment
    }
    summary {
      ...sharedBlockSlotFragment
    }
  }
`;
