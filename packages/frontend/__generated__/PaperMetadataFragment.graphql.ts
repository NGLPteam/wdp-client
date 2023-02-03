/**
 * @generated SignedSource<<b7f0873747581b70008c2db75b1d223a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PaperMetadataFragment$data = {
  readonly accessioned: {
    readonly " $fragmentSpreads": FragmentRefs<"MetadataFactoryFragment">;
  } | null;
  readonly available: {
    readonly " $fragmentSpreads": FragmentRefs<"MetadataFactoryFragment">;
  } | null;
  readonly contributions: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly contributor: {
          readonly " $fragmentSpreads": FragmentRefs<"ContributorNameFragment">;
        };
        readonly role: string | null;
      };
    }>;
  };
  readonly host: {
    readonly properties?: ReadonlyArray<{
      readonly path?: string;
      readonly " $fragmentSpreads": FragmentRefs<"MetadataFactoryFragment">;
    }>;
  } | null;
  readonly issn: string | null;
  readonly pdfVersion: {
    readonly " $fragmentSpreads": FragmentRefs<"MetadataFactoryFragment">;
  } | null;
  readonly textVersion: {
    readonly " $fragmentSpreads": FragmentRefs<"MetadataFactoryFragment">;
  } | null;
  readonly " $fragmentType": "PaperMetadataFragment";
};
export type PaperMetadataFragment$key = {
  readonly " $data"?: PaperMetadataFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PaperMetadataFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "MetadataFactoryFragment"
},
v1 = [
  (v0/*: any*/)
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
      "selections": (v1/*: any*/),
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
      "selections": (v1/*: any*/),
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
      "alias": "host",
      "args": [
        {
          "kind": "Literal",
          "name": "fullPath",
          "value": "host"
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
              "name": "properties",
              "plural": true,
              "selections": [
                {
                  "kind": "InlineFragment",
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "path",
                      "storageKey": null
                    },
                    (v0/*: any*/)
                  ],
                  "type": "ScalarProperty",
                  "abstractKey": "__isScalarProperty"
                }
              ],
              "storageKey": null
            }
          ],
          "type": "GroupProperty",
          "abstractKey": null
        }
      ],
      "storageKey": "schemaProperty(fullPath:\"host\")"
    }
  ],
  "type": "Item",
  "abstractKey": null
};
})();

(node as any).hash = "1837ef7db7294e9ff5214d23b08b6110";

export default node;
