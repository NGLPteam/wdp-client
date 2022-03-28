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

function loop(map: TreeNode[] = [], depth: number, node: Node) {
  if (depth === node.treeDepth) {
    map.push({ ...node, children: [] });
  } else if (node.treeDepth && depth < node.treeDepth && map[map.length - 1]) {
    loop(map[map.length - 1].children, node.treeDepth, node);
  } else if (node.treeDepth && depth > node.treeDepth) {
    loop(map, node.treeDepth, node);
  }
}

export default function BrowseTreeLayout({
  data,
  header,
  orderComponent,
}: Props) {
  const listData = useMaybeFragment(fragment, data);
  const treeList: TreeNode[] = [];
  const depth = listData?.nodes[0].treeDepth || 1;

  listData?.nodes.forEach((node) => {
    loop(treeList, depth, node);
  });

  function renderList(nodes: TreeNode[]) {
    return nodes.map((node) =>
      node.children && node.children.length > 0 ? (
        <Styled.Details>
          <summary>
            <BrowseTreeItem key={node.id} data={node} />
          </summary>
          <div>{renderList(node.children)}</div>
        </Styled.Details>
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
        {treeList && treeList.length > 0 ? renderList(treeList) : <NoContent />}
        <Styled.Footer>
          <Pagination data={listData.pageInfo} />
        </Styled.Footer>
      </div>
    </section>
  ) : null;
}

type Node = BrowseTreeLayoutFragment$data["nodes"][number];

interface TreeNode extends Node {
  parentId?: string;
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
      ...BrowseTreeItemFragment
    }
    pageInfo {
      ...PaginationFragment
      ...PageCountFragment
    }
  }
`;
