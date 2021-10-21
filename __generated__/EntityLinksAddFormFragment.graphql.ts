/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EntityLinksAddFormFragment = {
    readonly id?: string;
    readonly title?: string | null;
    readonly linkTargetCandidates?: {
        readonly " $fragmentRefs": FragmentRefs<"LinkTargetTypeaheadFragment">;
    };
    readonly " $refType": "EntityLinksAddFormFragment";
};
export type EntityLinksAddFormFragment$data = EntityLinksAddFormFragment;
export type EntityLinksAddFormFragment$key = {
    readonly " $data"?: EntityLinksAddFormFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"EntityLinksAddFormFragment">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "id",
    "storageKey": null
  },
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
    "concreteType": "LinkTargetCandidateConnection",
    "kind": "LinkedField",
    "name": "linkTargetCandidates",
    "plural": false,
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "LinkTargetTypeaheadFragment"
      }
    ],
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityLinksAddFormFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "Collection",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "Item",
      "abstractKey": null
    }
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
};
})();
(node as any).hash = '239222c6d0d3918f50b4145ed10b1088';
export default node;
