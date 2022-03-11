import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { FullTextFragment$key } from "@/relay/FullTextFragment.graphql";
import { Markdown } from "components/atomic";

export default function FullText({ data }: Props) {
  const contentData = useMaybeFragment(fragment, data);

  const fullText = contentData?.fullText;

  if (!fullText?.content) return null;

  switch (fullText.kind) {
    case "HTML":
      return (
        <div
          className="t-rte"
          dangerouslySetInnerHTML={{ __html: fullText.content }}
        />
      );

    default:
      return (
        <Markdown.Base className="t-rte">{fullText.content}</Markdown.Base>
      );
  }
}

interface Props {
  data?: FullTextFragment$key | null;
}

const fragment = graphql`
  fragment FullTextFragment on AnySchemaProperty {
    ... on FullTextProperty {
      fullText {
        content
        kind
        lang
      }
      type
    }
  }
`;
