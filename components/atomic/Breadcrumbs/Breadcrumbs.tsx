import React, { useMemo } from "react";
import styled from "styled-components";
import CICBreadcrumbs from "@castiron/components-breadcrumbs";
import { Dropdown } from "components/atomic";
import Link from "next/link";
import { useTranslation } from "react-i18next";
type LinkProps = React.ComponentProps<typeof Link>;

interface Crumbs extends LinkProps {
  label: string;
}

const BreadcrumbsWrapper = ({
  className = "breadcrumbs",
  data,
  delimiter = " / ",
  ...args
}: {
  className: string;
  data: Crumbs[];
  delimiter: string;
}) => {
  const classes = {
    ol: `${className}__ol`,
    li: `${className}__li`,
    delimiter: `${className}__delimiter`,
  };

  const { t } = useTranslation("common");

  // If the breadcrumb length is > 4, wrap middle breadcrumbs into a dropdown
  const items = useMemo(() => {
    if (!data) return [];

    const getLink = ({ label, href, ...props }: Crumbs, i: number) => (
      <Link key={i} href={href} {...props}>
        <a className={`${className}__link`}>
          <span className="t-copy-sm">{label}</span>
        </a>
      </Link>
    );

    if (data.length < 4) {
      return data.map(getLink);
    }

    const breadcrumbItems = [];
    const dropdownItems = data
      .filter((o, i) => i >= 1 && i < data.length - 2)
      .map(getLink);

    // Add the first item
    breadcrumbItems.push(getLink(data[0], 0));
    // Add dropdown
    breadcrumbItems.push(
      <Dropdown
        key={1}
        label={t("breadcrumb.dropdown.label")}
        disclosure={<button>...</button>}
        menuItems={dropdownItems}
      />
    );
    // Add last two items
    data
      .slice(data.length - 2, data.length)
      .map((o, i) => breadcrumbItems.push(getLink(o, i)));

    return breadcrumbItems;
  }, [data, className, t]);

  return data ? (
    <CICBreadcrumbs classes={classes} delimiter={delimiter} {...args}>
      {items}
    </CICBreadcrumbs>
  ) : null;
};

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

interface Props {
  className: string;
  data: Record<string, string>[];
  delimiter: string;
}

export default Breadcrumbs;
