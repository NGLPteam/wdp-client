/**
 * @generated SignedSource<<a654462214d92400562e5c581e9e778b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type FileCreateDrawerQuery$variables = {
  slug: string;
};
export type FileCreateDrawerQuery$data = {
  readonly collection: {
    readonly id: string;
  } | null | undefined;
  readonly item: {
    readonly id: string;
  } | null | undefined;
};
export type FileCreateDrawerQuery = {
  response: FileCreateDrawerQuery$data;
  variables: FileCreateDrawerQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "slug"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "slug"
  }
],
v2 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "id",
    "storageKey": null
  }
],
v3 = [
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
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "FileCreateDrawerQuery",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FileCreateDrawerQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "3f2cac92556194b9e872f996da02bc46",
    "id": null,
    "metadata": {},
    "name": "FileCreateDrawerQuery",
    "operationKind": "query",
    "text": "query FileCreateDrawerQuery(\n  $slug: Slug!\n) {\n  item(slug: $slug) {\n    id\n  }\n  collection(slug: $slug) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "9752d344218f1191ce58c334088084fc";

export default node;
