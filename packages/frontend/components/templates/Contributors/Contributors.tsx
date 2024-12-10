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

  const { background, width } = contributorsDefinition ?? {};

  const header = useSharedInlineFragment(slots?.header);

  if (!template || !entity) return null;

  const mdxHeader = header?.valid && !!header.content;

  const { contributions } = entity;

  return (
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
        {contributions?.nodes.map((c, i) => <Contributor key={i} data={c} />)}
      </ul>
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
      width
    }
    slots {
      header {
        ...sharedInlineSlotFragment
      }
    }
  }
`;
