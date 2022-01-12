/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityAnnouncementUpdateDrawerQueryVariables = {
    entitySlug: string;
    announcementSlug: string;
};
export type EntityAnnouncementUpdateDrawerQueryResponse = {
    readonly item: {
        readonly " $fragmentRefs": FragmentRefs<"EntityAnnouncementUpdateFormFragment">;
    } | null;
    readonly collection: {
        readonly " $fragmentRefs": FragmentRefs<"EntityAnnouncementUpdateFormFragment">;
    } | null;
    readonly community: {
        readonly " $fragmentRefs": FragmentRefs<"EntityAnnouncementUpdateFormFragment">;
    } | null;
};
export type EntityAnnouncementUpdateDrawerQuery = {
    readonly response: EntityAnnouncementUpdateDrawerQueryResponse;
    readonly variables: EntityAnnouncementUpdateDrawerQueryVariables;
};



/*
query EntityAnnouncementUpdateDrawerQuery(
  $entitySlug: Slug!
  $announcementSlug: Slug!
) {
  item(slug: $entitySlug) {
    ...EntityAnnouncementUpdateFormFragment
    id
  }
  collection(slug: $entitySlug) {
    ...EntityAnnouncementUpdateFormFragment
    id
  }
  community(slug: $entitySlug) {
    ...EntityAnnouncementUpdateFormFragment
    id
  }
}

fragment EntityAnnouncementUpdateFormFragment on AnyEntity {
  __isAnyEntity: __typename
  ... on Community {
    announcement(slug: $announcementSlug) {
      id
      slug
      header
      publishedOn
      teaser
      body
    }
  }
  ... on Collection {
    announcement(slug: $announcementSlug) {
      id
      slug
      header
      publishedOn
      teaser
      body
    }
  }
  ... on Item {
    announcement(slug: $announcementSlug) {
      id
      slug
      header
      publishedOn
      teaser
      body
    }
  }
}
*/

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
    "name": "EntityAnnouncementUpdateFormFragment"
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "slug",
        "variableName": "announcementSlug"
      }
    ],
    "concreteType": "Announcement",
    "kind": "LinkedField",
    "name": "announcement",
    "plural": false,
    "selections": [
      (v4/*: any*/),
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
v6 = [
  (v4/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": [
      {
        "kind": "InlineFragment",
        "selections": (v5/*: any*/),
        "type": "Community",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": (v5/*: any*/),
        "type": "Collection",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": (v5/*: any*/),
        "type": "Item",
        "abstractKey": null
      }
    ],
    "type": "AnyEntity",
    "abstractKey": "__isAnyEntity"
  }
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
        "selections": (v6/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": (v6/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": (v6/*: any*/),
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "72e663d3bf1f67139c65f2d5b8a2dd89",
    "id": null,
    "metadata": {},
    "name": "EntityAnnouncementUpdateDrawerQuery",
    "operationKind": "query",
    "text": "query EntityAnnouncementUpdateDrawerQuery(\n  $entitySlug: Slug!\n  $announcementSlug: Slug!\n) {\n  item(slug: $entitySlug) {\n    ...EntityAnnouncementUpdateFormFragment\n    id\n  }\n  collection(slug: $entitySlug) {\n    ...EntityAnnouncementUpdateFormFragment\n    id\n  }\n  community(slug: $entitySlug) {\n    ...EntityAnnouncementUpdateFormFragment\n    id\n  }\n}\n\nfragment EntityAnnouncementUpdateFormFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Community {\n    announcement(slug: $announcementSlug) {\n      id\n      slug\n      header\n      publishedOn\n      teaser\n      body\n    }\n  }\n  ... on Collection {\n    announcement(slug: $announcementSlug) {\n      id\n      slug\n      header\n      publishedOn\n      teaser\n      body\n    }\n  }\n  ... on Item {\n    announcement(slug: $announcementSlug) {\n      id\n      slug\n      header\n      publishedOn\n      teaser\n      body\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '1508acfed6c5d74c1d0495160fb7138d';
export default node;
