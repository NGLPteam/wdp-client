/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityVisibility = "HIDDEN" | "LIMITED" | "VISIBLE" | "%future added value";
export type VolumeHeroFragment = {
    readonly id: string;
    readonly title: string;
    readonly subtitle: string | null;
    readonly summary: string | null;
    readonly visibility: EntityVisibility;
    readonly currentlyHidden: boolean;
    readonly published: {
        readonly value: string | null;
        readonly " $fragmentRefs": FragmentRefs<"PrecisionDateFragment">;
    };
    readonly thumbnail: {
        readonly " $fragmentRefs": FragmentRefs<"CoverImageFragment">;
    };
    readonly journal: {
        readonly " $fragmentRefs": FragmentRefs<"JournalHeroCompactFragment" | "JournalHeroMetadataFragment">;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"DOIFragment">;
    readonly " $refType": "VolumeHeroFragment";
};
export type VolumeHeroFragment$data = VolumeHeroFragment;
export type VolumeHeroFragment$key = {
    readonly " $data"?: VolumeHeroFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"VolumeHeroFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "VolumeHeroFragment",
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
      "alias": null,
      "args": null,
      "concreteType": "ImageAttachment",
      "kind": "LinkedField",
      "name": "thumbnail",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "CoverImageFragment"
        }
      ],
      "storageKey": null
    },
    {
      "alias": "journal",
      "args": [
        {
          "kind": "Literal",
          "name": "schema",
          "value": "nglp:journal"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "ancestorOfType",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "JournalHeroCompactFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "JournalHeroMetadataFragment"
        }
      ],
      "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "DOIFragment"
    }
  ],
  "type": "Collection",
  "abstractKey": null
};
(node as any).hash = '032fe397fb1bb12a01bb9c9dfd8827f3';
export default node;
