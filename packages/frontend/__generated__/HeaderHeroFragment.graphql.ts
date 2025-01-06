/**
 * @generated SignedSource<<59e136f4493dc8c2e1485b88d840a95a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HeaderHeroFragment$data = {
  readonly definition: {
    readonly showSplitDisplay: boolean | null | undefined;
  };
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
          "name": "showSplitDisplay",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
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

(node as any).hash = "5d30cd19b57ab410894b30c9a5f27abc";

export default node;
