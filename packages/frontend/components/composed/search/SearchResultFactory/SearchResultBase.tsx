import React from "react";
import * as Styled from "./SearchResultBase.styles";
import { NamedLink } from "components/atomic";

type LinkProps = React.ComponentProps<typeof NamedLink>;

export default function SearchResultBase({
  type,
  title,
  description,
  metadata,
  image,
  route,
  routeParams,
}: Props) {
  return (
    <Styled.Wrapper>
      <Styled.Text>
        {type && <Styled.Type className="t-label-sm">{type}</Styled.Type>}
        <h4>
          <NamedLink route={route} routeParams={routeParams}>
            {title}
          </NamedLink>
        </h4>
        {description && (
          <Styled.Description as="p" className="t-copy-sm a-color-light">
            {description}
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
          <NamedLink route={route} routeParams={routeParams} passHref>
            <a tabIndex={-1}>{image}</a>
          </NamedLink>
        </Styled.Image>
      )}
    </Styled.Wrapper>
  );
}

interface Props {
  type?: string;
  title: React.ReactNode;
  description?: string | null;
  metadata?: React.ReactNode;
  image?: React.ReactNode;
  route: LinkProps["route"];
  routeParams?: LinkProps["routeParams"];
}
