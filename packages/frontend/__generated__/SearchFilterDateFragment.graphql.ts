/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SearchOperator = "and" | "dateEquals" | "dateGTE" | "dateLTE" | "equals" | "inAny" | "matches" | "numericGTE" | "numericLTE" | "or" | "%future added value";
export type SearchFilterDateFragment = {
    readonly label: string;
    readonly description: string | null;
    readonly searchPath: string;
    readonly searchOperators: ReadonlyArray<SearchOperator>;
    readonly " $refType": "SearchFilterDateFragment";
};
export type SearchFilterDateFragment$data = SearchFilterDateFragment;
export type SearchFilterDateFragment$key = {
    readonly " $data"?: SearchFilterDateFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SearchFilterDateFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SearchFilterDateFragment",
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
(node as any).hash = '05c8958dd4927609d5bf73b6c49096d8';
export default node;
