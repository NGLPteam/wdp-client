import { useTranslation } from "react-i18next";
import Container from "@/components/layout/Container";
import { ImageAttachment } from "@/types/graphql-schema";
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

export type ContributorsTemplateData = {
  config: {
    background: "none" | "light" | "dark";
    max: number;
  };
  slots: {
    contributions: Contribution[];
  };
};

export default function ContributorsTemplate(data: ContributorsTemplateData) {
  const { config, slots } = data;

  const { t } = useTranslation();

  return (
    <Container bgColor={config.background}>
      <h3 className="t-capitalize">{t("glossary.contributor_other")}</h3>
      <Styled.List>
        {slots.contributions.map((c, i) => (
          <Contributor key={i} contribution={c} />
        ))}
      </Styled.List>
    </Container>
  );
}
