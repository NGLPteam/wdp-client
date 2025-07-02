import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { PageCount, Pagination } from "components/atomic";
import BrowseTreeItem from "components/layout/BrowseTreeLayout/BrowseTreeItem";
import TreeAccordion from "components/atomic/accordions/TreeAccordion";
import LoadingBlock from "components/atomic/loading/LoadingBlock";
import {
  BrowseTreeLayoutFragment$data,
  BrowseTreeLayoutFragment$key,
} from "@/relay/BrowseTreeLayoutFragment.graphql";
import NoContent from "../messages/NoContent";
import styles from "./BrowseTreeLayout.module.css";

export default function BrowseTreeLayout({
  data,
  header,
  orderComponent,
  isPending,
  onPageChange,
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
          <div className={styles.listItems}>{renderList(node.children)}</div>
        </TreeAccordion>
      ) : (
        <BrowseTreeItem key={node.id} data={node} />
      ),
    );
  }

  return listData ? (
    <section className="a-bg-neutral00">
      <div className="l-container-wide">
        <header className={styles.header}>
          {header && <h3 className="t-capitalize">{header}</h3>}
          {!isPending && (
            <div className={styles.pageCount}>
              <PageCount data={listData.pageInfo} className="t-label-lg" />
              {orderComponent}
            </div>
          )}
        </header>
        {isPending ? (
          <LoadingBlock />
        ) : (
          <>
            <div className={styles.listItems}>
              {treeList && treeList.length > 0 ? (
                renderList(treeList)
              ) : (
                <NoContent />
              )}
            </div>
            <footer className={styles.footer}>
              <Pagination
                data={listData.pageInfo}
                onPageChange={onPageChange}
              />
            </footer>
          </>
        )}
      </div>
    </section>
  ) : null;
}

type Node = BrowseTreeLayoutFragment$data["nodes"][number];

interface Props {
  header?: string | null;
  data?: BrowseTreeLayoutFragment$key | null;
  orderComponent?: React.ReactNode;
  isPending: boolean;
  onPageChange: (val: Record<string, string | number>) => void;
}

const fragment = graphql`
  fragment BrowseTreeLayoutFragment on OrderingEntryConnection {
    nodes {
      id
      treeDepth
      ancestors {
        id
        treeDepth
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
  const treeList: TreeNode[] = [];
  let index = 0;

  // Map out each list node, including missing ancestors
  list.forEach((node) => {
    // Check if this node has ancestors
    if (node.ancestors) {
      node.ancestors.forEach((a, i) => {
        // Check ancestor is already in the index
        // If it isn't, add it to the tree list
        if (a.id && !map[a.id]) {
          map[a.id] = index;
          index++;
          treeList.push({
            ...a,
            // parent id should equal the previous ancestor id, if any
            parentId: node.ancestors[i - 1]?.id || undefined,
            children: [],
            ancestors: [],
          });
        }
      });
    }
    // add nodes in the flat array to map
    // and treeList
    map[node.id] = index;
    index++;
    treeList.push({
      ...node,
      parentId: node?.ancestors?.[0]?.id,
      children: [],
    }); // initialize the children
  });

  let node;

  // Build the tree from the modified list
  treeList.forEach((item) => {
    node = item;
    if (node.parentId) {
      // if you have dangling branches check that map[node.parentId] exists
      if (treeList[map[node.parentId]]) {
        // children will always exist due to the above init,
        // but the type is array or undefined
        treeList[map[node.parentId]].children?.push(node);
      } else {
        roots.push(node);
      }
    } else {
      roots.push(node);
    }
  });

  return roots;
}
