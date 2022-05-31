/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type DissertationMetadataFragment = {
    readonly issn: string | null;
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
    readonly pdfVersion: {
        readonly " $fragmentRefs": FragmentRefs<"MetadataFactoryFragment">;
    } | null;
    readonly textVersion: {
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
    readonly ccLicense: {
        readonly " $fragmentRefs": FragmentRefs<"MetadataFactoryFragment">;
    } | null;
    readonly accessioned: {
        readonly " $fragmentRefs": FragmentRefs<"MetadataFactoryFragment">;
    } | null;
    readonly available: {
        readonly " $fragmentRefs": FragmentRefs<"MetadataFactoryFragment">;
    } | null;
    readonly media: {
        readonly " $fragmentRefs": FragmentRefs<"MetadataFactoryFragment">;
    } | null;
    readonly keywords: {
        readonly " $fragmentRefs": FragmentRefs<"MetadataFactoryFragment">;
    } | null;
    readonly " $refType": "DissertationMetadataFragment";
};
export type DissertationMetadataFragment$data = DissertationMetadataFragment;
export type DissertationMetadataFragment$key = {
    readonly " $data"?: DissertationMetadataFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"DissertationMetadataFragment">;
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
  "name": "DissertationMetadataFragment",
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
      "selections": (v0/*: any*/),
      "storageKey": "schemaProperty(fullPath:\"text_version\")"
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
      "selections": (v0/*: any*/),
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
      "selections": (v0/*: any*/),
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
      "selections": (v0/*: any*/),
      "storageKey": "schemaProperty(fullPath:\"language\")"
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
      "selections": (v0/*: any*/),
      "storageKey": "schemaProperty(fullPath:\"cc_license\")"
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
      "selections": (v0/*: any*/),
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
      "selections": (v0/*: any*/),
      "storageKey": "schemaProperty(fullPath:\"available\")"
    },
    {
      "alias": "media",
      "args": [
        {
          "kind": "Literal",
          "name": "fullPath",
          "value": "streaming_media"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "schemaProperty",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": "schemaProperty(fullPath:\"streaming_media\")"
    },
    {
      "alias": "keywords",
      "args": [
        {
          "kind": "Literal",
          "name": "fullPath",
          "value": "keywords"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "schemaProperty",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": "schemaProperty(fullPath:\"keywords\")"
    }
  ],
  "type": "Item",
  "abstractKey": null
};
})();
(node as any).hash = '8a2770f0301016e263d7ab5829ea29ef';
export default node;
