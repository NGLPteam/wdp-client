/**
 * @generated SignedSource<<f0fb29c6eb55be0cb5b56f9ffa1ee8f3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
export type DescendantListBackground = "DARK" | "LIGHT" | "NONE" | "%future added value";
export type DescendantListSelectionMode = "DYNAMIC" | "MANUAL" | "NAMED" | "PROPERTY" | "%future added value";
export type DescendantListVariant = "CARDS" | "COMPACT" | "GRID" | "PROMOS" | "SUMMARY" | "TREE" | "%future added value";
export type LinkListBackground = "DARK" | "LIGHT" | "NONE" | "%future added value";
export type LinkListSelectionMode = "DYNAMIC" | "MANUAL" | "%future added value";
export type LinkListVariant = "CARDS" | "COMPACT" | "GRID" | "PROMOS" | "SUMMARY" | "TREE" | "%future added value";
export type ListEntityContext = "ABBR" | "FULL" | "NONE" | "%future added value";
export type TemplateWidth = "FULL" | "HALF" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type sharedListTemplateFragment$data = {
  readonly descendantsDefinition?: {
    readonly background: DescendantListBackground | null | undefined;
    readonly dynamicOrderingDefinition: {
      readonly filter: {
        readonly schemas: ReadonlyArray<{
          readonly identifier: string;
          readonly namespace: string;
        }>;
      };
    } | null | undefined;
    readonly entityContext: ListEntityContext | null | undefined;
    readonly orderingIdentifier: any | null | undefined;
    readonly seeAllButtonLabel: string | null | undefined;
    readonly seeAllOrderingIdentifier: any | null | undefined;
    readonly selectionLimit: number | null | undefined;
    readonly selectionMode: DescendantListSelectionMode | null | undefined;
    readonly selectionPropertyPath: any | null | undefined;
    readonly showContributors: boolean | null | undefined;
    readonly showHeroImage: boolean | null | undefined;
    readonly showNestedEntities: boolean | null | undefined;
    readonly showSeeAllButton: boolean | null | undefined;
    readonly title: string | null | undefined;
    readonly variant: DescendantListVariant | null | undefined;
    readonly width: TemplateWidth | null | undefined;
  };
  readonly entity?: {
    readonly __typename: "Collection";
    readonly id?: string;
    readonly slug: string;
    readonly title?: string;
    readonly " $fragmentSpreads": FragmentRefs<"getThumbWithFallbackFragment">;
  } | {
    readonly __typename: "Community";
    readonly slug: string;
  } | {
    readonly __typename: "Item";
    readonly id?: string;
    readonly slug: string;
    readonly title?: string;
    readonly " $fragmentSpreads": FragmentRefs<"getThumbWithFallbackFragment">;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
  readonly entityList?: {
    readonly count: number;
    readonly empty: boolean;
    readonly " $fragmentSpreads": FragmentRefs<"sharedListItemsTemplateFragment">;
  };
  readonly linksDefinition?: {
    readonly background: LinkListBackground | null | undefined;
    readonly seeAllButtonLabel: string | null | undefined;
    readonly seeAllOrderingIdentifier: any | null | undefined;
    readonly selectionLimit: number | null | undefined;
    readonly selectionMode: LinkListSelectionMode | null | undefined;
    readonly showContributors: boolean | null | undefined;
    readonly showEntityContext: boolean | null | undefined;
    readonly showHeroImage: boolean | null | undefined;
    readonly showNestedEntities: boolean | null | undefined;
    readonly showSeeAllButton: boolean | null | undefined;
    readonly title: string | null | undefined;
    readonly variant: LinkListVariant | null | undefined;
    readonly width: TemplateWidth | null | undefined;
  };
  readonly seeAllOrdering?: {
    readonly count: number;
    readonly name: string | null | undefined;
  } | null | undefined;
  readonly slots?: {
    readonly blockHeader: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
    } | null | undefined;
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

(node as any).hash = "12a912d3de7fe69ff0ac970e6bf1ea56";

export default node;
