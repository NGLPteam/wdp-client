/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SearchOperator = "and" | "dateEquals" | "dateGTE" | "dateLTE" | "equals" | "inAny" | "matches" | "numericGTE" | "numericLTE" | "or" | "%future added value";
export type SearchFilterFragment = {
    readonly label: string;
    readonly description: string | null;
    readonly searchPath: string;
    readonly searchOperators: ReadonlyArray<SearchOperator>;
    readonly " $refType": "SearchFilterFragment";
};
export type SearchFilterFragment$data = SearchFilterFragment;
export type SearchFilterFragment$key = {
    readonly " $data"?: SearchFilterFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SearchFilterFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SearchFilterFragment",
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
  "type": "SearchableCoreProperty",
  "abstractKey": null
};
(node as any).hash = '4049244d205497cdb8c7a29d0839d395';
export default node;
