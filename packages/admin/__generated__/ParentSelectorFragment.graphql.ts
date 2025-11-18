/**
 * @generated SignedSource<<8ca902ef09c2a681448a95a4d4e7d604>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ParentSelectorFragment$data = {
  readonly __typename: "Collection";
  readonly entityId: string;
  readonly parent: {
    readonly id?: string;
    readonly slug?: string;
    readonly title?: string;
  } | null | undefined;
  readonly schemaVersion: {
    readonly enforcedParentVersions: ReadonlyArray<{
      readonly identifier: string;
      readonly namespace: string;
    }>;
    readonly enforcesParent: boolean;
  };
  readonly " $fragmentType": "ParentSelectorFragment";
} | {
  readonly __typename: "Item";
  readonly entityId: string;
  readonly parent: {
    readonly id?: string;
    readonly slug?: string;
    readonly title?: string;
  } | null | undefined;
  readonly schemaVersion: {
    readonly enforcedParentVersions: ReadonlyArray<{
      readonly identifier: string;
      readonly namespace: string;
    }>;
    readonly enforcesParent: boolean;
  };
  readonly " $fragmentType": "ParentSelectorFragment";
} | {
  // This will never be '%other', but we need some
  // value in case none of the concrete values match.
  readonly __typename: "%other";
  readonly " $fragmentType": "ParentSelectorFragment";
};
export type ParentSelectorFragment$key = {
  readonly " $data"?: ParentSelectorFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ParentSelectorFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v1 = {
  "alias": "entityId",
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "concreteType": "SchemaVersion",
  "kind": "LinkedField",
  "name": "schemaVersion",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "enforcesParent",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "SchemaVersion",
      "kind": "LinkedField",
      "name": "enforcedParentVersions",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "identifier",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "namespace",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v3 = [
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
    "name": "slug",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "title",
    "storageKey": null
  }
],
v4 = {
  "kind": "InlineFragment",
  "selections": (v3/*: any*/),
  "type": "Collection",
  "abstractKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ParentSelectorFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        (v0/*: any*/),
        (v1/*: any*/),
        (v2/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": null,
          "kind": "LinkedField",
          "name": "parent",
          "plural": false,
          "selections": [
            (v4/*: any*/),
            {
              "kind": "InlineFragment",
              "selections": (v3/*: any*/),
              "type": "Community",
              "abstractKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "type": "Collection",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        (v0/*: any*/),
        (v1/*: any*/),
        (v2/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": null,
          "kind": "LinkedField",
          "name": "parent",
          "plural": false,
          "selections": [
            (v4/*: any*/),
            {
              "kind": "InlineFragment",
              "selections": (v3/*: any*/),
              "type": "Item",
              "abstractKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "type": "Item",
      "abstractKey": null
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
})();

(node as any).hash = "2eae4bfed1ce0bded8478e0f71c56081";

export default node;
