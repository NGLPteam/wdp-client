import { NamedLink, ReadMoreLink, Markdown } from "components/atomic";
import * as Styled from "./Summary.styles";

export default function Summary({
  title,
  subtitle,
  metadata,
  summary,
  thumbnail,
  thumbnailRight,
  href,
  showReadMore,
}: Props) {
  return (
    <Styled.Wrapper
      $thumbnailRight={thumbnailRight}
      $hasThumbnail={!!thumbnail}
    >
      {thumbnail && (
        <Styled.Thumbnail>
          {href ? (
            <NamedLink href={href}>
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
            {href ? (
              <NamedLink href={href} className="default-link-styles">
                <Markdown.Title>{title}</Markdown.Title>
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
        {showReadMore && href && (
          <NamedLink href={href}>
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
  /** Show read more link */
  showReadMore?: boolean;
  href?: string;
}
