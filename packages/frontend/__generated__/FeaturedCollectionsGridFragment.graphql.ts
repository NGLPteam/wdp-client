/**
 * @generated SignedSource<<1e10afad2d44e8202c2ecdceca07fc65>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FeaturedCollectionsGridFragment$data = {
  readonly entities: ReadonlyArray<{
    readonly slug?: string;
    readonly title?: string;
    readonly " $fragmentSpreads": FragmentRefs<"FeaturedCollectionsGridImageFragment">;
  }>;
  readonly " $fragmentType": "FeaturedCollectionsGridFragment";
};
export type FeaturedCollectionsGridFragment$key = {
  readonly " $data"?: FeaturedCollectionsGridFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"FeaturedCollectionsGridFragment">;
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

(node as any).hash = "082edf9e002d23ee04ec1de4ab0f5cc6";

export default node;
