/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type FeaturedCollectionsGridFragment = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly slug: string;
            readonly title: string;
            readonly " $fragmentRefs": FragmentRefs<"FeaturedCollectionsGridImageFragment">;
        };
    }>;
    readonly " $refType": "FeaturedCollectionsGridFragment";
};
export type FeaturedCollectionsGridFragment$data = FeaturedCollectionsGridFragment;
export type FeaturedCollectionsGridFragment$key = {
    readonly " $data"?: FeaturedCollectionsGridFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"FeaturedCollectionsGridFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FeaturedCollectionsGridFragment",
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
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "FeaturedCollectionsGridImageFragment"
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
(node as any).hash = '4c29e295ec16ec68a098cc0ac7735d36';
export default node;
