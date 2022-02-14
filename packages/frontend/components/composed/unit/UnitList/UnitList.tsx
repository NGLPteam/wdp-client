import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useTranslation } from "react-i18next";
import * as Styled from "./UnitList.styles";
import { Link, NamedLink } from "components/atomic";
import { UnitListFragment$key } from "@/relay/UnitListFragment.graphql";

export default function ResearchUnitsList({ data }: Props) {
  const units = useMaybeFragment(fragment, data);
  const { t } = useTranslation();
  const image = {
    alt: "",
    url: `/images/placeholders/waves.png`,
  };

  return units?.edges.length ? (
    <section className="a-bg-neutral90">
      <Styled.Inner className="l-container-wide">
        <Styled.TextColumn>
          <Styled.HeaderBlock>
            <h3>{t("layouts.research_units")}</h3>
          </Styled.HeaderBlock>
          <Styled.UnitsList className="t-copy-medium">
            {units.edges.map((edge) =>
              edge.node.descendant.slug ? (
                <Styled.UnitsListItem key={edge.node.descendant.slug}>
                  <NamedLink
                    route="collection"
                    routeParams={{ slug: edge.node.descendant.slug }}
                    passHref
                  >
                    <Link>{edge.node.descendant.title}</Link>
                  </NamedLink>
                </Styled.UnitsListItem>
              ) : null
            )}
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
  data?: UnitListFragment$key | null;
};

const fragment = graphql`
  fragment UnitListFragment on EntityDescendantConnection {
    edges {
      node {
        descendant {
          ... on Collection {
            title
            slug
          }
        }
      }
    }
  }
`;
