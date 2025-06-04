/**
 * @generated SignedSource<<06057ba3cf16394fc8db4cc27a93770b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type EntityPageLayoutFragment$data = {
  readonly body: string;
  readonly heroImage: {
    readonly storage: AttachmentStorage | null | undefined;
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
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "storage",
          "storageKey": null
        },
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

(node as any).hash = "5f40473b3b1e52c3d836aa854025f7b5";

export default node;
