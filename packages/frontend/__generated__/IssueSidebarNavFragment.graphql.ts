/**
 * @generated SignedSource<<3fa9c39ad17aa4b8047029649240a928>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type IssueSidebarNavFragment$data = {
  readonly orderings: {
    readonly " $fragmentSpreads": FragmentRefs<"EntityOrderSelectFragment">;
  };
  readonly " $fragmentSpreads": FragmentRefs<"IssueSidebarNavListFragment">;
  readonly " $fragmentType": "IssueSidebarNavFragment";
};
export type IssueSidebarNavFragment$key = {
  readonly " $data"?: IssueSidebarNavFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"IssueSidebarNavFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "IssueSidebarNavFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "availability",
          "value": "ENABLED"
        }
      ],
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
      "storageKey": "orderings(availability:\"ENABLED\")"
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

(node as any).hash = "02e2cab701a9ecbb4e3cfffdcf0ebfa1";

export default node;
