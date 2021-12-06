/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityPageLayoutFragment = {
    readonly title: string;
    readonly body: string;
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
    }
  ],
  "type": "Page",
  "abstractKey": null
};
(node as any).hash = '23cf75d1fc893e8e6158c4c3ecf8cc26';
export default node;
