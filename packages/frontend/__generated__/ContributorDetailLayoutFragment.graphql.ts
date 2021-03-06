/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ContributorDetailLayoutFragment = {
    readonly contributor: {
        readonly " $fragmentRefs": FragmentRefs<"ContributorHTMLHeadFragment" | "ContributorDetailFragment">;
    } | null;
    readonly " $refType": "ContributorDetailLayoutFragment";
};
export type ContributorDetailLayoutFragment$data = ContributorDetailLayoutFragment;
export type ContributorDetailLayoutFragment$key = {
    readonly " $data"?: ContributorDetailLayoutFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ContributorDetailLayoutFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "slug"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContributorDetailLayoutFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "slug",
          "variableName": "slug"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "contributor",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ContributorHTMLHeadFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ContributorDetailFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = 'd6aa9ec760fd5791c13ea2f6af92370a';
export default node;
