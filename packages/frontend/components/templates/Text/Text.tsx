// import { graphql, useFragment } from "react-relay";
// import { TextTemplateFragment$key } from "@/relay/TextTemplateFragment.graphql";
import Container from "@/components/layout/Container";
// import {
//   useSharedInlineFragment,
//   useSharedBlockFragment,
// } from "@/components/templates/shared/shared.slots.graphql";
import BlockSlotWrapper from "@/components/templates/mdx/BlockSlotWrapper";
import InlineSlotWrapper from "@/components/templates/mdx/InlineSlotWrapper";
import styles from "./Text.module.css";

export default function PagesListTemplate() {
  // const template = useFragment(fragment, data);

  const template = {
    textDefinition: {
      background: "LIGHT" as const,
      width: "FULL",
    },
    slots: {
      header: {
        valid: true,
        content: "How to Cite",
      },
      subheader: {
        valid: false,
        content: null,
      },
      body: {
        valid: true,
        content:
          "This is a test citation\n <CopyLink label='Copy Citation'>This is a test citation</CopyLink>",
      },
    },
  };

  const { textDefinition, slots } = template ?? {};

  const { width, background } = textDefinition ?? {};

  // const header = useSharedInlineFragment(slots?.header);
  // const subheader = useSharedInlineFragment(slots?.subheader);
  // const body = useSharedBlockFragment(slots?.body);

  const header = slots.header;
  const subheader = slots.subheader;
  const body = slots.body;

  return (
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
  );
}

// const fragment = graphql`
//   fragment TextTemplateFragment on TextTemplateInstance {
//     __typename
//     textDefinition: definition {
//       background
//       width
//     }
//     slots {
//       header {
//         ...sharedInlineSlotFragment
//       }
//       subheader {
//         ...sharedInlineSlotFragment
//       }
//       body {
//         ...sharedBlockSlotFragment
//       }
//     }
//   }
// `;
