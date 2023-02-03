/**
 * @generated SignedSource<<d85e41236218d4847a40c8b4620ba718>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArticleParentHeaderFragment$data = {
  readonly campus?: {
    readonly title?: string;
  } | null;
  readonly issue?: {
    readonly title?: string;
    readonly " $fragmentSpreads": FragmentRefs<"getEntityDisplayNameFragment">;
  } | null;
  readonly journal?: {
    readonly title?: string;
  } | null;
  readonly schemaDefinition: {
    readonly identifier: string;
  };
  readonly series?: {
    readonly title?: string;
  } | null;
  readonly unit?: {
    readonly title?: string;
  } | null;
  readonly " $fragmentType": "ArticleParentHeaderFragment";
};
export type ArticleParentHeaderFragment$key = {
  readonly " $data"?: ArticleParentHeaderFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArticleParentHeaderFragment">;
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
  "kind": "InlineFragment",
  "selections": (v1/*: any*/),
  "type": "Entity",
  "abstractKey": "__isEntity"
},
v3 = [
  (v2/*: any*/)
],
v4 = [
  {
    "kind": "Literal",
    "name": "name",
    "value": "volume"
  }
],
v5 = [
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
],
v6 = {
  "alias": "unit",
  "args": [
    {
      "kind": "Literal",
      "name": "schema",
      "value": "nglp:unit"
    }
  ],
  "concreteType": null,
  "kind": "LinkedField",
  "name": "ancestorOfType",
  "plural": false,
  "selections": (v3/*: any*/),
  "storageKey": "ancestorOfType(schema:\"nglp:unit\")"
},
v7 = {
  "alias": "campus",
  "args": [
    {
      "kind": "Literal",
      "name": "schema",
      "value": "nglp:campus"
    }
  ],
  "concreteType": null,
  "kind": "LinkedField",
  "name": "ancestorOfType",
  "plural": false,
  "selections": (v3/*: any*/),
  "storageKey": "ancestorOfType(schema:\"nglp:campus\")"
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArticleParentHeaderFragment",
  "selections": [
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
    },
    {
      "kind": "InlineFragment",
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
          "selections": (v3/*: any*/),
          "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
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
          "selections": [
            {
              "kind": "InlineDataFragmentSpread",
              "name": "getEntityDisplayNameFragment",
              "selections": [
                {
                  "kind": "InlineFragment",
                  "selections": [
                    (v0/*: any*/),
                    {
                      "alias": "volumeByName",
                      "args": (v4/*: any*/),
                      "concreteType": null,
                      "kind": "LinkedField",
                      "name": "ancestorByName",
                      "plural": false,
                      "selections": [
                        {
                          "kind": "InlineFragment",
                          "selections": (v1/*: any*/),
                          "type": "Collection",
                          "abstractKey": null
                        }
                      ],
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
                      "selections": (v5/*: any*/),
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
                          "args": (v4/*: any*/),
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
                                  "selections": (v5/*: any*/),
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
                          "selections": (v5/*: any*/),
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
              "args": null,
              "argumentDefinitions": []
            },
            (v2/*: any*/)
          ],
          "storageKey": "ancestorOfType(schema:\"nglp:journal_issue\")"
        },
        (v6/*: any*/),
        {
          "alias": "series",
          "args": [
            {
              "kind": "Literal",
              "name": "schema",
              "value": "nglp:series"
            }
          ],
          "concreteType": null,
          "kind": "LinkedField",
          "name": "ancestorOfType",
          "plural": false,
          "selections": (v3/*: any*/),
          "storageKey": "ancestorOfType(schema:\"nglp:series\")"
        },
        (v7/*: any*/)
      ],
      "type": "Item",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        (v6/*: any*/),
        (v7/*: any*/)
      ],
      "type": "Collection",
      "abstractKey": null
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
})();

(node as any).hash = "365fe3470f84c3057419b6435bf99d30";

export default node;
