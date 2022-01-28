/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SchemaInstanceProviderFragment = {
    readonly " $fragmentRefs": FragmentRefs<"useSchemaContextFragment">;
    readonly " $refType": "SchemaInstanceProviderFragment";
};
export type SchemaInstanceProviderFragment$data = SchemaInstanceProviderFragment;
export type SchemaInstanceProviderFragment$key = {
    readonly " $data"?: SchemaInstanceProviderFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SchemaInstanceProviderFragment">;
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
(node as any).hash = '96b0ae914bf0f460192afe59fd1b69ba';
export default node;
