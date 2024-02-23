/**
 * @generated SignedSource<<9a28e52438ee25e61f655e3c4518a9be>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type InstanceHeroFragment$data = {
  readonly globalConfiguration: {
    readonly site: {
      readonly installationHomePageCopy: string;
      readonly installationName: string;
      readonly providerName: string;
    };
  };
  readonly " $fragmentType": "InstanceHeroFragment";
};
export type InstanceHeroFragment$key = {
  readonly " $data"?: InstanceHeroFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"InstanceHeroFragment">;
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
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "installationHomePageCopy",
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

(node as any).hash = "85652069d01b688e09bfa35ecee2db71";

export default node;
