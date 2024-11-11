/**
 * @generated SignedSource<<32cb45c0b6e0ce7d5d337cfe59093674>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
export type DescendantListBackground = "DARK" | "LIGHT" | "NONE" | "%future added value";
export type DescendantListVariant = "CARDS" | "COMPACT" | "GRID" | "PROMOS" | "SUMMARY" | "%future added value";
export type LinkListBackground = "DARK" | "LIGHT" | "NONE" | "%future added value";
export type LinkListVariant = "CARDS" | "COMPACT" | "GRID" | "PROMOS" | "SUMMARY" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type sharedListTemplateFragment$data = {
  readonly descendantsDefinition?: {
    readonly background: DescendantListBackground | null | undefined;
    readonly seeAllButtonLabel: string | null | undefined;
    readonly selectionLimit: number | null | undefined;
    readonly showEntityContext: boolean | null | undefined;
    readonly showSeeAllButton: boolean | null | undefined;
    readonly title: string | null | undefined;
    readonly variant: DescendantListVariant | null | undefined;
  };
  readonly entityList?: {
    readonly count: number;
    readonly empty: boolean;
    readonly " $fragmentSpreads": FragmentRefs<"sharedListItemsTemplateFragment">;
  };
  readonly linksDefinition?: {
    readonly background: LinkListBackground | null | undefined;
    readonly seeAllButtonLabel: string | null | undefined;
    readonly selectionLimit: number | null | undefined;
    readonly showEntityContext: boolean | null | undefined;
    readonly showSeeAllButton: boolean | null | undefined;
    readonly title: string | null | undefined;
    readonly variant: LinkListVariant | null | undefined;
  };
  readonly slots?: {
    readonly header: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
    } | null | undefined;
    readonly headerAside: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
    } | null | undefined;
    readonly metadata: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
    } | null | undefined;
    readonly subtitle: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
    } | null | undefined;
  };
  readonly " $fragmentType": "sharedListTemplateFragment";
};
export type sharedListTemplateFragment$key = {
  readonly " $data"?: sharedListTemplateFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"sharedListTemplateFragment">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "sharedListTemplateFragment"
};

(node as any).hash = "ea72a60ba6e3d7f8f26fe2b37a246c7e";

export default node;
