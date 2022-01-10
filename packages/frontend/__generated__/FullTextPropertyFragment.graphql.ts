/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type FullTextKind = "HTML" | "MARKDOWN" | "TEXT" | "%future added value";
export type SchemaPropertyType = "ASSET" | "ASSETS" | "BOOLEAN" | "CONTRIBUTOR" | "CONTRIBUTORS" | "DATE" | "EMAIL" | "FLOAT" | "FULL_TEXT" | "GROUP" | "INTEGER" | "MARKDOWN" | "MULTISELECT" | "SELECT" | "STRING" | "TAGS" | "TIMESTAMP" | "UNKNOWN" | "URL" | "VARIABLE_DATE" | "%future added value";
export type FullTextPropertyFragment = {
    readonly fullText?: {
        readonly content: string | null;
        readonly kind: FullTextKind | null;
        readonly lang: string | null;
    } | null | undefined;
    readonly type?: SchemaPropertyType | undefined;
    readonly " $refType": "FullTextPropertyFragment";
};
export type FullTextPropertyFragment$data = FullTextPropertyFragment;
export type FullTextPropertyFragment$key = {
    readonly " $data"?: FullTextPropertyFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"FullTextPropertyFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FullTextPropertyFragment",
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
(node as any).hash = 'e39469d400d4280edd2e1a3891b56daa';
export default node;
