/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
export type RelatedJournalsFragment = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly target: {
                readonly __typename: "Collection";
                readonly id: string;
                readonly title: string;
                readonly slug: string;
                readonly published: {
                    readonly " $fragmentRefs": FragmentRefs<"PrecisionDateFragment">;
                };
                readonly thumbnail: {
                    readonly storage: AttachmentStorage | null;
                    readonly " $fragmentRefs": FragmentRefs<"CoverImageFragment">;
                };
                readonly currentIssue: {
                    readonly number: {
                        readonly content?: string | null | undefined;
                    } | null;
                    readonly volume: {
                        readonly title?: string | undefined;
                    } | null;
                } | null;
            } | {
                /*This will never be '%other', but we need some
                value in case none of the concrete values match.*/
                readonly __typename: "%other";
            };
        };
    }>;
    readonly " $refType": "RelatedJournalsFragment";
};
export type RelatedJournalsFragment$data = RelatedJournalsFragment;
export type RelatedJournalsFragment$key = {
    readonly " $data"?: RelatedJournalsFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"RelatedJournalsFragment">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RelatedJournalsFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "EntityLinkEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "EntityLink",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": null,
              "kind": "LinkedField",
              "name": "target",
              "plural": false,
              "selections": [
                {
                  "kind": "InlineFragment",
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "__typename",
                      "storageKey": null
                    },
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
                      "name": "slug",
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
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "storage",
                          "storageKey": null
                        },
                        {
                          "args": null,
                          "kind": "FragmentSpread",
                          "name": "CoverImageFragment"
                        }
                      ],
                      "storageKey": null
                    },
                    {
                      "alias": "currentIssue",
                      "args": [
                        {
                          "kind": "Literal",
                          "name": "nodeFilter",
                          "value": "DESCENDANTS"
                        },
                        {
                          "kind": "Literal",
                          "name": "order",
                          "value": "PUBLISHED_DESCENDING"
                        },
                        {
                          "kind": "Literal",
                          "name": "schema",
                          "value": "nglp:journal_issue"
                        }
                      ],
                      "concreteType": "Collection",
                      "kind": "LinkedField",
                      "name": "firstCollection",
                      "plural": false,
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
                          "selections": [
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
                          "storageKey": "schemaProperty(fullPath:\"number\")"
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
                          "storageKey": "ancestorOfType(schema:\"nglp:journal_volume\")"
                        }
                      ],
                      "storageKey": "firstCollection(nodeFilter:\"DESCENDANTS\",order:\"PUBLISHED_DESCENDING\",schema:\"nglp:journal_issue\")"
                    }
                  ],
                  "type": "Collection",
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
  "type": "EntityLinkConnection",
  "abstractKey": null
};
})();
(node as any).hash = '4fde6b1a46ec9c5e02392052bf2b08f1';
export default node;
