/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CollectionSlugRedirectFragment = {
    readonly slug: string;
    readonly collections: {
        readonly pageInfo: {
            readonly totalCount: number;
        };
    };
    readonly " $refType": "CollectionSlugRedirectFragment";
};
export type CollectionSlugRedirectFragment$data = CollectionSlugRedirectFragment;
export type CollectionSlugRedirectFragment$key = {
    readonly " $data"?: CollectionSlugRedirectFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CollectionSlugRedirectFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CollectionSlugRedirectFragment",
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
      "storageKey": null
    }
  ],
  "type": "Collection",
  "abstractKey": null
};
(node as any).hash = 'f44f48ecf10416dfab932ef7c95ce369';
export default node;
