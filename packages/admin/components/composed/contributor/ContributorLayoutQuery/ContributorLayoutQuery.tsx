import React, { ComponentProps } from "react";
import ErrorPage from "next/error";
import { graphql } from "react-relay";
import ContributorLayout from "../ContributorLayout";
import { QueryWrapper, FragmentWrapper } from "components/api";
import { useRouteSlug, useBaseListQueryVars } from "hooks";
import type {
  QueryLayoutProps,
  QueryPageComponentProps,
} from "@wdp/lib/types/page";
import { HasFragment } from "types/graphql-helpers";
import type { ContributorLayoutQueryFragment$key } from "@/relay/ContributorLayoutQueryFragment.graphql";

function ContributorLayoutQuery<
  Query extends ContributorQuery,
  P extends QueryPageComponentProps<Query>
>({
  query,
  PageComponent,
  pageComponentProps,
  ...layoutProps
}: QueryLayoutProps<P, ComponentProps<typeof ContributorLayout>>) {
  const queryVars = useBaseListQueryVars();
  const contributorSlug = useRouteSlug();
  if (!contributorSlug) return <ErrorPage statusCode={404} />;

  return (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{ ...queryVars, contributorSlug }}
    >
      {({ data }) => (
        <FragmentWrapper<ContributorLayoutQueryFragment$key>
          data={data?.contributor}
          fragment={fragment}
        >
          {({ enhancedData }) => (
            <ContributorLayout {...layoutProps} data={enhancedData}>
              <PageComponent data={data} {...pageComponentProps} />
            </ContributorLayout>
          )}
        </FragmentWrapper>
      )}
    </QueryWrapper>
  );
}

type ContributorQuery = {
  readonly response: {
    contributor: HasFragment<"ContributorLayoutQueryFragment"> | null;
  };
  readonly variables: { contributorSlug: string };
};

const fragment = graphql`
  fragment ContributorLayoutQueryFragment on Contributor {
    ...ContributorLayoutFragment
  }
`;

export default ContributorLayoutQuery;
