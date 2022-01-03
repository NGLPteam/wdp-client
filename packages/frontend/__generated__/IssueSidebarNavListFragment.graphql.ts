/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type IssueSidebarNavListFragment = {
    readonly pages: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly slug: string;
                readonly title: string;
            };
        }>;
    };
    readonly " $refType": "IssueSidebarNavListFragment";
};
export type IssueSidebarNavListFragment$data = IssueSidebarNavListFragment;
export type IssueSidebarNavListFragment$key = {
    readonly " $data"?: IssueSidebarNavListFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"IssueSidebarNavListFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "IssueSidebarNavListFragment",
  "selections": [
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
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "slug",
                  "storageKey": null
                },
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
  "type": "Collection",
  "abstractKey": null
};
(node as any).hash = '16eeaa0d4bc7c3c2f4a2de30f5d5fcd1';
export default node;
