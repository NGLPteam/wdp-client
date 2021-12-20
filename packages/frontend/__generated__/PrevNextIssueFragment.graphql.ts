/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type PrevNextIssueFragment = {
    readonly slug: string;
    readonly volume: {
        readonly collections?: {
            readonly edges: ReadonlyArray<{
                readonly node: {
                    readonly title: string;
                    readonly slug: string;
                };
            }>;
        } | undefined;
    } | null;
    readonly " $refType": "PrevNextIssueFragment";
};
export type PrevNextIssueFragment$data = PrevNextIssueFragment;
export type PrevNextIssueFragment$key = {
    readonly " $data"?: PrevNextIssueFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"PrevNextIssueFragment">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PrevNextIssueFragment",
  "selections": [
    (v0/*: any*/),
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
            {
              "alias": null,
              "args": [
                {
                  "kind": "Literal",
                  "name": "schema",
                  "value": [
                    "nglp:journal_issue"
                  ]
                }
              ],
              "concreteType": "CollectionConnection",
              "kind": "LinkedField",
              "name": "collections",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "CollectionEdge",
                  "kind": "LinkedField",
                  "name": "edges",
                  "plural": true,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "Collection",
                      "kind": "LinkedField",
                      "name": "node",
                      "plural": false,
                      "selections": [
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "title",
                          "storageKey": null
                        },
                        (v0/*: any*/)
                      ],
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": "collections(schema:[\"nglp:journal_issue\"])"
            }
          ],
          "type": "Collection",
          "abstractKey": null
        }
      ],
      "storageKey": "ancestorOfType(schema:\"nglp:journal_volume\")"
    }
  ],
  "type": "Collection",
  "abstractKey": null
};
})();
(node as any).hash = '024fc37cb99391d502f9776c9b4c793a';
export default node;
