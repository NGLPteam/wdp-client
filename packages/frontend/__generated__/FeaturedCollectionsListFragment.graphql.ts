/**
 * @generated SignedSource<<a682bc069c91444b6f3783bd141af8cb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FeaturedCollectionsListFragment$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly slug: String;
      readonly title: string;
    };
  }>;
  readonly " $fragmentType": "FeaturedCollectionsListFragment";
};
export type FeaturedCollectionsListFragment$key = {
  readonly " $data"?: FeaturedCollectionsListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"FeaturedCollectionsListFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FeaturedCollectionsListFragment",
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
  "type": "CollectionConnection",
  "abstractKey": null
};

(node as any).hash = "f0729b6e1e2bd0043bff7d18ea115aa3";

export default node;
