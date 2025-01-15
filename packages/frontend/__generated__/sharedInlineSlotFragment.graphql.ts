/**
 * @generated SignedSource<<69d9e11e493e6fa6bd59a583b15a2130>>
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

(node as any).hash = "0bc0fc36df20ae28fdf77a789894324f";

export default node;
