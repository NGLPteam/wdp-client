/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type InstanceContentLayoutFragment = {
    readonly communities: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly slug: string;
            };
        }>;
        readonly pageInfo: {
            readonly totalCount: number;
        };
        readonly " $fragmentRefs": FragmentRefs<"InstanceCommunitiesFragment">;
    };
    readonly " $fragmentRefs": FragmentRefs<"InstanceHeroFragment">;
    readonly " $refType": "InstanceContentLayoutFragment";
};
export type InstanceContentLayoutFragment$data = InstanceContentLayoutFragment;
export type InstanceContentLayoutFragment$key = {
    readonly " $data"?: InstanceContentLayoutFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"InstanceContentLayoutFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "InstanceContentLayoutFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "order",
          "value": "POSITION_ASCENDING"
        }
      ],
      "concreteType": "CommunityConnection",
      "kind": "LinkedField",
      "name": "communities",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "CommunityEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Community",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "slug",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "totalCount",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "InstanceCommunitiesFragment"
        }
      ],
      "storageKey": "communities(order:\"POSITION_ASCENDING\")"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "InstanceHeroFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '3f0a5792ceb06dabcecb124098ccdcf4';
export default node;
