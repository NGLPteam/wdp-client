import { graphql, useFragment } from "react-relay";
import { useDetailsToggle } from "@wdp/lib/hooks";
import * as Styled from "./BrowseTreeItem.styles";
import { BrowseTreeItemFragment$key } from "@/relay/BrowseTreeItemFragment.graphql";
import { NamedLink } from "components/atomic";
import { IconKeys } from "components/factories/IconFactory/IconFactory";
import { getRouteByEntityType } from "helpers";

export default function BrowseTreeItem({ data }: Props) {
  const entity = useFragment(fragment, data);
  const { ref, icon, onToggle } = useDetailsToggle<IconKeys>({
    iconClosed: "plus",
    iconOpen: "minus",
  });

  return entity ? (
    <Styled.Details ref={ref} onClick={onToggle}>
      <Styled.Summary
        aria-disabled={entity.descendants.nodes.length === 0 ? true : undefined}
      >
        <Styled.Toggle icon={icon} />
        <NamedLink
          route={getRouteByEntityType(entity.__typename) || "collection"}
          routeParams={{ slug: entity.slug || "" }}
          passHref
        >
          <a className="a-link t-h4">{entity.title}</a>
        </NamedLink>
      </Styled.Summary>
      <ul className="t-unstyled-list">
        {entity.descendants.nodes.map(({ descendant: d }) => (
          <Styled.Item key={d.slug}>
            <NamedLink
              route={getRouteByEntityType(d.__typename) || "collection"}
              routeParams={{ slug: d.slug || "" }}
              passHref
            >
              <a className="a-link t-h4">{d.title}</a>
            </NamedLink>
          </Styled.Item>
        ))}
      </ul>
    </Styled.Details>
  ) : null;
}

interface Props {
  data: BrowseTreeItemFragment$key;
}

const fragment = graphql`
  fragment BrowseTreeItemFragment on Entity {
    __typename
    ... on Sluggable {
      slug
    }
    title
    descendants {
      nodes {
        descendant {
          __typename
          ... on Entity {
            ... on Sluggable {
              slug
            }
            title
          }
        }
      }
    }
  }
`;
