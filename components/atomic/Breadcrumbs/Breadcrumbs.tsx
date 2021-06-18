import styled from "styled-components";
import CICBreadcrumbs from "@castiron/components-breadcrumbs";
import { data as defaultData } from "./Breadcrumbs.data";

const BreadcrumbsWrapper = ({
  className = "breadcrumbs",
  data = defaultData,
  delimiter = " / ",
  ...args
}) => {
  const classes = {
    ol: `${className}__ol`,
    li: `${className}__li`,
    delimiter: `${className}__delimiter`,
  };

  return (
    <CICBreadcrumbs classes={classes} delimiter={delimiter} {...args}>
      {data.map(({ label, ...props }, i) => (
        <a className={`${className}__link`} key={i} {...props}>
          {label}
        </a>
      ))}
    </CICBreadcrumbs>
  );
};

const Breadcrumbs = styled(BreadcrumbsWrapper)<Props>`
  &__ol {
    display: flex;
    list-style: none;
    margin-bottom: 36px;
  }

  &__li {
    &:focus-visible {
      outline: 0;
    }
  }

  &__link {
    font-size: var(--font-size-sm);
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

interface Props {
  className: string;
  data: Record<string, string>[];
  delimiter: string;
}

export default Breadcrumbs;
