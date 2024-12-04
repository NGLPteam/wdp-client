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
  const slots = useFragment(fragment, data);

  const header = useSharedInlineFragment(slots?.header);
  const headerAside = useSharedInlineFragment(slots?.headerAside);
  const summary = useSharedBlockFragment(slots?.summary);

  return (
    <div className={styles.left}>
      {header?.valid && !!header.content && (
        <h1 className="t-h2">
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
      {!!summary?.content && summary.valid && (
        <h2 className="t-h3">
          <InlineSlotWrapper content={summary.content} />
        </h2>
      )}
    </div>
  );
}

const fragment = graphql`
  fragment HeaderTitleBlockFragment on HeroTemplateInstanceSlots {
    header {
      ...sharedInlineSlotFragment
    }
    headerAside {
      ...sharedInlineSlotFragment
    }
    summary {
      ...sharedBlockSlotFragment
    }
  }
`;
