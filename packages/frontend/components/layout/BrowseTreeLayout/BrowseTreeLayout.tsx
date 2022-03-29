import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import NoContent from "../NoContent";
import * as Styled from "./BrowseTreeLayout.styles";
import { PageCount, Pagination } from "components/atomic";
import BrowseTreeItem from "components/layout/BrowseTreeLayout/BrowseTreeItem";
import {
  BrowseTreeLayoutFragment$data,
  BrowseTreeLayoutFragment$key,
} from "@/relay/BrowseTreeLayoutFragment.graphql";
import TreeAccordion from "components/atomic/accordions/TreeAccordion";

export default function BrowseTreeLayout({
  data,
  header,
  orderComponent,
}: Props) {
  const listData = useMaybeFragment(fragment, data);

  const list = listData?.nodes.map((node) => ({
    ...node,
    parentId: node.ancestors?.[0]?.id,
    children: undefined,
  }));

  const treeList = list ? listToTree(list) : [];

  function renderList(nodes: TreeNode[]) {
    return nodes.map((node) =>
      node.children && node.children.length > 0 ? (
        <TreeAccordion
          SummaryComponent={<BrowseTreeItem data={node} />}
          key={node.id}
          id={node.id}
        >
          <Styled.ListItems>{renderList(node.children)}</Styled.ListItems>
        </TreeAccordion>
      ) : (
        <BrowseTreeItem key={node.id} data={node} />
      )
    );
  }

  return listData ? (
    <section className="a-bg-neutral00">
      <div className="l-container-wide">
        <Styled.Header>
          {header && <h3 className="t-capitalize">{header}</h3>}
          <Styled.PageCountBar>
            <PageCount data={listData.pageInfo} className="t-label-lg" />
            {orderComponent}
          </Styled.PageCountBar>
        </Styled.Header>
        <Styled.ListItems>
          {treeList && treeList.length > 0 ? (
            renderList(treeList)
          ) : (
            <NoContent />
          )}
        </Styled.ListItems>
        <Styled.Footer>
          <Pagination data={listData.pageInfo} />
        </Styled.Footer>
      </div>
    </section>
  ) : null;
}

type Node = BrowseTreeLayoutFragment$data["nodes"][number];

interface TreeNode extends Node {
  children?: TreeNode[];
}

interface Props {
  header?: string | null;
  data?: BrowseTreeLayoutFragment$key | null;
  orderComponent?: React.ReactNode;
}

const fragment = graphql`
  fragment BrowseTreeLayoutFragment on OrderingEntryConnection {
    nodes {
      id
      treeDepth
      ancestors {
        id
        ...BrowseTreeItemFragment
      }
      ...BrowseTreeItemFragment
    }
    pageInfo {
      ...PaginationFragment
      ...PageCountFragment
    }
  }
`;

interface TreeNode extends Node {
  children?: TreeNode[];
  parentId?: string;
}

// Convert the flat list into a tree structure
function listToTree(list: TreeNode[]): TreeNode[] {
  const map: Record<string, number> = {};
  const roots: TreeNode[] = [];
  let node;
  let i;

  for (i = 0; i < list.length; i += 1) {
    map[list[i].id] = i; // initialize the map
    list[i].children = []; // initialize the children
  }

  for (i = 0; i < list.length; i += 1) {
    node = list[i];

    if (node.parentId) {
      // if you have dangling branches check that map[node.parentId] exists
      if (list[map[node.parentId]]) {
        // children will always exist due to the above init,
        // but the type is array or undefined
        list[map[node.parentId]].children?.push(node);
      } else {
        // parent not found, add the parent
        const ancestors = node.ancestors;

        if (!ancestors) {
          roots.push(node);
        } else if (ancestors.length >= 1) {
          const newNode = ancestors[0] as TreeNode;

          roots.push({ ...newNode, children: [node] });
        }
      }
    } else {
      roots.push(node);
    }
  }

  return roots;
}
