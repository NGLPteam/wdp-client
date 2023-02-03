/**
 * @generated SignedSource<<7a5c0547b061235ec82ee33a04631520>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type SearchOperator = "and" | "dateEquals" | "dateGTE" | "dateLTE" | "equals" | "inAny" | "matches" | "numericGTE" | "numericLTE" | "or" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type SearchFilterNumberFragment$data = {
  readonly description: string | null;
  readonly label: string;
  readonly searchOperators: ReadonlyArray<SearchOperator>;
  readonly searchPath: string;
  readonly " $fragmentType": "SearchFilterNumberFragment";
};
export type SearchFilterNumberFragment$key = {
  readonly " $data"?: SearchFilterNumberFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SearchFilterNumberFragment">;
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

(node as any).hash = "5560c010afec5101641a217c2aec1ed9";

export default node;
