/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ISSNFragment = {
    readonly issn: string | null;
    readonly " $refType": "ISSNFragment";
};
export type ISSNFragment$data = ISSNFragment;
export type ISSNFragment$key = {
    readonly " $data"?: ISSNFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ISSNFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ISSNFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "issn",
      "storageKey": null
    }
  ],
  "type": "HasISSN",
  "abstractKey": "__isHasISSN"
};
(node as any).hash = 'ee0209366037ed42919b6428a3507f72';
export default node;
