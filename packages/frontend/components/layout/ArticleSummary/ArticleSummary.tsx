import React from "react";
import * as Styled from "./ArticleSummary.styles";

/**
 * Sets some of the base styling for title, subittle, summary, etc.
 * Nearly all properties are react nodes so any links or lists can be used.
 */
export default function ArticleSummary({
  title,
  subtitle,
  summary,
  contributors,
  metadata,
  thumbnail,
  readMore,
}: Props) {
  return (
    <Styled.Wrapper>
      <Styled.Text>
        <Styled.Headers>
          {title && <h4>{title}</h4>}
          {subtitle && (
            <h5 className="t-copy-italic t-copy-lighter">{subtitle}</h5>
          )}
        </Styled.Headers>
        {(contributors || metadata) && (
          <Styled.Metadata>
            {contributors && (
              <p className="t-copy-sm t-copy-medium">{contributors}</p>
            )}
            {metadata && <p className="t-copy-sm t-copy-lighter">{metadata}</p>}
          </Styled.Metadata>
        )}
        {summary && (
          <Styled.Summary className="t-copy-lighter">{summary}</Styled.Summary>
        )}
        {readMore}
      </Styled.Text>
      {thumbnail && <Styled.Thumbnail>{thumbnail}</Styled.Thumbnail>}
    </Styled.Wrapper>
  );
}

interface Props {
  title?: React.ReactNode;
  subtitle?: string | null;
  summary?: React.ReactNode | null;
  contributors?: React.ReactNode | null;
  metadata?: React.ReactNode | null;
  thumbnail?: React.ReactNode | null;
  readMore?: React.ReactNode | null;
}
