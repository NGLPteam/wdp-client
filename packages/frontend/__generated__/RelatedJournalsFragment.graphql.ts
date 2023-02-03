/**
 * @generated SignedSource<<e48e06dbb312f9414cb610f424a3aeba>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RelatedJournalsFragment$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly slug: String;
      readonly " $fragmentSpreads": FragmentRefs<"RelatedJournalFragment">;
    };
  }>;
  readonly " $fragmentType": "RelatedJournalsFragment";
};
export type RelatedJournalsFragment$key = {
  readonly " $data"?: RelatedJournalsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"RelatedJournalsFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RelatedJournalsFragment",
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
              "name": "slug",
              "storageKey": null
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "RelatedJournalFragment"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "CollectionConnection",
  "abstractKey": null
};

(node as any).hash = "4a2c79145a70e411a53a940951629436";

export default node;
