/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type LinkTargetTypeaheadFragment = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly targetId: string;
            readonly target: {
                readonly __typename: "Collection";
                readonly title: string;
            } | {
                readonly __typename: "Item";
                readonly title: string;
            } | {
                /*This will never be '%other', but we need some
                value in case none of the concrete values match.*/
                readonly __typename: "%other";
            };
        };
    }>;
    readonly " $refType": "LinkTargetTypeaheadFragment";
};
export type LinkTargetTypeaheadFragment$data = LinkTargetTypeaheadFragment;
export type LinkTargetTypeaheadFragment$key = {
    readonly " $data"?: LinkTargetTypeaheadFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"LinkTargetTypeaheadFragment">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "title",
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
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                },
                {
                  "kind": "InlineFragment",
                  "selections": (v0/*: any*/),
                  "type": "Collection",
                  "abstractKey": null
                },
                {
                  "kind": "InlineFragment",
                  "selections": (v0/*: any*/),
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
(node as any).hash = 'e467703a74b65caadb97eda0a8e9bcc2';
export default node;
