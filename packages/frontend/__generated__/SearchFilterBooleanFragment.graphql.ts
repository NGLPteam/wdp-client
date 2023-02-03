/**
 * @generated SignedSource<<8ee9795b85d889799d2647aee624889a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type SearchOperator = "and" | "dateEquals" | "dateGTE" | "dateLTE" | "equals" | "inAny" | "matches" | "numericGTE" | "numericLTE" | "or" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type SearchFilterBooleanFragment$data = {
  readonly description: string | null;
  readonly label: string;
  readonly searchOperators: ReadonlyArray<SearchOperator>;
  readonly searchPath: string;
  readonly " $fragmentType": "SearchFilterBooleanFragment";
};
export type SearchFilterBooleanFragment$key = {
  readonly " $data"?: SearchFilterBooleanFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SearchFilterBooleanFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SearchFilterBooleanFragment",
  "selections": [
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
      "name": "description",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "searchPath",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "searchOperators",
      "storageKey": null
    }
  ],
  "type": "SearchableProperty",
  "abstractKey": "__isSearchableProperty"
};

(node as any).hash = "377a9633a058da806058a5811318754f";

export default node;
