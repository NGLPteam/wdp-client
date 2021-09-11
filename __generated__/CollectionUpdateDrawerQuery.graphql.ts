/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CollectionUpdateDrawerQueryVariables = {
    collectionSlug: string;
};
export type CollectionUpdateDrawerQueryResponse = {
    readonly collection: {
        readonly title: string | null;
        readonly " $fragmentRefs": FragmentRefs<"CollectionUpdateFormFragment">;
    } | null;
};
export type CollectionUpdateDrawerQuery = {
    readonly response: CollectionUpdateDrawerQueryResponse;
    readonly variables: CollectionUpdateDrawerQueryVariables;
};



/*
query CollectionUpdateDrawerQuery(
  $collectionSlug: Slug!
) {
  collection(slug: $collectionSlug) {
    title
    ...CollectionUpdateFormFragment
    id
  }
}

fragment CollectionUpdateFormFieldsFragment on Collection {
  title
}

fragment CollectionUpdateFormFragment on Collection {
  collectionId: id
  identifier
  ...CollectionUpdateFormFieldsFragment
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "collectionSlug"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "collectionSlug"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CollectionUpdateDrawerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CollectionUpdateFormFragment"
          }
        ],
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
    "name": "CollectionUpdateDrawerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": "collectionId",
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
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
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "4dc7a768b38fd73a344b3aeac7f8c7b0",
    "id": null,
    "metadata": {},
    "name": "CollectionUpdateDrawerQuery",
    "operationKind": "query",
    "text": "query CollectionUpdateDrawerQuery(\n  $collectionSlug: Slug!\n) {\n  collection(slug: $collectionSlug) {\n    title\n    ...CollectionUpdateFormFragment\n    id\n  }\n}\n\nfragment CollectionUpdateFormFieldsFragment on Collection {\n  title\n}\n\nfragment CollectionUpdateFormFragment on Collection {\n  collectionId: id\n  identifier\n  ...CollectionUpdateFormFieldsFragment\n}\n"
  }
};
})();
(node as any).hash = 'ade70650536d0407f9722c69b5410115';
export default node;
