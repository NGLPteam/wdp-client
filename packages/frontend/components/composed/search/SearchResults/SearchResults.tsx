import { graphql, useFragment } from "react-relay";
import { Trans, useTranslation } from "react-i18next";
import { useSearchParams } from "next/navigation";
import { routeQueryArrayToString } from "@wdp/lib/routes";
import { NoContent } from "components/layout";
import { LoadingBlock, Pagination } from "components/atomic";
import { SearchResultsFragment$key } from "@/relay/SearchResultsFragment.graphql";
import SearchResultFactory from "../SearchResultFactory";
import * as Styled from "./SearchResults.styles";

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
      <Styled.Header>
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
      </Styled.Header>
      {results && results.nodes.length > 0 ? (
        <>
          <Styled.List>
            {results.nodes.map(({ entity }, i) => (
              <Styled.ListItem key={i}>
                <SearchResultFactory data={entity} />
              </Styled.ListItem>
            ))}
          </Styled.List>
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
        ...SearchResultFactoryFragment
      }
    }
    pageInfo {
      totalCount
      ...PaginationFragment
    }
  }
`;
