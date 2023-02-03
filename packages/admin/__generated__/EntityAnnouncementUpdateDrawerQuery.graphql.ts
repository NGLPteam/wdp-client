/**
 * @generated SignedSource<<040495e73a580f21a3c0dfe8a2b28364>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntityAnnouncementUpdateDrawerQuery$variables = {
  announcementSlug: String;
  entitySlug: String;
};
export type EntityAnnouncementUpdateDrawerQuery$data = {
  readonly collection: {
    readonly " $fragmentSpreads": FragmentRefs<"EntityAnnouncementDrawerActionsFragment" | "EntityAnnouncementUpdateFormFragment">;
  } | null;
  readonly community: {
    readonly " $fragmentSpreads": FragmentRefs<"EntityAnnouncementDrawerActionsFragment" | "EntityAnnouncementUpdateFormFragment">;
  } | null;
  readonly item: {
    readonly " $fragmentSpreads": FragmentRefs<"EntityAnnouncementDrawerActionsFragment" | "EntityAnnouncementUpdateFormFragment">;
  } | null;
};
export type EntityAnnouncementUpdateDrawerQuery = {
  response: EntityAnnouncementUpdateDrawerQuery$data;
  variables: EntityAnnouncementUpdateDrawerQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "announcementSlug"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "entitySlug"
},
v2 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "entitySlug"
  }
],
v3 = [
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "EntityAnnouncementDrawerActionsFragment"
  },
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "EntityAnnouncementUpdateFormFragment"
  }
],
v4 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "announcementSlug"
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v6 = [
  {
    "alias": null,
    "args": (v4/*: any*/),
    "concreteType": "Announcement",
    "kind": "LinkedField",
    "name": "announcement",
    "plural": false,
    "selections": [
      (v5/*: any*/),
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
        "name": "header",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "publishedOn",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "teaser",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "body",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
],
v7 = [
  {
    "kind": "InlineFragment",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "Announcement",
        "kind": "LinkedField",
        "name": "announcement",
        "plural": false,
        "selections": [
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Entity",
    "abstractKey": "__isEntity"
  },
  {
    "kind": "InlineFragment",
    "selections": [
      {
        "kind": "InlineFragment",
        "selections": (v6/*: any*/),
        "type": "Community",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": (v6/*: any*/),
        "type": "Collection",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": (v6/*: any*/),
        "type": "Item",
        "abstractKey": null
      }
    ],
    "type": "AnyEntity",
    "abstractKey": "__isAnyEntity"
  },
  (v5/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "EntityAnnouncementUpdateDrawerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": (v3/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": (v3/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": (v3/*: any*/),
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "EntityAnnouncementUpdateDrawerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": (v7/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": (v7/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": (v7/*: any*/),
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "cbecdb3cd32db23c0a7511f17eefcd90",
    "id": null,
    "metadata": {},
    "name": "EntityAnnouncementUpdateDrawerQuery",
    "operationKind": "query",
    "text": "query EntityAnnouncementUpdateDrawerQuery(\n  $entitySlug: Slug!\n  $announcementSlug: Slug!\n) {\n  item(slug: $entitySlug) {\n    ...EntityAnnouncementDrawerActionsFragment\n    ...EntityAnnouncementUpdateFormFragment\n    id\n  }\n  collection(slug: $entitySlug) {\n    ...EntityAnnouncementDrawerActionsFragment\n    ...EntityAnnouncementUpdateFormFragment\n    id\n  }\n  community(slug: $entitySlug) {\n    ...EntityAnnouncementDrawerActionsFragment\n    ...EntityAnnouncementUpdateFormFragment\n    id\n  }\n}\n\nfragment EntityAnnouncementDrawerActionsFragment on Entity {\n  __isEntity: __typename\n  announcement(slug: $announcementSlug) {\n    id\n  }\n}\n\nfragment EntityAnnouncementUpdateFormFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Community {\n    announcement(slug: $announcementSlug) {\n      id\n      slug\n      header\n      publishedOn\n      teaser\n      body\n    }\n  }\n  ... on Collection {\n    announcement(slug: $announcementSlug) {\n      id\n      slug\n      header\n      publishedOn\n      teaser\n      body\n    }\n  }\n  ... on Item {\n    announcement(slug: $announcementSlug) {\n      id\n      slug\n      header\n      publishedOn\n      teaser\n      body\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "2e8774c3f55294d57146f0bf0cc0a703";

export default node;
