/**
 * @generated SignedSource<<e597bce5ef8fa8fe33646158b9c35114>>
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

(node as any).hash = "8e0b9484b95c389214a43a467f7e8f36";

export default node;
