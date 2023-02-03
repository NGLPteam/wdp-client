/**
 * @generated SignedSource<<ad3b763854c55308778cc141d4d008a8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type ContributorKind = "organization" | "person" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type ContributionBlockItemFragment$data = {
  readonly affiliation: string | null;
  readonly collection?: {
    readonly slug: String;
  };
  readonly contributor: {
    readonly affiliation?: string | null;
    readonly image?: {
      readonly " $fragmentSpreads": FragmentRefs<"ContributorAvatarFragment">;
    };
    readonly orcid?: string | null;
    readonly slug?: String;
    readonly " $fragmentSpreads": FragmentRefs<"ContributorNameFragment">;
  };
  readonly contributorKind: ContributorKind;
  readonly displayName: string;
  readonly item?: {
    readonly slug: String;
  };
  readonly role: string | null;
  readonly " $fragmentType": "ContributionBlockItemFragment";
};
export type ContributionBlockItemFragment$key = {
  readonly " $data"?: ContributionBlockItemFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContributionBlockItemFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "affiliation",
  "storageKey": null
},
v1 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "slug",
    "storageKey": null
  }
];
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
          "selections": (v1/*: any*/),
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
            (v0/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "orcid",
              "storageKey": null
            }
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
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Item",
          "kind": "LinkedField",
          "name": "item",
          "plural": false,
          "selections": (v1/*: any*/),
          "storageKey": null
        }
      ],
      "type": "ItemContribution",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Collection",
          "kind": "LinkedField",
          "name": "collection",
          "plural": false,
          "selections": (v1/*: any*/),
          "storageKey": null
        }
      ],
      "type": "CollectionContribution",
      "abstractKey": null
    }
  ],
  "type": "Contribution",
  "abstractKey": "__isContribution"
};
})();

(node as any).hash = "9a7fd2742290ca3dcede7b4428d4d547";

export default node;
