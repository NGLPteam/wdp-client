/**
 * @generated SignedSource<<2e41ea0bd502de02be479819c06b60f7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RelatedIssuesFragment$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly slug: string;
      readonly " $fragmentSpreads": FragmentRefs<"RelatedIssueBlockFragment">;
    };
  }>;
  readonly " $fragmentType": "RelatedIssuesFragment";
};
export type RelatedIssuesFragment$key = {
  readonly " $data"?: RelatedIssuesFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"RelatedIssuesFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RelatedIssuesFragment",
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
              "name": "RelatedIssueBlockFragment"
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

(node as any).hash = "80fbbad0a6238fe6288e3412f206ef56";

export default node;
