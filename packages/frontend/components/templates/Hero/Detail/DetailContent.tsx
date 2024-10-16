import { graphql, useFragment } from "react-relay";
import ContributorsList from "@/components/composed/contributor/ContributorsList";
import {
  maybeHtml,
  maybeReactNode,
} from "@/components/templates/helpers/maybeHtml";
import { DetailContentFragment$key } from "@/relay/DetailContentFragment.graphql";
import * as Styled from "./Detail.styles";
import type { Slot } from "../../templates.types";

type DetailContentData = {
  subheader: Slot | null;
  subheaderAside: Slot | null;
  summary: Slot | null;
  metadata: Slot | null;
  cta: Slot | null;
  contributors: boolean;
  data?: DetailContentFragment$key | null;
};

export default function Content(props: DetailContentData) {
  const {
    subheader,
    subheaderAside,
    summary,
    metadata,
    cta,
    contributors,
    data,
  } = props;

  const item = useFragment(fragment, data);

  return (
    <div>
      <Styled.SubheaderText className="t-h3">
        {!!subheader?.content && (
          <span {...maybeHtml(subheader.content)}>
            {maybeReactNode(subheader.content)}
          </span>
        )}
        {!!subheaderAside?.content && (
          <Styled.SubheaderAside {...maybeHtml(subheaderAside.content)}>
            {maybeReactNode(subheaderAside.content)}
          </Styled.SubheaderAside>
        )}
      </Styled.SubheaderText>
      <Styled.Contributors>
        {contributors && (
          <ContributorsList
            className="t-copy-medium"
            data={item?.contributions}
            itemSlug={item?.slug}
            filterRole="author"
          />
        )}
      </Styled.Contributors>
      {!!metadata?.content && (
        <Styled.Metadata {...maybeHtml(metadata.content)}>
          {maybeReactNode(metadata.content)}
        </Styled.Metadata>
      )}
      {!!summary?.content && (
        <Styled.Summary {...maybeHtml(summary.content)}>
          {maybeReactNode(summary.content)}
        </Styled.Summary>
      )}
      {!!cta?.content && <Styled.CtaButton {...maybeHtml(cta.content)} />}
    </div>
  );
}

const fragment = graphql`
  fragment DetailContentFragment on AnyEntity {
    ... on Item {
      slug
      contributions {
        ...ContributorsListFragment
      }
    }
  }
`;
