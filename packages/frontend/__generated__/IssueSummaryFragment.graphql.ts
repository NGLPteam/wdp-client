/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type IssueSummaryFragment = {
    readonly id: string;
    readonly title: string;
    readonly subtitle: string | null;
    readonly slug: string;
    readonly summary: string | null;
    readonly cover: {
        readonly " $fragmentRefs": FragmentRefs<"CoverImageFragment">;
    };
    readonly published: {
        readonly value: string | null;
        readonly " $fragmentRefs": FragmentRefs<"PrecisionDateFragment">;
    };
    readonly volume: {
        readonly title?: string | undefined;
    } | null;
    readonly journal?: {
        readonly title?: string | undefined;
    } | null | undefined;
    readonly articles: {
        readonly pageInfo: {
            readonly totalCount: number;
        };
    };
    readonly " $fragmentRefs": FragmentRefs<"getEntityDisplayNameFragment">;
    readonly " $refType": "IssueSummaryFragment";
};
export type IssueSummaryFragment$data = IssueSummaryFragment;
export type IssueSummaryFragment$key = {
    readonly " $data"?: IssueSummaryFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"IssueSummaryFragment">;
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
  {
    "kind": "InlineFragment",
    "selections": [
      (v0/*: any*/)
    ],
    "type": "Collection",
    "abstractKey": null
  }
],
v2 = [
  {
    "kind": "Literal",
    "name": "name",
    "value": "volume"
  }
],
v3 = [
  {
    "kind": "InlineFragment",
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "content",
        "storageKey": null
      }
    ],
    "type": "StringProperty",
    "abstractKey": null
  }
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": false,
      "kind": "LocalArgument",
      "name": "showJournal"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "IssueSummaryFragment",
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
      "name": "subtitle",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "summary",
      "storageKey": null
    },
    {
      "alias": "cover",
      "args": null,
      "concreteType": "ImageAttachment",
      "kind": "LinkedField",
      "name": "thumbnail",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "CoverImageFragment"
        }
      ],
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
          "name": "value",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "PrecisionDateFragment"
        }
      ],
      "storageKey": null
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
      "selections": (v1/*: any*/),
      "storageKey": "ancestorOfType(schema:\"nglp:journal_volume\")"
    },
    {
      "alias": "articles",
      "args": [
        {
          "kind": "Literal",
          "name": "schema",
          "value": "nglp:journal_article"
        }
      ],
      "concreteType": "ItemConnection",
      "kind": "LinkedField",
      "name": "items",
      "plural": false,
      "selections": [
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
      "storageKey": "items(schema:\"nglp:journal_article\")"
    },
    {
      "condition": "showJournal",
      "kind": "Condition",
      "passingValue": true,
      "selections": [
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
          "selections": (v1/*: any*/),
          "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
        }
      ]
    },
    {
      "kind": "InlineDataFragmentSpread",
      "name": "getEntityDisplayNameFragment",
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "kind": "InlineFragment",
              "selections": [
                (v0/*: any*/),
                {
                  "alias": "volume",
                  "args": (v2/*: any*/),
                  "concreteType": null,
                  "kind": "LinkedField",
                  "name": "ancestorByName",
                  "plural": false,
                  "selections": (v1/*: any*/),
                  "storageKey": "ancestorByName(name:\"volume\")"
                },
                {
                  "alias": "issueNumber",
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
            },
            {
              "kind": "InlineDataFragmentSpread",
              "name": "getEntityVolumeNumberFragment",
              "selections": [
                {
                  "kind": "InlineFragment",
                  "selections": [
                    {
                      "alias": "volume",
                      "args": (v2/*: any*/),
                      "concreteType": null,
                      "kind": "LinkedField",
                      "name": "ancestorByName",
                      "plural": false,
                      "selections": [
                        {
                          "kind": "InlineFragment",
                          "selections": [
                            {
                              "alias": "number",
                              "args": [
                                {
                                  "kind": "Literal",
                                  "name": "fullPath",
                                  "value": "id"
                                }
                              ],
                              "concreteType": null,
                              "kind": "LinkedField",
                              "name": "schemaProperty",
                              "plural": false,
                              "selections": (v3/*: any*/),
                              "storageKey": "schemaProperty(fullPath:\"id\")"
                            }
                          ],
                          "type": "Collection",
                          "abstractKey": null
                        }
                      ],
                      "storageKey": "ancestorByName(name:\"volume\")"
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
                    }
                  ],
                  "type": "Collection",
                  "abstractKey": null
                }
              ]
            }
          ],
          "type": "AnyEntity",
          "abstractKey": "__isAnyEntity"
        }
      ]
    }
  ],
  "type": "Collection",
  "abstractKey": null
};
})();
(node as any).hash = 'f606ceece1df5f220f344d9693205025';
export default node;
