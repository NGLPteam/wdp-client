import { graphql, useFragment } from "react-relay";
import classNames from "classnames";
import type { HeroImageLayout } from "@/types/graphql-schema";
import { ImageHeroTemplateFragment$key } from "@/relay/ImageHeroTemplateFragment.graphql";
import { generateSrcSet, sizes } from "@/helpers/generateSrcSet";
import styles from "./Image.module.css";
import type { ImageSize } from "types/graphql-schema";

export default function HeroImage({
  data,
  layout,
}: {
  data: ImageHeroTemplateFragment$key | null;
  layout?: HeroImageLayout;
}) {
  const images = useFragment(fragment, data);

  const { url, alt, height, width } = images?.hero?.webp ?? {};

  return images && url ? (
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
        srcSet={generateSrcSet(images as unknown as Record<string, ImageSize>)}
        sizes={sizes}
        height={height ?? 425}
        width={width ?? 585}
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
    large {
      webp {
        url
        width
      }
    }
    medium {
      webp {
        url
        width
      }
    }
  }
`;
