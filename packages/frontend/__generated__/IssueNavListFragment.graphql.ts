/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type IssueNavListFragment = {
    readonly pages: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly slug: string;
                readonly title: string;
            };
        }>;
    };
    readonly " $refType": "IssueNavListFragment";
};
export type IssueNavListFragment$data = IssueNavListFragment;
export type IssueNavListFragment$key = {
    readonly " $data"?: IssueNavListFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"IssueNavListFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "IssueNavListFragment",
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
(node as any).hash = 'e5ea7130d5b79502f90aee78857a7595';
export default node;
