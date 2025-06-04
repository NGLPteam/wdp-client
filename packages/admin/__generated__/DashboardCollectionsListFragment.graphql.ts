/**
 * @generated SignedSource<<9c81d699d2e5deeaa48abd1fc1f12a91>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DashboardCollectionsListFragment$data = {
  readonly nodes: ReadonlyArray<{
    readonly id: string;
    readonly schemaVersion: {
      readonly name: string;
      readonly number: string;
    };
    readonly slug: string;
    readonly title: string;
    readonly " $fragmentSpreads": FragmentRefs<"EntityThumbnailColumnFragment">;
  }>;
  readonly " $fragmentSpreads": FragmentRefs<"ModelPageCountActionsFragment" | "ModelPaginationFragment">;
  readonly " $fragmentType": "DashboardCollectionsListFragment";
};
export type DashboardCollectionsListFragment$key = {
  readonly " $data"?: DashboardCollectionsListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DashboardCollectionsListFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DashboardCollectionsListFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Collection",
      "kind": "LinkedField",
      "name": "nodes",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        (v1/*: any*/),
        (v2/*: any*/),
        {
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
              "name": "name",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "number",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "kind": "InlineDataFragmentSpread",
          "name": "EntityThumbnailColumnFragment",
          "selections": [
            {
              "kind": "InlineFragment",
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                },
                (v1/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "ImageAttachment",
                  "kind": "LinkedField",
                  "name": "thumbnail",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "storage",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "ImageSize",
                      "kind": "LinkedField",
                      "name": "thumb",
                      "plural": false,
                      "selections": [
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": "ImageDerivative",
                          "kind": "LinkedField",
                          "name": "webp",
                          "plural": false,
                          "selections": [
                            {
                              "args": null,
                              "kind": "FragmentSpread",
                              "name": "ImageFragment"
                            }
                          ],
                          "storageKey": null
                        }
                      ],
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                },
                {
                  "kind": "InlineFragment",
                  "selections": [
                    (v0/*: any*/)
                  ],
                  "type": "Node",
                  "abstractKey": "__isNode"
                },
                {
                  "kind": "InlineFragment",
                  "selections": [
                    (v2/*: any*/)
                  ],
                  "type": "Sluggable",
                  "abstractKey": "__isSluggable"
                }
              ],
              "type": "Entity",
              "abstractKey": "__isEntity"
            }
          ],
          "args": null,
          "argumentDefinitions": []
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ModelPageCountActionsFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ModelPaginationFragment"
    }
  ],
  "type": "CollectionConnection",
  "abstractKey": null
};
})();

(node as any).hash = "3ae7ad822317ef51c8e1ca4a023e3220";

export default node;
