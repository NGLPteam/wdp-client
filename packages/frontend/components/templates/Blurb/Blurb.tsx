import { graphql, useFragment } from "react-relay";
import { BlurbTemplateFragment$key } from "@/relay/BlurbTemplateFragment.graphql";
import Container from "@/components/layout/Container";
import {
  useSharedInlineFragment,
  useSharedBlockFragment,
} from "@/components/templates/shared/shared.slots.graphql";
import BlockSlotWrapper from "@/components/templates/mdx/BlockSlotWrapper";
import InlineSlotWrapper from "@/components/templates/mdx/InlineSlotWrapper";
import type { HeroBackground } from "@/types/graphql-schema";
import styles from "./Blurb.module.css";

export default function BlurbTemplate({
  data,
}: {
  data?: BlurbTemplateFragment$key | null;
  bgOverride?: HeroBackground | null;
}) {
  const template = useFragment(fragment, data);

  const { blurbDefinition, slots, hidden } = template ?? {};

  const { width, background } = blurbDefinition ?? {};

  const header = useSharedInlineFragment(slots?.header);
  const subheader = useSharedInlineFragment(slots?.subheader);
  const body = useSharedBlockFragment(slots?.body);

  return !hidden ? (
    <Container
      className={styles.container}
      bgColor={background}
      halfWidthTemplate={width === "HALF"}
    >
      <div className={styles.content}>
        {header?.valid && !!header.content && (
          <h3 className="t-h4">
            <InlineSlotWrapper content={header.content} />
          </h3>
        )}
        {subheader?.valid && !!subheader.content && (
          <span className="t-h5">
            <InlineSlotWrapper content={subheader.content} />
          </span>
        )}
        {body?.valid && !!body.content && (
          <div className="t-rte t-copy-sm t-copy-lighter">
            <BlockSlotWrapper content={body.content} />
          </div>
        )}
      </div>
    </Container>
  ) : null;
}

const fragment = graphql`
  fragment BlurbTemplateFragment on BlurbTemplateInstance {
    __typename
    hidden
    blurbDefinition: definition {
      background
      width
    }
    slots {
      header {
        ...sharedInlineSlotFragment
      }
      subheader {
        ...sharedInlineSlotFragment
      }
      body {
        ...sharedBlockSlotFragment
      }
    }
  }
`;
