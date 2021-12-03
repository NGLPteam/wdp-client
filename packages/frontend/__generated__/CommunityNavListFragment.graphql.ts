/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CommunityNavListFragment = {
    readonly schemaRanks: ReadonlyArray<{
        readonly slug: string;
        readonly name: string;
        readonly count: number;
    }>;
    readonly pages: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly slug: string;
                readonly title: string;
            };
        }>;
    };
    readonly " $refType": "CommunityNavListFragment";
};
export type CommunityNavListFragment$data = CommunityNavListFragment;
export type CommunityNavListFragment$key = {
    readonly " $data"?: CommunityNavListFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CommunityNavListFragment">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityNavListFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "HierarchicalSchemaRank",
      "kind": "LinkedField",
      "name": "schemaRanks",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "count",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "PageConnection",
      "kind": "LinkedField",
      "name": "pages",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "PageEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Page",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v0/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "title",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Community",
  "abstractKey": null
};
})();
(node as any).hash = '9097bc6f5d3a1fc56ee8e43ffe735e9e';
export default node;
