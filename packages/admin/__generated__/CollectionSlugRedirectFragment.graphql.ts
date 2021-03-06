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
    readonly items: {
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



const node: ReaderFragment = (function(){
var v0 = [
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
];
return {
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
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ItemConnection",
      "kind": "LinkedField",
      "name": "items",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    }
  ],
  "type": "Collection",
  "abstractKey": null
};
})();
(node as any).hash = '339d07584a301e80ffd37612e4320d8b';
export default node;
