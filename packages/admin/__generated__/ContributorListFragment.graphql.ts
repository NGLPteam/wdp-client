/**
 * @generated SignedSource<<8bb1c5bc6bb5238a9f83fee3b06c9777>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContributorListFragment$data = {
  readonly nodes: ReadonlyArray<{
    readonly __typename: string;
    readonly createdAt?: string;
    readonly familyName?: string | null | undefined;
    readonly givenName?: string | null | undefined;
    readonly id?: string;
    readonly legalName?: string | null | undefined;
    readonly slug?: string;
    readonly " $fragmentSpreads": FragmentRefs<"ContributorAffiliationColumnFragment" | "ContributorContributionsColumnFragment" | "ContributorNameColumnFragment">;
  }>;
  readonly " $fragmentSpreads": FragmentRefs<"ModelListPageFragment">;
  readonly " $fragmentType": "ContributorListFragment";
};
export type ContributorListFragment$key = {
  readonly " $data"?: ContributorListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContributorListFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "legalName",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "givenName",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "familyName",
  "storageKey": null
},
v7 = {
  "kind": "InlineDataFragmentSpread",
  "name": "ContributorNameColumnFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        (v0/*: any*/),
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
              "name": "AvatarFragment"
            }
          ],
          "storageKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            (v2/*: any*/)
          ],
          "type": "Sluggable",
          "abstractKey": "__isSluggable"
        },
        {
          "kind": "InlineFragment",
          "selections": [
            (v3/*: any*/)
          ],
          "type": "OrganizationContributor",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            (v5/*: any*/),
            (v6/*: any*/)
          ],
          "type": "PersonContributor",
          "abstractKey": null
        }
      ],
      "type": "Contributor",
      "abstractKey": "__isContributor"
    }
  ],
  "args": null,
  "argumentDefinitions": ([]/*: any*/)
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContributorListFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "nodes",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "kind": "InlineFragment",
          "selections": [
            (v1/*: any*/),
            (v2/*: any*/),
            (v3/*: any*/),
            (v4/*: any*/),
            (v7/*: any*/)
          ],
          "type": "OrganizationContributor",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            (v1/*: any*/),
            (v2/*: any*/),
            (v5/*: any*/),
            (v6/*: any*/),
            (v4/*: any*/)
          ],
          "type": "PersonContributor",
          "abstractKey": null
        },
        (v7/*: any*/),
        {
          "kind": "InlineDataFragmentSpread",
          "name": "ContributorAffiliationColumnFragment",
          "selections": [
            {
              "kind": "InlineFragment",
              "selections": [
                {
                  "kind": "InlineFragment",
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "affiliation",
                      "storageKey": null
                    }
                  ],
                  "type": "PersonContributor",
                  "abstractKey": null
                }
              ],
              "type": "Contributor",
              "abstractKey": "__isContributor"
            }
          ],
          "args": null,
          "argumentDefinitions": []
        },
        {
          "kind": "InlineDataFragmentSpread",
          "name": "ContributorContributionsColumnFragment",
          "selections": [
            {
              "kind": "InlineFragment",
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "contributionCount",
                  "storageKey": null
                }
              ],
              "type": "Contributor",
              "abstractKey": "__isContributor"
            }
          ],
          "args": null,
          "argumentDefinitions": []
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ModelListPageFragment"
    }
  ],
  "type": "AnyContributorConnection",
  "abstractKey": null
};
})();

(node as any).hash = "88a84a69e8cbd5fbad2bb624810768b5";

export default node;
