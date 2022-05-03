/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityHTMLHeadAppFragment = {
    readonly globalConfiguration: {
        readonly site: {
            readonly installationName: string;
        };
    };
    readonly " $refType": "EntityHTMLHeadAppFragment";
};
export type EntityHTMLHeadAppFragment$data = EntityHTMLHeadAppFragment;
export type EntityHTMLHeadAppFragment$key = {
    readonly " $data"?: EntityHTMLHeadAppFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"EntityHTMLHeadAppFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityHTMLHeadAppFragment",
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
              "name": "installationName",
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
(node as any).hash = '07d97d3b53356f1b79c9866c1d6012a1';
export default node;
