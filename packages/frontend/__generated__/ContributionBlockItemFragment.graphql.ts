/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ContributorKind = "organization" | "person" | "%future added value";
export type ContributionBlockItemFragment = {
    readonly affiliation: string | null;
    readonly displayName: string;
    readonly contributorKind: ContributorKind;
    readonly role: string | null;
    readonly contributor: {
        readonly slug?: string | undefined;
        readonly image?: {
            readonly " $fragmentRefs": FragmentRefs<"ContributorAvatarFragment">;
        } | undefined;
        readonly affiliation?: string | null | undefined;
        readonly " $fragmentRefs": FragmentRefs<"ContributorNameFragment">;
    };
    readonly " $refType": "ContributionBlockItemFragment";
};
export type ContributionBlockItemFragment$data = ContributionBlockItemFragment;
export type ContributionBlockItemFragment$key = {
    readonly " $data"?: ContributionBlockItemFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ContributionBlockItemFragment">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "affiliation",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContributionBlockItemFragment",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "displayName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "contributorKind",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "role",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "contributor",
      "plural": false,
      "selections": [
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
        },
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "ImageAttachment",
              "kind": "LinkedField",
              "name": "image",
              "plural": false,
              "selections": [
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "ContributorAvatarFragment"
                }
              ],
              "storageKey": null
            }
          ],
          "type": "Contributor",
          "abstractKey": "__isContributor"
        },
        {
          "kind": "InlineFragment",
          "selections": [
            (v0/*: any*/)
          ],
          "type": "PersonContributor",
          "abstractKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ContributorNameFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Contribution",
  "abstractKey": "__isContribution"
};
})();
(node as any).hash = '1edf125ed2aff97ae08708a123771865';
export default node;
