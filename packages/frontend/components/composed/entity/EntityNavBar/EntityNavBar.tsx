import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useTranslation } from "react-i18next";
import { Search } from "components/forms";
import { EntityNavBarFragment$key } from "@/relay/EntityNavBarFragment.graphql";
import EntityNavList from "./EntityNavList";
import * as Styled from "./EntityNavBar.styles";

export default function EntityNavBar({ data }: Props) {
  const { t } = useTranslation();
  const entity = useMaybeFragment(fragment, data);

  return entity ? (
    <Styled.Nav className="a-bg-custom20" as="nav">
      <Styled.NavInner className="l-container-wide">
        <Styled.LeftSide>
          <EntityNavList data={entity} />
        </Styled.LeftSide>
        <Styled.RightSide>
          <Search
            route="collection.search"
            id="entitySearch"
            placeholder={t("search.placeholder_name", {
              name: entity.title,
            })}
          />
        </Styled.RightSide>
      </Styled.NavInner>
    </Styled.Nav>
  ) : null;
}

type Props = {
  data?: EntityNavBarFragment$key | null;
};

const fragment = graphql`
  fragment EntityNavBarFragment on AnyEntity {
    ... on Node {
      id
    }
    ... on Sluggable {
      slug
    }
    ... on Entity {
      title
      ...EntityNavListFragment
    }
  }
`;
