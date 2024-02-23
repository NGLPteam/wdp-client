/**
 * @generated SignedSource<<cba7c3567c7fc872db1ea53eafbc3277>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommunityLayoutQueryFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"CommunityLayoutFragment">;
  readonly " $fragmentType": "CommunityLayoutQueryFragment";
};
export type CommunityLayoutQueryFragment$key = {
  readonly " $data"?: CommunityLayoutQueryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommunityLayoutQueryFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "slug"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityLayoutQueryFragment",
  "selections": [
    {
      "args": [
        {
          "kind": "Variable",
          "name": "slug",
          "variableName": "slug"
        }
      ],
      "kind": "FragmentSpread",
      "name": "CommunityLayoutFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "fb824ebedf507fe49b725fe1a91f544f";

export default node;
