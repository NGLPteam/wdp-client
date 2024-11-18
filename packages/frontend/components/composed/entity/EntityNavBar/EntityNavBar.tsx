"use client";

import { graphql } from "react-relay";
import { usePathname } from "next/navigation";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useTranslation } from "react-i18next";
import { Search } from "components/forms";
import { EntityNavBarFragment$key } from "@/relay/EntityNavBarFragment.graphql";
import EntityNavList from "./EntityNavList";
import * as Styled from "./EntityNavBar.styles";

export default function EntityNavBar({
  data,
  showBrowse = true,
  showSearch = true,
  searchPrompt,
}: Props) {
  const { t } = useTranslation();
  const entity = useMaybeFragment(fragment, data);

  const pathname = usePathname();
  const hideSearch = pathname.includes("search");

  return entity ? (
    <Styled.Nav className="a-bg-custom20" as="nav">
      <Styled.NavInner className="l-container-wide">
        <Styled.LeftSide>
          {showBrowse && <EntityNavList data={entity} />}
        </Styled.LeftSide>
        {!hideSearch && (
          <Styled.RightSide>
            {showSearch && (
              <Search
                pathname={`/collections/${entity.slug}/search`}
                id="entitySearch"
                placeholder={
                  searchPrompt ??
                  t("search.placeholder_name", {
                    name: entity.title,
                  })
                }
              />
            )}
          </Styled.RightSide>
        )}
      </Styled.NavInner>
    </Styled.Nav>
  ) : null;
}

type Props = {
  data?: EntityNavBarFragment$key | null;
  showBrowse?: boolean | null;
  showSearch?: boolean | null;
  searchPrompt?: string | null;
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
