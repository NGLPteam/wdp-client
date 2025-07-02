"use client";

import { useMemo, useTransition } from "react";
import { graphql, useRefetchableFragment } from "react-relay";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import BrowseListLayout from "components/layout/BrowseListLayout";
import BrowseTreeLayout from "components/layout/BrowseTreeLayout";
import { NoContent } from "components/layout";
import EntitySummary from "@/components/composed/entity/EntitySummary";
import {
  EntityOrderingLayoutFragment$data,
  EntityOrderingLayoutFragment$key,
} from "@/relay/EntityOrderingLayoutFragment.graphql";
import type { ListEntityContext } from "@/types/graphql-schema";

export default function EntityOrderingLayout({ data, showContext }: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [ordering, refetch] = useRefetchableFragment(fragment, data);

  const [isPending, startTransition] = useTransition();

  const doRefetch = (page: number) => {
    startTransition(() => {
      refetch({ page });
      return;
    });
  };

  const onPageChange = (val: Record<string, string | number>) => {
    const pageNum = val.page
      ? typeof val.page === "string"
        ? parseInt(val.page)
        : val.page
      : null;
    if (!pageNum) return;

    const params = new URLSearchParams(searchParams);
    params.set("page", pageNum.toString());
    const url = `${pathname}?${params.toString()}`;
    router.push(url);
    window.scrollTo({ top: 0, behavior: "smooth" });

    doRefetch(pageNum);
  };

  const pageInfo = useMemo(() => ordering?.children.pageInfo, [ordering]);

  const mode = ordering?.render?.mode;

  return ordering ? (
    mode === "TREE" ? (
      <BrowseTreeLayout
        data={ordering.children}
        header={ordering.header || ordering.name}
        isPending={isPending}
        onPageChange={onPageChange}
      />
    ) : (
      <BrowseListLayout
        data={pageInfo}
        entityData={ordering.entity}
        header={ordering.header || ordering.name}
        onPageChange={onPageChange}
        isPending={isPending}
        items={ordering.children.edges.map(({ node: { entry } }: Node) => (
          <EntitySummary
            key={entry.slug}
            data={entry}
            showContext={showContext}
            browseStyle
          />
        ))}
      />
    )
  ) : (
    <div className="l-container-wide l-container-wide--p-lg">
      <NoContent />
    </div>
  );
}

interface Props {
  data?: EntityOrderingLayoutFragment$key | null;
  showContext?: ListEntityContext;
}

type Node = EntityOrderingLayoutFragment$data["children"]["edges"][number];

const fragment = graphql`
  fragment EntityOrderingLayoutFragment on Ordering
  @refetchable(queryName: "EntityOrderingLayoutRefetchQuery") {
    name
    header
    render {
      mode
    }
    entity {
      __typename
      ... on Sluggable {
        slug
      }
      ...BackButtonFragment
    }
    children(page: $page) {
      edges {
        node {
          id
          entry {
            ... on Sluggable {
              slug
            }
            ...EntitySummaryFragment
          }
        }
      }
      pageInfo {
        ...BrowseListLayoutFragment
      }
      ...BrowseTreeLayoutFragment
    }
  }
`;
