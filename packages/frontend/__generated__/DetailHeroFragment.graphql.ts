/**
 * @generated SignedSource<<6c1d3df01b0cc6a0395583ea0099f702>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DetailHeroFragment$data = {
  readonly definition: {
    readonly showThumbnailImage: boolean | null | undefined;
  };
  readonly entity: {
    readonly " $fragmentSpreads": FragmentRefs<"DetailCoverImageFragment">;
  };
  readonly " $fragmentSpreads": FragmentRefs<"DetailContentFragment" | "DetailSidebarFragment">;
  readonly " $fragmentType": "DetailHeroFragment";
};
export type DetailHeroFragment$key = {
  readonly " $data"?: DetailHeroFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DetailHeroFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DetailHeroFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "entity",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "DetailCoverImageFragment"
        }
      ],
      "storageKey": null
    },
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
      "name": "DetailContentFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "DetailSidebarFragment"
    }
  ],
  "type": "HeroTemplateInstance",
  "abstractKey": null
};

(node as any).hash = "fc454a1a9da98aeb8825db1b3a81c917";

export default node;
