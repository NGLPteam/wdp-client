/**
 * @generated SignedSource<<b65084e4bdfc6442e8a4138ba591e79d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type SearchOperator = "and" | "dateEquals" | "dateGTE" | "dateLTE" | "equals" | "inAny" | "matches" | "numericGTE" | "numericLTE" | "or" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type SearchFilterInputFragment$data = {
  readonly description: string | null;
  readonly label: string;
  readonly searchOperators: ReadonlyArray<SearchOperator>;
  readonly searchPath: string;
  readonly " $fragmentType": "SearchFilterInputFragment";
};
export type SearchFilterInputFragment$key = {
  readonly " $data"?: SearchFilterInputFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SearchFilterInputFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SearchFilterInputFragment",
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

(node as any).hash = "f66ceff96add4c379f2010edcd0712a0";

export default node;
