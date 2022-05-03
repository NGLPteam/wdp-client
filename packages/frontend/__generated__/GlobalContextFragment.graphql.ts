/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type GlobalContextFragment = {
    readonly globalConfiguration: {
        readonly " $fragmentRefs": FragmentRefs<"InstallationNameFragment" | "BreadcrumbsBarGlobalFragment">;
    };
    readonly " $fragmentRefs": FragmentRefs<"CommunityPickerFragment" | "AppHeaderFragment" | "AppFooterFragment">;
    readonly " $refType": "GlobalContextFragment";
};
export type GlobalContextFragment$data = GlobalContextFragment;
export type GlobalContextFragment$key = {
    readonly " $data"?: GlobalContextFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"GlobalContextFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "GlobalContextFragment",
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
          "args": null,
          "kind": "FragmentSpread",
          "name": "InstallationNameFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "BreadcrumbsBarGlobalFragment"
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommunityPickerFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AppHeaderFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AppFooterFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '88342f82cc43e34a0ac70435c46d9451';
export default node;
