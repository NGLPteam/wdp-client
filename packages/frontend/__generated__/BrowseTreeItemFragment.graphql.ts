/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type BrowseTreeItemFragment = {
    readonly __typename: string;
    readonly slug?: string | undefined;
    readonly title: string;
    readonly descendants: {
        readonly nodes: ReadonlyArray<{
            readonly descendant: {
                readonly __typename: string;
                readonly slug?: string | undefined;
                readonly title?: string | undefined;
            };
        }>;
    };
    readonly " $refType": "BrowseTreeItemFragment";
};
export type BrowseTreeItemFragment$data = BrowseTreeItemFragment;
export type BrowseTreeItemFragment$key = {
    readonly " $data"?: BrowseTreeItemFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"BrowseTreeItemFragment">;
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v2 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    }
  ],
  "type": "Sluggable",
  "abstractKey": "__isSluggable"
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BrowseTreeItemFragment",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "EntityDescendantConnection",
      "kind": "LinkedField",
      "name": "descendants",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "EntityDescendant",
          "kind": "LinkedField",
          "name": "nodes",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": null,
              "kind": "LinkedField",
              "name": "descendant",
              "plural": false,
              "selections": [
                (v0/*: any*/),
                {
                  "kind": "InlineFragment",
                  "selections": [
                    (v1/*: any*/),
                    (v2/*: any*/)
                  ],
                  "type": "Entity",
                  "abstractKey": "__isEntity"
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
    (v2/*: any*/)
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
})();
(node as any).hash = 'ca43fd07e1e085b20cef0c15a46106ba';
export default node;
