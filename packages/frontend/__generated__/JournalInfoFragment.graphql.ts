/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type JournalInfoFragment = {
    readonly title: string;
    readonly " $refType": "JournalInfoFragment";
};
export type JournalInfoFragment$data = JournalInfoFragment;
export type JournalInfoFragment$key = {
    readonly " $data"?: JournalInfoFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"JournalInfoFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JournalInfoFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    }
  ],
  "type": "Collection",
  "abstractKey": null
};
(node as any).hash = '67b982cf789d78e94feacc16759421fc';
export default node;
