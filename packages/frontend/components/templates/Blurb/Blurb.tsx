import { graphql, useFragment } from "react-relay";
import { BlurbTemplateFragment$key } from "@/relay/BlurbTemplateFragment.graphql";
import Container from "@/components/layout/Container";
import {
  useSharedInlineFragment,
  useSharedBlockFragment,
} from "@/components/templates/shared/shared.slots.graphql";
import BlockSlotWrapper from "@/components/templates/mdx/BlockSlotWrapper";
import InlineSlotWrapper from "@/components/templates/mdx/InlineSlotWrapper";
import styles from "./Blurb.module.css";

export default function BlurbTemplate({
  data,
}: {
  data?: BlurbTemplateFragment$key | null;
}) {
  const template = useFragment(fragment, data);

  const { textDefinition, slots } = template ?? {};

  const { width, background } = textDefinition ?? {};

  const header = useSharedInlineFragment(slots?.header);
  const subheader = useSharedInlineFragment(slots?.subheader);
  const body = useSharedBlockFragment(slots?.body);

  return !body?.content ? (
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
    textDefinition: definition {
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
