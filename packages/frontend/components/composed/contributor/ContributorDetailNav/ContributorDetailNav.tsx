import React, { useMemo } from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import { BackButton, NamedLink } from "components/atomic";
import { ContributorDetailNavFragment$key } from "@/relay/ContributorDetailNavFragment.graphql";
import * as Styled from "./ContributorDetailNav.styles";

export default function ContributorDetailNav({ data }: Props) {
  const entity = useMaybeFragment(fragment, data);
  const { t } = useTranslation();
  const route = useMemo(
    () =>
      entity?.__typename === "Item"
        ? "item"
        : entity?.__typename === "Collection"
          ? "collection"
          : null,
    [entity],
  );

  return entity && entity.slug && route ? (
    <nav className="a-bg-custom10">
      <Styled.NavInner className="l-container-wide">
        <NamedLink route={route} routeParams={{ slug: entity.slug }} passHref>
          <BackButton>
            {t("common.back_to_name", { name: entity.title })}
          </BackButton>
        </NamedLink>
      </Styled.NavInner>
    </nav>
  ) : null;
}

interface Props {
  data?: ContributorDetailNavFragment$key | null;
}

const fragment = graphql`
  fragment ContributorDetailNavFragment on AnyEntity {
    __typename

    ... on Entity {
      title
    }

    ... on Sluggable {
      slug
    }
  }
`;
