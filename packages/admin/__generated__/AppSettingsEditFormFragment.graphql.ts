/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AppSettingsEditFormFragment = {
    readonly site: {
        readonly providerName: string;
    };
    readonly theme: {
        readonly color: string;
        readonly font: string;
    };
    readonly " $refType": "AppSettingsEditFormFragment";
};
export type AppSettingsEditFormFragment$data = AppSettingsEditFormFragment;
export type AppSettingsEditFormFragment$key = {
    readonly " $data"?: AppSettingsEditFormFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AppSettingsEditFormFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppSettingsEditFormFragment",
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
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ThemeSettings",
      "kind": "LinkedField",
      "name": "theme",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "color",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "font",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "GlobalConfiguration",
  "abstractKey": null
};
(node as any).hash = '6203c8a4414c255e0bc74c462d0699c9';
export default node;
