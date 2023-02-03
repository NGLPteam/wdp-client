/**
 * @generated SignedSource<<a88c90e9f902410ba75605011d731789>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ItemLayoutFragment$data = {
  readonly item: {
    readonly community: {
      readonly " $fragmentSpreads": FragmentRefs<"AppLayoutCommunityFragment">;
    };
    readonly " $fragmentSpreads": FragmentRefs<"AppLayoutEntityFragment" | "EntityHTMLHeadFragment" | "EntityLayoutFactoryFragment">;
  } | null;
  readonly " $fragmentSpreads": FragmentRefs<"EntityHTMLHeadAppFragment">;
  readonly " $fragmentType": "ItemLayoutFragment";
};
export type ItemLayoutFragment$key = {
  readonly " $data"?: ItemLayoutFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ItemLayoutFragment">;
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

(node as any).hash = "158152d1e252a3e6f99d12ff8da3a206";

export default node;
