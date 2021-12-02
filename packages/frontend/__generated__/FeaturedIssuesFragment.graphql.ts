/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type FeaturedIssuesFragment = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly title: string;
            readonly slug: string;
            readonly summary: string | null;
            readonly thumbnail: {
                readonly " $fragmentRefs": FragmentRefs<"CoverImageFragment">;
            } | null;
        };
    }>;
    readonly " $refType": "FeaturedIssuesFragment";
};
export type FeaturedIssuesFragment$data = FeaturedIssuesFragment;
export type FeaturedIssuesFragment$key = {
    readonly " $data"?: FeaturedIssuesFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"FeaturedIssuesFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FeaturedIssuesFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "CollectionEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Collection",
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
              "concreteType": "AssetPreview",
              "kind": "LinkedField",
              "name": "thumbnail",
              "plural": false,
              "selections": [
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "CoverImageFragment"
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
  "type": "CollectionConnection",
  "abstractKey": null
};
(node as any).hash = '74df60865a6c87e3105e67f8f281c606';
export default node;
