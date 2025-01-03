/**
 * @generated SignedSource<<d2a6c678124c00370bc01608bf59cf61>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HeaderHeroFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"HeaderSidebarFragment" | "HeaderTitleBlockFragment">;
  readonly " $fragmentType": "HeaderHeroFragment";
};
export type HeaderHeroFragment$key = {
  readonly " $data"?: HeaderHeroFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"HeaderHeroFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HeaderHeroFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "HeaderSidebarFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "HeaderTitleBlockFragment"
    }
  ],
  "type": "HeroTemplateInstance",
  "abstractKey": null
};

(node as any).hash = "4e689bd085ae175509c955f664b3178b";

export default node;
