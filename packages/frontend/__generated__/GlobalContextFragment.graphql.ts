/**
 * @generated SignedSource<<f0f1a90dceadb31c86a00392e74e60ba>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GlobalContextFragment$data = {
  readonly globalConfiguration: {
    readonly " $fragmentSpreads": FragmentRefs<"BreadcrumbsBarGlobalFragment" | "InstallationNameFragment">;
  };
  readonly " $fragmentSpreads": FragmentRefs<"AppFooterFragment" | "AppHeaderFragment" | "CommunityPickerFragment">;
  readonly " $fragmentType": "GlobalContextFragment";
};
export type GlobalContextFragment$key = {
  readonly " $data"?: GlobalContextFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"GlobalContextFragment">;
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

(node as any).hash = "88342f82cc43e34a0ac70435c46d9451";

export default node;
