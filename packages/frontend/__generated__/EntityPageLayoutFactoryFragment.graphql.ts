/**
 * @generated SignedSource<<7ba1c1169b7fd9aaaea917d367536acd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntityPageLayoutFactoryFragment$data = {
  readonly page?: {
    readonly " $fragmentSpreads": FragmentRefs<"EntityPageLayoutFragment" | "IssuePageLayoutFragment">;
  } | null | undefined;
  readonly schemaDefinition?: {
    readonly identifier: string;
  };
  readonly " $fragmentSpreads": FragmentRefs<"EntityLayoutFactoryFragment" | "IssueSidebarNavFragment">;
  readonly " $fragmentType": "EntityPageLayoutFactoryFragment";
};
export type EntityPageLayoutFactoryFragment$key = {
  readonly " $data"?: EntityPageLayoutFactoryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityPageLayoutFactoryFragment">;
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
v1 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "EntityLayoutFactoryFragment"
},
v2 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "pageSlug"
  }
],
v3 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "EntityPageLayoutFragment"
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
          "args": null,
          "kind": "FragmentSpread",
          "name": "IssueSidebarNavFragment"
        },
        (v1/*: any*/),
        {
          "alias": null,
          "args": (v2/*: any*/),
          "concreteType": "Page",
          "kind": "LinkedField",
          "name": "page",
          "plural": false,
          "selections": [
            (v3/*: any*/),
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "IssuePageLayoutFragment"
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
        {
          "alias": null,
          "args": (v2/*: any*/),
          "concreteType": "Page",
          "kind": "LinkedField",
          "name": "page",
          "plural": false,
          "selections": [
            (v3/*: any*/)
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

(node as any).hash = "79b29f7ff97d9433c487a7b9d6f09746";

export default node;
