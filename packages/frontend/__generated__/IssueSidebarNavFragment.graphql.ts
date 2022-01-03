/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type IssueSidebarNavFragment = {
    readonly orderings: {
        readonly " $fragmentRefs": FragmentRefs<"EntityOrderSelectFragment">;
    };
    readonly " $fragmentRefs": FragmentRefs<"IssueSidebarNavListFragment">;
    readonly " $refType": "IssueSidebarNavFragment";
};
export type IssueSidebarNavFragment$data = IssueSidebarNavFragment;
export type IssueSidebarNavFragment$key = {
    readonly " $data"?: IssueSidebarNavFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"IssueSidebarNavFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "IssueSidebarNavFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "OrderingConnection",
      "kind": "LinkedField",
      "name": "orderings",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "EntityOrderSelectFragment"
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "IssueSidebarNavListFragment"
    }
  ],
  "type": "Collection",
  "abstractKey": null
};
(node as any).hash = 'cf14589e19a6381fc4a1190f38de10bc';
export default node;
