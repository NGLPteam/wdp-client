/**
 * @generated SignedSource<<9c9db1217c7e3242a7facb455a9baf45>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NavigationTabsFragment$data = {
  readonly definition: {
    readonly hideMetadata: boolean | null | undefined;
  };
  readonly entity: {
    readonly __typename: "Collection";
    readonly assets: {
      readonly pageInfo: {
        readonly totalCount: number;
      };
    };
    readonly contributions: {
      readonly pageInfo: {
        readonly totalCount: number;
      };
    };
    readonly pages: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly slug: string;
          readonly title: string;
        };
      }>;
    };
  } | {
    readonly __typename: "Community";
    readonly assets: {
      readonly pageInfo: {
        readonly totalCount: number;
      };
    };
    readonly pages: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly slug: string;
          readonly title: string;
        };
      }>;
    };
  } | {
    readonly __typename: "Item";
    readonly assets: {
      readonly pageInfo: {
        readonly totalCount: number;
      };
    };
    readonly contributions: {
      readonly pageInfo: {
        readonly totalCount: number;
      };
    };
    readonly pages: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly slug: string;
          readonly title: string;
        };
      }>;
    };
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
  readonly slots: {
    readonly entityLabel: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
    } | null | undefined;
  };
  readonly " $fragmentType": "NavigationTabsFragment";
};
export type NavigationTabsFragment$key = {
  readonly " $data"?: NavigationTabsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"NavigationTabsFragment">;
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
  "concreteType": "PageConnection",
  "kind": "LinkedField",
  "name": "pages",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "PageEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Page",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "title",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "slug",
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
v2 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "PageInfo",
    "kind": "LinkedField",
    "name": "pageInfo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "totalCount",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
],
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "AnyAssetConnection",
  "kind": "LinkedField",
  "name": "assets",
  "plural": false,
  "selections": (v2/*: any*/),
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NavigationTabsFragment",
  "selections": [
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
            {
              "alias": null,
              "args": null,
              "concreteType": "ItemContributionConnection",
              "kind": "LinkedField",
              "name": "contributions",
              "plural": false,
              "selections": (v2/*: any*/),
              "storageKey": null
            },
            (v3/*: any*/)
          ],
          "type": "Item",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            (v0/*: any*/),
            (v1/*: any*/),
            {
              "alias": null,
              "args": null,
              "concreteType": "CollectionContributionConnection",
              "kind": "LinkedField",
              "name": "contributions",
              "plural": false,
              "selections": (v2/*: any*/),
              "storageKey": null
            },
            (v3/*: any*/)
          ],
          "type": "Collection",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            (v0/*: any*/),
            (v1/*: any*/),
            (v3/*: any*/)
          ],
          "type": "Community",
          "abstractKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "NavigationTemplateDefinition",
      "kind": "LinkedField",
      "name": "definition",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "hideMetadata",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "NavigationTemplateInstanceSlots",
      "kind": "LinkedField",
      "name": "slots",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "TemplateSlotInlineInstance",
          "kind": "LinkedField",
          "name": "entityLabel",
          "plural": false,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "sharedInlineSlotFragment"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "NavigationTemplateInstance",
  "abstractKey": null
};
})();

(node as any).hash = "d9fe4fa81e944080f3a4ce80be90ad3b";

export default node;
