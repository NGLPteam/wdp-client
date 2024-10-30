/**
 * @generated SignedSource<<b016fe85fc9626f56499f66c749bf3fd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SummaryDetailFragment$data = {
  readonly header: {
    readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
  } | null | undefined;
  readonly subheader: {
    readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
  } | null | undefined;
  readonly summary: {
    readonly " $fragmentSpreads": FragmentRefs<"sharedBlockSlotFragment">;
  } | null | undefined;
  readonly " $fragmentType": "SummaryDetailFragment";
};
export type SummaryDetailFragment$key = {
  readonly " $data"?: SummaryDetailFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SummaryDetailFragment">;
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
  "name": "SummaryDetailFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "TemplateSlotInlineInstance",
      "kind": "LinkedField",
      "name": "header",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "TemplateSlotInlineInstance",
      "kind": "LinkedField",
      "name": "subheader",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "TemplateSlotBlockInstance",
      "kind": "LinkedField",
      "name": "summary",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "sharedBlockSlotFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "DetailTemplateInstanceSlots",
  "abstractKey": null
};
})();

(node as any).hash = "25aeece04429949ff64233fc5eb83460";

export default node;
