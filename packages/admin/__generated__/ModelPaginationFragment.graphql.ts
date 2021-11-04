/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ModelPaginationFragment = {
    readonly pageInfo: {
        readonly page: number | null;
        readonly pageCount: number | null;
    };
    readonly " $refType": "ModelPaginationFragment";
};
export type ModelPaginationFragment$data = ModelPaginationFragment;
export type ModelPaginationFragment$key = {
    readonly " $data"?: ModelPaginationFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ModelPaginationFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ModelPaginationFragment",
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Paginated",
  "abstractKey": "__isPaginated"
};
(node as any).hash = '0e714f6aa097365a224d247086c8d009';
export default node;
