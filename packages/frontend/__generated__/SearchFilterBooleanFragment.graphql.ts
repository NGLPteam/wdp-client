/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SearchOperator = "and" | "dateEquals" | "dateGTE" | "dateLTE" | "equals" | "inAny" | "matches" | "numericGTE" | "numericLTE" | "or" | "%future added value";
export type SearchFilterBooleanFragment = {
    readonly label: string;
    readonly description: string | null;
    readonly searchPath: string;
    readonly searchOperators: ReadonlyArray<SearchOperator>;
    readonly " $refType": "SearchFilterBooleanFragment";
};
export type SearchFilterBooleanFragment$data = SearchFilterBooleanFragment;
export type SearchFilterBooleanFragment$key = {
    readonly " $data"?: SearchFilterBooleanFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SearchFilterBooleanFragment">;
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
(node as any).hash = '377a9633a058da806058a5811318754f';
export default node;
