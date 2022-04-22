/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SearchOperator = "and" | "dateEquals" | "dateGTE" | "dateLTE" | "equals" | "inAny" | "matches" | "numericGTE" | "numericLTE" | "or" | "%future added value";
export type SearchFilterInputFragment = {
    readonly label: string;
    readonly description: string | null;
    readonly searchPath: string;
    readonly searchOperators: ReadonlyArray<SearchOperator>;
    readonly " $refType": "SearchFilterInputFragment";
};
export type SearchFilterInputFragment$data = SearchFilterInputFragment;
export type SearchFilterInputFragment$key = {
    readonly " $data"?: SearchFilterInputFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SearchFilterInputFragment">;
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
(node as any).hash = 'f66ceff96add4c379f2010edcd0712a0';
export default node;
