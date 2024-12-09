"use client";

import { graphql, useFragment } from "react-relay";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { markdownToTxt } from "markdown-to-txt";
import { Search } from "components/forms";
import { EntityNavBarFragment$key } from "@/relay/EntityNavBarFragment.graphql";
import { useSharedInlineFragment } from "@/components/templates/shared/shared.slots.graphql";
import EntityNavList from "./EntityNavList";
import * as Styled from "./EntityNavBar.styles";

export default function EntityNavBar({ data }: Props) {
  const { t } = useTranslation();
  const entity = useFragment(fragment, data);

  const hero = entity?.layouts?.hero;

  const { enableDescendantSearch, enableDescendantBrowsing } =
    hero?.template?.definition ?? {};

  const descendantSearchPrompt = useSharedInlineFragment(
    hero?.template?.slots.descendantSearchPrompt,
  );

  const pathname = usePathname();
  const hideSearch = pathname.includes("search");

  const canRender =
    !!entity && (enableDescendantSearch || enableDescendantBrowsing);

  const placeholder =
    descendantSearchPrompt?.valid && !!descendantSearchPrompt?.content
      ? markdownToTxt(descendantSearchPrompt?.content)
      : t("search.placeholder_name", {
          name: entity?.title,
        });

  return canRender ? (
    <Styled.Nav className="a-bg-custom20" as="nav">
      <Styled.NavInner className="l-container-wide">
        <Styled.LeftSide>
          {enableDescendantBrowsing && <EntityNavList data={entity} />}
        </Styled.LeftSide>
        {!hideSearch && (
          <Styled.RightSide>
            {enableDescendantSearch && (
              <Search
                pathname={`/collections/${entity.slug}/search`}
                id="entitySearch"
                placeholder={placeholder}
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
      layouts {
        hero {
          template {
            definition {
              enableDescendantBrowsing
              enableDescendantSearch
            }
            slots {
              descendantSearchPrompt {
                ...sharedInlineSlotFragment
              }
            }
          }
        }
      }
    }
  }
`;
