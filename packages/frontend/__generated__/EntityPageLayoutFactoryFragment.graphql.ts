/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityPageLayoutFactoryFragment = {
    readonly schemaDefinition?: {
        readonly identifier: string;
    } | undefined;
    readonly page?: {
        readonly " $fragmentRefs": FragmentRefs<"EntityPageLayoutFragment" | "IssuePageLayoutFragment">;
    } | null | undefined;
    readonly " $fragmentRefs": FragmentRefs<"IssueLayoutFragment" | "IssueContentNavFragment" | "EntityLayoutFactoryFragment">;
    readonly " $refType": "EntityPageLayoutFactoryFragment";
};
export type EntityPageLayoutFactoryFragment$data = EntityPageLayoutFactoryFragment;
export type EntityPageLayoutFactoryFragment$key = {
    readonly " $data"?: EntityPageLayoutFactoryFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"EntityPageLayoutFactoryFragment">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "concreteType": "SchemaDefinition",
  "kind": "LinkedField",
  "name": "schemaDefinition",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "identifier",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v1 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "pageSlug"
  }
],
v2 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "EntityPageLayoutFragment"
},
v3 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "EntityLayoutFactoryFragment"
};
return {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "pageSlug"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityPageLayoutFactoryFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": (v1/*: any*/),
          "concreteType": "Page",
          "kind": "LinkedField",
          "name": "page",
          "plural": false,
          "selections": [
            (v2/*: any*/),
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "IssuePageLayoutFragment"
            }
          ],
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "IssueLayoutFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "IssueContentNavFragment"
        },
        (v3/*: any*/)
      ],
      "type": "Collection",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": (v1/*: any*/),
          "concreteType": "Page",
          "kind": "LinkedField",
          "name": "page",
          "plural": false,
          "selections": [
            (v2/*: any*/)
          ],
          "storageKey": null
        },
        (v3/*: any*/)
      ],
      "type": "Item",
      "abstractKey": null
    }
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
};
})();
(node as any).hash = 'aa633a662e14313045ebeaec2edc9a0c';
export default node;
