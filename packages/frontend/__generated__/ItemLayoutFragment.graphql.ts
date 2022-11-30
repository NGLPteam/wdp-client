/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ItemLayoutFragment = {
    readonly item: {
        readonly community: {
            readonly " $fragmentRefs": FragmentRefs<"AppLayoutCommunityFragment">;
        };
        readonly " $fragmentRefs": FragmentRefs<"AppLayoutEntityFragment" | "EntityHTMLHeadFragment" | "EntityLayoutFactoryFragment">;
    } | null;
    readonly " $refType": "ItemLayoutFragment";
};
export type ItemLayoutFragment$data = ItemLayoutFragment;
export type ItemLayoutFragment$key = {
    readonly " $data"?: ItemLayoutFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ItemLayoutFragment">;
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
  "name": "ItemLayoutFragment",
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
      "concreteType": "Item",
      "kind": "LinkedField",
      "name": "item",
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
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = 'be5c26bc1e08a1bc5dd8272c65485f05';
export default node;
