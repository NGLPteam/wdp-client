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

  const { showHeroImage, showBigSearchPrompt } = template?.definition ?? {};

  const bigSearchPrompt = useSharedInlineFragment(
    template?.slots?.bigSearchPrompt,
  ) ?? { content: t("search.community_placeholder") };

  return isMain ? (
    <>
      <section
        className={
          heroImageLayout === "ONE_COLUMN" ? "a-bg-neutral90" : "a-bg-custom20"
        }
      >
        <div className={styles.grid}>
          <HeroHeader data={template} layout={heroImageLayout} />
          {showHeroImage && entity?.heroImage && (
            <HeroImage data={entity?.heroImage} layout={heroImageLayout} />
          )}
        </div>
      </section>
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
      }
      ...HeaderHeroFragment
    }
  }
`;
