/**
 * @generated SignedSource<<7fe2acc55fc2ebbcf47d6f61ebb1b397>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommunityLayoutFragment$data = {
  readonly allowedActions: ReadonlyArray<string>;
  readonly id: string;
  readonly name: string;
  readonly slug: String;
  readonly " $fragmentSpreads": FragmentRefs<"useChildRouteLinksFragment">;
  readonly " $fragmentType": "CommunityLayoutFragment";
};
export type CommunityLayoutFragment$key = {
  readonly " $data"?: CommunityLayoutFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommunityLayoutFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityLayoutFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "allowedActions",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "useChildRouteLinksFragment"
    }
  ],
  "type": "Community",
  "abstractKey": null
};

(node as any).hash = "98066e304b4ac8e327f91473228304e0";

export default node;
