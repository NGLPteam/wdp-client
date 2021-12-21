/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
export type ArticleContributorFragment = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly affiliation: string | null;
            readonly role: string | null;
            readonly item: {
                readonly slug: string;
            };
            readonly contributor: {
                readonly slug?: string | undefined;
                readonly __typename: "PersonContributor";
                readonly title?: string | null | undefined;
                readonly bio?: string | null | undefined;
                readonly affiliation?: string | null | undefined;
                readonly image?: {
                    readonly storage: AttachmentStorage | null;
                    readonly " $fragmentRefs": FragmentRefs<"ContributorAvatarFragment">;
                } | undefined;
                readonly " $fragmentRefs": FragmentRefs<"ContributorNameFragment">;
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
v1 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "slug",
    "storageKey": null
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "bio",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageAttachment",
  "kind": "LinkedField",
  "name": "image",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "storage",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ContributorAvatarFragment"
    }
  ],
  "storageKey": null
},
v5 = {
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
              "concreteType": "Item",
              "kind": "LinkedField",
              "name": "item",
              "plural": false,
              "selections": (v1/*: any*/),
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
                    (v2/*: any*/),
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "title",
                      "storageKey": null
                    },
                    (v3/*: any*/),
                    (v0/*: any*/),
                    (v4/*: any*/),
                    (v5/*: any*/)
                  ],
                  "type": "PersonContributor",
                  "abstractKey": null
                },
                {
                  "kind": "InlineFragment",
                  "selections": [
                    (v2/*: any*/),
                    (v3/*: any*/),
                    (v4/*: any*/),
                    (v5/*: any*/)
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
(node as any).hash = '0f7e7650037e0d5486203ef63c9435f2';
export default node;
