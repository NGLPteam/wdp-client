import { buildEnvironment as environment } from "@wdp/lib/app";
import { fetchQuery, graphql } from "relay-runtime";
import { getStaticPathsCommunitiesQuery } from "@/relay/getStaticPathsCommunitiesQuery.graphql";
import { getStaticPathsCommunityPagesQuery } from "@/relay/getStaticPathsCommunityPagesQuery.graphql";

export async function getStaticCommunityPaths() {
  const env = environment();

  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return [];
  }

  const data = await fetchQuery<getStaticPathsCommunitiesQuery>(
    env,
    query,
    {}
  ).toPromise();

  if (data) {
    return data.communities.nodes.map((node) => ({
      params: { slug: node.slug },
    }));
  } else {
    return [];
  }
}

const query = graphql`
  query getStaticPathsCommunitiesQuery {
    communities {
      nodes {
        slug
      }
    }
  }
`;

type CommunityPagePath = { params: { slug: string; page: string } };

export async function getStaticCommunityPagePaths() {
  const env = environment();

  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return [];
  }

  const data = await fetchQuery<getStaticPathsCommunityPagesQuery>(
    env,
    pageQuery,
    {}
  ).toPromise();

  if (data) {
    const paths = data.communities.nodes.reduce(
      (accumulator: CommunityPagePath[], node) => [
        ...accumulator,
        ...node.pages.nodes.map((pageNode) => ({
          params: { slug: node.slug, page: pageNode.slug },
        })),
      ],
      []
    );

    return paths;
  } else {
    return [];
  }
}

const pageQuery = graphql`
  query getStaticPathsCommunityPagesQuery {
    communities {
      nodes {
        slug
        pages {
          nodes {
            slug
          }
        }
      }
    }
  }
`;
