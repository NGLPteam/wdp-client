/**
 * @generated SignedSource<<e87a026e0bcde28f854488d9b3a80227>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CollectionLayoutFragment$data = {
  readonly collection: {
    readonly community: {
      readonly " $fragmentSpreads": FragmentRefs<"AppLayoutCommunityFragment">;
    };
    readonly " $fragmentSpreads": FragmentRefs<"AppLayoutEntityFragment" | "EntityLayoutFactoryFragment">;
  } | null | undefined;
  readonly " $fragmentType": "CollectionLayoutFragment";
};
export type CollectionLayoutFragment$key = {
  readonly " $data"?: CollectionLayoutFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CollectionLayoutFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "slug"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "CollectionLayoutFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "slug",
          "variableName": "slug"
        }
      ],
      "concreteType": "Collection",
      "kind": "LinkedField",
      "name": "collection",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "AppLayoutEntityFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "EntityLayoutFactoryFragment"
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "Community",
          "kind": "LinkedField",
          "name": "community",
          "plural": false,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "AppLayoutCommunityFragment"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "860a876220deccde88a0221502f1bc98";

export default node;
