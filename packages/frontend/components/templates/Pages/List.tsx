import { useRouteSlug } from "@wdp/lib/routes";
import { NamedLink } from "@/components/atomic";
import * as Styled from "./Pages.styles";

type Page = {
  slug?: string | null;
  title?: string | null;
};

export default function List() {
  const slug = useRouteSlug();

  const pages: Page[] = [];

  return (
    slug && (
      <Styled.List>
        {pages.map((p) =>
          p.slug ? (
            <Styled.ListItem key={p.slug}>
              <NamedLink href={`/collections/${slug}/page/${p.slug}}`}>
                <span className="t-label-sm t-copy-light">{p.title}</span>
              </NamedLink>
            </Styled.ListItem>
          ) : null,
        )}
      </Styled.List>
    )
  );
}

// const fragment = graphql`
//   fragment IssueSidebarNavListFragment on Collection {
//     pages {
//       edges {
//         node {
//           slug
//           title
//         }
//       }
//     }
//   }
// `;
