/**
 * @generated SignedSource<<87c0e308f30a4a46db4770439b23087b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ItemContributionListFragment$data = {
  readonly nodes: ReadonlyArray<{
    readonly contributionRole: {
      readonly label: string;
    };
    readonly contributor: {
      readonly __typename: string;
      readonly slug?: string;
      readonly " $fragmentSpreads": FragmentRefs<"ContributorNameColumnFragment">;
    };
    readonly createdAt: string;
    readonly id: string;
    readonly innerPosition: number | null | undefined;
    readonly item: {
      readonly slug: string;
      readonly title: string;
    };
    readonly outerPosition: number | null | undefined;
    readonly slug: string;
    readonly updatedAt: string;
  }>;
  readonly " $fragmentSpreads": FragmentRefs<"ModelListPageFragment">;
  readonly " $fragmentType": "ItemContributionListFragment";
};
export type ItemContributionListFragment$key = {
  readonly " $data"?: ItemContributionListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ItemContributionListFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
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
  "kind": "InlineFragment",
  "selections": [
    (v0/*: any*/)
  ],
  "type": "Sluggable",
  "abstractKey": "__isSluggable"
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemContributionListFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ItemContribution",
      "kind": "LinkedField",
      "name": "nodes",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "createdAt",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "updatedAt",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "innerPosition",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "outerPosition",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "ControlledVocabularyItem",
          "kind": "LinkedField",
          "name": "contributionRole",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "label",
              "storageKey": null
            }
          ],
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
            (v1/*: any*/),
            (v2/*: any*/),
            {
              "kind": "InlineDataFragmentSpread",
              "name": "ContributorNameColumnFragment",
              "selections": [
                (v1/*: any*/),
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
                (v2/*: any*/),
                {
                  "kind": "InlineFragment",
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "legalName",
                      "storageKey": null
                    }
                  ],
                  "type": "OrganizationContributor",
                  "abstractKey": null
                },
                {
                  "kind": "InlineFragment",
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "givenName",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "familyName",
                      "storageKey": null
                    }
                  ],
                  "type": "PersonContributor",
                  "abstractKey": null
                }
              ],
              "args": null,
              "argumentDefinitions": []
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "Item",
          "kind": "LinkedField",
          "name": "item",
          "plural": false,
          "selections": [
            (v0/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "title",
              "storageKey": null
            }
          ],
          "storageKey": null
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
  "type": "ItemContributionConnection",
  "abstractKey": null
};
})();

(node as any).hash = "68b53860602fbcbfa09e947712f1634d";

export default node;
