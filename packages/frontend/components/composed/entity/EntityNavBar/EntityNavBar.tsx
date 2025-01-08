"use client";

import classNames from "classnames";
import { graphql, useFragment } from "react-relay";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { markdownToTxt } from "markdown-to-txt";
import { Search } from "components/forms";
import { EntityNavBarFragment$key } from "@/relay/EntityNavBarFragment.graphql";
import { useSharedInlineFragment } from "@/components/templates/shared/shared.slots.graphql";
import EntityNavList from "./EntityNavList";
import styles from "./EntityNavBar.module.css";

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
    <nav className={classNames("a-bg-custom20", styles.nav)}>
      <div className={classNames("l-container-wide", styles.inner)}>
        <div className={styles.left}>
          {enableDescendantBrowsing && <EntityNavList data={entity} />}
        </div>
        {!hideSearch && (
          <div className={styles.right}>
            {enableDescendantSearch && (
              <Search
                pathname={`/collections/${entity.slug}/search`}
                id="entitySearch"
                placeholder={placeholder}
              />
            )}
          </div>
        )}
      </div>
    </nav>
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
