/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ModelPageCountActionsFragment = {
    readonly pageInfo: {
        readonly page: number | null;
        readonly pageCount: number | null;
        readonly perPage: number | null;
        readonly hasNextPage: boolean;
        readonly hasPreviousPage: boolean;
        readonly totalCount: number;
    };
    readonly " $refType": "ModelPageCountActionsFragment";
};
export type ModelPageCountActionsFragment$data = ModelPageCountActionsFragment;
export type ModelPageCountActionsFragment$key = {
    readonly " $data"?: ModelPageCountActionsFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"ModelPageCountActionsFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ModelPageCountActionsFragment",
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
          "name": "page",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "pageCount",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "perPage",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "hasNextPage",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "hasPreviousPage",
          "storageKey": null
        },
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
  "type": "Paginated",
  "abstractKey": "__isPaginated"
};
(node as any).hash = '3ed4e550437e2b0a6845495023197b57';
export default node;
