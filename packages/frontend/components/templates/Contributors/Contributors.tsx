import { useTranslation } from "react-i18next";
import Container from "@/components/layout/Container";
import { ImageAttachment } from "@/types/graphql-schema";
import * as Styled from "./Contributors.styles";

type Contribution = {
  slug: string;
  image: ImageAttachment;
  contributor: {};
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
        {slots.contributions.map((s) => (
          <div>s goes here</div>
        ))}
      </Styled.List>
    </Container>
  );
}
