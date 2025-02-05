/**
 * @generated SignedSource<<b7af3bf7f7fe35db4fcd60cbabcd9ce4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type DescendantListVariant = "CARDS" | "COMPACT" | "GRID" | "PROMOS" | "SUMMARY" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type DescendantsTemplateFragment$data = {
  readonly descendantsDefinition?: {
    readonly variant: DescendantListVariant | null | undefined;
  };
  readonly entity?: {
    readonly __typename: string;
    readonly slug?: string;
  };
  readonly " $fragmentSpreads": FragmentRefs<"sharedListTemplateFragment">;
  readonly " $fragmentType": "DescendantsTemplateFragment";
};
export type DescendantsTemplateFragment$key = {
  readonly " $data"?: DescendantsTemplateFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DescendantsTemplateFragment">;
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
  "name": "slug",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "variant",
  "storageKey": null
},
v3 = {
  "kind": "InlineFragment",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/)
  ],
  "type": "Community",
  "abstractKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageAttachment",
  "kind": "LinkedField",
  "name": "thumbnail",
  "plural": false,
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CoverImageFragment"
    }
  ],
  "storageKey": null
},
v5 = [
  (v0/*: any*/),
  (v1/*: any*/),
  (v4/*: any*/)
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "background",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "seeAllButtonLabel",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "showSeeAllButton",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "selectionMode",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "selectionLimit",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "showHeroImage",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "width",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "showNestedEntities",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "seeAllOrderingIdentifier",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "showContributors",
  "storageKey": null
},
v17 = [
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "sharedInlineSlotFragment"
  }
],
v18 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "TemplateSlotInlineInstance",
    "kind": "LinkedField",
    "name": "blockHeader",
    "plural": false,
    "selections": (v17/*: any*/),
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "TemplateSlotInlineInstance",
    "kind": "LinkedField",
    "name": "header",
    "plural": false,
    "selections": (v17/*: any*/),
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "TemplateSlotInlineInstance",
    "kind": "LinkedField",
    "name": "headerAside",
    "plural": false,
    "selections": (v17/*: any*/),
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "TemplateSlotInlineInstance",
    "kind": "LinkedField",
    "name": "metadata",
    "plural": false,
    "selections": (v17/*: any*/),
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "TemplateSlotInlineInstance",
    "kind": "LinkedField",
    "name": "subtitle",
    "plural": false,
    "selections": (v17/*: any*/),
    "storageKey": null
  }
],
v19 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "sharedListItemsTemplateFragment"
},
v20 = [
  (v0/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "id",
    "storageKey": null
  },
  (v11/*: any*/),
  (v1/*: any*/),
  (v4/*: any*/)
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DescendantsTemplateFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": null,
          "kind": "LinkedField",
          "name": "entity",
          "plural": false,
          "selections": [
            (v0/*: any*/),
            {
              "kind": "InlineFragment",
              "selections": [
                (v1/*: any*/)
              ],
              "type": "Sluggable",
              "abstractKey": "__isSluggable"
            }
          ],
          "storageKey": null
        },
        {
          "alias": "descendantsDefinition",
          "args": null,
          "concreteType": "DescendantListTemplateDefinition",
          "kind": "LinkedField",
          "name": "definition",
          "plural": false,
          "selections": [
            (v2/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "type": "DescendantListTemplateInstance",
      "abstractKey": null
    },
    {
      "kind": "InlineDataFragmentSpread",
      "name": "sharedListTemplateFragment",
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": null,
              "kind": "LinkedField",
              "name": "entity",
              "plural": false,
              "selections": [
                (v3/*: any*/),
                {
                  "kind": "InlineFragment",
                  "selections": (v5/*: any*/),
                  "type": "Collection",
                  "abstractKey": null
                },
                {
                  "kind": "InlineFragment",
                  "selections": (v5/*: any*/),
                  "type": "Item",
                  "abstractKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": "linksDefinition",
              "args": null,
              "concreteType": "LinkListTemplateDefinition",
              "kind": "LinkedField",
              "name": "definition",
              "plural": false,
              "selections": [
                (v6/*: any*/),
                (v7/*: any*/),
                (v8/*: any*/),
                (v9/*: any*/),
                (v10/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "showEntityContext",
                  "storageKey": null
                },
                (v11/*: any*/),
                (v2/*: any*/),
                (v12/*: any*/),
                (v13/*: any*/),
                (v14/*: any*/),
                (v15/*: any*/),
                (v16/*: any*/)
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "LinkListTemplateInstanceSlots",
              "kind": "LinkedField",
              "name": "slots",
              "plural": false,
              "selections": (v18/*: any*/),
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "TemplateEntityList",
              "kind": "LinkedField",
              "name": "entityList",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "count",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "empty",
                  "storageKey": null
                },
                (v19/*: any*/)
              ],
              "storageKey": null
            }
          ],
          "type": "LinkListTemplateInstance",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": null,
              "kind": "LinkedField",
              "name": "entity",
              "plural": false,
              "selections": [
                (v3/*: any*/),
                {
                  "kind": "InlineFragment",
                  "selections": (v20/*: any*/),
                  "type": "Collection",
                  "abstractKey": null
                },
                {
                  "kind": "InlineFragment",
                  "selections": (v20/*: any*/),
                  "type": "Item",
                  "abstractKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": "descendantsDefinition",
              "args": null,
              "concreteType": "DescendantListTemplateDefinition",
              "kind": "LinkedField",
              "name": "definition",
              "plural": false,
              "selections": [
                (v6/*: any*/),
                (v7/*: any*/),
                (v8/*: any*/),
                (v9/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "selectionPropertyPath",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "orderingIdentifier",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "OrderingDefinition",
                  "kind": "LinkedField",
                  "name": "dynamicOrderingDefinition",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "OrderingFilterDefinition",
                      "kind": "LinkedField",
                      "name": "filter",
                      "plural": false,
                      "selections": [
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": "OrderingSchemaFilter",
                          "kind": "LinkedField",
                          "name": "schemas",
                          "plural": true,
                          "selections": [
                            {
                              "alias": null,
                              "args": null,
                              "kind": "ScalarField",
                              "name": "namespace",
                              "storageKey": null
                            },
                            {
                              "alias": null,
                              "args": null,
                              "kind": "ScalarField",
                              "name": "identifier",
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
                },
                (v10/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "entityContext",
                  "storageKey": null
                },
                (v11/*: any*/),
                (v2/*: any*/),
                (v12/*: any*/),
                (v13/*: any*/),
                (v14/*: any*/),
                (v15/*: any*/),
                (v16/*: any*/)
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "DescendantListTemplateInstanceSlots",
              "kind": "LinkedField",
              "name": "slots",
              "plural": false,
              "selections": (v18/*: any*/),
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "TemplateEntityList",
              "kind": "LinkedField",
              "name": "entityList",
              "plural": false,
              "selections": [
                (v19/*: any*/)
              ],
              "storageKey": null
            }
          ],
          "type": "DescendantListTemplateInstance",
          "abstractKey": null
        }
      ],
      "args": null,
      "argumentDefinitions": []
    }
  ],
  "type": "AnyMainTemplateInstance",
  "abstractKey": "__isAnyMainTemplateInstance"
};
})();

(node as any).hash = "e1fd70e793a5133ccd02a70f9e71a85c";

export default node;
