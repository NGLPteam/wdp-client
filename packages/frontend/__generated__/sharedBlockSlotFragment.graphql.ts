/**
 * @generated SignedSource<<52fc9fe07b025667896d194f150c332c>>
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

(node as any).hash = "67adbb022fb7f7a2570d6ff2fb3d2944";

export default node;
