/**
 * @generated SignedSource<<5f1cd22890a3ebf82428a09f3b65315f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type HeroBackground = "DARK" | "LIGHT" | "NONE" | "%future added value";
export type LayoutKind = "HERO" | "LIST_ITEM" | "MAIN" | "METADATA" | "NAVIGATION" | "SUPPLEMENTARY" | "%future added value";
export type TemplateKind = "CONTRIBUTOR_LIST" | "DESCENDANT_LIST" | "DETAIL" | "HERO" | "LINK_LIST" | "LIST_ITEM" | "METADATA" | "NAVIGATION" | "ORDERING" | "PAGE_LIST" | "SUPPLEMENTARY" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type HeroTemplateLayoutFragment$data = {
  readonly lastRenderedAt: string | null | undefined;
  readonly template: {
    readonly definition: {
      readonly background: HeroBackground | null | undefined;
      readonly descendantSearchPrompt: string | null | undefined;
      readonly enableDescendantBrowsing: boolean | null | undefined;
      readonly enableDescendantSearch: boolean | null | undefined;
      readonly listContributors: boolean | null | undefined;
      readonly showBasicViewMetrics: boolean | null | undefined;
      readonly showBigSearchPrompt: boolean | null | undefined;
      readonly showBreadcrumbs: boolean | null | undefined;
      readonly showDOI: boolean | null | undefined;
      readonly showHeroImage: boolean | null | undefined;
      readonly showISSN: boolean | null | undefined;
      readonly showSharingLink: boolean | null | undefined;
      readonly showSplitDisplay: boolean | null | undefined;
      readonly showThumbnailImage: boolean | null | undefined;
    };
    readonly lastRenderedAt: string | null | undefined;
    readonly layoutKind: LayoutKind;
    readonly slots: {
      readonly " $fragmentSpreads": FragmentRefs<"HeaderHeroFragment">;
    };
    readonly templateKind: TemplateKind;
    readonly " $fragmentSpreads": FragmentRefs<"DetailHeroLayoutFragment">;
  } | null | undefined;
  readonly " $fragmentType": "HeroTemplateLayoutFragment";
};
export type HeroTemplateLayoutFragment$key = {
  readonly " $data"?: HeroTemplateLayoutFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"HeroTemplateLayoutFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lastRenderedAt",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HeroTemplateLayoutFragment",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "HeroTemplateInstance",
      "kind": "LinkedField",
      "name": "template",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "layoutKind",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "templateKind",
          "storageKey": null
        },
        (v0/*: any*/),
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
              "name": "background",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "descendantSearchPrompt",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "enableDescendantBrowsing",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "enableDescendantSearch",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "showBreadcrumbs",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "showDOI",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "showISSN",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "showHeroImage",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "showSharingLink",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "showSplitDisplay",
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
              "name": "showBigSearchPrompt",
              "storageKey": null
            },
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
              "name": "showBasicViewMetrics",
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
              "args": null,
              "kind": "FragmentSpread",
              "name": "HeaderHeroFragment"
            }
          ],
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "DetailHeroLayoutFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "HeroLayoutInstance",
  "abstractKey": null
};
})();

(node as any).hash = "8d73c9bc92e401de8ceb43334874c44f";

export default node;
