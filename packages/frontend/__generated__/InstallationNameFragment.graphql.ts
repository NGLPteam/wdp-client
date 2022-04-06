/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type InstallationNameFragment = {
    readonly site: {
        readonly installationName: string;
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
  "type": "GlobalConfiguration",
  "abstractKey": null
};
(node as any).hash = '755795acfce23d9612eaa8ae4c24502a';
export default node;
