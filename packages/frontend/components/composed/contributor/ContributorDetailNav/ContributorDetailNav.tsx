"use client";

import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { graphql, useFragment } from "react-relay";
import { BackButton, NamedLink } from "components/atomic";
import { ContributorDetailNavFragment$key } from "@/relay/ContributorDetailNavFragment.graphql";
import styles from "./ContributorDetailNav.module.css";

export default function ContributorDetailNav({ data }: Props) {
  const entity = useFragment(fragment, data);
  const { t } = useTranslation();
  const route =
    entity?.__typename === "Item"
      ? "items"
      : entity?.__typename === "Collection"
        ? "collections"
        : null;

  return entity && entity.slug && route ? (
    <nav className="a-bg-custom10">
      <div className={classNames(styles.inner, "l-container-wide")}>
        <NamedLink href={`/${route}/${entity.slug}`}>
          <BackButton as="div">
            {t("common.back_to_name", { name: entity.title })}
          </BackButton>
        </NamedLink>
      </div>
    </nav>
  ) : null;
}

interface Props {
  data?: ContributorDetailNavFragment$key | null;
}

const fragment = graphql`
  fragment ContributorDetailNavFragment on AnyEntity {
    __typename

    ... on Entity {
      title
    }

    ... on Sluggable {
      slug
    }
  }
`;
