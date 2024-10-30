/**
 * @generated SignedSource<<d0940c96bcb04662c18712d10108f60e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DetailHeroLayoutFragment$data = {
  readonly definition: {
    readonly showThumbnailImage: boolean | null | undefined;
  };
  readonly " $fragmentSpreads": FragmentRefs<"DetailContentLayoutFragment" | "DetailSidebarLayoutFragment">;
  readonly " $fragmentType": "DetailHeroLayoutFragment";
};
export type DetailHeroLayoutFragment$key = {
  readonly " $data"?: DetailHeroLayoutFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DetailHeroLayoutFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DetailHeroLayoutFragment",
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
          "name": "showThumbnailImage",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "DetailContentLayoutFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "DetailSidebarLayoutFragment"
    }
  ],
  "type": "HeroTemplateInstance",
  "abstractKey": null
};

(node as any).hash = "2b5dcaa781bbdb6aa704997232ad2ab2";

export default node;
