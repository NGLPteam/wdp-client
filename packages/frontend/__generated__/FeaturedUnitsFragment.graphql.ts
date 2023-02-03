/**
 * @generated SignedSource<<ef80f1e7981d9569e884270bb6c25f2a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FeaturedUnitsFragment$data = {
  readonly entities: ReadonlyArray<{
    readonly slug?: String;
    readonly title?: string;
  }>;
  readonly " $fragmentType": "FeaturedUnitsFragment";
};
export type FeaturedUnitsFragment$key = {
  readonly " $data"?: FeaturedUnitsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"FeaturedUnitsFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FeaturedUnitsFragment",
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "EntitiesProperty",
  "abstractKey": null
};

(node as any).hash = "61e93265cf099079397f3f76ef820be6";

export default node;
