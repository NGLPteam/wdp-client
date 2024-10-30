/**
 * @generated SignedSource<<1b6c052e24715c8b4dfabb9b39a70c42>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type HeroBackground = "DARK" | "LIGHT" | "NONE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type HeroTemplateLayoutFragment$data = {
  readonly template: {
    readonly definition: {
      readonly background: HeroBackground | null | undefined;
      readonly descendantSearchPrompt: string | null | undefined;
      readonly enableDescendantBrowsing: boolean | null | undefined;
      readonly enableDescendantSearch: boolean | null | undefined;
      readonly showBigSearchPrompt: boolean | null | undefined;
      readonly showBreadcrumbs: boolean | null | undefined;
      readonly showHeroImage: boolean | null | undefined;
      readonly showSharingLink: boolean | null | undefined;
      readonly showSplitDisplay: boolean | null | undefined;
    };
    readonly " $fragmentSpreads": FragmentRefs<"DetailHeroLayoutFragment" | "HeaderHeroFragment">;
  } | null | undefined;
  readonly " $fragmentType": "HeroTemplateLayoutFragment";
};
export type HeroTemplateLayoutFragment$key = {
  readonly " $data"?: HeroTemplateLayoutFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"HeroTemplateLayoutFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HeroTemplateLayoutFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "HeroTemplateInstance",
      "kind": "LinkedField",
      "name": "template",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "HeroTemplateDefinition",
          "kind": "LinkedField",
          "name": "definition",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "background",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "descendantSearchPrompt",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "enableDescendantBrowsing",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "enableDescendantSearch",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "showBreadcrumbs",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "showHeroImage",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "showSharingLink",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "showSplitDisplay",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "showBigSearchPrompt",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "HeaderHeroFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "DetailHeroLayoutFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "HeroLayoutInstance",
  "abstractKey": null
};

(node as any).hash = "f87929c365183682a96614bb5f99d2e2";

export default node;
