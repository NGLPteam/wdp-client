/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type FullTextKind = "HTML" | "MARKDOWN" | "TEXT" | "%future added value";
export type SchemaPropertyType = "ASSET" | "ASSETS" | "BOOLEAN" | "CONTRIBUTOR" | "CONTRIBUTORS" | "DATE" | "EMAIL" | "ENTITIES" | "ENTITY" | "FLOAT" | "FULL_TEXT" | "GROUP" | "INTEGER" | "MARKDOWN" | "MULTISELECT" | "SELECT" | "STRING" | "TAGS" | "TIMESTAMP" | "UNKNOWN" | "URL" | "VARIABLE_DATE" | "%future added value";
export type FullTextFragment = {
    readonly fullText?: {
        readonly content: string | null;
        readonly kind: FullTextKind | null;
        readonly lang: string | null;
    } | null | undefined;
    readonly type?: SchemaPropertyType | undefined;
    readonly " $refType": "FullTextFragment";
};
export type FullTextFragment$data = FullTextFragment;
export type FullTextFragment$key = {
    readonly " $data"?: FullTextFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"FullTextFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FullTextFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "FullText",
          "kind": "LinkedField",
          "name": "fullText",
          "plural": false,
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
              "name": "lang",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "type",
          "storageKey": null
        }
      ],
      "type": "FullTextProperty",
      "abstractKey": null
    }
  ],
  "type": "AnySchemaProperty",
  "abstractKey": "__isAnySchemaProperty"
};
(node as any).hash = '9608c826ce090dcd6ee0ffc3235834ed';
export default node;
