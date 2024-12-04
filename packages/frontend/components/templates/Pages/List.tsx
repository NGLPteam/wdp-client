import { graphql, useFragment } from "react-relay";
import { useRouteSlug } from "@wdp/lib/routes";
import { NamedLink } from "@/components/atomic";
import { ListPagesTemplateFragment$key } from "@/relay/ListPagesTemplateFragment.graphql";
import styles from "./Pages.module.css";

export default function List({
  data,
}: {
  data?: ListPagesTemplateFragment$key | null;
}) {
  const slug = useRouteSlug();

  const { pages } = useFragment(fragment, data) ?? {};

  const canRender =
    !!pages?.edges?.length && pages.edges.some((e) => !!e.node.slug);

  if (!canRender) return null;

  return (
    slug && (
      <ul className={styles.list}>
        {pages.edges.map((p) =>
          p.node.slug ? (
            <li className={styles.item} key={p.node.slug}>
              <NamedLink href={`/collections/${slug}/page/${p.node.slug}}`}>
                <span className="t-label-sm t-copy-light">{p.node.title}</span>
              </NamedLink>
            </li>
          ) : null,
        )}
      </ul>
    )
  );
}

const fragment = graphql`
  fragment ListPagesTemplateFragment on AnyEntity {
    ... on Item {
      pages {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
    ... on Collection {
      pages {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
    ... on Community {
      pages {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
  }
`;
