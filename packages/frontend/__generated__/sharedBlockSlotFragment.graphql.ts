/**
 * @generated SignedSource<<cad08973e23c6e7dd7dc8858b2ed362e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type TemplateSlotKind = "BLOCK" | "INLINE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type sharedBlockSlotFragment$data = {
  readonly content: string | null | undefined;
  readonly empty: boolean;
  readonly kind: TemplateSlotKind;
  readonly valid: boolean;
  readonly " $fragmentType": "sharedBlockSlotFragment";
};
export type sharedBlockSlotFragment$key = {
  readonly " $data"?: sharedBlockSlotFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"sharedBlockSlotFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "sharedBlockSlotFragment",
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
    }
  ],
  "type": "TemplateSlotBlockInstance",
  "abstractKey": null
};

(node as any).hash = "484e7d90e1c773a650224101e1e2277f";

export default node;
