/**
 * @generated SignedSource<<a2a4de4a84e6ced954df0a4138c9b526>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NavigationTabsFragment$data = {
  readonly entityLabel: {
    readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
  } | null | undefined;
  readonly " $fragmentType": "NavigationTabsFragment";
};
export type NavigationTabsFragment$key = {
  readonly " $data"?: NavigationTabsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"NavigationTabsFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NavigationTabsFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "TemplateSlotInlineInstance",
      "kind": "LinkedField",
      "name": "entityLabel",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "sharedInlineSlotFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "NavigationTemplateInstanceSlots",
  "abstractKey": null
};

(node as any).hash = "caeac7468d974286bc19de129b5521e0";

export default node;
