/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SeriesHeroFragment = {
    readonly slug: string;
    readonly title: string;
    readonly subtitle: string | null;
    readonly summary: string | null;
    readonly published: {
        readonly value: string | null;
        readonly " $fragmentRefs": FragmentRefs<"PrecisionDateFragment">;
    };
    readonly about: {
        readonly content?: string | null | undefined;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"ArticleParentHeaderFragment">;
    readonly " $refType": "SeriesHeroFragment";
};
export type SeriesHeroFragment$data = SeriesHeroFragment;
export type SeriesHeroFragment$key = {
    readonly " $data"?: SeriesHeroFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SeriesHeroFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SeriesHeroFragment",
  "selections": [
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
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "subtitle",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "summary",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "VariablePrecisionDate",
      "kind": "LinkedField",
      "name": "published",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "value",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "PrecisionDateFragment"
        }
      ],
      "storageKey": null
    },
    {
      "alias": "about",
      "args": [
        {
          "kind": "Literal",
          "name": "fullPath",
          "value": "about"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "schemaProperty",
      "plural": false,
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "content",
              "storageKey": null
            }
          ],
          "type": "MarkdownProperty",
          "abstractKey": null
        }
      ],
      "storageKey": "schemaProperty(fullPath:\"about\")"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArticleParentHeaderFragment"
    }
  ],
  "type": "Collection",
  "abstractKey": null
};
(node as any).hash = '4dea2b3a5529d8978d66fc0e2118554d';
export default node;
