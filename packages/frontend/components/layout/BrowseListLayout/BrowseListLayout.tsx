import { graphql, useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
import { PageCount, Pagination } from "components/atomic";
import LoadingBlock from "components/atomic/loading/LoadingBlock";
import { BrowseListLayoutFragment$key } from "@/relay/BrowseListLayoutFragment.graphql";
import { BackButtonFragment$key } from "@/relay/BackButtonFragment.graphql";
import Container from "@/components/layout/Container";
import NoContent from "../messages/NoContent";
import BackButton from "./BackButton";
import styles from "./BrowseListLayout.module.css";

export default function BrowseListLayout({
  data,
  entityData,
  header: headerProp,
  orderComponent,
  items,
  onPageChange,
  isPending = false,
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
      {entityData && <BackButton data={entityData} />}
      <header className={styles.header}>
        {header && <h2 className="t-capitalize t-h3">{header}</h2>}
        {!isPending && (
          <div className={styles.pageCount}>
            <PageCount data={pageInfo} className="t-label-lg" />
            {orderComponent}
          </div>
        )}
      </header>
      {isPending ? (
        <div className={styles.loading}>
          <LoadingBlock />
        </div>
      ) : (
        <div className={styles.listColumn}>
          {items && items.length > 0 ? (
            <ul className="t-unstyled-list">{items}</ul>
          ) : (
            <NoContent />
          )}
          <div className={styles.footer}>
            <Pagination data={pageInfo} onPageChange={onPageChange} />
          </div>
        </div>
      )}
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
  entityData?: BackButtonFragment$key | null;
  isPending?: boolean;
  onPageChange?: (val: Record<string, string | number>) => void;
}

const fragment = graphql`
  fragment BrowseListLayoutFragment on PageInfo {
    ...PaginationFragment
    ...PageCountFragment
  }
`;
