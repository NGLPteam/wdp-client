import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useTranslation } from "react-i18next";
import { Link, NamedLink } from "components/atomic";
import {
  FeaturedUnitsFragment$data,
  FeaturedUnitsFragment$key,
} from "@/relay/FeaturedUnitsFragment.graphql";
import * as Styled from "./FeaturedUnits.styles";

export default function FeaturedUnitsList({ data }: Props) {
  const collections = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  const image = {
    alt: "",
    url: `/images/placeholders/waves.png`,
  };

  return collections?.entities.length ? (
    <section className="a-bg-neutral90">
      <Styled.Inner className="l-container-wide">
        <Styled.TextColumn>
          <Styled.HeaderBlock>
            <h3>{t("layouts.featured_research_units")}</h3>
          </Styled.HeaderBlock>
          <Styled.UnitsList className="t-copy-medium">
            {collections.entities.map((node: Node) =>
              node.slug ? (
                <Styled.UnitsListItem key={node.slug}>
                  <NamedLink href={`/collections/${node.slug}`}>
                    <Link as="span">{node.title}</Link>
                  </NamedLink>
                </Styled.UnitsListItem>
              ) : null,
            )}
          </Styled.UnitsList>
        </Styled.TextColumn>
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
      </Styled.Inner>
    </section>
  ) : null;
}

interface Props {
  data?: FeaturedUnitsFragment$key | null;
  header?: string;
}

type Node = FeaturedUnitsFragment$data["entities"][number];

const fragment = graphql`
  fragment FeaturedUnitsFragment on EntitiesProperty {
    entities {
      ... on Sluggable {
        slug
      }
      ... on Entity {
        title
      }
    }
  }
`;
