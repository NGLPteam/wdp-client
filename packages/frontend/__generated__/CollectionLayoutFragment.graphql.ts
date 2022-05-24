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
        readonly " $fragmentRefs": FragmentRefs<"AppLayoutEntityFragment" | "EntityHTMLHeadFragment" | "EntityLayoutFactoryFragment">;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"EntityHTMLHeadAppFragment">;
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
          "name": "EntityHTMLHeadFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "EntityLayoutFactoryFragment"
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "EntityHTMLHeadAppFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '0ef8f3dc6c7c09b05019ba85dae5b122';
export default node;
