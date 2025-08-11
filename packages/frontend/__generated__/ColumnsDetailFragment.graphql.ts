/**
 * @generated SignedSource<<f946c59d76b7adb36068c9e5f785d5c8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ColumnsDetailFragment$data = {
  readonly slots: {
    readonly header: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
    } | null | undefined;
    readonly itemsA: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedBlockSlotFragment">;
    } | null | undefined;
    readonly itemsB: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedBlockSlotFragment">;
    } | null | undefined;
    readonly itemsC: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedBlockSlotFragment">;
    } | null | undefined;
    readonly itemsD: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedBlockSlotFragment">;
    } | null | undefined;
  };
  readonly " $fragmentType": "ColumnsDetailFragment";
};
export type ColumnsDetailFragment$key = {
  readonly " $data"?: ColumnsDetailFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ColumnsDetailFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "sharedBlockSlotFragment"
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ColumnsDetailFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "DetailTemplateInstanceSlots",
      "kind": "LinkedField",
      "name": "slots",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "TemplateSlotInlineInstance",
          "kind": "LinkedField",
          "name": "header",
          "plural": false,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "sharedInlineSlotFragment"
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "TemplateSlotBlockInstance",
          "kind": "LinkedField",
          "name": "itemsA",
          "plural": false,
          "selections": (v0/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "TemplateSlotBlockInstance",
          "kind": "LinkedField",
          "name": "itemsB",
          "plural": false,
          "selections": (v0/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "TemplateSlotBlockInstance",
          "kind": "LinkedField",
          "name": "itemsC",
          "plural": false,
          "selections": (v0/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "TemplateSlotBlockInstance",
          "kind": "LinkedField",
          "name": "itemsD",
          "plural": false,
          "selections": (v0/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "DetailTemplateInstance",
  "abstractKey": null
};
})();

(node as any).hash = "f2838ed77a4fea54c6d3d178fe424f6a";

export default node;
