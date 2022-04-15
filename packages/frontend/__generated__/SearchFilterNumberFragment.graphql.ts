/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SearchOperator = "and" | "dateEquals" | "dateGTE" | "dateLTE" | "equals" | "inAny" | "matches" | "numericGTE" | "numericLTE" | "or" | "%future added value";
export type SearchFilterNumberFragment = {
    readonly label: string;
    readonly description: string | null;
    readonly searchPath: string;
    readonly searchOperators: ReadonlyArray<SearchOperator>;
    readonly " $refType": "SearchFilterNumberFragment";
};
export type SearchFilterNumberFragment$data = SearchFilterNumberFragment;
export type SearchFilterNumberFragment$key = {
    readonly " $data"?: SearchFilterNumberFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SearchFilterNumberFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SearchFilterNumberFragment",
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
(node as any).hash = '5560c010afec5101641a217c2aec1ed9';
export default node;
