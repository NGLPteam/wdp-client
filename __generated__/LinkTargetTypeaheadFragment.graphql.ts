/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type LinkTargetTypeaheadFragment = {
    readonly linkTargetCandidates?: {
        readonly " $fragmentRefs": FragmentRefs<"LinkTargetTypeaheadDataFragment">;
    };
    readonly " $refType": "LinkTargetTypeaheadFragment";
};
export type LinkTargetTypeaheadFragment$data = LinkTargetTypeaheadFragment;
export type LinkTargetTypeaheadFragment$key = {
    readonly " $data"?: LinkTargetTypeaheadFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"LinkTargetTypeaheadFragment">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "LinkTargetCandidateConnection",
    "kind": "LinkedField",
    "name": "linkTargetCandidates",
    "plural": false,
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "LinkTargetTypeaheadDataFragment"
      }
    ],
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LinkTargetTypeaheadFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "Item",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "Collection",
      "abstractKey": null
    }
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
};
})();
(node as any).hash = '6162cf5e3712a29fea25a94fce52079d';
export default node;
