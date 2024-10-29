/**
 * @generated SignedSource<<c2c031e661edbd189a00dc1de041efb1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HeaderHeroFragment$data = {
  readonly headerSidebar: {
    readonly " $fragmentSpreads": FragmentRefs<"sharedBlockSlotFragment">;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"HeaderTitleBlockFragment">;
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
      "name": "HeaderTitleBlockFragment"
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "TemplateSlotBlockInstance",
      "kind": "LinkedField",
      "name": "headerSidebar",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "sharedBlockSlotFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "HeroTemplateInstanceSlots",
  "abstractKey": null
};

(node as any).hash = "33a794eb808b48c67f86fe3e7aa21aab";

export default node;
