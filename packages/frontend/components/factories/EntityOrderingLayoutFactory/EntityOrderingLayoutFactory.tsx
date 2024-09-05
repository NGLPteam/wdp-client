import { graphql, readInlineData } from "relay-runtime";
import { redirect } from "next/navigation";
import routeQueryArrayToString from "@wdp/lib/routes/helpers/routeQueryArrayToString";
import EntityOrderingLayout from "components/composed/entity/EntityOrderingLayout";
import IssueSidebarNav from "components/composed/issue/IssueSidebarNav";
import IssueOrderingLayout from "components/composed/issue/IssueOrderingLayout";
import fetchQuery from "@/lib/relay/fetchQuery";
import { EntityOrderingLayoutFactoryQuery as Query } from "@/relay/EntityOrderingLayoutFactoryQuery.graphql";
import { EntityOrderingLayoutFactoryFragment$key } from "@/relay/EntityOrderingLayoutFactoryFragment.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";
import { BasePageParams } from "@/types/page";

/**
 * Fetches the ordering data and gets the right layout based on the schema identifier.
 * If no ordering identifier is provided, uses the first ordering on the entity.
 */
export default async function EntityOrderingLayoutFactory({
  data,
  ordering,
  params,
}: Props) {
  const entity = readInlineData(fragment, data);
  console.debug({ entity });

  const { ordering: orderingParam, slug, page: pageParam } = params;

  const initOrdering = !entity?.initialOrdering?.disabled
    ? entity?.initialOrdering?.identifier
    : "";

  const identifier =
    ordering ||
    decodeURIComponent(routeQueryArrayToString(orderingParam)) ||
    initOrdering ||
    "";

  const page = parseInt(routeQueryArrayToString(pageParam)) || 1;

  const { data: orderingData, records } = await fetchQuery<Query>(query, {
    identifier,
    page,
    slug,
  });

  console.debug({ orderingData });

  const isDisabled =
    !!orderingData?.collection?.ordering?.disabled ||
    !!orderingData?.community?.ordering?.disabled;

  const pathname = orderingData?.collection ? "/collections" : "/communities";
  const url = `${pathname}/${slug}`;

  if (isDisabled) redirect(url);

  return (
    <UpdateClientEnvironment records={records}>
      {entity?.schemaDefinition?.identifier === "journal_issue" ? (
        <IssueSidebarNav data={entity}>
          <IssueOrderingLayout data={orderingData?.collection?.ordering} />
        </IssueSidebarNav>
      ) : (
        <EntityOrderingLayout
          data={
            orderingData?.community?.ordering ||
            orderingData?.collection?.ordering
          }
        />
      )}
      <div>hi</div>
    </UpdateClientEnvironment>
  );
}

interface Props {
  data: EntityOrderingLayoutFactoryFragment$key | null;
  ordering?: string;
  params: Omit<BasePageParams["params"], "lang"> & {
    ordering?: string | string[];
    page?: string | string[];
  };
}

const fragment = graphql`
  fragment EntityOrderingLayoutFactoryFragment on Entity @inline {
    schemaDefinition {
      identifier
    }

    initialOrdering {
      identifier
      disabled
    }

    ...IssueSidebarNavFragment
  }
`;

const query = graphql`
  query EntityOrderingLayoutFactoryQuery(
    $slug: Slug!
    $identifier: String!
    $page: Int
  ) {
    collection(slug: $slug) {
      ordering(identifier: $identifier) {
        disabled
        ...EntityOrderingLayoutFragment @arguments(page: $page)
        ...IssueOrderingLayoutFragment @arguments(page: $page)
      }
    }
    community(slug: $slug) {
      ordering(identifier: $identifier) {
        disabled
        ...EntityOrderingLayoutFragment @arguments(page: $page)
        ...IssueOrderingLayoutFragment @arguments(page: $page)
      }
    }
  }
`;
