/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type GlobalSettingsEditFormFragment = {
    readonly site: {
        readonly providerName: string;
        readonly installationName: string;
    };
    readonly theme: {
        readonly color: string;
        readonly font: string;
    };
    readonly " $refType": "GlobalSettingsEditFormFragment";
};
export type GlobalSettingsEditFormFragment$data = GlobalSettingsEditFormFragment;
export type GlobalSettingsEditFormFragment$key = {
    readonly " $data"?: GlobalSettingsEditFormFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"GlobalSettingsEditFormFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "GlobalSettingsEditFormFragment",
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
(node as any).hash = '6353d0ed169348789deebd6842f69a72';
export default node;
