/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ItemUpdateDrawerQueryVariables = {
    itemSlug: string;
};
export type ItemUpdateDrawerQueryResponse = {
    readonly item: {
        readonly title: string | null;
        readonly " $fragmentRefs": FragmentRefs<"ItemUpdateFormFragment">;
    } | null;
};
export type ItemUpdateDrawerQuery = {
    readonly response: ItemUpdateDrawerQueryResponse;
    readonly variables: ItemUpdateDrawerQueryVariables;
};



/*
query ItemUpdateDrawerQuery(
  $itemSlug: Slug!
) {
  item(slug: $itemSlug) {
    title
    ...ItemUpdateFormFragment
    id
  }
}

fragment ItemUpdateFormFieldsFragment on Item {
  title
}

fragment ItemUpdateFormFragment on Item {
  itemId: id
  identifier
  ...ItemUpdateFormFieldsFragment
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "itemSlug"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "itemSlug"
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
    "name": "ItemUpdateDrawerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ItemUpdateFormFragment"
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
    "name": "ItemUpdateDrawerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": "itemId",
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
    "cacheID": "e1bba7abee8932e3e40b43348518f37e",
    "id": null,
    "metadata": {},
    "name": "ItemUpdateDrawerQuery",
    "operationKind": "query",
    "text": "query ItemUpdateDrawerQuery(\n  $itemSlug: Slug!\n) {\n  item(slug: $itemSlug) {\n    title\n    ...ItemUpdateFormFragment\n    id\n  }\n}\n\nfragment ItemUpdateFormFieldsFragment on Item {\n  title\n}\n\nfragment ItemUpdateFormFragment on Item {\n  itemId: id\n  identifier\n  ...ItemUpdateFormFieldsFragment\n}\n"
  }
};
})();
(node as any).hash = 'e72b21f680bc0ff413cd3ec63868de2e';
export default node;
