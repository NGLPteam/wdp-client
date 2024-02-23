/**
 * @generated SignedSource<<0a7913c3d486bb486a65edf81909bb79>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntityPageLayoutFragment$data = {
  readonly body: string;
  readonly heroImage: {
    readonly " $fragmentSpreads": FragmentRefs<"ContentImageFragment">;
  };
  readonly title: string;
  readonly " $fragmentType": "EntityPageLayoutFragment";
};
export type EntityPageLayoutFragment$key = {
  readonly " $data"?: EntityPageLayoutFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityPageLayoutFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityPageLayoutFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "body",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ImageAttachment",
      "kind": "LinkedField",
      "name": "heroImage",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ContentImageFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Page",
  "abstractKey": null
};

(node as any).hash = "501f891424cca2a08bd76aa7388cfd48";

export default node;
