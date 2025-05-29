import { graphql, useFragment } from "react-relay";
import classNames from "classnames";
import type { HeroImageLayout } from "@/types/graphql-schema";
import { ImageHeroTemplateFragment$key } from "@/relay/ImageHeroTemplateFragment.graphql";
import styles from "./Image.module.css";

export default function HeroImage({
  data,
  layout,
}: {
  data: ImageHeroTemplateFragment$key | null;
  layout?: HeroImageLayout;
}) {
  const { hero } = useFragment(fragment, data) ?? {};

  const { url, alt } = hero?.webp ?? {};

  return url ? (
    <div
      className={
        layout
          ? classNames(styles.gridWrapper, {
              [styles["gridWrapper--two-column"]]: layout === "TWO_COLUMN",
            })
          : styles.baseWrapper
      }
    >
      <img
        alt={alt ?? ""}
        src={url}
        className={classNames(styles.image, {
          [styles["image--one-column"]]: layout === "ONE_COLUMN",
        })}
        decoding="async"
        loading="eager"
      />
    </div>
  ) : null;
}

const fragment = graphql`
  fragment ImageHeroTemplateFragment on ImageAttachment {
    hero {
      webp {
        url
        alt
        width
        height
      }
    }
  }
`;
