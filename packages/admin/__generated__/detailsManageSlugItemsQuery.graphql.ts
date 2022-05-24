/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type detailsManageSlugItemsQueryVariables = {
    itemSlug: string;
};
export type detailsManageSlugItemsQueryResponse = {
    readonly item: {
        readonly " $fragmentRefs": FragmentRefs<"ItemLayoutQueryFragment" | "ItemUpdateFormFragment">;
    } | null;
};
export type detailsManageSlugItemsQuery = {
    readonly response: detailsManageSlugItemsQueryResponse;
    readonly variables: detailsManageSlugItemsQueryVariables;
};



/*
query detailsManageSlugItemsQuery(
  $itemSlug: Slug!
) {
  item(slug: $itemSlug) {
    ...ItemLayoutQueryFragment
    ...ItemUpdateFormFragment
    id
  }
}

fragment AssetPropertyFragment on AssetProperty {
  ...ScalarPropertyFragment
}

fragment AssetsPropertyFragment on AssetsProperty {
  ...ScalarPropertyFragment
}

fragment AuthContextFragment on Entity {
  __isEntity: __typename
  allowedActions
}

fragment BooleanPropertyFragment on BooleanProperty {
  ...ScalarPropertyFragment
  checked
  checkedByDefault
}

fragment ContributorPropertyFragment on ContributorProperty {
  ...ScalarPropertyFragment
}

fragment ContributorsPropertyFragment on ContributorsProperty {
  ...ScalarPropertyFragment
}

fragment DatePropertyFragment on DateProperty {
  ...ScalarPropertyFragment
  date
}

fragment EmailPropertyFragment on EmailProperty {
  ...ScalarPropertyFragment
  address
  defaultAddress
}

fragment EntitiesPropertyFragment on EntitiesProperty {
  ...ScalarPropertyFragment
  availableEntities {
    label
    value
    entity {
      __typename
      ...getEntityTitleFragment
      ... on Node {
        __isNode: __typename
        id
      }
    }
  }
}

fragment EntityPropertyFragment on EntityProperty {
  ...ScalarPropertyFragment
  availableEntities {
    label
    value
    entity {
      __typename
      ...getEntityTitleFragment
      ... on Node {
        __isNode: __typename
        id
      }
    }
  }
}

fragment FileUploadFragment on ImageAttachment {
  originalFilename
  storage
  thumb {
    png {
      alt
      url
    }
  }
}

fragment FloatPropertyFragment on FloatProperty {
  ...ScalarPropertyFragment
  floatValue
  defaultFloat
}

fragment FullTextPropertyFragment on FullTextProperty {
  ...ScalarPropertyFragment
  fullText {
    content
    kind
    lang
  }
}

fragment GroupPropertyFragment on GroupProperty {
  legend
  path
  properties {
    __typename
    ...SchemaPropertyFragment
  }
}

fragment IntegerPropertyFragment on IntegerProperty {
  ...ScalarPropertyFragment
  integerValue
  defaultInteger
}

fragment ItemLayoutFragment on Item {
  title
  slug
  id
  ...useBreadcrumbsFragment
  ...useChildRouteLinksFragment
}

fragment ItemLayoutQueryFragment on Item {
  ...ItemLayoutFragment
  ...AuthContextFragment
}

fragment ItemUpdateFormFieldsFragment on Item {
  title
  subtitle
  doi
  issn
  visibility
  summary
  visibleAfterAt
  visibleUntilAt
  thumbnail {
    ...FileUploadFragment
  }
  heroImage {
    ...FileUploadFragment
  }
  published {
    ...VariablePrecisionDateControlFragment
  }
}

fragment ItemUpdateFormFragment on Item {
  itemId: id
  ...ParentSelectorFragment
  context: schemaInstanceContext {
    ...useSchemaContextFragment
  }
  ...ItemUpdateFormFieldsFragment
  ...SchemaFormFieldsFragment
  ...useSchemaPropertiesFragment
}

fragment MarkdownPropertyFragment on MarkdownProperty {
  ...ScalarPropertyFragment
  content
  default
}

fragment MultiselectPropertyFragment on MultiselectProperty {
  ...ScalarPropertyFragment
  options {
    label
    value
  }
}

fragment ParentSelectorFragment on AnyEntity {
  __isAnyEntity: __typename
  ... on Collection {
    __typename
    entityId: id
    parent {
      __typename
      ... on Collection {
        id
        slug
        title
      }
      ... on Community {
        id
        slug
        title
      }
      ... on Node {
        __isNode: __typename
        id
      }
    }
  }
  ... on Item {
    __typename
    entityId: id
    parent {
      __typename
      ... on Collection {
        id
        slug
        title
      }
      ... on Item {
        id
        slug
        title
      }
      ... on Node {
        __isNode: __typename
        id
      }
    }
  }
}

fragment ScalarPropertyFragment on ScalarProperty {
  __isScalarProperty: __typename
  name: fullPath
  label
  path
  required
  type
  isWide
}

fragment SchemaFormFieldsContextFragment on SchemaInstance {
  __isSchemaInstance: __typename
  context: schemaInstanceContext {
    ...useSchemaContextFragment
  }
}

fragment SchemaFormFieldsFragment on SchemaInstance {
  __isSchemaInstance: __typename
  properties: schemaProperties {
    __typename
    ...SchemaInstancePropertyFragment
  }
  ...SchemaSelectorDataFragment
  ...SchemaFormFieldsContextFragment
}

fragment SchemaInstancePropertyFragment on AnySchemaProperty {
  __isAnySchemaProperty: __typename
  __typename
  ... on GroupProperty {
    ...GroupPropertyFragment
  }
  ...SchemaPropertyFragment
}

fragment SchemaPropertyFragment on AnyScalarProperty {
  __isAnyScalarProperty: __typename
  __typename
  ... on AssetProperty {
    ...AssetPropertyFragment
  }
  ... on AssetsProperty {
    ...AssetsPropertyFragment
  }
  ... on BooleanProperty {
    ...BooleanPropertyFragment
  }
  ... on ContributorProperty {
    ...ContributorPropertyFragment
  }
  ... on ContributorsProperty {
    ...ContributorsPropertyFragment
  }
  ... on DateProperty {
    ...DatePropertyFragment
  }
  ... on EmailProperty {
    ...EmailPropertyFragment
  }
  ... on FloatProperty {
    ...FloatPropertyFragment
  }
  ... on IntegerProperty {
    ...IntegerPropertyFragment
  }
  ... on MarkdownProperty {
    ...MarkdownPropertyFragment
  }
  ... on MultiselectProperty {
    ...MultiselectPropertyFragment
  }
  ... on SelectProperty {
    ...SelectPropertyFragment
  }
  ... on StringProperty {
    ...StringPropertyFragment
  }
  ... on TagsProperty {
    ...TagsPropertyFragment
  }
  ... on FullTextProperty {
    ...FullTextPropertyFragment
  }
  ... on URLProperty {
    ...URLPropertyFragment
  }
  ... on VariableDateProperty {
    ...VariableDatePropertyFragment
  }
  ... on EntityProperty {
    ...EntityPropertyFragment
  }
  ... on EntitiesProperty {
    ...EntitiesPropertyFragment
  }
}

fragment SchemaSelectorDataFragment on AnyEntity {
  __isAnyEntity: __typename
  ... on Collection {
    entityId: id
    schemaVersion {
      name
      number
      slug
      id
    }
  }
  ... on Item {
    entityId: id
    schemaVersion {
      name
      number
      slug
      id
    }
  }
  ... on Community {
    entityId: id
    schemaVersion {
      name
      number
      slug
      id
    }
  }
}

fragment SelectPropertyFragment on SelectProperty {
  options {
    label
    value
  }
  ...ScalarPropertyFragment
}

fragment StringPropertyFragment on StringProperty {
  ...ScalarPropertyFragment
  content
  default
}

fragment TagsPropertyFragment on TagsProperty {
  ...ScalarPropertyFragment
  tags
}

fragment URLPropertyFragment on URLProperty {
  ...ScalarPropertyFragment
  url {
    href
    label
    title
  }
}

fragment VariableDatePropertyFragment on VariableDateProperty {
  ...ScalarPropertyFragment
  dateWithPrecision {
    ...VariablePrecisionDateControlFragment
  }
}

fragment VariablePrecisionDateControlFragment on VariablePrecisionDate {
  precision
  value
}

fragment getEntityTitleFragment on Entity {
  __isEntity: __typename
  __typename
  title
  schemaVersion {
    identifier
    id
  }
  ... on Collection {
    namedAncestors {
      ancestor {
        __typename
        ... on Entity {
          __isEntity: __typename
          title
        }
        ... on Node {
          __isNode: __typename
          id
        }
      }
    }
  }
  ... on Item {
    namedAncestors {
      ancestor {
        __typename
        ... on Entity {
          __isEntity: __typename
          title
        }
        ... on Node {
          __isNode: __typename
          id
        }
      }
    }
  }
}

fragment useBreadcrumbsFragment on Entity {
  __isEntity: __typename
  __typename
  title
  breadcrumbs {
    depth
    label
    kind
    slug
    id
  }
  ... on Sluggable {
    __isSluggable: __typename
    slug
  }
}

fragment useChildRouteLinksFragment on Entity {
  __isEntity: __typename
  allowedActions
}

fragment useSchemaContextFragment on SchemaInstanceContext {
  assets {
    kind
    label
    value
  }
  contributors {
    kind
    label
    value
  }
  defaultValues
  entityId
  fieldValues
  schemaVersionSlug
}

fragment useSchemaPropertiesFragment on SchemaInstance {
  __isSchemaInstance: __typename
  properties: schemaProperties {
    __typename
    ... on SchemaProperty {
      __isSchemaProperty: __typename
      fullPath
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "itemSlug"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "itemSlug"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "kind",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "label",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v8 = [
  (v5/*: any*/),
  (v6/*: any*/),
  (v7/*: any*/)
],
v9 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "originalFilename",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "storage",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "ImageSize",
    "kind": "LinkedField",
    "name": "thumb",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ImageDerivative",
        "kind": "LinkedField",
        "name": "png",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "alt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "url",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
],
v10 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "precision",
    "storageKey": null
  },
  (v7/*: any*/)
],
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v12 = {
  "alias": "entityId",
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v13 = [
  (v4/*: any*/),
  (v3/*: any*/),
  (v2/*: any*/)
],
v14 = {
  "kind": "InlineFragment",
  "selections": (v13/*: any*/),
  "type": "Collection",
  "abstractKey": null
},
v15 = {
  "kind": "InlineFragment",
  "selections": [
    (v4/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "path",
  "storageKey": null
},
v17 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": "name",
      "args": null,
      "kind": "ScalarField",
      "name": "fullPath",
      "storageKey": null
    },
    (v6/*: any*/),
    (v16/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "required",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "type",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isWide",
      "storageKey": null
    }
  ],
  "type": "ScalarProperty",
  "abstractKey": "__isScalarProperty"
},
v18 = [
  (v17/*: any*/)
],
v19 = {
  "kind": "InlineFragment",
  "selections": (v18/*: any*/),
  "type": "AssetProperty",
  "abstractKey": null
},
v20 = {
  "kind": "InlineFragment",
  "selections": (v18/*: any*/),
  "type": "AssetsProperty",
  "abstractKey": null
},
v21 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "checked",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "checkedByDefault",
      "storageKey": null
    },
    (v17/*: any*/)
  ],
  "type": "BooleanProperty",
  "abstractKey": null
},
v22 = {
  "kind": "InlineFragment",
  "selections": (v18/*: any*/),
  "type": "ContributorProperty",
  "abstractKey": null
},
v23 = {
  "kind": "InlineFragment",
  "selections": (v18/*: any*/),
  "type": "ContributorsProperty",
  "abstractKey": null
},
v24 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "date",
      "storageKey": null
    },
    (v17/*: any*/)
  ],
  "type": "DateProperty",
  "abstractKey": null
},
v25 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "address",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "defaultAddress",
      "storageKey": null
    },
    (v17/*: any*/)
  ],
  "type": "EmailProperty",
  "abstractKey": null
},
v26 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "floatValue",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "defaultFloat",
      "storageKey": null
    },
    (v17/*: any*/)
  ],
  "type": "FloatProperty",
  "abstractKey": null
},
v27 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "integerValue",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "defaultInteger",
      "storageKey": null
    },
    (v17/*: any*/)
  ],
  "type": "IntegerProperty",
  "abstractKey": null
},
v28 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v29 = [
  (v28/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "default",
    "storageKey": null
  },
  (v17/*: any*/)
],
v30 = {
  "kind": "InlineFragment",
  "selections": (v29/*: any*/),
  "type": "MarkdownProperty",
  "abstractKey": null
},
v31 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "SelectOption",
    "kind": "LinkedField",
    "name": "options",
    "plural": true,
    "selections": [
      (v6/*: any*/),
      (v7/*: any*/)
    ],
    "storageKey": null
  },
  (v17/*: any*/)
],
v32 = {
  "kind": "InlineFragment",
  "selections": (v31/*: any*/),
  "type": "MultiselectProperty",
  "abstractKey": null
},
v33 = {
  "kind": "InlineFragment",
  "selections": (v31/*: any*/),
  "type": "SelectProperty",
  "abstractKey": null
},
v34 = {
  "kind": "InlineFragment",
  "selections": (v29/*: any*/),
  "type": "StringProperty",
  "abstractKey": null
},
v35 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "tags",
      "storageKey": null
    },
    (v17/*: any*/)
  ],
  "type": "TagsProperty",
  "abstractKey": null
},
v36 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "FullText",
      "kind": "LinkedField",
      "name": "fullText",
      "plural": false,
      "selections": [
        (v28/*: any*/),
        (v5/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "lang",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    (v17/*: any*/)
  ],
  "type": "FullTextProperty",
  "abstractKey": null
},
v37 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "URLReference",
      "kind": "LinkedField",
      "name": "url",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "href",
          "storageKey": null
        },
        (v6/*: any*/),
        (v2/*: any*/)
      ],
      "storageKey": null
    },
    (v17/*: any*/)
  ],
  "type": "URLProperty",
  "abstractKey": null
},
v38 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "VariablePrecisionDate",
      "kind": "LinkedField",
      "name": "dateWithPrecision",
      "plural": false,
      "selections": (v10/*: any*/),
      "storageKey": null
    },
    (v17/*: any*/)
  ],
  "type": "VariableDateProperty",
  "abstractKey": null
},
v39 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "NamedAncestor",
    "kind": "LinkedField",
    "name": "namedAncestors",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "ancestor",
        "plural": false,
        "selections": [
          (v11/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/)
            ],
            "type": "Entity",
            "abstractKey": "__isEntity"
          },
          (v15/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
],
v40 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "EntitySelectOption",
    "kind": "LinkedField",
    "name": "availableEntities",
    "plural": true,
    "selections": [
      (v6/*: any*/),
      (v7/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "entity",
        "plural": false,
        "selections": [
          (v11/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "SchemaVersion",
                "kind": "LinkedField",
                "name": "schemaVersion",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "identifier",
                    "storageKey": null
                  },
                  (v4/*: any*/)
                ],
                "storageKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": (v39/*: any*/),
                "type": "Collection",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": (v39/*: any*/),
                "type": "Item",
                "abstractKey": null
              }
            ],
            "type": "Entity",
            "abstractKey": "__isEntity"
          },
          (v15/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  (v17/*: any*/)
],
v41 = {
  "kind": "InlineFragment",
  "selections": (v40/*: any*/),
  "type": "EntityProperty",
  "abstractKey": null
},
v42 = {
  "kind": "InlineFragment",
  "selections": (v40/*: any*/),
  "type": "EntitiesProperty",
  "abstractKey": null
},
v43 = {
  "alias": null,
  "args": null,
  "concreteType": "SchemaVersion",
  "kind": "LinkedField",
  "name": "schemaVersion",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "number",
      "storageKey": null
    },
    (v3/*: any*/),
    (v4/*: any*/)
  ],
  "storageKey": null
},
v44 = [
  (v43/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "detailsManageSlugItemsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ItemLayoutQueryFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ItemUpdateFormFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "detailsManageSlugItemsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": "itemId",
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": "context",
            "args": null,
            "concreteType": "SchemaInstanceContext",
            "kind": "LinkedField",
            "name": "schemaInstanceContext",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "AssetSelectOption",
                "kind": "LinkedField",
                "name": "assets",
                "plural": true,
                "selections": (v8/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "ContributorSelectOption",
                "kind": "LinkedField",
                "name": "contributors",
                "plural": true,
                "selections": (v8/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "defaultValues",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "entityId",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "fieldValues",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "schemaVersionSlug",
                "storageKey": null
              }
            ],
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
            "name": "doi",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "issn",
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
            "name": "summary",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "visibleAfterAt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "visibleUntilAt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ImageAttachment",
            "kind": "LinkedField",
            "name": "thumbnail",
            "plural": false,
            "selections": (v9/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ImageAttachment",
            "kind": "LinkedField",
            "name": "heroImage",
            "plural": false,
            "selections": (v9/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "VariablePrecisionDate",
            "kind": "LinkedField",
            "name": "published",
            "plural": false,
            "selections": (v10/*: any*/),
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              (v11/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "EntityBreadcrumb",
                "kind": "LinkedField",
                "name": "breadcrumbs",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "depth",
                    "storageKey": null
                  },
                  (v6/*: any*/),
                  (v5/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "allowedActions",
                "storageKey": null
              },
              {
                "kind": "TypeDiscriminator",
                "abstractKey": "__isSluggable"
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
                "selections": [
                  (v11/*: any*/),
                  (v12/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "parent",
                    "plural": false,
                    "selections": [
                      (v11/*: any*/),
                      (v14/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": (v13/*: any*/),
                        "type": "Community",
                        "abstractKey": null
                      },
                      (v15/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "type": "Collection",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v11/*: any*/),
                  (v12/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "parent",
                    "plural": false,
                    "selections": [
                      (v11/*: any*/),
                      (v14/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": (v13/*: any*/),
                        "type": "Item",
                        "abstractKey": null
                      },
                      (v15/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "type": "Item",
                "abstractKey": null
              }
            ],
            "type": "AnyEntity",
            "abstractKey": "__isAnyEntity"
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": "properties",
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "schemaProperties",
                "plural": true,
                "selections": [
                  (v11/*: any*/),
                  {
                    "kind": "TypeDiscriminator",
                    "abstractKey": "__isAnySchemaProperty"
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "legend",
                        "storageKey": null
                      },
                      (v16/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "properties",
                        "plural": true,
                        "selections": [
                          (v11/*: any*/),
                          {
                            "kind": "TypeDiscriminator",
                            "abstractKey": "__isAnyScalarProperty"
                          },
                          (v19/*: any*/),
                          (v20/*: any*/),
                          (v21/*: any*/),
                          (v22/*: any*/),
                          (v23/*: any*/),
                          (v24/*: any*/),
                          (v25/*: any*/),
                          (v26/*: any*/),
                          (v27/*: any*/),
                          (v30/*: any*/),
                          (v32/*: any*/),
                          (v33/*: any*/),
                          (v34/*: any*/),
                          (v35/*: any*/),
                          (v36/*: any*/),
                          (v37/*: any*/),
                          (v38/*: any*/),
                          (v41/*: any*/),
                          (v42/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "type": "GroupProperty",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v19/*: any*/),
                      (v20/*: any*/),
                      (v21/*: any*/),
                      (v22/*: any*/),
                      (v23/*: any*/),
                      (v24/*: any*/),
                      (v25/*: any*/),
                      (v26/*: any*/),
                      (v27/*: any*/),
                      (v30/*: any*/),
                      (v32/*: any*/),
                      (v33/*: any*/),
                      (v34/*: any*/),
                      (v35/*: any*/),
                      (v36/*: any*/),
                      (v37/*: any*/),
                      (v38/*: any*/),
                      (v41/*: any*/),
                      (v42/*: any*/)
                    ],
                    "type": "AnyScalarProperty",
                    "abstractKey": "__isAnyScalarProperty"
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "fullPath",
                        "storageKey": null
                      }
                    ],
                    "type": "SchemaProperty",
                    "abstractKey": "__isSchemaProperty"
                  }
                ],
                "storageKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "kind": "InlineFragment",
                    "selections": (v44/*: any*/),
                    "type": "Collection",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": (v44/*: any*/),
                    "type": "Item",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v12/*: any*/),
                      (v43/*: any*/)
                    ],
                    "type": "Community",
                    "abstractKey": null
                  }
                ],
                "type": "AnyEntity",
                "abstractKey": "__isAnyEntity"
              }
            ],
            "type": "SchemaInstance",
            "abstractKey": "__isSchemaInstance"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "dae087934dd5f12bf2a256fbd48ff9ea",
    "id": null,
    "metadata": {},
    "name": "detailsManageSlugItemsQuery",
    "operationKind": "query",
    "text": "query detailsManageSlugItemsQuery(\n  $itemSlug: Slug!\n) {\n  item(slug: $itemSlug) {\n    ...ItemLayoutQueryFragment\n    ...ItemUpdateFormFragment\n    id\n  }\n}\n\nfragment AssetPropertyFragment on AssetProperty {\n  ...ScalarPropertyFragment\n}\n\nfragment AssetsPropertyFragment on AssetsProperty {\n  ...ScalarPropertyFragment\n}\n\nfragment AuthContextFragment on Entity {\n  __isEntity: __typename\n  allowedActions\n}\n\nfragment BooleanPropertyFragment on BooleanProperty {\n  ...ScalarPropertyFragment\n  checked\n  checkedByDefault\n}\n\nfragment ContributorPropertyFragment on ContributorProperty {\n  ...ScalarPropertyFragment\n}\n\nfragment ContributorsPropertyFragment on ContributorsProperty {\n  ...ScalarPropertyFragment\n}\n\nfragment DatePropertyFragment on DateProperty {\n  ...ScalarPropertyFragment\n  date\n}\n\nfragment EmailPropertyFragment on EmailProperty {\n  ...ScalarPropertyFragment\n  address\n  defaultAddress\n}\n\nfragment EntitiesPropertyFragment on EntitiesProperty {\n  ...ScalarPropertyFragment\n  availableEntities {\n    label\n    value\n    entity {\n      __typename\n      ...getEntityTitleFragment\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n}\n\nfragment EntityPropertyFragment on EntityProperty {\n  ...ScalarPropertyFragment\n  availableEntities {\n    label\n    value\n    entity {\n      __typename\n      ...getEntityTitleFragment\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n}\n\nfragment FileUploadFragment on ImageAttachment {\n  originalFilename\n  storage\n  thumb {\n    png {\n      alt\n      url\n    }\n  }\n}\n\nfragment FloatPropertyFragment on FloatProperty {\n  ...ScalarPropertyFragment\n  floatValue\n  defaultFloat\n}\n\nfragment FullTextPropertyFragment on FullTextProperty {\n  ...ScalarPropertyFragment\n  fullText {\n    content\n    kind\n    lang\n  }\n}\n\nfragment GroupPropertyFragment on GroupProperty {\n  legend\n  path\n  properties {\n    __typename\n    ...SchemaPropertyFragment\n  }\n}\n\nfragment IntegerPropertyFragment on IntegerProperty {\n  ...ScalarPropertyFragment\n  integerValue\n  defaultInteger\n}\n\nfragment ItemLayoutFragment on Item {\n  title\n  slug\n  id\n  ...useBreadcrumbsFragment\n  ...useChildRouteLinksFragment\n}\n\nfragment ItemLayoutQueryFragment on Item {\n  ...ItemLayoutFragment\n  ...AuthContextFragment\n}\n\nfragment ItemUpdateFormFieldsFragment on Item {\n  title\n  subtitle\n  doi\n  issn\n  visibility\n  summary\n  visibleAfterAt\n  visibleUntilAt\n  thumbnail {\n    ...FileUploadFragment\n  }\n  heroImage {\n    ...FileUploadFragment\n  }\n  published {\n    ...VariablePrecisionDateControlFragment\n  }\n}\n\nfragment ItemUpdateFormFragment on Item {\n  itemId: id\n  ...ParentSelectorFragment\n  context: schemaInstanceContext {\n    ...useSchemaContextFragment\n  }\n  ...ItemUpdateFormFieldsFragment\n  ...SchemaFormFieldsFragment\n  ...useSchemaPropertiesFragment\n}\n\nfragment MarkdownPropertyFragment on MarkdownProperty {\n  ...ScalarPropertyFragment\n  content\n  default\n}\n\nfragment MultiselectPropertyFragment on MultiselectProperty {\n  ...ScalarPropertyFragment\n  options {\n    label\n    value\n  }\n}\n\nfragment ParentSelectorFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    __typename\n    entityId: id\n    parent {\n      __typename\n      ... on Collection {\n        id\n        slug\n        title\n      }\n      ... on Community {\n        id\n        slug\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n  ... on Item {\n    __typename\n    entityId: id\n    parent {\n      __typename\n      ... on Collection {\n        id\n        slug\n        title\n      }\n      ... on Item {\n        id\n        slug\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n}\n\nfragment ScalarPropertyFragment on ScalarProperty {\n  __isScalarProperty: __typename\n  name: fullPath\n  label\n  path\n  required\n  type\n  isWide\n}\n\nfragment SchemaFormFieldsContextFragment on SchemaInstance {\n  __isSchemaInstance: __typename\n  context: schemaInstanceContext {\n    ...useSchemaContextFragment\n  }\n}\n\nfragment SchemaFormFieldsFragment on SchemaInstance {\n  __isSchemaInstance: __typename\n  properties: schemaProperties {\n    __typename\n    ...SchemaInstancePropertyFragment\n  }\n  ...SchemaSelectorDataFragment\n  ...SchemaFormFieldsContextFragment\n}\n\nfragment SchemaInstancePropertyFragment on AnySchemaProperty {\n  __isAnySchemaProperty: __typename\n  __typename\n  ... on GroupProperty {\n    ...GroupPropertyFragment\n  }\n  ...SchemaPropertyFragment\n}\n\nfragment SchemaPropertyFragment on AnyScalarProperty {\n  __isAnyScalarProperty: __typename\n  __typename\n  ... on AssetProperty {\n    ...AssetPropertyFragment\n  }\n  ... on AssetsProperty {\n    ...AssetsPropertyFragment\n  }\n  ... on BooleanProperty {\n    ...BooleanPropertyFragment\n  }\n  ... on ContributorProperty {\n    ...ContributorPropertyFragment\n  }\n  ... on ContributorsProperty {\n    ...ContributorsPropertyFragment\n  }\n  ... on DateProperty {\n    ...DatePropertyFragment\n  }\n  ... on EmailProperty {\n    ...EmailPropertyFragment\n  }\n  ... on FloatProperty {\n    ...FloatPropertyFragment\n  }\n  ... on IntegerProperty {\n    ...IntegerPropertyFragment\n  }\n  ... on MarkdownProperty {\n    ...MarkdownPropertyFragment\n  }\n  ... on MultiselectProperty {\n    ...MultiselectPropertyFragment\n  }\n  ... on SelectProperty {\n    ...SelectPropertyFragment\n  }\n  ... on StringProperty {\n    ...StringPropertyFragment\n  }\n  ... on TagsProperty {\n    ...TagsPropertyFragment\n  }\n  ... on FullTextProperty {\n    ...FullTextPropertyFragment\n  }\n  ... on URLProperty {\n    ...URLPropertyFragment\n  }\n  ... on VariableDateProperty {\n    ...VariableDatePropertyFragment\n  }\n  ... on EntityProperty {\n    ...EntityPropertyFragment\n  }\n  ... on EntitiesProperty {\n    ...EntitiesPropertyFragment\n  }\n}\n\nfragment SchemaSelectorDataFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    entityId: id\n    schemaVersion {\n      name\n      number\n      slug\n      id\n    }\n  }\n  ... on Item {\n    entityId: id\n    schemaVersion {\n      name\n      number\n      slug\n      id\n    }\n  }\n  ... on Community {\n    entityId: id\n    schemaVersion {\n      name\n      number\n      slug\n      id\n    }\n  }\n}\n\nfragment SelectPropertyFragment on SelectProperty {\n  options {\n    label\n    value\n  }\n  ...ScalarPropertyFragment\n}\n\nfragment StringPropertyFragment on StringProperty {\n  ...ScalarPropertyFragment\n  content\n  default\n}\n\nfragment TagsPropertyFragment on TagsProperty {\n  ...ScalarPropertyFragment\n  tags\n}\n\nfragment URLPropertyFragment on URLProperty {\n  ...ScalarPropertyFragment\n  url {\n    href\n    label\n    title\n  }\n}\n\nfragment VariableDatePropertyFragment on VariableDateProperty {\n  ...ScalarPropertyFragment\n  dateWithPrecision {\n    ...VariablePrecisionDateControlFragment\n  }\n}\n\nfragment VariablePrecisionDateControlFragment on VariablePrecisionDate {\n  precision\n  value\n}\n\nfragment getEntityTitleFragment on Entity {\n  __isEntity: __typename\n  __typename\n  title\n  schemaVersion {\n    identifier\n    id\n  }\n  ... on Collection {\n    namedAncestors {\n      ancestor {\n        __typename\n        ... on Entity {\n          __isEntity: __typename\n          title\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n  ... on Item {\n    namedAncestors {\n      ancestor {\n        __typename\n        ... on Entity {\n          __isEntity: __typename\n          title\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment useBreadcrumbsFragment on Entity {\n  __isEntity: __typename\n  __typename\n  title\n  breadcrumbs {\n    depth\n    label\n    kind\n    slug\n    id\n  }\n  ... on Sluggable {\n    __isSluggable: __typename\n    slug\n  }\n}\n\nfragment useChildRouteLinksFragment on Entity {\n  __isEntity: __typename\n  allowedActions\n}\n\nfragment useSchemaContextFragment on SchemaInstanceContext {\n  assets {\n    kind\n    label\n    value\n  }\n  contributors {\n    kind\n    label\n    value\n  }\n  defaultValues\n  entityId\n  fieldValues\n  schemaVersionSlug\n}\n\nfragment useSchemaPropertiesFragment on SchemaInstance {\n  __isSchemaInstance: __typename\n  properties: schemaProperties {\n    __typename\n    ... on SchemaProperty {\n      __isSchemaProperty: __typename\n      fullPath\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f73a62b56404b40a64a06bd7a287f14b';
export default node;
