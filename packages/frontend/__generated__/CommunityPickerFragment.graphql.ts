/**
 * @generated SignedSource<<eb13ceb2ba2c55c1a995fb9730cc3979>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommunityPickerFragment$data = {
  readonly pickerCommunities: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly slug: String;
        readonly title: string;
      };
    }>;
  };
  readonly " $fragmentType": "CommunityPickerFragment";
};
export type CommunityPickerFragment$key = {
  readonly " $data"?: CommunityPickerFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommunityPickerFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityPickerFragment",
  "selections": [
    {
      "alias": "pickerCommunities",
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
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "title",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "communities(order:\"POSITION_ASCENDING\")"
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "49b651af961bf605a6cbea7a2311cc4b";

export default node;
