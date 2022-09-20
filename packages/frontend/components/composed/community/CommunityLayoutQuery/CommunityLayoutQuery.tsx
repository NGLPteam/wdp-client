import { ComponentProps } from "react";
import ErrorPage from "next/error";
import { graphql } from "react-relay";
import type {
  QueryLayoutProps,
  QueryPageComponentProps,
} from "@wdp/lib/types/page";
import { FragmentWrapper, QueryWrapper } from "@wdp/lib/api/components";
import { useRouteSlug } from "@wdp/lib/routes";
import CommunityLayout from "../CommunityLayout";
import { HasFragment } from "types/graphql-helpers";
import { CommunityLayoutQueryFragment$key } from "@/relay/CommunityLayoutQueryFragment.graphql";

type CommunityQuery = {
  readonly response: HasFragment<"CommunityLayoutQueryFragment">;
  readonly variables: { slug: string };
};

function CommunityLayoutQuery<
  Query extends CommunityQuery,
  P extends QueryPageComponentProps<Query>
>({
  query,
  variables = {},
  PageComponent,
  pageComponentProps,
  ...layoutProps
}: QueryLayoutProps<P, ComponentProps<typeof CommunityLayout>> & {
  variables?: Omit<CommunityQuery["variables"], "slug">;
}) {
  const slug = useRouteSlug();

  if (!slug) return <ErrorPage statusCode={404} />;

  return (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{ slug, ...variables }}
      options={{ fetchPolicy: "store-or-network" }}
    >
      {({ data }) => (
        <FragmentWrapper<CommunityLayoutQueryFragment$key>
          data={data}
          fragment={fragment}
        >
          {({ enhancedData }) => (
            <CommunityLayout data={enhancedData} {...layoutProps}>
              <PageComponent data={data} {...pageComponentProps} />
            </CommunityLayout>
          )}
        </FragmentWrapper>
      )}
    </QueryWrapper>
  );
}

const fragment = graphql`
  fragment CommunityLayoutQueryFragment on Query
  @argumentDefinitions(slug: { type: "Slug!" }) {
    ...CommunityLayoutFragment @arguments(slug: $slug)
  }
`;

export default CommunityLayoutQuery;
