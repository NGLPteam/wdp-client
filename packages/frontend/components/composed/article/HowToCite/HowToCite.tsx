import React, { useState, useEffect, useRef } from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useTranslation } from "react-i18next";
import { Button, Markdown } from "components/atomic";
import { HowToCiteFragment$key } from "@/relay/HowToCiteFragment.graphql";
import * as Styled from "./HowToCite.styles";

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
          {/* For a11y, this block should have a semantic heading of h3. In design, it's styled as an h4. */}
          <h3 className="t-h4">{t("layouts.how_to_cite")}</h3>
          <div ref={ref}>
            <Markdown.Summary className="t-rte t-copy-sm t-copy-lighter">
              {citation}
            </Markdown.Summary>
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
