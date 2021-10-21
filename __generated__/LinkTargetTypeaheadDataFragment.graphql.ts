/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type LinkTargetCandidateKind = "COLLECTION" | "ITEM" | "%future added value";
export type LinkTargetTypeaheadDataFragment = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly kind: LinkTargetCandidateKind;
            readonly title: string;
            readonly targetId: string;
            readonly target: {
                readonly __typename: "Collection";
                readonly title: string | null;
            } | {
                readonly __typename: "Item";
                readonly title: string | null;
            } | {
                /*This will never be '%other', but we need some
                value in case none of the concrete values match.*/
                readonly __typename: "%other";
            };
        };
    }>;
    readonly " $refType": "LinkTargetTypeaheadDataFragment";
};
export type LinkTargetTypeaheadDataFragment$data = LinkTargetTypeaheadDataFragment;
export type LinkTargetTypeaheadDataFragment$key = {
    readonly " $data"?: LinkTargetTypeaheadDataFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"LinkTargetTypeaheadDataFragment">;
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
  (v0/*: any*/)
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LinkTargetTypeaheadDataFragment",
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
              "name": "kind",
              "storageKey": null
            },
            (v0/*: any*/),
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
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
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
(node as any).hash = '3bfaa52a41157ae68abb39b225c7b909';
export default node;
