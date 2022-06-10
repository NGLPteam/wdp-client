/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ParentSelectorFragment = {
    readonly __typename: "Collection";
    readonly entityId: string;
    readonly schemaVersion: {
        readonly enforcesParent: boolean;
        readonly enforcedParentVersions: ReadonlyArray<{
            readonly identifier: string;
            readonly namespace: string;
        }>;
    };
    readonly parent: {
        readonly id?: string | undefined;
        readonly slug?: string | undefined;
        readonly title?: string | undefined;
    } | null;
    readonly " $refType": "ParentSelectorFragment";
} | {
    readonly __typename: "Item";
    readonly entityId: string;
    readonly schemaVersion: {
        readonly enforcesParent: boolean;
        readonly enforcedParentVersions: ReadonlyArray<{
            readonly identifier: string;
            readonly namespace: string;
        }>;
    };
    readonly parent: {
        readonly id?: string | undefined;
        readonly slug?: string | undefined;
        readonly title?: string | undefined;
    } | null;
    readonly " $refType": "ParentSelectorFragment";
} | {
    /*This will never be '%other', but we need some
    value in case none of the concrete values match.*/
    readonly __typename: "%other";
    readonly " $refType": "ParentSelectorFragment";
};
export type ParentSelectorFragment$data = ParentSelectorFragment;
export type ParentSelectorFragment$key = {
    readonly " $data"?: ParentSelectorFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ParentSelectorFragment">;
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
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
};
})();
(node as any).hash = 'ecc064f08a74455699582c7127178e1a';
export default node;
