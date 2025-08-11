/**
 * @generated SignedSource<<fab146ecdeaf4c217da8ce043b07e845>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type HeaderTitleBlockFragment$data = {
  readonly definition: {
    readonly listContributors: boolean | null | undefined;
    readonly showSplitDisplay: boolean | null | undefined;
    readonly showThumbnailImage: boolean | null | undefined;
  };
  readonly entity: {
    readonly id?: string;
    readonly slug?: string;
    readonly thumbnail?: {
      readonly medium: {
        readonly webp: {
          readonly height: number | null | undefined;
          readonly width: number | null | undefined;
        };
      };
      readonly storage: AttachmentStorage | null | undefined;
      readonly " $fragmentSpreads": FragmentRefs<"CoverImageFragment">;
    };
    readonly title?: string;
    readonly " $fragmentSpreads": FragmentRefs<"ContributorsListFragment">;
  };
  readonly slots: {
    readonly callToAction: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedBlockSlotFragment">;
    } | null | undefined;
    readonly header: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
    } | null | undefined;
    readonly headerAside: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
    } | null | undefined;
    readonly headerParent: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
    } | null | undefined;
    readonly headerSubtitle: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
    } | null | undefined;
    readonly headerSummary: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedBlockSlotFragment">;
    } | null | undefined;
  };
  readonly " $fragmentType": "HeaderTitleBlockFragment";
};
export type HeaderTitleBlockFragment$key = {
  readonly " $data"?: HeaderTitleBlockFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"HeaderTitleBlockFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "ContributorsListFragment"
},
v1 = [
  (v0/*: any*/)
],
v2 = [
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "sharedInlineSlotFragment"
  }
],
v3 = [
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "sharedBlockSlotFragment"
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HeaderTitleBlockFragment",
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
          "selections": (v1/*: any*/),
          "type": "Community",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": (v1/*: any*/),
          "type": "Item",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
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
              "name": "slug",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "title",
              "storageKey": null
            },
            (v0/*: any*/),
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
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "width",
                          "storageKey": null
                        },
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
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "CoverImageFragment"
                }
              ],
              "storageKey": null
            }
          ],
          "type": "Collection",
          "abstractKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "HeroTemplateDefinition",
      "kind": "LinkedField",
      "name": "definition",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "listContributors",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "showThumbnailImage",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "showSplitDisplay",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "HeroTemplateInstanceSlots",
      "kind": "LinkedField",
      "name": "slots",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "TemplateSlotInlineInstance",
          "kind": "LinkedField",
          "name": "header",
          "plural": false,
          "selections": (v2/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "TemplateSlotInlineInstance",
          "kind": "LinkedField",
          "name": "headerSubtitle",
          "plural": false,
          "selections": (v2/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "TemplateSlotInlineInstance",
          "kind": "LinkedField",
          "name": "headerParent",
          "plural": false,
          "selections": (v2/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "TemplateSlotInlineInstance",
          "kind": "LinkedField",
          "name": "headerAside",
          "plural": false,
          "selections": (v2/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "TemplateSlotBlockInstance",
          "kind": "LinkedField",
          "name": "headerSummary",
          "plural": false,
          "selections": (v3/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "TemplateSlotBlockInstance",
          "kind": "LinkedField",
          "name": "callToAction",
          "plural": false,
          "selections": (v3/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "HeroTemplateInstance",
  "abstractKey": null
};
})();

(node as any).hash = "aa15bf8aa730172758326452ce39071f";

export default node;
