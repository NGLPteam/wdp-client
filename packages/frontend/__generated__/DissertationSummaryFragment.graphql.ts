/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
export type DissertationSummaryFragment = {
    readonly id: string;
    readonly title: string;
    readonly subtitle: string | null;
    readonly cover: {
        readonly storage: AttachmentStorage | null;
        readonly " $fragmentRefs": FragmentRefs<"CoverImageFragment">;
    };
    readonly slug: string;
    readonly summary: string | null;
    readonly contributions: {
        readonly " $fragmentRefs": FragmentRefs<"ContributorsListFragment">;
    };
    readonly published: {
        readonly value: string | null;
        readonly " $fragmentRefs": FragmentRefs<"PrecisionDateFragment">;
    };
    readonly issued: {
        readonly dateWithPrecision?: {
            readonly " $fragmentRefs": FragmentRefs<"PrecisionDateFragment">;
        } | null | undefined;
    } | null;
    readonly __typename: "Item";
    readonly " $refType": "DissertationSummaryFragment";
};
export type DissertationSummaryFragment$data = DissertationSummaryFragment;
export type DissertationSummaryFragment$key = {
    readonly " $data"?: DissertationSummaryFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"DissertationSummaryFragment">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "PrecisionDateFragment"
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": false,
      "kind": "LocalArgument",
      "name": "showJournal"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "DissertationSummaryFragment",
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
      "name": "__typename",
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
      "alias": "cover",
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
          "args": null,
          "kind": "FragmentSpread",
          "name": "CoverImageFragment"
        }
      ],
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
      "name": "summary",
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
        (v0/*: any*/)
      ],
      "storageKey": null
    },
    {
      "alias": "issued",
      "args": [
        {
          "kind": "Literal",
          "name": "fullPath",
          "value": "issued"
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
              "concreteType": "VariablePrecisionDate",
              "kind": "LinkedField",
              "name": "dateWithPrecision",
              "plural": false,
              "selections": [
                (v0/*: any*/)
              ],
              "storageKey": null
            }
          ],
          "type": "VariableDateProperty",
          "abstractKey": null
        }
      ],
      "storageKey": "schemaProperty(fullPath:\"issued\")"
    }
  ],
  "type": "Item",
  "abstractKey": null
};
})();
(node as any).hash = 'd57484169cc54650a09eaafcc998d981';
export default node;
