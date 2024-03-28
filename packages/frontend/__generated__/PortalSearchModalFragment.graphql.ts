/**
 * @generated SignedSource<<fe149da9c4d6b2f7917c84f6f18bd321>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PortalSearchModalFragment$data = {
  readonly __typename: string;
  readonly breadcrumbs: ReadonlyArray<{
    readonly crumb: {
      readonly __typename: string;
      readonly slug?: string;
      readonly title?: string;
    };
  }>;
  readonly slug?: string;
  readonly title: string;
  readonly " $fragmentType": "PortalSearchModalFragment";
};
export type PortalSearchModalFragment$key = {
  readonly " $data"?: PortalSearchModalFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PortalSearchModalFragment">;
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
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PortalSearchModalFragment",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    (v2/*: any*/),
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
            (v1/*: any*/),
            {
              "kind": "InlineFragment",
              "selections": [
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
  "type": "Entity",
  "abstractKey": "__isEntity"
};
})();

(node as any).hash = "80df069878ca3ffa21b5e80426fb8597";

export default node;
