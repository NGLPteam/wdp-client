/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type FeaturedCollectionsListFragment = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly slug: string;
            readonly title: string;
        };
    }>;
    readonly " $refType": "FeaturedCollectionsListFragment";
};
export type FeaturedCollectionsListFragment$data = FeaturedCollectionsListFragment;
export type FeaturedCollectionsListFragment$key = {
    readonly " $data"?: FeaturedCollectionsListFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"FeaturedCollectionsListFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FeaturedCollectionsListFragment",
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
  "type": "CollectionConnection",
  "abstractKey": null
};
(node as any).hash = 'f0729b6e1e2bd0043bff7d18ea115aa3';
export default node;
