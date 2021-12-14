/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type RelatedArticlesFragment = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly title: string;
            readonly published: {
                readonly " $fragmentRefs": FragmentRefs<"PrecisionDateFragment">;
            };
            readonly journal: {
                readonly title?: string | undefined;
            } | null;
            readonly volumeId: {
                readonly fullPath?: string | undefined;
                readonly content?: string | null | undefined;
            } | null;
            readonly issueId: {
                readonly fullPath?: string | undefined;
                readonly content?: string | null | undefined;
            } | null;
        };
    }>;
    readonly " $refType": "RelatedArticlesFragment";
};
export type RelatedArticlesFragment$data = RelatedArticlesFragment;
export type RelatedArticlesFragment$key = {
    readonly " $data"?: RelatedArticlesFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"RelatedArticlesFragment">;
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
(node as any).hash = 'b4fa78e553122caef9cedf9eddf1994a';
export default node;
