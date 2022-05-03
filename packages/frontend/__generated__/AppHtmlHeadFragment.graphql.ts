/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AppHtmlHeadFragment = {
    readonly globalConfiguration: {
        readonly site: {
            readonly providerName: string;
            readonly installationName: string;
            readonly footer: {
                readonly description: string;
            };
        };
    };
    readonly " $refType": "AppHtmlHeadFragment";
};
export type AppHtmlHeadFragment$data = AppHtmlHeadFragment;
export type AppHtmlHeadFragment$key = {
    readonly " $data"?: AppHtmlHeadFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AppHtmlHeadFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppHtmlHeadFragment",
  "selections": [
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
              "name": "providerName",
              "storageKey": null
            },
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
(node as any).hash = 'c147f5d7a5d3d104a4b9971610a6be1e';
export default node;
