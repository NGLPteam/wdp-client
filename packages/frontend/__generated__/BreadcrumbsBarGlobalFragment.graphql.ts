/**
 * @generated SignedSource<<826ad1d516b5386157fc6aba19dd5a3d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BreadcrumbsBarGlobalFragment$data = {
  readonly site: {
    readonly installationName: string;
  };
  readonly " $fragmentType": "BreadcrumbsBarGlobalFragment";
};
export type BreadcrumbsBarGlobalFragment$key = {
  readonly " $data"?: BreadcrumbsBarGlobalFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"BreadcrumbsBarGlobalFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BreadcrumbsBarGlobalFragment",
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

(node as any).hash = "a2d03e8e87d67e47c00c6e2ec2198707";

export default node;
