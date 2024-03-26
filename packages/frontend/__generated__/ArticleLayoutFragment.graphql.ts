/**
 * @generated SignedSource<<d0138c72a37c7128db900b9a7e987700>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArticleLayoutFragment$data = {
  readonly relatedItems: {
    readonly " $fragmentSpreads": FragmentRefs<"RelatedArticlesFragment">;
  };
  readonly " $fragmentSpreads": FragmentRefs<"ArticleHeroFragment" | "ArticleParentHeaderFragment" | "ArticleTabNavFragment" | "BreadcrumbsBarFragment">;
  readonly " $fragmentType": "ArticleLayoutFragment";
};
export type ArticleLayoutFragment$key = {
  readonly " $data"?: ArticleLayoutFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArticleLayoutFragment">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "ArticleLayoutFragment"
};

(node as any).hash = "423e0536d59598cf221404298ab2c088";

export default node;
