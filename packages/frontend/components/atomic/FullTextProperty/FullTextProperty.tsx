import React from "react";
import { graphql } from "react-relay";
import ReactMarkdown from "react-markdown";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { FullTextPropertyFragment$key } from "@/relay/FullTextPropertyFragment.graphql";

export default function FullTextProperty({ data }: Props) {
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

    case "MARKDOWN":
      return (
        <ReactMarkdown className="t-rte">{fullText.content}</ReactMarkdown>
      );

    default:
      return <>{fullText.content}</>;
  }
}

interface Props {
  data?: FullTextPropertyFragment$key | null;
}

const fragment = graphql`
  fragment FullTextPropertyFragment on AnySchemaProperty {
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
