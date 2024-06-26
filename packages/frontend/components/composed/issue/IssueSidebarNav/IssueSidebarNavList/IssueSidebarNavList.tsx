import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import { useRouteSlug } from "@wdp/lib/routes";
import { NamedLink } from "components/atomic";
import { IssueSidebarNavListFragment$key } from "@/relay/IssueSidebarNavListFragment.graphql";
import * as Styled from "./IssueSidebarNavList.styles";

export default function IssueSidebarNavList({ data }: Props) {
  const issue = useMaybeFragment(fragment, data);
  const slug = useRouteSlug();

  return slug && issue?.pages.edges && issue.pages.edges.length > 0 ? (
    <Styled.List>
      {issue.pages.edges.map(({ node }) =>
        node.slug ? (
          <Styled.ListItem key={node.slug}>
            <NamedLink href={`/collections/${slug}/page/${node.slug}}`}>
              <span className="t-label-sm t-copy-light">{node.title}</span>
            </NamedLink>
          </Styled.ListItem>
        ) : null,
      )}
    </Styled.List>
  ) : null;
}

interface Props {
  data?: IssueSidebarNavListFragment$key | null;
}

const fragment = graphql`
  fragment IssueSidebarNavListFragment on Collection {
    pages {
      edges {
        node {
          slug
          title
        }
      }
    }
  }
`;
