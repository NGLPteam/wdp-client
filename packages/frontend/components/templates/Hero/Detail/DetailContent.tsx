import { graphql, useFragment } from "react-relay";
import ContributorsList from "@/components/composed/contributor/ContributorsList";
import { DetailContentFragment$key } from "@/relay/DetailContentFragment.graphql";
import { DetailContentLayoutFragment$key } from "@/relay/DetailContentLayoutFragment.graphql";
import {
  useSharedBlockFragment,
  useSharedInlineFragment,
} from "@/components/templates/shared.graphql";
import BlockSlotWrapper from "@/components/templates/mdx/BlockSlotWrapper";
import InlineSlotWrapper from "@/components/templates/mdx/InlineSlotWrapper";
import * as Styled from "./Detail.styles";

type DetailContentProps = {
  entityData?: DetailContentFragment$key | null;
  data?: DetailContentLayoutFragment$key | null;
};

export default function Content({ data, entityData }: DetailContentProps) {
  const entity = useFragment(fragment, entityData);
  const template = useFragment(layoutFragment, data);

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
            <span>
              <InlineSlotWrapper content={subheader.content} />
            </span>
          )}
          {!!subheaderAside?.content && (
            <Styled.SubheaderAside>
              <InlineSlotWrapper content={subheaderAside.content} />
            </Styled.SubheaderAside>
          )}
        </Styled.SubheaderText>
      )}
      <Styled.Contributors>
        {definition?.listContributors && (
          <ContributorsList
            className="t-copy-medium"
            data={entity?.contributions}
            itemSlug={entity?.slug}
            filterRole="author"
          />
        )}
      </Styled.Contributors>
      {metadata?.valid && !!metadata?.content && (
        <Styled.Metadata>
          <InlineSlotWrapper content={metadata.content} />
        </Styled.Metadata>
      )}
      {summary?.valid && !!summary?.content && (
        <Styled.Summary>
          <BlockSlotWrapper content={summary.content} />
        </Styled.Summary>
      )}
      {cta?.valid && !!cta?.content && (
        <Styled.CtaButton>
          <InlineSlotWrapper content={cta.content} />
        </Styled.CtaButton>
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
