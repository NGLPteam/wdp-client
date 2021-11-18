import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "@wdp/lib/api/components";
import { useRouteSlug } from "@wdp/lib/routes";
import CommunityChildLayout from "components/composed/community/CommunityChildLayout";
import { aboutCommunityQuery as Query } from "@/relay/aboutCommunityQuery.graphql";

export default function CommunityAboutPage() {
  const slug = useRouteSlug();

  return slug ? (
    <QueryWrapper<Query> query={query} initialVariables={{ slug }}>
      {({ data }) => (
        <CommunityChildLayout data={data}>
          <div className="l-container-wide">
            <h1>Example sub page</h1>
          </div>
        </CommunityChildLayout>
      )}
    </QueryWrapper>
  ) : (
    <></>
  );
}

const query = graphql`
  query aboutCommunityQuery($slug: Slug!) {
    ...CommunityChildLayoutFragment
  }
`;
