import { graphql, useFragment } from "react-relay";
// import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { Trans, useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { routeQueryArrayToString } from "@wdp/lib/routes";
import SearchResultFactory from "../SearchResultFactory";
import * as Styled from "./SearchResults.styles";
import { SearchResultsFragment$key } from "@/relay/SearchResultsFragment.graphql";
import { NoContent } from "components/layout";
import { LoadingBlock, Pagination } from "components/atomic";

export default function SearchResults({ data, isLoading }: Props) {
  const results = useFragment<SearchResultsFragment$key>(fragment, data);

  const { t } = useTranslation();

  const { query: queryVars } = useRouter();
  const q = routeQueryArrayToString(queryVars.q);

  return isLoading ? (
    <LoadingBlock />
  ) : (
    <>
      <Styled.Header>
        <Trans
          i18nKey="search.count_results_for_name"
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
  data: SearchResultsFragment$key;
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
