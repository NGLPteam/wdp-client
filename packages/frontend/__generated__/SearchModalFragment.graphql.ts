/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SearchModalFragment = {
    readonly __typename: string;
    readonly slug?: string | undefined;
    readonly title: string;
    readonly breadcrumbs: ReadonlyArray<{
        readonly crumb: {
            readonly __typename: string;
            readonly slug?: string | undefined;
            readonly title?: string | undefined;
        };
    }>;
    readonly " $refType": "SearchModalFragment";
};
export type SearchModalFragment$data = SearchModalFragment;
export type SearchModalFragment$key = {
    readonly " $data"?: SearchModalFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SearchModalFragment">;
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
  "name": "SearchModalFragment",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "EntityBreadcrumb",
      "kind": "LinkedField",
      "name": "breadcrumbs",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": null,
          "kind": "LinkedField",
          "name": "crumb",
          "plural": false,
          "selections": [
            (v0/*: any*/),
            (v2/*: any*/),
            {
              "kind": "InlineFragment",
              "selections": [
                (v1/*: any*/)
              ],
              "type": "Entity",
              "abstractKey": "__isEntity"
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
(node as any).hash = '10a685448b5c4bf11fb04706a05b7105';
export default node;
