/**
 * @generated SignedSource<<a6da118c1aa506bb453304b5a838de1f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
export type EntityVisibility = "HIDDEN" | "LIMITED" | "VISIBLE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type JournalHeroFragment$data = {
  readonly currentlyHidden: boolean;
  readonly heroImage: {
    readonly storage: AttachmentStorage | null;
    readonly " $fragmentSpreads": FragmentRefs<"HeroImageFragment">;
  };
  readonly heroImageMetadata: {
    readonly " $fragmentSpreads": FragmentRefs<"HeroImageMetadataFragment">;
  } | null;
  readonly slug: String;
  readonly subtitle: string | null;
  readonly title: string;
  readonly visibility: EntityVisibility;
  readonly " $fragmentSpreads": FragmentRefs<"DOIFragment" | "JournalHeroMetadataFragment">;
  readonly " $fragmentType": "JournalHeroFragment";
};
export type JournalHeroFragment$key = {
  readonly " $data"?: JournalHeroFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"JournalHeroFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JournalHeroFragment",
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
      "name": "visibility",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "currentlyHidden",
      "storageKey": null
    },
    {
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
          "kind": "ScalarField",
          "name": "storage",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "HeroImageFragment"
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ImageMetadata",
      "kind": "LinkedField",
      "name": "heroImageMetadata",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "HeroImageMetadataFragment"
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "DOIFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "JournalHeroMetadataFragment"
    }
  ],
  "type": "Collection",
  "abstractKey": null
};

(node as any).hash = "39ac9ce0774308a024b5b12ced75f01b";

export default node;
