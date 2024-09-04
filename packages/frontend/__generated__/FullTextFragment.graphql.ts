/**
 * @generated SignedSource<<4f6b8c2b36f48ab4e6f51101350114b9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type FullTextKind = "HTML" | "MARKDOWN" | "TEXT" | "%future added value";
export type SchemaPropertyType = "ASSET" | "ASSETS" | "BOOLEAN" | "CONTRIBUTOR" | "CONTRIBUTORS" | "CONTROLLED_VOCABULARIES" | "CONTROLLED_VOCABULARY" | "DATE" | "EMAIL" | "ENTITIES" | "ENTITY" | "FLOAT" | "FULL_TEXT" | "GROUP" | "INTEGER" | "MARKDOWN" | "MULTISELECT" | "SELECT" | "STRING" | "TAGS" | "TIMESTAMP" | "UNKNOWN" | "URL" | "VARIABLE_DATE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type FullTextFragment$data = {
  readonly fullText?: {
    readonly content: string | null | undefined;
    readonly kind: FullTextKind | null | undefined;
    readonly lang: string | null | undefined;
  } | null | undefined;
  readonly type?: SchemaPropertyType;
  readonly " $fragmentType": "FullTextFragment";
};
export type FullTextFragment$key = {
  readonly " $data"?: FullTextFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"FullTextFragment">;
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

(node as any).hash = "9608c826ce090dcd6ee0ffc3235834ed";

export default node;
