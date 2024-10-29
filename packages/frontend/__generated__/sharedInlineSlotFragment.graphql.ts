/**
 * @generated SignedSource<<e7add1c33eaebafb53476709d74fd506>>
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
    }
  ],
  "type": "TemplateSlotInlineInstance",
  "abstractKey": null
};

(node as any).hash = "f0ff8d79382af915f782d5184997deae";

export default node;
