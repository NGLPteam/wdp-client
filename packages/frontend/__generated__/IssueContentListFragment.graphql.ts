/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type IssueContentListFragment = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly slug: string;
            readonly " $fragmentRefs": FragmentRefs<"ArticleSummaryFragment">;
        };
    }>;
    readonly " $refType": "IssueContentListFragment";
};
export type IssueContentListFragment$data = IssueContentListFragment;
export type IssueContentListFragment$key = {
    readonly " $data"?: IssueContentListFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"IssueContentListFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "IssueContentListFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ItemEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Item",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "slug",
              "storageKey": null
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "ArticleSummaryFragment"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ItemConnection",
  "abstractKey": null
};
(node as any).hash = 'c4276844befb3140715f4d7f93b5604f';
export default node;
