/**
 * @generated SignedSource<<db8c7f58c2c17a600da74b3089cb8c71>>
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
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "4794cc226705eef8c3f78ddbe7f8ce10";

export default node;
