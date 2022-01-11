/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SchemaPropertyType = "ASSET" | "ASSETS" | "BOOLEAN" | "CONTRIBUTOR" | "CONTRIBUTORS" | "DATE" | "EMAIL" | "FLOAT" | "FULL_TEXT" | "GROUP" | "INTEGER" | "MARKDOWN" | "MULTISELECT" | "SELECT" | "STRING" | "TAGS" | "TIMESTAMP" | "UNKNOWN" | "URL" | "VARIABLE_DATE" | "%future added value";
export type ScalarPropertyFragment = {
    readonly name: string;
    readonly label: string;
    readonly path: string;
    readonly required: boolean;
    readonly type: SchemaPropertyType;
    readonly isWide: boolean;
    readonly " $refType": "ScalarPropertyFragment";
};
export type ScalarPropertyFragment$data = ScalarPropertyFragment;
export type ScalarPropertyFragment$key = {
    readonly " $data"?: ScalarPropertyFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ScalarPropertyFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ScalarPropertyFragment",
  "selections": [
    {
      "alias": "name",
      "args": null,
      "kind": "ScalarField",
      "name": "fullPath",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "label",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "path",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "required",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "type",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isWide",
      "storageKey": null
    }
  ],
  "type": "ScalarProperty",
  "abstractKey": "__isScalarProperty"
};
(node as any).hash = '65f7000b4ae93eb94615fe255a31c6e6';
export default node;
