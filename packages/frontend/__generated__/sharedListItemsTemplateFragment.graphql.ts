/**
 * @generated SignedSource<<c65c90597952a7e0243295704be284b2>>
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
  readonly depths: ReadonlyArray<{
    readonly template: {
      readonly entity: {
        readonly hierarchicalDepth?: number;
      };
    } | null | undefined;
  }>;
  readonly empty: boolean;
  readonly listItemLayouts: ReadonlyArray<{
    readonly template: {
      readonly entity: {
        readonly hierarchicalDepth?: number;
      };
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
v2 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "hierarchicalDepth",
    "storageKey": null
  }
],
v3 = {
  "alias": null,
  "args": null,
  "concreteType": null,
  "kind": "LinkedField",
  "name": "entity",
  "plural": false,
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": (v2/*: any*/),
      "type": "Collection",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": (v2/*: any*/),
      "type": "Item",
      "abstractKey": null
    }
  ],
  "storageKey": null
},
v4 = {
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
      "alias": "depths",
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
            (v3/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
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
            (v3/*: any*/),
            (v4/*: any*/),
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
                        (v4/*: any*/)
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

(node as any).hash = "94353e16edc50ee0eef19e805395b446";

export default node;
