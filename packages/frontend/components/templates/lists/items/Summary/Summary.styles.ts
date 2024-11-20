import styled, { css } from "styled-components";
import { respond, tLabel } from "theme/mixins";
import { pxToRem } from "@wdp/lib/theme/functions";
import ReadMoreLink from "@/components/atomic/links/Link/patterns/ReadMoreLink";

export const Item = styled.li`
  display: grid;
  gap: var(--padding-lg);
  grid-template:
    "thumbnail text" auto
    / auto 1fr;

  ${respond(
    css`
      grid-template:
        "thumbnail" auto
        "text" auto
        / auto;
    `,
    50,
  )}

  & + & {
    padding-block-start: var(--padding-xl);
  }
`;

export const CoverImage = styled.div`
  grid-area: thumbnail;
  min-width: 120px;

  ${respond(
    css`
      max-width: 160px;
    `,
    50,
  )}
`;

export const TextContent = styled.div`
  grid-area: text;
  flex: 1 1 100%;
  font-size: var(--font-size-base-sm);
`;

export const ContextOne = styled.span``;

export const Header = styled.h4`
  margin-block-start: 0.75rem;
`;

export const Subheader = styled.span`
  display: block;
  font-size: var(--font-size-base);
  color: var(--color-base-neutral70);
  margin-block-start: 0.5rem;
`;

export const Contributors = styled.span`
  display: block;
  margin-block-start: 0.5rem;
`;

export const Summary = styled.p`
  margin-block-start: 0.75rem;
  color: var(--color-base-neutral70);
`;

export const Group = styled.div`
  color: var(--color-base-neutral70);

  > span {
    display: block;
  }

  > * + * {
    margin-block-start: 0.25rem;
  }

  &:not(:first-child) {
    margin-block-start: 0.5rem;
  }
`;

export const ReadMore = styled(ReadMoreLink)`
  margin-block-start: ${pxToRem(10)};
  ${tLabel("sm")}
`;
