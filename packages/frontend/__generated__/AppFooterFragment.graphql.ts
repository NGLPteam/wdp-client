/**
 * @generated SignedSource<<83ae2c4948456dea3b941574b0718d8a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppFooterFragment$data = {
  readonly communities: {
    readonly pageInfo: {
      readonly totalCount: number;
    };
  };
  readonly globalConfiguration: {
    readonly " $fragmentSpreads": FragmentRefs<"InstallationNameFragment">;
  };
  readonly " $fragmentType": "AppFooterFragment";
};
export type AppFooterFragment$key = {
  readonly " $data"?: AppFooterFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AppFooterFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppFooterFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "CommunityConnection",
      "kind": "LinkedField",
      "name": "communities",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "totalCount",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "1330d45d4dcad58d70e1e6c8a05d4e6f";

export default node;
