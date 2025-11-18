/**
 * @generated SignedSource<<2d7a85d7c1768077607de95b61b63659>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntityPermalinksAddDrawerQuery$variables = {
  entitySlug: string;
};
export type EntityPermalinksAddDrawerQuery$data = {
  readonly collection: {
    readonly " $fragmentSpreads": FragmentRefs<"EntityPermalinksAddFormFragment">;
  } | null | undefined;
  readonly community: {
    readonly " $fragmentSpreads": FragmentRefs<"EntityPermalinksAddFormFragment">;
  } | null | undefined;
  readonly item: {
    readonly " $fragmentSpreads": FragmentRefs<"EntityPermalinksAddFormFragment">;
  } | null | undefined;
};
export type EntityPermalinksAddDrawerQuery = {
  response: EntityPermalinksAddDrawerQuery$data;
  variables: EntityPermalinksAddDrawerQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "entitySlug"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "entitySlug"
  }
],
v2 = [
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "EntityPermalinksAddFormFragment"
  }
],
v3 = [
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
    "name": "slug",
    "storageKey": null
  }
],
v4 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "id",
    "storageKey": null
  },
  {
    "kind": "InlineFragment",
    "selections": [
      {
        "kind": "InlineFragment",
        "selections": (v3/*: any*/),
        "type": "Collection",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": (v3/*: any*/),
        "type": "Item",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": (v3/*: any*/),
        "type": "Community",
        "abstractKey": null
      }
    ],
    "type": "Entity",
    "abstractKey": "__isEntity"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "EntityPermalinksAddDrawerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": (v2/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": (v2/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": (v2/*: any*/),
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EntityPermalinksAddDrawerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": (v4/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": (v4/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": (v4/*: any*/),
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ad07bfe7fe853088a0b01f61975ee5bd",
    "id": null,
    "metadata": {},
    "name": "EntityPermalinksAddDrawerQuery",
    "operationKind": "query",
    "text": "query EntityPermalinksAddDrawerQuery(\n  $entitySlug: Slug!\n) {\n  item(slug: $entitySlug) {\n    ...EntityPermalinksAddFormFragment\n    id\n  }\n  collection(slug: $entitySlug) {\n    ...EntityPermalinksAddFormFragment\n    id\n  }\n  community(slug: $entitySlug) {\n    ...EntityPermalinksAddFormFragment\n    id\n  }\n}\n\nfragment EntityPermalinksAddFormFragment on Entity {\n  __isEntity: __typename\n  ... on Collection {\n    id\n    title\n    slug\n  }\n  ... on Item {\n    id\n    title\n    slug\n  }\n  ... on Community {\n    id\n    title\n    slug\n  }\n}\n"
  }
};
})();

(node as any).hash = "a4bb35f64d3d5442a3de2cb84a3038ff";

export default node;
