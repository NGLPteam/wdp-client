/**
 * @generated SignedSource<<85903c6bd9a239363114f48168d65224>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommunityListFragment$data = {
  readonly communities: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly allowedActions: ReadonlyArray<string>;
        readonly createdAt: string;
        readonly id: string;
        readonly name: string;
        readonly position: number | null | undefined;
        readonly slug: string;
        readonly updatedAt: string;
        readonly " $fragmentSpreads": FragmentRefs<"CommunityNameColumnFragment">;
      };
    }>;
    readonly " $fragmentSpreads": FragmentRefs<"ModelListPageFragment">;
  };
  readonly " $fragmentType": "CommunityListFragment";
};
export type CommunityListFragment$key = {
  readonly " $data"?: CommunityListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommunityListFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "order"
    },
    {
      "kind": "RootArgument",
      "name": "page"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityListFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "order",
          "variableName": "order"
        },
        {
          "kind": "Variable",
          "name": "page",
          "variableName": "page"
        },
        {
          "kind": "Literal",
          "name": "perPage",
          "value": 20
        }
      ],
      "concreteType": "CommunityConnection",
      "kind": "LinkedField",
      "name": "communities",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "CommunityEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Community",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v0/*: any*/),
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
                  "name": "createdAt",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "updatedAt",
                  "storageKey": null
                },
                (v1/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "allowedActions",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "position",
                  "storageKey": null
                },
                {
                  "kind": "InlineDataFragmentSpread",
                  "name": "CommunityNameColumnFragment",
                  "selections": [
                    (v1/*: any*/),
                    (v0/*: any*/)
                  ],
                  "args": null,
                  "argumentDefinitions": []
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ModelListPageFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();

(node as any).hash = "3c4ff9283b778e44e5e28542754a4c6d";

export default node;
