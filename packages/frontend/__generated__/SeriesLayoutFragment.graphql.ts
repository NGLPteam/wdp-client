/**
 * @generated SignedSource<<3688e64eeb0070885bdc22682905d494>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SeriesLayoutFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"BreadcrumbsBarFragment" | "EntityNavBarFragment" | "SeriesHeroFragment">;
  readonly " $fragmentType": "SeriesLayoutFragment";
};
export type SeriesLayoutFragment$key = {
  readonly " $data"?: SeriesLayoutFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SeriesLayoutFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SeriesLayoutFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "BreadcrumbsBarFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SeriesHeroFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "EntityNavBarFragment"
    }
  ],
  "type": "Collection",
  "abstractKey": null
};

(node as any).hash = "813ebc1958f3a40b77dfa5883ddc6668";

export default node;
