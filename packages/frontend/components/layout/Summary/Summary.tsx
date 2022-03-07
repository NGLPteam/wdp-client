import React from "react";
import * as Styled from "./Summary.styles";
import { NamedLink, Link, ReadMoreLink } from "components/atomic";

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
  console.info("thumbnail", !!thumbnail);
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
                <Link>{title}</Link>
              </NamedLink>
            ) : (
              title
            )}
          </h4>
          {subtitle && (
            <h5 className="t-copy-italic t-copy-light">{subtitle}</h5>
          )}
        </Styled.Headers>
        {metadata && <Styled.Metadata>{metadata}</Styled.Metadata>}
        {summary && (
          <Styled.Summary className="t-copy-lighter">{summary}</Styled.Summary>
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
  /** Title - can have inner HTML */
  title?: React.ReactNode;
  /** Subtitle - can have inner HTML */
  subtitle?: React.ReactNode;
  /** Metadata */
  metadata?: React.ReactNode;
  /** Summary */
  summary?: React.ReactNode;
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
