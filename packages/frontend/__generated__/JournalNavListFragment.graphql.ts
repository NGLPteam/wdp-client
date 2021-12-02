/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type JournalNavListFragment = {
    readonly pages: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly title: string;
                readonly slug: string;
            };
        }>;
    };
    readonly " $refType": "JournalNavListFragment";
};
export type JournalNavListFragment$data = JournalNavListFragment;
export type JournalNavListFragment$key = {
    readonly " $data"?: JournalNavListFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"JournalNavListFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JournalNavListFragment",
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
                  "name": "title",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "slug",
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
(node as any).hash = '56ca7e162d00ccb20c0a40200f92d949';
export default node;
