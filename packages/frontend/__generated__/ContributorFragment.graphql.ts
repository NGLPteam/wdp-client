/**
 * @generated SignedSource<<90d0484f6e2bcc3a0fedfb9467e4517b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContributorFragment$data = {
  readonly affiliation: string | null | undefined;
  readonly collection?: {
    readonly __typename: "Collection";
    readonly slug: string;
  };
  readonly contributor: {
    readonly affiliation?: string | null | undefined;
    readonly image?: {
      readonly " $fragmentSpreads": FragmentRefs<"ContributorAvatarFragment">;
    };
    readonly orcid?: string | null | undefined;
    readonly slug?: string;
    readonly " $fragmentSpreads": FragmentRefs<"ContributorNameFragment">;
  };
  readonly item?: {
    readonly __typename: "Item";
    readonly slug: string;
  };
  readonly role: string | null | undefined;
  readonly " $fragmentType": "ContributorFragment";
};
export type ContributorFragment$key = {
  readonly " $data"?: ContributorFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContributorFragment">;
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
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "__typename",
    "storageKey": null
  },
  (v1/*: any*/)
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContributorFragment",
  "selections": [
    (v0/*: any*/),
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
            (v1/*: any*/)
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
          "selections": (v2/*: any*/),
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
          "selections": (v2/*: any*/),
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

(node as any).hash = "babff048c31a094e8a15690669211260";

export default node;
