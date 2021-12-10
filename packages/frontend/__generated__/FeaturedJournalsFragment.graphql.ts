/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type FeaturedJournalsFragment = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly slug: string;
            readonly " $fragmentRefs": FragmentRefs<"FeaturedJournalFragment">;
        };
    }>;
    readonly pageInfo: {
        readonly totalCount: number;
        readonly perPage: number | null;
    };
    readonly " $refType": "FeaturedJournalsFragment";
};
export type FeaturedJournalsFragment$data = FeaturedJournalsFragment;
export type FeaturedJournalsFragment$key = {
    readonly " $data"?: FeaturedJournalsFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"FeaturedJournalsFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FeaturedJournalsFragment",
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
              "name": "FeaturedJournalFragment"
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
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "perPage",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "CollectionConnection",
  "abstractKey": null
};
(node as any).hash = 'ed4f4d32240f7661b9981bc459d6eb70';
export default node;
