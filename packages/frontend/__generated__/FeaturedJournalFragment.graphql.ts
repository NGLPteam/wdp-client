/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type FeaturedJournalFragment = {
    readonly id: string;
    readonly title: string;
    readonly slug: string;
    readonly updatedAt: string;
    readonly thumbnail: {
        readonly " $fragmentRefs": FragmentRefs<"CoverImageFragment">;
    };
    readonly issues: {
        readonly pageInfo: {
            readonly totalCount: number;
        };
    };
    readonly " $refType": "FeaturedJournalFragment";
};
export type FeaturedJournalFragment$data = FeaturedJournalFragment;
export type FeaturedJournalFragment$key = {
    readonly " $data"?: FeaturedJournalFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"FeaturedJournalFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FeaturedJournalFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
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
      "name": "updatedAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ImageAttachment",
      "kind": "LinkedField",
      "name": "thumbnail",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "CoverImageFragment"
        }
      ],
      "storageKey": null
    },
    {
      "alias": "issues",
      "args": [
        {
          "kind": "Literal",
          "name": "schema",
          "value": "nglp:journal_issue"
        }
      ],
      "concreteType": "CollectionConnection",
      "kind": "LinkedField",
      "name": "collections",
      "plural": false,
      "selections": [
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
        }
      ],
      "storageKey": "collections(schema:\"nglp:journal_issue\")"
    }
  ],
  "type": "Collection",
  "abstractKey": null
};
(node as any).hash = 'b9aad7f7d0a9ff34b49863de358f4858';
export default node;
