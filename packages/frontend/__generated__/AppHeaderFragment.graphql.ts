/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SiteLogoMode = "NONE" | "SANS_TEXT" | "WITH_TEXT" | "%future added value";
export type AppHeaderFragment = {
    readonly communities: {
        readonly pageInfo: {
            readonly totalCount: number;
        };
    };
    readonly globalConfiguration: {
        readonly site: {
            readonly logoMode: SiteLogoMode;
        };
    };
    readonly " $refType": "AppHeaderFragment";
};
export type AppHeaderFragment$data = AppHeaderFragment;
export type AppHeaderFragment$key = {
    readonly " $data"?: AppHeaderFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AppHeaderFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppHeaderFragment",
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
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "GlobalConfiguration",
      "kind": "LinkedField",
      "name": "globalConfiguration",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "SiteSettings",
          "kind": "LinkedField",
          "name": "site",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "logoMode",
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
(node as any).hash = '30faf2d5d1f1f43f2cd2ef1846bdfa2c';
export default node;
