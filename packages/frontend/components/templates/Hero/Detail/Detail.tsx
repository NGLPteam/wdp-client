import { graphql, useFragment } from "react-relay";
import classNames from "classnames";
import { DetailHeroFragment$key } from "@/relay/DetailHeroFragment.graphql";
import CoverImage from "./DetailCoverImage";
import Content from "./DetailContent";
import Sidebar from "./DetailSidebar";
import styles from "./Detail.module.css";

type HeroDetailProps = {
  data?: DetailHeroFragment$key | null;
};

export default function HeroDetail({ data }: HeroDetailProps) {
  const template = useFragment(fragment, data);

  const { definition, entity } = template ?? {};

  return (
    <div className={styles.columns}>
      <div
        className={classNames(styles.left, {
          [styles["left--wide"]]: !!definition?.showThumbnailImage,
        })}
      >
        {definition?.showThumbnailImage && (
          <div className={styles.thumbnail}>
            <CoverImage data={entity} />
          </div>
        )}
        <Content data={template} />
      </div>
      <Sidebar data={template} />
    </div>
  );
}

const fragment = graphql`
  fragment DetailHeroFragment on HeroTemplateInstance {
    entity {
      ...DetailCoverImageFragment
    }
    definition {
      showThumbnailImage
    }
    ...DetailContentFragment
    ...DetailSidebarFragment
  }
`;
