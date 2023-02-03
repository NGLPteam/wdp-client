/**
 * @generated SignedSource<<e40b845390c07659fb9b7ca66d0e375a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type EntityVisibility = "HIDDEN" | "LIMITED" | "VISIBLE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type IssueHeroFragment$data = {
  readonly currentlyHidden: boolean;
  readonly id: string;
  readonly journal: {
    readonly " $fragmentSpreads": FragmentRefs<"JournalHeroCompactFragment" | "JournalHeroMetadataFragment">;
  } | null;
  readonly pdfVersion: {
    readonly asset?: {
      readonly " $fragmentSpreads": FragmentRefs<"AssetDownloadButtonFragment">;
    } | null;
  } | null;
  readonly published: {
    readonly value: String | null;
    readonly " $fragmentSpreads": FragmentRefs<"PrecisionDateFragment">;
  };
  readonly subtitle: string | null;
  readonly summary: string | null;
  readonly thumbnail: {
    readonly " $fragmentSpreads": FragmentRefs<"CoverImageFragment">;
  };
  readonly title: string;
  readonly visibility: EntityVisibility;
  readonly " $fragmentSpreads": FragmentRefs<"DOIFragment" | "getEntityDisplayNameFragment">;
  readonly " $fragmentType": "IssueHeroFragment";
};
export type IssueHeroFragment$key = {
  readonly " $data"?: IssueHeroFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"IssueHeroFragment">;
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
    "kind": "Literal",
    "name": "name",
    "value": "volume"
  }
],
v2 = [
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
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "IssueHeroFragment",
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
      "name": "summary",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "DOIFragment"
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "visibility",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "currentlyHidden",
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
      "alias": null,
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
          "args": null,
          "kind": "FragmentSpread",
          "name": "JournalHeroCompactFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "JournalHeroMetadataFragment"
        }
      ],
      "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
    },
    {
      "alias": "pdfVersion",
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
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "AssetDownloadButtonFragment"
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
                  "args": (v1/*: any*/),
                  "concreteType": null,
                  "kind": "LinkedField",
                  "name": "ancestorByName",
                  "plural": false,
                  "selections": [
                    {
                      "kind": "InlineFragment",
                      "selections": [
                        (v0/*: any*/)
                      ],
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
                  "selections": (v2/*: any*/),
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
                      "args": (v1/*: any*/),
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
                              "selections": (v2/*: any*/),
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
                      "selections": (v2/*: any*/),
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

(node as any).hash = "861d524e24c596c1abca8555acc0dd4b";

export default node;
