import { graphql, readInlineData } from "relay-runtime";
import { getThumbWithFallbackFragment$key } from "@/relay/getThumbWithFallbackFragment.graphql";

export default function getThumbWithFallback(
  data: getThumbWithFallbackFragment$key,
) {
  const entity = readInlineData(fragment, data);

  const { thumbnail, breadcrumbs } = entity;

  if (thumbnail?.image?.webp?.url) return { thumbnail, hasThumb: true };

  const fallback = breadcrumbs?.findLast(
    ({ crumb }) => !!crumb?.thumbnail?.image?.webp?.url,
  );

  if (fallback) return { thumbnail: fallback.crumb.thumbnail, hasThumb: true };

  // Placeholder will render but make sure to return CoverImageFragment
  return { thumbnail, hasThumb: false };
}

const fragment = graphql`
  fragment getThumbWithFallbackFragment on AnyEntity @inline {
    ... on Collection {
      thumbnail {
        image: medium {
          webp {
            url
          }
        }
        ...CoverImageFragment
      }
      breadcrumbs {
        crumb {
          ... on Collection {
            thumbnail {
              image: medium {
                webp {
                  url
                }
              }
              ...CoverImageFragment
            }
          }
        }
      }
    }
    ... on Item {
      thumbnail {
        image: medium {
          webp {
            url
          }
        }
        ...CoverImageFragment
      }
      breadcrumbs {
        crumb {
          ... on Collection {
            thumbnail {
              image: medium {
                webp {
                  url
                }
              }
              ...CoverImageFragment
            }
          }
          ... on Item {
            thumbnail {
              image: medium {
                webp {
                  url
                }
              }
              ...CoverImageFragment
            }
          }
        }
      }
    }
  }
`;
