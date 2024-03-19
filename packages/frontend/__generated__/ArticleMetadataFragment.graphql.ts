/**
 * @generated SignedSource<<37302b374672113627b790e93155873a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArticleMetadataFragment$data = {
  readonly collectedMeta: {
    readonly " $fragmentSpreads": FragmentRefs<"MetadataFactoryFragment">;
  } | null | undefined;
  readonly contributions: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly contributor: {
          readonly " $fragmentSpreads": FragmentRefs<"ContributorNameFragment">;
        };
        readonly role: string | null | undefined;
      };
    }>;
  };
  readonly doi: string | null | undefined;
  readonly journal: {
    readonly ccLicense?: {
      readonly " $fragmentSpreads": FragmentRefs<"MetadataFactoryFragment">;
    } | null | undefined;
    readonly title?: string;
  } | null | undefined;
  readonly onlineVersion: {
    readonly " $fragmentSpreads": FragmentRefs<"MetadataFactoryFragment">;
  } | null | undefined;
  readonly pageCountMeta: {
    readonly " $fragmentSpreads": FragmentRefs<"MetadataFactoryFragment">;
  } | null | undefined;
  readonly pdfVersion: {
    readonly " $fragmentSpreads": FragmentRefs<"MetadataFactoryFragment">;
  } | null | undefined;
  readonly preprintVersion: {
    readonly " $fragmentSpreads": FragmentRefs<"MetadataFactoryFragment">;
  } | null | undefined;
  readonly published: {
    readonly value: string | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"PrecisionDateFragment">;
  };
  readonly volumeIdMeta: {
    readonly " $fragmentSpreads": FragmentRefs<"MetadataFactoryFragment">;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"ArticleIssueMetadataFragment">;
  readonly " $fragmentType": "ArticleMetadataFragment";
};
export type ArticleMetadataFragment$key = {
  readonly " $data"?: ArticleMetadataFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArticleMetadataFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
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
  "name": "ArticleMetadataFragment",
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
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "title",
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
              "selections": (v0/*: any*/),
              "storageKey": "schemaProperty(fullPath:\"cc_license\")"
            }
          ],
          "type": "Collection",
          "abstractKey": null
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
      "selections": (v0/*: any*/),
      "storageKey": "schemaProperty(fullPath:\"meta.collected\")"
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
      "selections": (v0/*: any*/),
      "storageKey": "schemaProperty(fullPath:\"meta.page_count\")"
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
      "selections": (v0/*: any*/),
      "storageKey": "schemaProperty(fullPath:\"pdf_version\")"
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
      "selections": (v0/*: any*/),
      "storageKey": "schemaProperty(fullPath:\"online_version\")"
    },
    {
      "alias": "preprintVersion",
      "args": [
        {
          "kind": "Literal",
          "name": "fullPath",
          "value": "preprint_version"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "schemaProperty",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": "schemaProperty(fullPath:\"preprint_version\")"
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
      "selections": (v0/*: any*/),
      "storageKey": "schemaProperty(fullPath:\"volume.id\")"
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

(node as any).hash = "4a9264fa2bf922b086bed948577423c0";

export default node;
