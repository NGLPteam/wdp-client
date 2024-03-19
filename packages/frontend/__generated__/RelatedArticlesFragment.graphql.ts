/**
 * @generated SignedSource<<23a64ad5adbfb3e00945db5419c17ed1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RelatedArticlesFragment$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly issueId: {
        readonly content?: string | null | undefined;
        readonly fullPath?: string;
      } | null | undefined;
      readonly journal: {
        readonly title?: string;
      } | null | undefined;
      readonly published: {
        readonly " $fragmentSpreads": FragmentRefs<"PrecisionDateFragment">;
      };
      readonly slug: string;
      readonly title: string;
      readonly volumeId: {
        readonly content?: string | null | undefined;
        readonly fullPath?: string;
      } | null | undefined;
    };
  }>;
  readonly " $fragmentType": "RelatedArticlesFragment";
};
export type RelatedArticlesFragment$key = {
  readonly " $data"?: RelatedArticlesFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"RelatedArticlesFragment">;
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
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "fullPath",
        "storageKey": null
      },
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
  "name": "RelatedArticlesFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ItemEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Item",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
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
                  "type": "Collection",
                  "abstractKey": null
                }
              ],
              "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
            },
            {
              "alias": "volumeId",
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
              "alias": "issueId",
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
              "selections": (v1/*: any*/),
              "storageKey": "schemaProperty(fullPath:\"id\")"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ItemConnection",
  "abstractKey": null
};
})();

(node as any).hash = "64ea12cda0e90664e1bcaad39d57337b";

export default node;
