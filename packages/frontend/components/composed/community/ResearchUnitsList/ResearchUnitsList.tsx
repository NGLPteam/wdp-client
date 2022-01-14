import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useTranslation } from "react-i18next";
import { IconFactory } from "components/factories";
import { ResearchUnitsListFragment$key } from "@/relay/ResearchUnitsListFragment.graphql";
import * as Styled from "./ResearchUnitsList.styles";

export default function ResearchUnitsList({ data }: Props) {
  const units = useMaybeFragment(fragment, data);
  const { t } = useTranslation();
  const image = {
    alt: "",
    url: `/images/placeholders/waves.png`,
  };

  return units?.edges.length ? (
    <section className="a-bg-neutral90">
      <Styled.Inner className="l-container-wide l-grid">
        <Styled.TextColumn>
          <Styled.HeaderBlock>
            <h3>{t("layouts.research_units")}</h3>
          </Styled.HeaderBlock>
          <Styled.UnitsList className="t-copy-medium">
            {units.edges.map((edge) => (
              <Styled.ListItem>
                <Styled.UnitLink>
                  <IconFactory icon="arrowRight" />
                  <span>{edge.node.descendant.title}</span>
                </Styled.UnitLink>
              </Styled.ListItem>
            ))}
          </Styled.UnitsList>
        </Styled.TextColumn>
        {image && (
          <Styled.ImageColumn>
            <Styled.ImageWrapper>
              <Styled.Image
                role="presentation"
                alt={image.alt || ""}
                src={image.url}
                layout="fill"
                objectFit="contain"
                objectPosition="top"
              />
            </Styled.ImageWrapper>
          </Styled.ImageColumn>
        )}
      </Styled.Inner>
    </section>
  ) : null;
}

type Props = {
  data?: ResearchUnitsListFragment$key | null;
};

const fragment = graphql`
  fragment ResearchUnitsListFragment on EntityDescendantConnection {
    edges {
      node {
        descendant {
          ... on Collection {
            title
          }
        }
      }
    }
  }
`;
