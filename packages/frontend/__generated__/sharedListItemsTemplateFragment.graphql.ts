/**
 * @generated SignedSource<<ef677a85353fc9550aeef4b4a540cd01>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type sharedListItemsTemplateFragment$data = {
  readonly count: number;
  readonly empty: boolean;
  readonly listItemLayouts: ReadonlyArray<{
    readonly template: {
      readonly entityList: {
        readonly count: number;
        readonly empty: boolean;
        readonly listItemLayouts: ReadonlyArray<{
          readonly template: {
            readonly " $fragmentSpreads": FragmentRefs<"sharedListItemTemplateFragment">;
          } | null | undefined;
        }>;
      };
      readonly " $fragmentSpreads": FragmentRefs<"sharedListItemTemplateFragment">;
    } | null | undefined;
  }>;
  readonly " $fragmentType": "sharedListItemsTemplateFragment";
};
export type sharedListItemsTemplateFragment$key = {
  readonly " $data"?: sharedListItemsTemplateFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"sharedListItemsTemplateFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "empty",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "count",
  "storageKey": null
},
v2 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "sharedListItemTemplateFragment"
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "sharedListItemsTemplateFragment",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "ListItemLayoutInstance",
      "kind": "LinkedField",
      "name": "listItemLayouts",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ListItemTemplateInstance",
          "kind": "LinkedField",
          "name": "template",
          "plural": false,
          "selections": [
            (v2/*: any*/),
            {
              "alias": null,
              "args": null,
              "concreteType": "TemplateEntityList",
              "kind": "LinkedField",
              "name": "entityList",
              "plural": false,
              "selections": [
                (v0/*: any*/),
                (v1/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "ListItemLayoutInstance",
                  "kind": "LinkedField",
                  "name": "listItemLayouts",
                  "plural": true,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "ListItemTemplateInstance",
                      "kind": "LinkedField",
                      "name": "template",
                      "plural": false,
                      "selections": [
                        (v2/*: any*/)
                      ],
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "TemplateEntityList",
  "abstractKey": null
};
})();

(node as any).hash = "3824498a91a8d3c21f02fb8a3cdceafb";

export default node;
