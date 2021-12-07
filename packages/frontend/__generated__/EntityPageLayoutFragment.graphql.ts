/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityPageLayoutFragment = {
    readonly title: string;
    readonly body: string;
    readonly heroImage: {
        readonly " $fragmentRefs": FragmentRefs<"ContentImageFragment">;
    } | null;
    readonly " $refType": "EntityPageLayoutFragment";
};
export type EntityPageLayoutFragment$data = EntityPageLayoutFragment;
export type EntityPageLayoutFragment$key = {
    readonly " $data"?: EntityPageLayoutFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"EntityPageLayoutFragment">;
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
      "concreteType": "AssetPreview",
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
(node as any).hash = '501f891424cca2a08bd76aa7388cfd48';
export default node;
