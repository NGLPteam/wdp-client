/**
 * @generated SignedSource<<6d486787114285056dd45f3dbb0d0a2d>>
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
  readonly " $fragmentSpreads": FragmentRefs<"CommunityPickerFragment">;
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
      "args": [
        {
          "kind": "Literal",
          "name": "order",
          "value": "POSITION_ASCENDING"
        }
      ],
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
      "storageKey": "communities(order:\"POSITION_ASCENDING\")"
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommunityPickerFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "41f71d56c0628aad9caaa5693c9ae8b0";

export default node;
