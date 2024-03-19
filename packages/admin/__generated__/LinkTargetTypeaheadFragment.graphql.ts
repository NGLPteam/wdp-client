/**
 * @generated SignedSource<<5b0c5273b308872049b4428d9cd49d24>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LinkTargetTypeaheadFragment$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly target: {
        readonly " $fragmentSpreads": FragmentRefs<"getEntityTitleFragment">;
      };
      readonly targetId: string;
    };
  }>;
  readonly " $fragmentType": "LinkTargetTypeaheadFragment";
};
export type LinkTargetTypeaheadFragment$key = {
  readonly " $data"?: LinkTargetTypeaheadFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"LinkTargetTypeaheadFragment">;
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
    "alias": null,
    "args": null,
    "concreteType": "NamedAncestor",
    "kind": "LinkedField",
    "name": "namedAncestors",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "ancestor",
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
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LinkTargetTypeaheadFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "LinkTargetCandidateEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "LinkTargetCandidate",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "targetId",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": null,
              "kind": "LinkedField",
              "name": "target",
              "plural": false,
              "selections": [
                {
                  "kind": "InlineDataFragmentSpread",
                  "name": "getEntityTitleFragment",
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
                        (v0/*: any*/),
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": "SchemaVersion",
                          "kind": "LinkedField",
                          "name": "schemaVersion",
                          "plural": false,
                          "selections": [
                            {
                              "alias": null,
                              "args": null,
                              "kind": "ScalarField",
                              "name": "identifier",
                              "storageKey": null
                            }
                          ],
                          "storageKey": null
                        },
                        {
                          "kind": "InlineFragment",
                          "selections": (v1/*: any*/),
                          "type": "Collection",
                          "abstractKey": null
                        },
                        {
                          "kind": "InlineFragment",
                          "selections": (v1/*: any*/),
                          "type": "Item",
                          "abstractKey": null
                        }
                      ],
                      "type": "Entity",
                      "abstractKey": "__isEntity"
                    }
                  ],
                  "args": null,
                  "argumentDefinitions": []
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
  "type": "LinkTargetCandidateConnection",
  "abstractKey": null
};
})();

(node as any).hash = "e7a62872262d6481ce014b48e8d7e717";

export default node;
