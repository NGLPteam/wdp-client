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
},
v1 = {
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
          "args": null,
          "kind": "FragmentSpread",
          "name": "ContributorNameFragment"
        },
        {
          "kind": "InlineFragment",
          "selections": [
            (v1/*: any*/),
            (v0/*: any*/)
          ],
          "type": "PersonContributor",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            (v1/*: any*/)
          ],
          "type": "OrganizationContributor",
          "abstractKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Contribution",
  "abstractKey": "__isContribution"
};
})();
(node as any).hash = 'aa643343b24982820790d5c0c330a905';
export default node;
