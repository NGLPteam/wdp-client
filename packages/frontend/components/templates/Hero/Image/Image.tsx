import { graphql, useFragment } from "react-relay";
import classNames from "classnames";
import Image from "next/legacy/image";
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
  const heroImage = useFragment(fragment, data);

  const src = heroImage?.hero?.webp?.url;

  return src ? (
    <div
      className={
        layout
          ? classNames(styles.gridWrapper, {
              [styles["gridWrapper--two-column"]]: layout === "TWO_COLUMN",
            })
          : styles.baseWrapper
      }
    >
      <Image
        alt=""
        src={src}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        {...(heroImage.thumb?.webp?.url && {
          placeholder: "blur",
          blurDataURL: heroImage.thumb.webp.url,
        })}
        className={
          layout === "ONE_COLUMN" ? styles["image--one-column"] : undefined
        }
      />
    </div>
  ) : null;
}

const fragment = graphql`
  fragment ImageHeroTemplateFragment on ImageAttachment {
    storage
    hero {
      webp {
        url
        width
        height
      }
    }
    thumb {
      webp {
        url
      }
    }
  }
`;
