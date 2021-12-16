/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ArticleHeroFragment = {
    readonly title: string;
    readonly summary: string | null;
    readonly doi: string | null;
    readonly published: {
        readonly " $fragmentRefs": FragmentRefs<"PrecisionDateFragment">;
    };
    readonly contributions: {
        readonly " $fragmentRefs": FragmentRefs<"ContributorsListFragment">;
    };
    readonly pdfVersion: {
        readonly " $fragmentRefs": FragmentRefs<"AssetDownloadButtonFragment">;
    } | null;
    readonly " $refType": "ArticleHeroFragment";
};
export type ArticleHeroFragment$data = ArticleHeroFragment;
export type ArticleHeroFragment$key = {
    readonly " $data"?: ArticleHeroFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ArticleHeroFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArticleHeroFragment",
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
      "name": "summary",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "doi",
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
          "args": null,
          "kind": "FragmentSpread",
          "name": "PrecisionDateFragment"
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ItemContributionConnection",
      "kind": "LinkedField",
      "name": "contributions",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ContributorsListFragment"
        }
      ],
      "storageKey": null
    },
    {
      "alias": "pdfVersion",
      "args": [
        {
          "kind": "Literal",
          "name": "fullPath",
          "value": "pdf_version"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "schemaProperty",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "AssetDownloadButtonFragment"
        }
      ],
      "storageKey": "schemaProperty(fullPath:\"pdf_version\")"
    }
  ],
  "type": "Item",
  "abstractKey": null
};
(node as any).hash = '8c1d93c931c96daeb038ef6508481e0c';
export default node;
