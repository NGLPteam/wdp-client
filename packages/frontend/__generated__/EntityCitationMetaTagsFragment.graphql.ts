/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type DatePrecision = "DAY" | "MONTH" | "NONE" | "YEAR" | "%future added value";
export type EntityCitationMetaTagsFragment = {
    readonly title?: string | undefined;
    readonly schemaDefinition?: {
        readonly identifier: string;
    } | undefined;
    readonly issn?: string | null | undefined;
    readonly published?: {
        readonly precision: DatePrecision;
        readonly value: string | null;
    } | undefined;
    readonly pdf?: {
        readonly asset?: {
            readonly downloadUrl?: string | null | undefined;
        } | null | undefined;
    } | null | undefined;
    readonly community?: {
        readonly title: string;
    } | undefined;
    readonly contributions?: {
        readonly nodes: ReadonlyArray<{
            readonly role: string | null;
            readonly contributor: {
                readonly __typename: "PersonContributor";
                readonly familyName: string | null;
                readonly givenName: string | null;
            } | {
                readonly __typename: "OrganizationContributor";
                readonly legalName: string | null;
            } | {
                /*This will never be '%other', but we need some
                value in case none of the concrete values match.*/
                readonly __typename: "%other";
            };
        }>;
    } | undefined;
    readonly issueNumber?: {
        readonly value?: string | null | undefined;
    } | null | undefined;
    readonly volumeNumber?: {
        readonly value?: string | null | undefined;
    } | null | undefined;
    readonly startPage?: {
        readonly value?: number | null | undefined;
    } | null | undefined;
    readonly endPage?: {
        readonly value?: number | null | undefined;
    } | null | undefined;
    readonly institution?: {
        readonly value?: string | null | undefined;
    } | null | undefined;
    readonly journal?: {
        readonly title?: string | undefined;
    } | null | undefined;
    readonly volume?: {
        readonly number?: {
            readonly value?: string | null | undefined;
        } | null | undefined;
    } | null | undefined;
    readonly issue?: {
        readonly number?: {
            readonly value?: string | null | undefined;
        } | null | undefined;
    } | null | undefined;
    readonly " $refType": "EntityCitationMetaTagsFragment";
};
export type EntityCitationMetaTagsFragment$data = EntityCitationMetaTagsFragment;
export type EntityCitationMetaTagsFragment$key = {
    readonly " $data"?: EntityCitationMetaTagsFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"EntityCitationMetaTagsFragment">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v1 = [
  (v0/*: any*/)
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = [
  {
    "kind": "InlineFragment",
    "selections": [
      {
        "alias": "value",
        "args": null,
        "kind": "ScalarField",
        "name": "content",
        "storageKey": null
      }
    ],
    "type": "StringProperty",
    "abstractKey": null
  }
],
v4 = [
  {
    "kind": "InlineFragment",
    "selections": [
      {
        "alias": "value",
        "args": null,
        "kind": "ScalarField",
        "name": "integerValue",
        "storageKey": null
      }
    ],
    "type": "IntegerProperty",
    "abstractKey": null
  }
],
v5 = [
  {
    "kind": "InlineFragment",
    "selections": [
      {
        "alias": "number",
        "args": [
          {
            "kind": "Literal",
            "name": "fullPath",
            "value": "number"
          }
        ],
        "concreteType": null,
        "kind": "LinkedField",
        "name": "schemaProperty",
        "plural": false,
        "selections": (v3/*: any*/),
        "storageKey": "schemaProperty(fullPath:\"number\")"
      }
    ],
    "type": "Collection",
    "abstractKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityCitationMetaTagsFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "SchemaDefinition",
          "kind": "LinkedField",
          "name": "schemaDefinition",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "identifier",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "type": "Entity",
      "abstractKey": "__isEntity"
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "issn",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "VariablePrecisionDate",
          "kind": "LinkedField",
          "name": "published",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "precision",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "value",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": "pdf",
          "args": [
            {
              "kind": "Literal",
              "name": "fullPath",
              "value": "pdf_version"
            }
          ],
          "concreteType": null,
          "kind": "LinkedField",
          "name": "schemaProperty",
          "plural": false,
          "selections": [
            {
              "kind": "InlineFragment",
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": null,
                  "kind": "LinkedField",
                  "name": "asset",
                  "plural": false,
                  "selections": [
                    {
                      "kind": "InlineFragment",
                      "selections": [
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "downloadUrl",
                          "storageKey": null
                        }
                      ],
                      "type": "AssetPDF",
                      "abstractKey": null
                    }
                  ],
                  "storageKey": null
                }
              ],
              "type": "AssetProperty",
              "abstractKey": null
            }
          ],
          "storageKey": "schemaProperty(fullPath:\"pdf_version\")"
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "Community",
          "kind": "LinkedField",
          "name": "community",
          "plural": false,
          "selections": (v1/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "ItemContributionConnection",
          "kind": "LinkedField",
          "name": "contributions",
          "plural": false,
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
                        (v2/*: any*/),
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "familyName",
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "givenName",
                          "storageKey": null
                        }
                      ],
                      "type": "PersonContributor",
                      "abstractKey": null
                    },
                    {
                      "kind": "InlineFragment",
                      "selections": [
                        (v2/*: any*/),
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
          "alias": "issueNumber",
          "args": [
            {
              "kind": "Literal",
              "name": "fullPath",
              "value": "issue.number"
            }
          ],
          "concreteType": null,
          "kind": "LinkedField",
          "name": "schemaProperty",
          "plural": false,
          "selections": (v3/*: any*/),
          "storageKey": "schemaProperty(fullPath:\"issue.number\")"
        },
        {
          "alias": "volumeNumber",
          "args": [
            {
              "kind": "Literal",
              "name": "fullPath",
              "value": "volume.id"
            }
          ],
          "concreteType": null,
          "kind": "LinkedField",
          "name": "schemaProperty",
          "plural": false,
          "selections": (v3/*: any*/),
          "storageKey": "schemaProperty(fullPath:\"volume.id\")"
        },
        {
          "alias": "startPage",
          "args": [
            {
              "kind": "Literal",
              "name": "fullPath",
              "value": "issue.fpage"
            }
          ],
          "concreteType": null,
          "kind": "LinkedField",
          "name": "schemaProperty",
          "plural": false,
          "selections": (v4/*: any*/),
          "storageKey": "schemaProperty(fullPath:\"issue.fpage\")"
        },
        {
          "alias": "endPage",
          "args": [
            {
              "kind": "Literal",
              "name": "fullPath",
              "value": "issue.lpage"
            }
          ],
          "concreteType": null,
          "kind": "LinkedField",
          "name": "schemaProperty",
          "plural": false,
          "selections": (v4/*: any*/),
          "storageKey": "schemaProperty(fullPath:\"issue.lpage\")"
        },
        {
          "alias": "institution",
          "args": [
            {
              "kind": "Literal",
              "name": "fullPath",
              "value": "degree.grantor"
            }
          ],
          "concreteType": null,
          "kind": "LinkedField",
          "name": "schemaProperty",
          "plural": false,
          "selections": (v3/*: any*/),
          "storageKey": "schemaProperty(fullPath:\"degree.grantor\")"
        },
        {
          "alias": "journal",
          "args": [
            {
              "kind": "Literal",
              "name": "schema",
              "value": "nglp:journal"
            }
          ],
          "concreteType": null,
          "kind": "LinkedField",
          "name": "ancestorOfType",
          "plural": false,
          "selections": [
            {
              "kind": "InlineFragment",
              "selections": (v1/*: any*/),
              "type": "Collection",
              "abstractKey": null
            }
          ],
          "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
        },
        {
          "alias": "volume",
          "args": [
            {
              "kind": "Literal",
              "name": "schema",
              "value": "nglp:journal_volume"
            }
          ],
          "concreteType": null,
          "kind": "LinkedField",
          "name": "ancestorOfType",
          "plural": false,
          "selections": (v5/*: any*/),
          "storageKey": "ancestorOfType(schema:\"nglp:journal_volume\")"
        },
        {
          "alias": "issue",
          "args": [
            {
              "kind": "Literal",
              "name": "schema",
              "value": "nglp:journal_issue"
            }
          ],
          "concreteType": null,
          "kind": "LinkedField",
          "name": "ancestorOfType",
          "plural": false,
          "selections": (v5/*: any*/),
          "storageKey": "ancestorOfType(schema:\"nglp:journal_issue\")"
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
(node as any).hash = 'a6497dbf831d2a55bd856f9feddc6d3c';
export default node;
