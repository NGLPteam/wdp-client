import styled from "styled-components";
import BreadcrumbsWrapper from "./Breadcrumbs";
type Props = React.ComponentProps<typeof BreadcrumbsWrapper>;

const Breadcrumbs = styled(BreadcrumbsWrapper)<Props>`
  &__ol {
    display: flex;
    list-style: none;
    margin-block-end: 36px;
    font-size: var(--font-size-sm);
  }

  &__li {
    display: flex;

    &:focus-visible {
      outline: 0;
    }
  }

  &__link {
    color: var(--color-light);
    transition: var(--color-transition);
    &:hover {
      color: var(--accent-color);
      text-decoration: underline;
    }
  }

  &__li:last-of-type &__link {
    color: var(--accent-light);
    text-decoration: underline;
  }

  &__delimiter {
    color: var(--neutral60);
    padding: 0 0.5rem;
  }
`;

export default Breadcrumbs;
