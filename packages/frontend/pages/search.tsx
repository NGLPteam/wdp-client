import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "@wdp/lib/api/components";
import { useRouteSlug } from "@wdp/lib/routes";
import { useRouter } from "next/router";
import BaseLayout from "components/composed/base/BaseLayout";
import { searchQuery as Query } from "@/relay/searchQuery.graphql";

export default function SearchPage() {
  const slug = useRouteSlug();
  const router = useRouter();

  return (
    <QueryWrapper<Query> query={query} initialVariables={{ slug }}>
      {({ data }) => (
        <BaseLayout data={data}>
          <div className="a-bg-custom10">
            <div className="l-container-wide">
              {router.query.q
                ? `Search results for "${router.query.q}"`
                : "Search page"}
            </div>
          </div>
        </BaseLayout>
      )}
    </QueryWrapper>
  );
}

const query = graphql`
  query searchQuery {
    ...BaseLayoutFragment
  }
`;
