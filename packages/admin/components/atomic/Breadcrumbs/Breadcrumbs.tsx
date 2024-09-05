import React, { useMemo } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Dropdown } from "components/atomic";
import CICBreadcrumbs from "./CICBreadcrumbs";
type LinkProps = React.ComponentProps<typeof Link>;

interface Crumbs extends LinkProps {
  label: string;
  $closeDropdown?: () => void;
}

const BreadcrumbsWrapper = ({
  className = "breadcrumbs",
  data,
  delimiter = " / ",
  ...args
}: {
  className?: string;
  data: Crumbs[];
  delimiter?: string;
}) => {
  const classes = {
    ol: `${className}__ol`,
    li: `${className}__li`,
    delimiter: `${className}__delimiter`,
  };

  const { t } = useTranslation();

  // If the breadcrumb length is > 4, wrap middle breadcrumbs into a dropdown
  const items = useMemo(() => {
    if (!data) return [];

    const getLink = ({ label, href, $closeDropdown }: Crumbs, i: number) => (
      <Link
        key={i}
        href={href}
        className={`${className}__link`}
        legacyBehavior
        passHref
        onClick={$closeDropdown}
      >
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="t-copy-sm t-truncate">{label}</a>
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
        label={t("nav.breadcrumb_dropdown_label")}
        disclosure={<button>...</button>}
        menuItems={dropdownItems}
      />,
    );
    // Add last two items
    data
      .slice(data.length - 2, data.length)
      .map((o, i) => breadcrumbItems.push(getLink(o, i)));

    return breadcrumbItems;
  }, [data, className, t]);

  return items ? (
    <CICBreadcrumbs
      classes={classes}
      delimiter={delimiter}
      breadcrumbs={items}
      {...args}
    />
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

    &[data-focus-visible-added] {
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

    > span {
      display: inline-block;
      max-width: 350px;
      text-decoration: inherit;
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
  className?: string;
  data: Crumbs[];
  delimiter?: string;
}

export default Breadcrumbs;
