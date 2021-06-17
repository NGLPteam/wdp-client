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
        <a key={i} {...props}>
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
    a {
      font-size: var(--font-size-sm);
      color: var(--neutral50);
      &:hover {
        color: var(--brand70);
        text-decoration: underline;
      }
    }

    &:focus-visible {
      outline: 0;
    }
    &:last-of-type a {
      color: var(--brand70);
      text-decoration: underline;
    }
  }
  &__delimiter {
    color: var(--neutral50);
    padding: 0 0.5rem;
  }
`;

interface Props {
  className: string;
  data: Record<string, string>[];
  delimiter: string;
}

export default Breadcrumbs;
