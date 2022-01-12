import React, { useState, useEffect, useRef } from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import * as Styled from "./HowToCite.styles";
import { Button } from "components/atomic";
import { HowToCiteFragment$key } from "@/relay/HowToCiteFragment.graphql";

export default function HowToCite({ data }: Props) {
  const result = useMaybeFragment(fragment, data);
  const citation = result?.citation?.content;
  const { t } = useTranslation();
  const [content, setContent] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      setContent(ref.current.innerText);
    }
  }, [ref]);

  return citation ? (
    <Styled.Outer className="a-bg-custom10">
      <Styled.Inner className="l-container-wide">
        <Styled.TextBlock>
          <h4>{t("layouts.how_to_cite")}</h4>
          <div ref={ref}>
            <ReactMarkdown className="t-rte t-copy-sm t-copy-lighter">
              {citation}
            </ReactMarkdown>
          </div>
        </Styled.TextBlock>
        <Button
          icon="copy"
          iconLeft
          secondary
          size="sm"
          onClick={() => navigator.clipboard.writeText(content)}
        >
          {t("actions.copy_citation")}
        </Button>
      </Styled.Inner>
    </Styled.Outer>
  ) : null;
}

type Props = {
  data?: HowToCiteFragment$key | null;
};

const fragment = graphql`
  fragment HowToCiteFragment on Item {
    citation: schemaProperty(fullPath: "citation") {
      ... on MarkdownProperty {
        content
      }
    }
  }
`;
