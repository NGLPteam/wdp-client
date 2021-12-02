/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type IssueContentListFragment = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly title: string;
            readonly slug: string;
            readonly summary: string | null;
            readonly published: {
                readonly " $fragmentRefs": FragmentRefs<"PrecisionDateFragment">;
            };
            readonly contributions: {
                readonly " $fragmentRefs": FragmentRefs<"ContributorsListFragment">;
            };
            readonly thumbnail: {
                readonly " $fragmentRefs": FragmentRefs<"SquareThumbnailFragment">;
            } | null;
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
              "name": "title",
              "storageKey": null
            },
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
              "name": "summary",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "VariablePrecisionDate",
              "kind": "LinkedField",
              "name": "published",
              "plural": false,
              "selections": [
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "PrecisionDateFragment"
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "ItemContributionConnection",
              "kind": "LinkedField",
              "name": "contributions",
              "plural": false,
              "selections": [
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "ContributorsListFragment"
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "AssetPreview",
              "kind": "LinkedField",
              "name": "thumbnail",
              "plural": false,
              "selections": [
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "SquareThumbnailFragment"
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
  "type": "ItemConnection",
  "abstractKey": null
};
(node as any).hash = '0c76bfd1b549e9f3202023d06127926a';
export default node;
