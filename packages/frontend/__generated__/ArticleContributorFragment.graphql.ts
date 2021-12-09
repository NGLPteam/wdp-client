/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ArticleContributorFragment = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly affiliation: string | null;
            readonly role: string | null;
            readonly contributor: {
                readonly __typename: "PersonContributor";
                readonly title: string | null;
                readonly bio: string | null;
                readonly affiliation: string | null;
                readonly image: {
                    readonly " $fragmentRefs": FragmentRefs<"ContributorAvatarFragment">;
                };
                readonly " $fragmentRefs": FragmentRefs<"ContributorNameFragment">;
            } | {
                readonly __typename: "OrganizationContributor";
                readonly bio: string | null;
                readonly image: {
                    readonly " $fragmentRefs": FragmentRefs<"ContributorAvatarFragment">;
                };
                readonly " $fragmentRefs": FragmentRefs<"ContributorNameFragment">;
            } | {
                /*This will never be '%other', but we need some
                value in case none of the concrete values match.*/
                readonly __typename: "%other";
            };
        };
    }>;
    readonly " $refType": "ArticleContributorFragment";
};
export type ArticleContributorFragment$data = ArticleContributorFragment;
export type ArticleContributorFragment$key = {
    readonly " $data"?: ArticleContributorFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ArticleContributorFragment">;
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
  "name": "__typename",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "bio",
  "storageKey": null
},
v3 = {
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
},
v4 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "ContributorNameFragment"
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArticleContributorFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ItemContributionEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ItemContribution",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
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
                    (v1/*: any*/),
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "title",
                      "storageKey": null
                    },
                    (v2/*: any*/),
                    (v0/*: any*/),
                    (v3/*: any*/),
                    (v4/*: any*/)
                  ],
                  "type": "PersonContributor",
                  "abstractKey": null
                },
                {
                  "kind": "InlineFragment",
                  "selections": [
                    (v1/*: any*/),
                    (v2/*: any*/),
                    (v3/*: any*/),
                    (v4/*: any*/)
                  ],
                  "type": "OrganizationContributor",
                  "abstractKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ItemContributionConnection",
  "abstractKey": null
};
})();
(node as any).hash = 'a6798207882a7d0b51d32ef3c620466b';
export default node;
