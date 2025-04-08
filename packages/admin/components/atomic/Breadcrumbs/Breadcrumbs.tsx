import React, { useMemo } from "react";
import styled from "styled-components";
import { tTruncate } from "theme/mixins/typography";
import { respond } from "theme/mixins/base";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Dropdown } from "components/atomic";
import CICBreadcrumbs from "./CICBreadcrumbs";
type LinkProps = React.ComponentProps<typeof Link>;

interface Crumbs extends LinkProps {
  label: string;
  $closeDropdown?: () => void;
  inside?: boolean;
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

    const getLink = (
      { label, href, $closeDropdown, inside }: Crumbs,
      i: number,
    ) => {
      return (
        <Link
          key={i}
          href={href}
          legacyBehavior
          passHref
          onClick={$closeDropdown}
        >
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            className={`t-copy-sm t-truncate ${className}__link ${
              inside ? `${className}__link--inside` : ""
            }`}
          >
            {label}
          </a>
        </Link>
      );
    };

    if (data.length < 4) {
      return data.map(getLink);
    }

    const breadcrumbItems = [];
    const dropdownItems = data
      .filter((o, i) => i >= 1 && i < data.length - 2)
      .map((d) => ({ ...d, inside: true }))
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
        alignGlobal
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
    max-width: 100%;

    ${respond(`flex-wrap: wrap;`, "navBreak")}
  }

  &__li {
    display: flex;
    flex-basis: 25%;

    &:focus-visible {
      outline: 0;
    }

    ${respond(
      `flex-basis: auto; max-width: calc(100vw - (2 * var(--container-column-margin)));`,
      "navBreak",
    )}
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

    &--inside {
      ${respond(
        `white-space: normal !important;
        text-wrap: balance;`,
        "navBreak",
      )}
    }
  }

  &__li:last-of-type &__link {
    color: var(--accent-light);
    text-decoration: underline;
    flex-basis: 50%;
    ${tTruncate}

    ${respond(`flex-basis: auto;`, "navBreak")}
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
