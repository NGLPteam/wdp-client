/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type FeaturedCollectionsGridFragment = {
    readonly entities: ReadonlyArray<{
        readonly slug?: string | undefined;
        readonly title?: string | undefined;
        readonly " $fragmentRefs": FragmentRefs<"FeaturedCollectionsGridImageFragment">;
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
      "concreteType": null,
      "kind": "LinkedField",
      "name": "entities",
      "plural": true,
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "slug",
              "storageKey": null
            }
          ],
          "type": "Sluggable",
          "abstractKey": "__isSluggable"
        },
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "title",
              "storageKey": null
            }
          ],
          "type": "Entity",
          "abstractKey": "__isEntity"
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
  "type": "EntitiesProperty",
  "abstractKey": null
};
(node as any).hash = '082edf9e002d23ee04ec1de4ab0f5cc6';
export default node;
