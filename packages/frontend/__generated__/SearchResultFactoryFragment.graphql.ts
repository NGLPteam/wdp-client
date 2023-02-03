/**
 * @generated SignedSource<<85470ba1bed51fbd1e26fdab6745f9ab>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SearchResultFactoryFragment$data = {
  readonly __typename: string;
  readonly " $fragmentSpreads": FragmentRefs<"SearchEntityResultFragment">;
  readonly " $fragmentType": "SearchResultFactoryFragment";
};
export type SearchResultFactoryFragment$key = {
  readonly " $data"?: SearchResultFactoryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SearchResultFactoryFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SearchResultFactoryFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__typename",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SearchEntityResultFragment"
    }
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
};

(node as any).hash = "409918f84b5e498dd330f62948ff7ce1";

export default node;
