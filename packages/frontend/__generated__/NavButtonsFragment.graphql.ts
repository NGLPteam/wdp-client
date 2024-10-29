/**
 * @generated SignedSource<<1e310c697e736cc20e67c8fd7fa14a74>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NavButtonsFragment$data = {
  readonly nextLabel: {
    readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
  } | null | undefined;
  readonly previousLabel: {
    readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
  } | null | undefined;
  readonly " $fragmentType": "NavButtonsFragment";
};
export type NavButtonsFragment$key = {
  readonly " $data"?: NavButtonsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"NavButtonsFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "sharedInlineSlotFragment"
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NavButtonsFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "TemplateSlotInlineInstance",
      "kind": "LinkedField",
      "name": "nextLabel",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "TemplateSlotInlineInstance",
      "kind": "LinkedField",
      "name": "previousLabel",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    }
  ],
  "type": "OrderingTemplateInstanceSlots",
  "abstractKey": null
};
})();

(node as any).hash = "8d105ab4f35ab7c9701246f4fb76d678";

export default node;
