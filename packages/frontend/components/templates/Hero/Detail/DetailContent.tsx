import { graphql, useFragment } from "react-relay";
import ContributorsList from "@/components/composed/contributor/ContributorsList";
import {
  maybeHtml,
  maybeReactNode,
} from "@/components/templates/helpers/maybeHtml";
import { DetailContentFragment$key } from "@/relay/DetailContentFragment.graphql";
import { DetailContentLayoutFragment$key } from "@/relay/DetailContentLayoutFragment.graphql";
import {
  useSharedBlockFragment,
  useSharedInlineFragment,
} from "@/components/templates/shared.graphql";
import * as Styled from "./Detail.styles";

type DetailContentProps = {
  data?: DetailContentFragment$key | null;
  layoutData?: DetailContentLayoutFragment$key | null;
};

export default function Content({ data, layoutData }: DetailContentProps) {
  const item = useFragment(fragment, data);
  const template = useFragment(layoutFragment, layoutData);

  const { slots, definition } = template ?? {};

  const subheader = useSharedInlineFragment(slots?.subheader);
  const subheaderAside = useSharedInlineFragment(slots?.subheaderAside);
  const metadata = useSharedInlineFragment(slots?.metadata);
  const summary = useSharedBlockFragment(slots?.subheaderSummary);
  const cta = useSharedInlineFragment(slots?.callToAction);

  return (
    <div>
      {(subheader?.valid || subheaderAside?.valid) && (
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
      )}
      <Styled.Contributors>
        {definition?.listContributors && (
          <ContributorsList
            className="t-copy-medium"
            data={item?.contributions}
            itemSlug={item?.slug}
            filterRole="author"
          />
        )}
      </Styled.Contributors>
      {metadata?.valid && !!metadata?.content && (
        <Styled.Metadata {...maybeHtml(metadata.content)}>
          {maybeReactNode(metadata.content)}
        </Styled.Metadata>
      )}
      {summary?.valid && !!summary?.content && (
        <Styled.Summary {...maybeHtml(summary.content)}>
          {maybeReactNode(summary.content)}
        </Styled.Summary>
      )}
      {cta?.valid && !!cta?.content && (
        <Styled.CtaButton {...maybeHtml(cta.content)} />
      )}
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

const layoutFragment = graphql`
  fragment DetailContentLayoutFragment on HeroTemplateInstance {
    definition {
      listContributors
    }
    slots {
      subheader {
        ...sharedInlineSlotFragment
      }
      subheaderAside {
        ...sharedInlineSlotFragment
      }
      subheaderSummary {
        ...sharedBlockSlotFragment
      }
      metadata {
        ...sharedInlineSlotFragment
      }
      callToAction {
        ...sharedInlineSlotFragment
      }
    }
  }
`;
