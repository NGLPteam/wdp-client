"use client";

import { graphql, useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
import { PageCount, Pagination } from "components/atomic";
import { BrowseListLayoutFragment$key } from "@/relay/BrowseListLayoutFragment.graphql";
import Container from "@/components/layout/Container";
import NoContent from "../messages/NoContent";
import styles from "./BrowseListLayout.module.css";

export default function BrowseListLayout({
  data,
  header: headerProp,
  orderComponent,
  items,
}: Props) {
  const pageInfo = useFragment(fragment, data);

  const { t } = useTranslation();

  const header =
    headerProp &&
    (Array.isArray(headerProp)
      ? t(headerProp[0], headerProp[1])
      : t(headerProp));

  return pageInfo ? (
    <Container width="wide" bgColor="NONE" className={styles.grid}>
      <header className={styles.header}>
        {header && <h2 className="t-capitalize t-h3">{header}</h2>}
        <div className={styles.pageCount}>
          <PageCount data={pageInfo} className="t-label-lg" />
          {orderComponent}
        </div>
      </header>
      <div className={styles.listColumn}>
        {items && items.length > 0 ? (
          <ul className="t-unstyled-list">{items}</ul>
        ) : (
          <NoContent />
        )}
        <div className={styles.footer}>
          <Pagination data={pageInfo} />
        </div>
      </div>
    </Container>
  ) : null;
}

type key = string;
type args = Record<string, string | number>;

interface Props {
  header?: string | [key, args] | null;
  data?: BrowseListLayoutFragment$key | null;
  orderComponent?: React.ReactNode;
  items?: React.ReactNode[];
}

const fragment = graphql`
  fragment BrowseListLayoutFragment on PageInfo {
    ...PaginationFragment
    ...PageCountFragment
  }
`;
