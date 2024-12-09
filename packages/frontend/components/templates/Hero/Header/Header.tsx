import { graphql, useFragment } from "react-relay";
import classNames from "classnames";
import type { HeroImageLayout } from "@/types/graphql-schema";
import { HeaderHeroFragment$key } from "@/relay/HeaderHeroFragment.graphql";
import TitleBlock from "./HeaderTitleBlock";
import Sidebar from "./HeaderSidebar";
import styles from "./Header.module.css";

export default function HeroHeader({
  data,
  layout,
}: {
  data?: HeaderHeroFragment$key | null;
  layout?: HeroImageLayout;
}) {
  const template = useFragment(fragment, data);

  const { slots } = template ?? {};

  return template ? (
    <div
      className={
        layout
          ? classNames(styles.columns, {
              [styles["columns--two-column"]]: layout === "TWO_COLUMN",
            })
          : styles.inner
      }
    >
      <TitleBlock layout={layout} data={slots} />
      <Sidebar data={template} />
    </div>
  ) : null;
}

const fragment = graphql`
  fragment HeaderHeroFragment on HeroTemplateInstance {
    ...HeaderSidebarFragment
    slots {
      ...HeaderTitleBlockFragment
    }
  }
`;
