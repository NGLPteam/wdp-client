import { graphql, useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
import Container from "@/components/layout/Container";
import { ImageAttachment } from "@/types/graphql-schema";
import { ContributorsTemplateFragment$key } from "@/relay/ContributorsTemplateFragment.graphql";
import { useSharedInlineFragment } from "@/components/templates/shared.graphql";
import {
  maybeHtml,
  maybeReactNode,
} from "@/components/templates/helpers/maybeHtml";
import Contributor from "./Contributor";
import * as Styled from "./Contributors.styles";

export type Contribution = {
  slug: string;
  role?: string | null;
  affiliation?: string | null;
  contributor: {
    slug: string | null;
    image: ImageAttachment;
    affiliation?: string | null;
    orcid?: string | null;
  };
  entity: {
    __typename: "ITEM" | "COLLECTION";
    slug: string | null;
  };
};

export default function ContributorsTemplate({
  data,
}: {
  data?: ContributorsTemplateFragment$key | null;
}) {
  const { t } = useTranslation();

  const template = useFragment(fragment, data);

  const { contributorsDefinition, slots } = template ?? {};

  const header = useSharedInlineFragment(slots?.header);

  const headerContent =
    header?.valid && !!header.content
      ? header.content
      : t("glossary.contributor_other");

  const contributions: Contribution[] = [];

  return (
    <Container bgColor={contributorsDefinition?.background}>
      <h3 {...maybeHtml(headerContent)}>{maybeReactNode(headerContent)}</h3>
      <Styled.List>
        {contributions.map((c, i) => (
          <Contributor key={i} contribution={c} />
        ))}
      </Styled.List>
    </Container>
  );
}

const fragment = graphql`
  fragment ContributorsTemplateFragment on ContributorListTemplateInstance {
    __typename
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
