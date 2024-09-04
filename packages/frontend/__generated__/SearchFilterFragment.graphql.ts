/**
 * @generated SignedSource<<49bac481489f278639ea512bc7532f9a>>
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
  readonly " $fragmentSpreads": FragmentRefs<"SearchFilterBooleanFragment" | "SearchFilterDateFragment" | "SearchFilterInputFragment" | "SearchFilterNumberFragment" | "SearchFilterSelectFragment">;
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
      "name": "SearchFilterDateFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SearchFilterNumberFragment"
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

(node as any).hash = "34ec771eb2a9af3944af3377e11725a8";

export default node;
