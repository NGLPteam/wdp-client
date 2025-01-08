import { graphql, useFragment } from "react-relay";
import { Trans, useTranslation } from "react-i18next";
import { useSearchParams } from "next/navigation";
import { routeQueryArrayToString } from "@wdp/lib/routes";
import { NoContent } from "components/layout";
import { LoadingBlock, Pagination } from "components/atomic";
import { SearchResultsFragment$key } from "@/relay/SearchResultsFragment.graphql";
import EntitySummary from "@/components/composed/entity/EntitySummary";
import styles from "./SearchResults.module.css";

export default function SearchResults({ data, isLoading }: Props) {
  const results = useFragment<SearchResultsFragment$key>(fragment, data);

  const { t } = useTranslation();

  const queryVars = useSearchParams();
  const q = routeQueryArrayToString(queryVars.get("q"));
  const resultsI18nKey = q
    ? "search.count_results_for_name"
    : "search.count_results";

  return isLoading ? (
    <LoadingBlock />
  ) : (
    <>
      <header className={styles.header}>
        <Trans
          i18nKey={resultsI18nKey}
          values={{
            count: results?.pageInfo?.totalCount,
            name: q,
          }}
          components={[
            <span key="text" className="t-copy-light"></span>,
            <em key="name"></em>,
          ]}
        />
      </header>
      {results && results.nodes.length > 0 ? (
        <>
          <ul>
            {results.nodes.map(({ entity }, i) => (
              <li className={styles.item} key={i}>
                <EntitySummary data={entity} />
              </li>
            ))}
          </ul>
          <Pagination data={results.pageInfo} />
        </>
      ) : (
        <NoContent message={t("search.no_results")} />
      )}
    </>
  );
}

interface Props {
  data?: SearchResultsFragment$key;
  isLoading?: boolean;
}

const fragment = graphql`
  fragment SearchResultsFragment on SearchResultConnection {
    nodes {
      entity {
        ... on Node {
          id
        }
        ...EntitySummaryFragment
      }
    }
    pageInfo {
      totalCount
      ...PaginationFragment
    }
  }
`;
