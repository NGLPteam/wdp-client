/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type InstallationNameFragment = {
    readonly globalConfiguration: {
        readonly site: {
            readonly installationName: string;
        };
    };
    readonly " $refType": "InstallationNameFragment";
};
export type InstallationNameFragment$data = InstallationNameFragment;
export type InstallationNameFragment$key = {
    readonly " $data"?: InstallationNameFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"InstallationNameFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "InstallationNameFragment",
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
(node as any).hash = '6231dbfe4cb824e6c7704ba0edff91d9';
export default node;
