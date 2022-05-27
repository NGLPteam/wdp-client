/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type PaperMetadataFragment = {
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
    readonly accessioned: {
        readonly " $fragmentRefs": FragmentRefs<"MetadataFactoryFragment">;
    } | null;
    readonly available: {
        readonly " $fragmentRefs": FragmentRefs<"MetadataFactoryFragment">;
    } | null;
    readonly " $refType": "PaperMetadataFragment";
};
export type PaperMetadataFragment$data = PaperMetadataFragment;
export type PaperMetadataFragment$key = {
    readonly " $data"?: PaperMetadataFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"PaperMetadataFragment">;
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
  "name": "PaperMetadataFragment",
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
    }
  ],
  "type": "Item",
  "abstractKey": null
};
})();
(node as any).hash = '509f7f1b3f6f366744053c209a248290';
export default node;
