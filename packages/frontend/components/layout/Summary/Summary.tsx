import React from "react";
import { NamedLink, Link, ReadMoreLink, Markdown } from "components/atomic";
import * as Styled from "./Summary.styles";

type LinkProps = React.ComponentProps<typeof NamedLink>;

export default function Summary({
  title,
  subtitle,
  metadata,
  summary,
  thumbnail,
  thumbnailRight,
  route,
  routeParams = {},
  showReadMore,
}: Props) {
  return (
    <Styled.Wrapper
      $thumbnailRight={thumbnailRight}
      $hasThumbnail={!!thumbnail}
    >
      {thumbnail && (
        <Styled.Thumbnail>
          {route ? (
            <NamedLink route={route} routeParams={routeParams} passHref>
              <Styled.ThumbnailLink>{thumbnail}</Styled.ThumbnailLink>
            </NamedLink>
          ) : (
            thumbnail
          )}
        </Styled.Thumbnail>
      )}
      <Styled.Text>
        <Styled.Headers>
          <h4>
            {route ? (
              <NamedLink route={route} routeParams={routeParams} passHref>
                <Link>
                  <Markdown.Title>{title}</Markdown.Title>
                </Link>
              </NamedLink>
            ) : (
              <Markdown.Title>title</Markdown.Title>
            )}
          </h4>
          {subtitle && (
            <h5 className="t-copy-italic t-copy-light">
              <Markdown.Title>{subtitle}</Markdown.Title>
            </h5>
          )}
        </Styled.Headers>
        {metadata && <Styled.Metadata>{metadata}</Styled.Metadata>}
        {summary && (
          <Styled.Summary className="t-copy-lighter">
            <Markdown.Summary>{summary}</Markdown.Summary>
          </Styled.Summary>
        )}
        {showReadMore && route && (
          <NamedLink route={route} routeParams={routeParams} passHref>
            <Styled.ReadMore as={ReadMoreLink} />
          </NamedLink>
        )}
      </Styled.Text>
    </Styled.Wrapper>
  );
}

interface Props {
  /** Title - must be a string */
  title?: string | null;
  /** Subtitle - must be a string */
  subtitle?: string | null;
  /** Metadata */
  metadata?: React.ReactNode;
  /** Summary */
  summary?: string | null;
  /** Thumbnail */
  thumbnail?: React.ReactNode;
  /** Position the thumbnail on the right */
  thumbnailRight?: boolean;
  /** Link route */
  route?: LinkProps["route"];
  /** Link route params */
  routeParams?: LinkProps["routeParams"];
  /** Show read more link */
  showReadMore?: boolean;
}
