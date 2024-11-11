import { graphql, useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
import Container from "@/components/layout/Container";
import { ContributorsTemplateFragment$key } from "@/relay/ContributorsTemplateFragment.graphql";
import { useSharedInlineFragment } from "@/components/templates/shared/shared.slots.graphql";
import InlineSlotWrapper from "@/components/templates/mdx/BlockSlotWrapper";
import Contributor from "./Contributor";
import * as Styled from "./Contributors.styles";

export default function ContributorsTemplate({
  data,
}: {
  data?: ContributorsTemplateFragment$key | null;
}) {
  const { t } = useTranslation();

  const template = useFragment(fragment, data);

  const { entity, contributorsDefinition, slots } = template ?? {};

  const header = useSharedInlineFragment(slots?.header);

  if (!template || !entity) return null;

  const mdxHeader = header?.valid && !!header.content;

  const { contributions } = entity;

  return (
    <Container bgColor={contributorsDefinition?.background}>
      <h3>
        {mdxHeader ? (
          <InlineSlotWrapper content={header.content} />
        ) : (
          t("glossary.contributor_other")
        )}
      </h3>
      <Styled.List>
        {contributions?.nodes.map((c, i) => <Contributor key={i} data={c} />)}
      </Styled.List>
    </Container>
  );
}

const fragment = graphql`
  fragment ContributorsTemplateFragment on ContributorListTemplateInstance {
    __typename
    entity {
      ... on Item {
        contributions {
          nodes {
            ...ContributorBlockFragment
          }
        }
      }
      ... on Collection {
        contributions {
          nodes {
            ...ContributorBlockFragment
          }
        }
      }
    }
    contributorsDefinition: definition {
      background
      limit
    }
    slots {
      header {
        ...sharedInlineSlotFragment
      }
    }
  }
`;
