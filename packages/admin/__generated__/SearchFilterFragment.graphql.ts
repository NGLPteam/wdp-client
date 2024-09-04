/**
 * @generated SignedSource<<f4b9411333c217a0eab2086433b8a33e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type SchemaPropertyType = "ASSET" | "ASSETS" | "BOOLEAN" | "CONTRIBUTOR" | "CONTRIBUTORS" | "CONTROLLED_VOCABULARIES" | "CONTROLLED_VOCABULARY" | "DATE" | "EMAIL" | "ENTITIES" | "ENTITY" | "FLOAT" | "FULL_TEXT" | "GROUP" | "INTEGER" | "MARKDOWN" | "MULTISELECT" | "SELECT" | "STRING" | "TAGS" | "TIMESTAMP" | "UNKNOWN" | "URL" | "VARIABLE_DATE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type SearchFilterFragment$data = {
  readonly type?: SchemaPropertyType;
  readonly " $fragmentSpreads": FragmentRefs<"SearchFilterBooleanFragment" | "SearchFilterInputFragment" | "SearchFilterSelectFragment">;
  readonly " $fragmentType": "SearchFilterFragment";
};
export type SearchFilterFragment$key = {
  readonly " $data"?: SearchFilterFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SearchFilterFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SearchFilterFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "type",
          "storageKey": null
        }
      ],
      "type": "ScalarProperty",
      "abstractKey": "__isScalarProperty"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SearchFilterInputFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SearchFilterSelectFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SearchFilterBooleanFragment"
    }
  ],
  "type": "SearchableProperty",
  "abstractKey": "__isSearchableProperty"
};

(node as any).hash = "4bdc81dfe224e4c5a8be20ce8e6ebb9f";

export default node;
