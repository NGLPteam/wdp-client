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
    readonly globalConfiguration: {
        readonly site: {
            readonly installationName: string;
            readonly footer: {
                readonly copyrightStatement: string;
                readonly description: string;
            };
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
              "name": "installationName",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "SiteFooter",
              "kind": "LinkedField",
              "name": "footer",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "copyrightStatement",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "description",
                  "storageKey": null
                }
              ],
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
(node as any).hash = '6de4effcd7f412dae643e92fb37800a4';
export default node;
