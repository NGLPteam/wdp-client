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
                readonly " $fragmentRefs": FragmentRefs<"EntityTitleFactoryFragment">;
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



const node: ReaderFragment = {
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
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "EntityTitleFactoryFragment"
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
(node as any).hash = 'f590a146a76ee0fdf5fac56621e37ad8';
export default node;
