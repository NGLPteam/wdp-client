/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ItemLayoutQueryFragment = {
    readonly item: {
        readonly community: {
            readonly " $fragmentRefs": FragmentRefs<"AppLayoutCommunityFragment">;
        };
        readonly " $fragmentRefs": FragmentRefs<"AppLayoutEntityFragment">;
    } | null;
    readonly " $refType": "ItemLayoutQueryFragment";
};
export type ItemLayoutQueryFragment$data = ItemLayoutQueryFragment;
export type ItemLayoutQueryFragment$key = {
    readonly " $data"?: ItemLayoutQueryFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ItemLayoutQueryFragment">;
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
  "name": "ItemLayoutQueryFragment",
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = 'b3de5242224bbe32a5f252503e8af7ac';
export default node;
