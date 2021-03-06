/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ContributorsColumnFragment = {
    readonly slug?: string | undefined;
    readonly contributions?: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly contributor: {
                    readonly __typename: "OrganizationContributor";
                    readonly slug: string;
                    readonly legalName: string | null;
                } | {
                    readonly __typename: "PersonContributor";
                    readonly slug: string;
                    readonly givenName: string | null;
                    readonly familyName: string | null;
                } | {
                    /*This will never be '%other', but we need some
                    value in case none of the concrete values match.*/
                    readonly __typename: "%other";
                };
            };
        }>;
        readonly pageInfo: {
            readonly totalCount: number;
        };
    } | undefined;
    readonly " $refType": "ContributorsColumnFragment";
};
export type ContributorsColumnFragment$data = ContributorsColumnFragment;
export type ContributorsColumnFragment$key = {
    readonly " $data"?: ContributorsColumnFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ContributorsColumnFragment">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContributorsColumnFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": [
            {
              "kind": "Literal",
              "name": "page",
              "value": 1
            },
            {
              "kind": "Literal",
              "name": "perPage",
              "value": 1
            }
          ],
          "concreteType": "ItemContributionConnection",
          "kind": "LinkedField",
          "name": "contributions",
          "plural": false,
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
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": null,
                      "kind": "LinkedField",
                      "name": "contributor",
                      "plural": false,
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
                            (v0/*: any*/),
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
                            (v0/*: any*/),
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
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "PageInfo",
              "kind": "LinkedField",
              "name": "pageInfo",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "totalCount",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": "contributions(page:1,perPage:1)"
        }
      ],
      "type": "Item",
      "abstractKey": null
    }
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
};
})();
(node as any).hash = 'c1882b97c4c06373d2d62be38c626f6e';
export default node;
