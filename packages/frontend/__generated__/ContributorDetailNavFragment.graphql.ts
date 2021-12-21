/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ContributorDetailNavFragment = {
    readonly __typename: string;
    readonly title?: string | undefined;
    readonly slug?: string | undefined;
    readonly " $refType": "ContributorDetailNavFragment";
};
export type ContributorDetailNavFragment$data = ContributorDetailNavFragment;
export type ContributorDetailNavFragment$key = {
    readonly " $data"?: ContributorDetailNavFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ContributorDetailNavFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContributorDetailNavFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__typename",
      "storageKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "title",
          "storageKey": null
        }
      ],
      "type": "Entity",
      "abstractKey": "__isEntity"
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "slug",
          "storageKey": null
        }
      ],
      "type": "Sluggable",
      "abstractKey": "__isSluggable"
    }
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
};
(node as any).hash = '54ed1310929b7b0ad967f509bd3bf1b7';
export default node;
