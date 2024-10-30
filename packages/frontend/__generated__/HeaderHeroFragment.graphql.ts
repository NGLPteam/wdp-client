/**
 * @generated SignedSource<<021f0c51b9f5a9c69f4402af1441410f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HeaderHeroFragment$data = {
  readonly slots: {
    readonly " $fragmentSpreads": FragmentRefs<"HeaderTitleBlockFragment">;
  };
  readonly " $fragmentSpreads": FragmentRefs<"HeaderSidebarHeroLayoutFragment">;
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
      "name": "HeaderSidebarHeroLayoutFragment"
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "HeroTemplateInstanceSlots",
      "kind": "LinkedField",
      "name": "slots",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "HeaderTitleBlockFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "HeroTemplateInstance",
  "abstractKey": null
};

(node as any).hash = "8e21d2381b32d48edc979c41e2fd20e4";

export default node;
