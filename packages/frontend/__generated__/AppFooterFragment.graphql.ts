/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AppFooterFragment = {
    readonly communities: {
        readonly pageInfo: {
            readonly totalCount: number;
        };
    };
    readonly " $refType": "AppFooterFragment";
};
export type AppFooterFragment$data = AppFooterFragment;
export type AppFooterFragment$key = {
    readonly " $data"?: AppFooterFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AppFooterFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppFooterFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "CommunityConnection",
      "kind": "LinkedField",
      "name": "communities",
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
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '4794cc226705eef8c3f78ddbe7f8ce10';
export default node;
