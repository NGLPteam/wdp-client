/**
 * @generated SignedSource<<9d7a760b03ec7fb80e2cf698754c7b9a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SchemaInstanceProviderFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"useSchemaContextFragment">;
  readonly " $fragmentType": "SchemaInstanceProviderFragment";
};
export type SchemaInstanceProviderFragment$key = {
  readonly " $data"?: SchemaInstanceProviderFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SchemaInstanceProviderFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SchemaInstanceProviderFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "useSchemaContextFragment"
    }
  ],
  "type": "SchemaInstanceContext",
  "abstractKey": null
};

(node as any).hash = "96b0ae914bf0f460192afe59fd1b69ba";

export default node;
