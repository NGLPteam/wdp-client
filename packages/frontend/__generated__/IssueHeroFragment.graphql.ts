/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityVisibility = "HIDDEN" | "LIMITED" | "VISIBLE" | "%future added value";
export type IssueHeroFragment = {
    readonly id: string;
    readonly title: string;
    readonly subtitle: string | null;
    readonly summary: string | null;
    readonly visibility: EntityVisibility;
    readonly currentlyHidden: boolean;
    readonly published: {
        readonly value: string | null;
        readonly " $fragmentRefs": FragmentRefs<"PrecisionDateFragment">;
    };
    readonly thumbnail: {
        readonly " $fragmentRefs": FragmentRefs<"CoverImageFragment">;
    };
    readonly journal: {
        readonly " $fragmentRefs": FragmentRefs<"JournalHeroCompactFragment" | "JournalHeroMetadataFragment">;
    } | null;
    readonly pdfVersion: {
        readonly asset?: {
            readonly " $fragmentRefs": FragmentRefs<"AssetDownloadButtonFragment">;
        } | null | undefined;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"DOIFragment" | "getEntityDisplayNameFragment">;
    readonly " $refType": "IssueHeroFragment";
};
export type IssueHeroFragment$data = IssueHeroFragment;
export type IssueHeroFragment$key = {
    readonly " $data"?: IssueHeroFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"IssueHeroFragment">;
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "DOIFragment"
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
                      "alias": "volume",
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
(node as any).hash = '861d524e24c596c1abca8555acc0dd4b';
export default node;
