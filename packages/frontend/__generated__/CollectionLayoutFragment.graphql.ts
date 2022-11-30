/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CollectionLayoutFragment = {
    readonly collection: {
        readonly community: {
            readonly " $fragmentRefs": FragmentRefs<"AppLayoutCommunityFragment">;
        };
        readonly " $fragmentRefs": FragmentRefs<"AppLayoutEntityFragment" | "EntityLayoutFactoryFragment">;
    } | null;
    readonly " $refType": "CollectionLayoutFragment";
};
export type CollectionLayoutFragment$data = CollectionLayoutFragment;
export type CollectionLayoutFragment$key = {
    readonly " $data"?: CollectionLayoutFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CollectionLayoutFragment">;
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
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "AppLayoutEntityFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "EntityLayoutFactoryFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '860a876220deccde88a0221502f1bc98';
export default node;
