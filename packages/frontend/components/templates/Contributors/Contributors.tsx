import { graphql, useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
import capitalize from "lodash/capitalize";
import { ContributorsTemplateFragment$key } from "@/relay/ContributorsTemplateFragment.graphql";
import { useSharedInlineFragment } from "@/components/templates/shared/shared.slots.graphql";
import InlineSlotWrapper from "@/components/templates/mdx/BlockSlotWrapper";
import Container from "@/components/layout/Container";
import Contributor from "./Contributor";
import styles from "./Contributors.module.css";

export default function ContributorsTemplate({
  data,
}: {
  data?: ContributorsTemplateFragment$key | null;
}) {
  const { t } = useTranslation();

  const template = useFragment(fragment, data);

  const { entity, contributorsDefinition, slots } = template ?? {};

  const { background, width, limit } = contributorsDefinition ?? {};

  const header = useSharedInlineFragment(slots?.header);

  if (!template || !entity) return null;

  const mdxHeader = header?.valid && !!header.content;

  const { contributions } = entity;

  const shouldRender = !!contributions?.nodes?.length;

  const renderedContributions =
    limit && typeof limit === "number"
      ? contributions?.nodes.slice(0, limit)
      : contributions?.nodes;

  return shouldRender ? (
    <Container
      className={styles.container}
      bgColor={background}
      halfWidthTemplate={width === "HALF"}
    >
      <h3 className={styles?.testClass}>
        {mdxHeader ? (
          <InlineSlotWrapper content={header.content} />
        ) : (
          capitalize(t("glossary.contributor_other"))
        )}
      </h3>
      <ul className={styles.list}>
        {renderedContributions?.map((c, i) => <Contributor key={i} data={c} />)}
      </ul>
    </Container>
  ) : null;
}

const fragment = graphql`
  fragment ContributorsTemplateFragment on ContributorListTemplateInstance {
    __typename
    entity {
      ... on Item {
        contributions {
          nodes {
            ...ContributorFragment
          }
        }
      }
      ... on Collection {
        contributions {
          nodes {
            ...ContributorFragment
          }
        }
      }
    }
    contributorsDefinition: definition {
      background
      limit
      width
    }
    slots {
      header {
        ...sharedInlineSlotFragment
      }
    }
  }
`;
