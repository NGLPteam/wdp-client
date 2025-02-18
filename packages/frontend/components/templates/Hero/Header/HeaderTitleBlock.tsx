import { graphql, useFragment } from "react-relay";
import classNames from "classnames";
import type { HeroImageLayout } from "@/types/graphql-schema";
import {
  useSharedBlockFragment,
  useSharedInlineFragment,
} from "@/components/templates/shared/shared.slots.graphql";
import { HeaderTitleBlockFragment$key } from "@/relay/HeaderTitleBlockFragment.graphql";
import InlineSlotWrapper from "@/components/templates/mdx/InlineSlotWrapper";
import styles from "./Header.module.css";

type TitleBlockProps = {
  data?: HeaderTitleBlockFragment$key | null;
  layout?: HeroImageLayout;
};

export default function TitleBlock({ data, layout }: TitleBlockProps) {
  const template = useFragment(fragment, data);

  const { slots } = template ?? {};

  const header = useSharedInlineFragment(slots?.header);
  const headerSubtitle = useSharedInlineFragment(slots?.headerSubtitle);
  const headerAside = useSharedInlineFragment(slots?.headerAside);
  const headerSummary = useSharedBlockFragment(slots?.headerSummary);

  return (
    <div className={styles.left}>
      {header?.valid && !!header.content && (
        <h1 className={layout ? "" : "t-h2"}>
          <InlineSlotWrapper content={header.content} />
        </h1>
      )}
      {!!headerAside?.content && headerAside.valid && (
        <span
          className={classNames(styles.aside, {
            [styles["aside--in-columns"]]: !!layout,
          })}
        >
          <InlineSlotWrapper content={headerAside.content} />
        </span>
      )}
      {!!headerSubtitle?.content && headerSubtitle.valid && (
        <span className={styles.subtitle}>
          <InlineSlotWrapper content={headerSubtitle.content} />
        </span>
      )}
      {!!headerSummary?.content && headerSummary.valid && (
        <p className="t-h3">
          <InlineSlotWrapper content={headerSummary.content} />
        </p>
      )}
    </div>
  );
}

const fragment = graphql`
  fragment HeaderTitleBlockFragment on HeroTemplateInstance {
    slots {
      header {
        ...sharedInlineSlotFragment
      }
      headerSubtitle {
        ...sharedInlineSlotFragment
      }
      headerAside {
        ...sharedInlineSlotFragment
      }
      headerSummary {
        ...sharedBlockSlotFragment
      }
    }
  }
`;
