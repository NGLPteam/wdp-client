/**
 * @generated SignedSource<<ee99c069b2dc30dcd8281cd37adcf265>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type sharedListItemTemplateFragment$data = {
  readonly definition: {
    readonly seeAllOrderingIdentifier: any | null | undefined;
  };
  readonly entity: {
    readonly __typename: "Collection";
    readonly attributions: ReadonlyArray<{
      readonly id: string;
    }>;
    readonly heroImage: {
      readonly large: {
        readonly webp: {
          readonly alt: string | null | undefined;
          readonly height: number | null | undefined;
          readonly url: string | null | undefined;
          readonly width: number | null | undefined;
        };
      };
      readonly medium: {
        readonly webp: {
          readonly url: string | null | undefined;
          readonly width: number | null | undefined;
        };
      };
      readonly thumb: {
        readonly webp: {
          readonly url: string | null | undefined;
          readonly width: number | null | undefined;
        };
      };
    };
    readonly id: string;
    readonly slug: string;
    readonly title: string;
    readonly " $fragmentSpreads": FragmentRefs<"ContributorsListFragment" | "getThumbWithFallbackFragment">;
  } | {
    readonly __typename: "Item";
    readonly attributions: ReadonlyArray<{
      readonly id: string;
    }>;
    readonly heroImage: {
      readonly large: {
        readonly webp: {
          readonly alt: string | null | undefined;
          readonly height: number | null | undefined;
          readonly url: string | null | undefined;
          readonly width: number | null | undefined;
        };
      };
      readonly medium: {
        readonly webp: {
          readonly url: string | null | undefined;
          readonly width: number | null | undefined;
        };
      };
      readonly thumb: {
        readonly webp: {
          readonly url: string | null | undefined;
          readonly width: number | null | undefined;
        };
      };
    };
    readonly id: string;
    readonly slug: string;
    readonly title: string;
    readonly " $fragmentSpreads": FragmentRefs<"ContributorsListFragment" | "getThumbWithFallbackFragment">;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
  readonly slots: {
    readonly contextAbbr: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
    } | null | undefined;
    readonly contextC: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
    } | null | undefined;
    readonly contextFull: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
    } | null | undefined;
    readonly description: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedBlockSlotFragment">;
    } | null | undefined;
    readonly header: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
    } | null | undefined;
    readonly metaA: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
    } | null | undefined;
    readonly metaB: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
    } | null | undefined;
    readonly nestedContext: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
    } | null | undefined;
    readonly nestedHeader: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
    } | null | undefined;
    readonly nestedMetadata: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
    } | null | undefined;
    readonly nestedSubheader: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
    } | null | undefined;
    readonly subheader: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
    } | null | undefined;
  };
  readonly " $fragmentType": "sharedListItemTemplateFragment";
};
export type sharedListItemTemplateFragment$key = {
  readonly " $data"?: sharedListItemTemplateFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"sharedListItemTemplateFragment">;
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
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageAttachment",
  "kind": "LinkedField",
  "name": "thumbnail",
  "plural": false,
  "selections": [
    {
      "alias": "image",
      "args": null,
      "concreteType": "ImageSize",
      "kind": "LinkedField",
      "name": "medium",
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
            (v4/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CoverImageFragment"
    }
  ],
  "storageKey": null
},
v6 = [
  (v5/*: any*/)
],
v7 = {
  "kind": "InlineFragment",
  "selections": (v6/*: any*/),
  "type": "Collection",
  "abstractKey": null
},
v8 = {
  "kind": "InlineDataFragmentSpread",
  "name": "getThumbWithFallbackFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
            (v5/*: any*/),
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
                    (v7/*: any*/)
                  ],
                  "storageKey": null
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
            (v5/*: any*/),
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
                    (v7/*: any*/),
                    {
                      "kind": "InlineFragment",
                      "selections": (v6/*: any*/),
                      "type": "Item",
                      "abstractKey": null
                    }
                  ],
                  "storageKey": null
                }
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
    }
  ],
  "args": null,
  "argumentDefinitions": ([]/*: any*/)
},
v9 = [
  (v1/*: any*/)
],
v10 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "ContributorsListFragment"
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "width",
  "storageKey": null
},
v12 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ImageDerivative",
    "kind": "LinkedField",
    "name": "webp",
    "plural": false,
    "selections": [
      (v4/*: any*/),
      (v11/*: any*/)
    ],
    "storageKey": null
  }
],
v13 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageAttachment",
  "kind": "LinkedField",
  "name": "heroImage",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ImageSize",
      "kind": "LinkedField",
      "name": "large",
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
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "alt",
              "storageKey": null
            },
            (v4/*: any*/),
            (v11/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "height",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ImageSize",
      "kind": "LinkedField",
      "name": "medium",
      "plural": false,
      "selections": (v12/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ImageSize",
      "kind": "LinkedField",
      "name": "thumb",
      "plural": false,
      "selections": (v12/*: any*/),
      "storageKey": null
    }
  ],
  "storageKey": null
},
v14 = [
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "sharedInlineSlotFragment"
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "sharedListItemTemplateFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ListItemTemplateDefinition",
      "kind": "LinkedField",
      "name": "definition",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "seeAllOrderingIdentifier",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "entity",
      "plural": false,
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
            (v0/*: any*/),
            (v1/*: any*/),
            (v2/*: any*/),
            (v3/*: any*/),
            (v8/*: any*/),
            {
              "alias": null,
              "args": null,
              "concreteType": "CollectionAttribution",
              "kind": "LinkedField",
              "name": "attributions",
              "plural": true,
              "selections": (v9/*: any*/),
              "storageKey": null
            },
            (v10/*: any*/),
            (v13/*: any*/)
          ],
          "type": "Collection",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            (v0/*: any*/),
            (v1/*: any*/),
            (v2/*: any*/),
            (v3/*: any*/),
            {
              "alias": null,
              "args": null,
              "concreteType": "ItemAttribution",
              "kind": "LinkedField",
              "name": "attributions",
              "plural": true,
              "selections": (v9/*: any*/),
              "storageKey": null
            },
            (v8/*: any*/),
            (v10/*: any*/),
            (v13/*: any*/)
          ],
          "type": "Item",
          "abstractKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ListItemTemplateInstanceSlots",
      "kind": "LinkedField",
      "name": "slots",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "TemplateSlotInlineInstance",
          "kind": "LinkedField",
          "name": "contextFull",
          "plural": false,
          "selections": (v14/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "TemplateSlotInlineInstance",
          "kind": "LinkedField",
          "name": "contextAbbr",
          "plural": false,
          "selections": (v14/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "TemplateSlotInlineInstance",
          "kind": "LinkedField",
          "name": "contextC",
          "plural": false,
          "selections": (v14/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "TemplateSlotBlockInstance",
          "kind": "LinkedField",
          "name": "description",
          "plural": false,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "sharedBlockSlotFragment"
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "TemplateSlotInlineInstance",
          "kind": "LinkedField",
          "name": "header",
          "plural": false,
          "selections": (v14/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "TemplateSlotInlineInstance",
          "kind": "LinkedField",
          "name": "metaA",
          "plural": false,
          "selections": (v14/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "TemplateSlotInlineInstance",
          "kind": "LinkedField",
          "name": "metaB",
          "plural": false,
          "selections": (v14/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "TemplateSlotInlineInstance",
          "kind": "LinkedField",
          "name": "subheader",
          "plural": false,
          "selections": (v14/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "TemplateSlotInlineInstance",
          "kind": "LinkedField",
          "name": "nestedHeader",
          "plural": false,
          "selections": (v14/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "TemplateSlotInlineInstance",
          "kind": "LinkedField",
          "name": "nestedSubheader",
          "plural": false,
          "selections": (v14/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "TemplateSlotInlineInstance",
          "kind": "LinkedField",
          "name": "nestedContext",
          "plural": false,
          "selections": (v14/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "TemplateSlotInlineInstance",
          "kind": "LinkedField",
          "name": "nestedMetadata",
          "plural": false,
          "selections": (v14/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ListItemTemplateInstance",
  "abstractKey": null
};
})();

(node as any).hash = "7285c21b7834b260951d87306410668e";

export default node;
