/**
 * @generated SignedSource<<50133d5894be2e478682cf4454046e30>>
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
  readonly " $fragmentSpreads": FragmentRefs<"HeaderSidebarFragment">;
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

(node as any).hash = "76efbc76fb059f95bef9bca2086b9ddb";

export default node;
