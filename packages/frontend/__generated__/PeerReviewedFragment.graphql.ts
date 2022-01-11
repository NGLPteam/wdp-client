/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type PeerReviewedFragment = {
    readonly peerReviewed: {
        readonly checked?: boolean | null | undefined;
        readonly checkedByDefault?: boolean | null | undefined;
    } | null;
    readonly " $refType": "PeerReviewedFragment";
};
export type PeerReviewedFragment$data = PeerReviewedFragment;
export type PeerReviewedFragment$key = {
    readonly " $data"?: PeerReviewedFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"PeerReviewedFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PeerReviewedFragment",
  "selections": [
    {
      "alias": "peerReviewed",
      "args": [
        {
          "kind": "Literal",
          "name": "fullPath",
          "value": "peer_reviewed"
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
              "kind": "ScalarField",
              "name": "checked",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "checkedByDefault",
              "storageKey": null
            }
          ],
          "type": "BooleanProperty",
          "abstractKey": null
        }
      ],
      "storageKey": "schemaProperty(fullPath:\"peer_reviewed\")"
    }
  ],
  "type": "SchemaInstance",
  "abstractKey": "__isSchemaInstance"
};
(node as any).hash = 'c0a447a7e50caebb2f86f4b55973f1e5';
export default node;
