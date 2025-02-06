/**
 * @generated SignedSource<<9e067f22785787cee92e86d75cf3656c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type HeroImageLayout = "ONE_COLUMN" | "TWO_COLUMN" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type CommunityHeroHeaderFragment$data = {
  readonly entity: {
    readonly heroImage?: {
      readonly " $fragmentSpreads": FragmentRefs<"ImageHeroTemplateFragment">;
    };
    readonly heroImageLayout?: HeroImageLayout;
  };
  readonly template: {
    readonly definition: {
      readonly showBigSearchPrompt: boolean | null | undefined;
      readonly showHeroImage: boolean | null | undefined;
    };
    readonly slots: {
      readonly bigSearchPrompt: {
        readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
      } | null | undefined;
      readonly header: {
        readonly empty: boolean;
      } | null | undefined;
      readonly headerSummary: {
        readonly empty: boolean;
      } | null | undefined;
    };
    readonly " $fragmentSpreads": FragmentRefs<"HeaderHeroFragment">;
  } | null | undefined;
  readonly " $fragmentType": "CommunityHeroHeaderFragment";
};
export type CommunityHeroHeaderFragment$key = {
  readonly " $data"?: CommunityHeroHeaderFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommunityHeroHeaderFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "empty",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityHeroHeaderFragment",
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
            {
              "alias": null,
              "args": null,
              "concreteType": "ImageAttachment",
              "kind": "LinkedField",
              "name": "heroImage",
              "plural": false,
              "selections": [
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "ImageHeroTemplateFragment"
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "heroImageLayout",
              "storageKey": null
            }
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
      "concreteType": "HeroTemplateInstance",
      "kind": "LinkedField",
      "name": "template",
      "plural": false,
      "selections": [
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
              "name": "showHeroImage",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "showBigSearchPrompt",
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
              "name": "bigSearchPrompt",
              "plural": false,
              "selections": [
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "sharedInlineSlotFragment"
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
              "selections": (v0/*: any*/),
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "TemplateSlotBlockInstance",
              "kind": "LinkedField",
              "name": "headerSummary",
              "plural": false,
              "selections": (v0/*: any*/),
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "HeaderHeroFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "HeroLayoutInstance",
  "abstractKey": null
};
})();

(node as any).hash = "1116880b902a4675e9d9620fd45d5bba";

export default node;
