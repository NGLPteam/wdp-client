import classNames from "classnames";
import { graphql, useFragment } from "react-relay";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { CommunityHeroHeaderFragment$key } from "@/relay/CommunityHeroHeaderFragment.graphql";
import SearchHero from "@/components/composed/search/SearchHero";
import { useSharedInlineFragment } from "@/components/templates/shared/shared.slots.graphql";
import HeroHeader from "../Header";
import HeroImage from "../Image";
import styles from "./patterns.module.css";

export default function CommunityHeroHeader({
  data,
}: {
  data?: CommunityHeroHeaderFragment$key | null;
}) {
  const { t } = useTranslation();

  const pathname = usePathname();
  const mainRegex = /^\/communities\/[A-Za-z0-9]{30,32}$/;

  const isMain = mainRegex.test(pathname);

  const layout = useFragment(fragment, data);

  const { template, entity } = layout ?? {};

  const { heroImageLayout } = entity ?? {};

  const { definition, slots } = template ?? {};

  const { showHeroImage, showBigSearchPrompt } = definition ?? {};

  const bigSearchPrompt = useSharedInlineFragment(
    template?.slots?.bigSearchPrompt,
  ) ?? { content: t("search.community_placeholder") };

  const hasTextContent =
    slots &&
    ((slots.header && !slots.header.empty) ||
      (slots.headerSummary && !slots.headerSummary.empty));

  const hasHeroImage = !!entity?.heroImage?.hero?.webp?.url;

  const bgClass = hasHeroImage
    ? showHeroImage && heroImageLayout === "ONE_COLUMN"
      ? "a-bg-neutral90"
      : "a-bg-custom20"
    : "a-bg-custom10";

  return isMain ? (
    <>
      {(hasTextContent || hasHeroImage) && (
        <section className={bgClass}>
          <div
            className={classNames(styles.grid, {
              [styles["grid--noImage"]]: !hasHeroImage,
            })}
          >
            {hasTextContent && (
              <HeroHeader data={template} layout={heroImageLayout} />
            )}
            {showHeroImage && hasHeroImage && (
              <HeroImage data={entity?.heroImage} layout={heroImageLayout} />
            )}
          </div>
        </section>
      )}
      {showBigSearchPrompt && <SearchHero prompt={bigSearchPrompt?.content} />}
    </>
  ) : null;
}

const fragment = graphql`
  fragment CommunityHeroHeaderFragment on HeroLayoutInstance {
    entity {
      ... on Community {
        heroImage {
          ...ImageHeroTemplateFragment
          hero {
            webp {
              url
            }
          }
        }
        heroImageLayout
      }
    }
    template {
      definition {
        showHeroImage
        showBigSearchPrompt
      }
      slots {
        bigSearchPrompt {
          ...sharedInlineSlotFragment
        }
        header {
          empty
        }
        headerSummary {
          empty
        }
      }
      ...HeaderHeroFragment
    }
  }
`;
