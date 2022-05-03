/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type InstanceHeroFragment = {
    readonly globalConfiguration: {
        readonly site: {
            readonly providerName: string;
            readonly installationName: string;
        };
    };
    readonly " $refType": "InstanceHeroFragment";
};
export type InstanceHeroFragment$data = InstanceHeroFragment;
export type InstanceHeroFragment$key = {
    readonly " $data"?: InstanceHeroFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"InstanceHeroFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "InstanceHeroFragment",
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
(node as any).hash = '061f00774cc78b81f2a904884ad53c22';
export default node;
