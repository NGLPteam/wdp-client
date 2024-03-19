/**
 * @generated SignedSource<<daeb8fa510730e27c09062810683c112>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntityLayoutFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"BreadcrumbsBarFragment" | "EntityHeroFragment" | "EntityNavBarFragment">;
  readonly " $fragmentType": "EntityLayoutFragment";
};
export type EntityLayoutFragment$key = {
  readonly " $data"?: EntityLayoutFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityLayoutFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityLayoutFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "BreadcrumbsBarFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "EntityHeroFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "EntityNavBarFragment"
        }
      ],
      "type": "Entity",
      "abstractKey": "__isEntity"
    }
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
};

(node as any).hash = "e51b807675235641156d9a8ede418c1d";

export default node;
