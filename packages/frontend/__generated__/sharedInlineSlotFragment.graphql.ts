/**
 * @generated SignedSource<<28f965d093ba2a89ff284bef33daf84b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type TemplateSlotKind = "BLOCK" | "INLINE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type sharedInlineSlotFragment$data = {
  readonly content: string | null | undefined;
  readonly empty: boolean;
  readonly hidesTemplate: boolean;
  readonly kind: TemplateSlotKind;
  readonly valid: boolean;
  readonly " $fragmentType": "sharedInlineSlotFragment";
};
export type sharedInlineSlotFragment$key = {
  readonly " $data"?: sharedInlineSlotFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "sharedInlineSlotFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "empty",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "content",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "kind",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "valid",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hidesTemplate",
      "storageKey": null
    }
  ],
  "type": "TemplateSlotInlineInstance",
  "abstractKey": null
};

(node as any).hash = "ef2db7b3b850d24816bae5ee3ac37728";

export default node;
