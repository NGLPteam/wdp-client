import { Markdown, NamedLink } from "components/atomic";
import * as Styled from "./SearchResultBase.styles";

export default function SearchResultBase({
  type,
  title,
  description,
  metadata,
  image,
  href,
}: Props) {
  return (
    <Styled.Wrapper>
      <Styled.Text>
        {type && <Styled.Type className="t-label-sm">{type}</Styled.Type>}
        <h4>
          <NamedLink href={href}>
            <Markdown.Title>{title}</Markdown.Title>
          </NamedLink>
        </h4>
        {description && (
          <Styled.Description className="t-copy-sm a-color-light">
            <Markdown.Summary>{description}</Markdown.Summary>
          </Styled.Description>
        )}
        {metadata && (
          <Styled.Metadata className="t-copy-sm a-color-lighter">
            {metadata}
          </Styled.Metadata>
        )}
      </Styled.Text>
      {image && (
        // Because the title is an accessible link and the image is presentational,
        // we can hide this link from screen readers and focus elements
        <Styled.Image aria-hidden="true">
          <NamedLink href={href} tabIndex={-1}>
            {image}
          </NamedLink>
        </Styled.Image>
      )}
    </Styled.Wrapper>
  );
}

interface Props {
  type?: string;
  title: string;
  description?: string | null;
  metadata?: React.ReactNode;
  image?: React.ReactNode;
  href: string;
}
