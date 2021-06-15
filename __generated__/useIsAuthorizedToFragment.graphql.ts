/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useIsAuthorizedToFragment = {
    readonly allowedActions: ReadonlyArray<string>;
    readonly " $refType": "useIsAuthorizedToFragment";
};
export type useIsAuthorizedToFragment$data = useIsAuthorizedToFragment;
export type useIsAuthorizedToFragment$key = {
    readonly " $data"?: useIsAuthorizedToFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"useIsAuthorizedToFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "useIsAuthorizedToFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "allowedActions",
      "storageKey": null
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
(node as any).hash = 'e2ff400f4094b7320c552d60a51123bd';
export default node;
