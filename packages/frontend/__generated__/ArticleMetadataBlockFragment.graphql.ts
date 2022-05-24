/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ArticleMetadataBlockFragment = {
    readonly doi: string | null;
    readonly journal: {
        readonly title?: string | undefined;
    } | null;
    readonly contributions: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly role: string | null;
                readonly contributor: {
                    readonly " $fragmentRefs": FragmentRefs<"ContributorNameFragment">;
                };
            };
        }>;
    };
    readonly collectedMeta: {
        readonly " $fragmentRefs": FragmentRefs<"MetadataFactoryFragment">;
    } | null;
    readonly pageCountMeta: {
        readonly " $fragmentRefs": FragmentRefs<"MetadataFactoryFragment">;
    } | null;
    readonly volumeIdMeta: {
        readonly " $fragmentRefs": FragmentRefs<"MetadataFactoryFragment">;
    } | null;
    readonly onlineVersion: {
        readonly " $fragmentRefs": FragmentRefs<"MetadataFactoryFragment">;
    } | null;
    readonly published: {
        readonly value: string | null;
        readonly " $fragmentRefs": FragmentRefs<"PrecisionDateFragment">;
    };
    readonly accessioned: {
        readonly " $fragmentRefs": FragmentRefs<"MetadataFactoryFragment">;
    } | null;
    readonly available: {
        readonly " $fragmentRefs": FragmentRefs<"MetadataFactoryFragment">;
    } | null;
    readonly issued: {
        readonly " $fragmentRefs": FragmentRefs<"MetadataFactoryFragment">;
    } | null;
    readonly series: {
        readonly title?: string | undefined;
        readonly slug?: string | undefined;
    } | null;
    readonly textVersion: {
        readonly " $fragmentRefs": FragmentRefs<"MetadataFactoryFragment">;
    } | null;
    readonly pdfVersion: {
        readonly " $fragmentRefs": FragmentRefs<"MetadataFactoryFragment">;
    } | null;
    readonly publisher: {
        readonly " $fragmentRefs": FragmentRefs<"MetadataFactoryFragment">;
    } | null;
    readonly advisor: {
        readonly " $fragmentRefs": FragmentRefs<"MetadataFactoryFragment">;
    } | null;
    readonly language: {
        readonly " $fragmentRefs": FragmentRefs<"MetadataFactoryFragment">;
    } | null;
    readonly access: {
        readonly " $fragmentRefs": FragmentRefs<"MetadataFactoryFragment">;
    } | null;
    readonly ccLicense: {
        readonly " $fragmentRefs": FragmentRefs<"MetadataFactoryFragment">;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"ArticleIssueMetadataFragment">;
    readonly " $refType": "ArticleMetadataBlockFragment";
};
export type ArticleMetadataBlockFragment$data = ArticleMetadataBlockFragment;
export type ArticleMetadataBlockFragment$key = {
    readonly " $data"?: ArticleMetadataBlockFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ArticleMetadataBlockFragment">;
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
    "args": null,
    "kind": "FragmentSpread",
    "name": "MetadataFactoryFragment"
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArticleMetadataBlockFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "doi",
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
          "kind": "InlineFragment",
          "selections": [
            (v0/*: any*/)
          ],
          "type": "Entity",
          "abstractKey": "__isEntity"
        }
      ],
      "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
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
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "ContributorNameFragment"
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
      "storageKey": null
    },
    {
      "alias": "collectedMeta",
      "args": [
        {
          "kind": "Literal",
          "name": "fullPath",
          "value": "meta.collected"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "schemaProperty",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": "schemaProperty(fullPath:\"meta.collected\")"
    },
    {
      "alias": "pageCountMeta",
      "args": [
        {
          "kind": "Literal",
          "name": "fullPath",
          "value": "meta.page_count"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "schemaProperty",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": "schemaProperty(fullPath:\"meta.page_count\")"
    },
    {
      "alias": "volumeIdMeta",
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
      "selections": (v1/*: any*/),
      "storageKey": "schemaProperty(fullPath:\"volume.id\")"
    },
    {
      "alias": "onlineVersion",
      "args": [
        {
          "kind": "Literal",
          "name": "fullPath",
          "value": "online_version"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "schemaProperty",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": "schemaProperty(fullPath:\"online_version\")"
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
      "alias": "accessioned",
      "args": [
        {
          "kind": "Literal",
          "name": "fullPath",
          "value": "accessioned"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "schemaProperty",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": "schemaProperty(fullPath:\"accessioned\")"
    },
    {
      "alias": "available",
      "args": [
        {
          "kind": "Literal",
          "name": "fullPath",
          "value": "available"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "schemaProperty",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": "schemaProperty(fullPath:\"available\")"
    },
    {
      "alias": "issued",
      "args": [
        {
          "kind": "Literal",
          "name": "fullPath",
          "value": "issued"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "schemaProperty",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": "schemaProperty(fullPath:\"issued\")"
    },
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
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
            (v0/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "slug",
              "storageKey": null
            }
          ],
          "type": "Collection",
          "abstractKey": null
        }
      ],
      "storageKey": "ancestorOfType(schema:\"nglp:series\")"
    },
    {
      "alias": "textVersion",
      "args": [
        {
          "kind": "Literal",
          "name": "fullPath",
          "value": "text_version"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "schemaProperty",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": "schemaProperty(fullPath:\"text_version\")"
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
      "selections": (v1/*: any*/),
      "storageKey": "schemaProperty(fullPath:\"pdf_version\")"
    },
    {
      "alias": "publisher",
      "args": [
        {
          "kind": "Literal",
          "name": "fullPath",
          "value": "publisher"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "schemaProperty",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": "schemaProperty(fullPath:\"publisher\")"
    },
    {
      "alias": "advisor",
      "args": [
        {
          "kind": "Literal",
          "name": "fullPath",
          "value": "advisor"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "schemaProperty",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": "schemaProperty(fullPath:\"advisor\")"
    },
    {
      "alias": "language",
      "args": [
        {
          "kind": "Literal",
          "name": "fullPath",
          "value": "language"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "schemaProperty",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": "schemaProperty(fullPath:\"language\")"
    },
    {
      "alias": "access",
      "args": [
        {
          "kind": "Literal",
          "name": "fullPath",
          "value": "access"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "schemaProperty",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": "schemaProperty(fullPath:\"access\")"
    },
    {
      "alias": "ccLicense",
      "args": [
        {
          "kind": "Literal",
          "name": "fullPath",
          "value": "cc_license"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "schemaProperty",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": "schemaProperty(fullPath:\"cc_license\")"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArticleIssueMetadataFragment"
    }
  ],
  "type": "Item",
  "abstractKey": null
};
})();
(node as any).hash = '0ade648805256ec2095378806028e8c9';
export default node;
