/**
 * @generated SignedSource<<ccb497beeb53df02edf3c7f60680ba32>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type IssueSummaryFragment$data = {
  readonly articles: {
    readonly pageInfo: {
      readonly totalCount: number;
    };
  };
  readonly cover: {
    readonly " $fragmentSpreads": FragmentRefs<"CoverImageFragment">;
  };
  readonly id: string;
  readonly journal?: {
    readonly title?: string;
  } | null;
  readonly published: {
    readonly value: String | null;
    readonly " $fragmentSpreads": FragmentRefs<"PrecisionDateFragment">;
  };
  readonly slug: String;
  readonly subtitle: string | null;
  readonly summary: string | null;
  readonly title: string;
  readonly volume: {
    readonly title?: string;
  } | null;
  readonly " $fragmentSpreads": FragmentRefs<"getEntityDisplayNameFragment">;
  readonly " $fragmentType": "IssueSummaryFragment";
};
export type IssueSummaryFragment$key = {
  readonly " $data"?: IssueSummaryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"IssueSummaryFragment">;
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
                  "alias": "volumeByName",
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
                      "alias": "volumeByName",
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
              ],
              "args": null,
              "argumentDefinitions": []
            }
          ],
          "type": "AnyEntity",
          "abstractKey": "__isAnyEntity"
        }
      ],
      "args": null,
      "argumentDefinitions": []
    }
  ],
  "type": "Collection",
  "abstractKey": null
};
})();

(node as any).hash = "f606ceece1df5f220f344d9693205025";

export default node;
