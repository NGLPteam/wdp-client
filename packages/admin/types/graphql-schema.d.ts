import type { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** An ISO 8601-encoded date */
  ISO8601Date: string;
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: string;
  /** Represents untyped JSON */
  JSON: any;
  /** A slug that can identify a record in context */
  Slug: string;
  /** An upload ID is used to refer to an upload within the tus infrastructure outside of the GraphQL API */
  UploadID: string;
  /** A semantic version requirement */
  VersionRequirement: string;
};

/** A scoped access control list for a specific point in the hierarchy */
export type AccessControlList = ExposesPermissions & {
  __typename?: 'AccessControlList';
  /** A list of allowed actions for the given user on this entity (and its descendants). */
  allowedActions: Array<Scalars['String']>;
  /** Permissions that will be applied on the attached entity's subcollections. */
  collections: EntityPermissionGrid;
  /** Permissions that will be applied on the attached entity's subitems. */
  items: EntityPermissionGrid;
  /** An array of hashes that can be requested to load in a context */
  permissions: Array<PermissionGrant>;
  /**
   * A `self` grid applies to whatever entity this scoped ACL is applied to.
   *
   * Its children will inherit other permissions based
   * on `collections` and `items` respectively.
   */
  self: EntityPermissionGrid;
};

/**
 * An access grant is a combination of an Entity, a Role, and a Subject. It determines permissions for
 * said subject at the specific point in the hierarchy, and any child entities will inherit that role
 * as its accessControlList defines.
 */
export type AccessGrant = {
  /** The polymorphic entity to which access has been granted */
  entity: AnyEntity;
  /** The role the subject has been assigned */
  role: Role;
  /** The polymorphic subject that has been granted access */
  subject: AccessGrantSubject;
};

/** Filters a set of access grants by what type of entity they've granted access to */
export type AccessGrantEntityFilter =
  /** All entity types */
  | 'ALL'
  /** Communities only */
  | 'COMMUNITY'
  /** Collections only */
  | 'COLLECTION'
  /** Items only */
  | 'ITEM'
  | '%future added value';

/**
 * An access grant subject is a person or group to which access for a specific entity
 * (and all its children) has been granted.
 */
export type AccessGrantSubject = {
  /** A polymorphic connection for access grants from a subject */
  allAccessGrants: AnyAccessGrantConnection;
  /**
   * The roles this user has access to assign based on their `primaryRole`,
   * outside of any hierarchical context.
   *
   * When actually assigning roles for an entity, you should use `Entity.assignableRoles`,
   * because it will ensure that the user sufficient permissions at that level.
   */
  assignableRoles: Array<Role>;
  /** The primary role associated with this subject. */
  primaryRole?: Maybe<Role>;
};


/**
 * An access grant subject is a person or group to which access for a specific entity
 * (and all its children) has been granted.
 */
export type AccessGrantSubjectAllAccessGrantsArgs = {
  entity?: Maybe<AccessGrantEntityFilter>;
  order?: Maybe<SimpleOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};

/** Filters a set of access grants by what type of subject they've granted access to */
export type AccessGrantSubjectFilter =
  /** All subject types */
  | 'ALL'
  /** An individual user */
  | 'USER'
  /** A group of users. Not currently exposed */
  | 'GROUP'
  | '%future added value';

/** An accessible entity can be granted access directly */
export type Accessible = {
  /** A polymorphic connection for access grants from an entity */
  allAccessGrants: AnyAccessGrantConnection;
};


/** An accessible entity can be granted access directly */
export type AccessibleAllAccessGrantsArgs = {
  subject?: Maybe<AccessGrantSubjectFilter>;
  order?: Maybe<SimpleOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};

/** Autogenerated input type of AlterSchemaVersion */
export type AlterSchemaVersionInput = {
  /** The entity that owns the attachment */
  entityId: Scalars['ID'];
  /** The slug for the new schema to apply */
  schemaVersionSlug: Scalars['String'];
  /**
   * An arbitrary set of property values. Owing to the dynamic nature, they do not have a specific GraphQL input type
   * associated with them. Validation will be performed within the application and returned as errors if not valid.
   */
  propertyValues: Scalars['JSON'];
  /**
   * This argument dictates how the mutation should handle received property values.
   * If set to `SKIP`, it will alter the schema version without setting any new properties.
   */
  strategy?: Maybe<PropertyApplicationStrategy>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of AlterSchemaVersion */
export type AlterSchemaVersionPayload = StandardMutationPayload & {
  __typename?: 'AlterSchemaVersionPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  collection?: Maybe<Collection>;
  community?: Maybe<Community>;
  entity?: Maybe<AnyEntity>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']>;
  item?: Maybe<Item>;
  schemaErrors: Array<SchemaValueError>;
};

/**
 * The boolean result of evaluating the left and right predicates. Both must be true.
 *
 * While this is implemented, it is not likely that the first version of the search
 * UI will utilize it. It is intended for advanced searching.
 */
export type AndOperatorInput = {
  left: SearchPredicateInput;
  right: SearchPredicateInput;
};

/**
 * An announcement tied to an entity. These are configured through the backend and can be used
 * to provide time-sensensitive information and news about a specific entity in the system.
 */
export type Announcement = Node & Sluggable & {
  __typename?: 'Announcement';
  /** A body for the announcement */
  body: Scalars['String'];
  createdAt: Scalars['ISO8601DateTime'];
  /** The entity that owns the announcement */
  entity: AnyEntity;
  /** A header value for the announcement */
  header: Scalars['String'];
  id: Scalars['ID'];
  /** The date of the announcement. */
  publishedOn: Scalars['ISO8601Date'];
  slug: Scalars['Slug'];
  /** A teaser for the announcement */
  teaser: Scalars['String'];
  updatedAt: Scalars['ISO8601DateTime'];
};

/** The connection type for Announcement. */
export type AnnouncementConnection = Paginated & {
  __typename?: 'AnnouncementConnection';
  /** A list of edges. */
  edges: Array<AnnouncementEdge>;
  /** A list of nodes. */
  nodes: Array<Announcement>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AnnouncementEdge = {
  __typename?: 'AnnouncementEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Announcement;
};

/** Order a list of announcements by publication date. */
export type AnnouncementOrder =
  /** Order announcements by most recently published */
  | 'RECENT'
  /** Order announcements by least recently published */
  | 'OLDEST'
  | '%future added value';

/** Encompasses *all* possible access grant types */
export type AnyAccessGrant = UserCollectionAccessGrant | UserCommunityAccessGrant | UserGroupCollectionAccessGrant | UserGroupCommunityAccessGrant | UserGroupItemAccessGrant | UserItemAccessGrant | { __typename?: "%other" };

/** The connection type for AnyAccessGrant. */
export type AnyAccessGrantConnection = Paginated & {
  __typename?: 'AnyAccessGrantConnection';
  /** A list of edges. */
  edges: Array<AnyAccessGrantEdge>;
  /** A list of nodes. */
  nodes: Array<AnyAccessGrant>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AnyAccessGrantEdge = {
  __typename?: 'AnyAccessGrantEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: AnyAccessGrant;
};

export type AnyAsset = AssetAudio | AssetDocument | AssetImage | AssetPdf | AssetUnknown | AssetVideo | { __typename?: "%other" };

/** The connection type for AnyAsset. */
export type AnyAssetConnection = Paginated & {
  __typename?: 'AnyAssetConnection';
  /** A list of edges. */
  edges: Array<AnyAssetEdge>;
  /** A list of nodes. */
  nodes: Array<AnyAsset>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AnyAssetEdge = {
  __typename?: 'AnyAssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: AnyAsset;
};

/** Something that can be attached to */
export type AnyAttachable = Collection | Community | Item | { __typename?: "%other" };

/** Any entity that can have a parent. */
export type AnyChildEntity = Collection | Item | { __typename?: "%other" };

export type AnyCollectionAccessGrant = UserCollectionAccessGrant | UserGroupCollectionAccessGrant | { __typename?: "%other" };

/** The connection type for AnyCollectionAccessGrant. */
export type AnyCollectionAccessGrantConnection = Paginated & {
  __typename?: 'AnyCollectionAccessGrantConnection';
  /** A list of edges. */
  edges: Array<AnyCollectionAccessGrantEdge>;
  /** A list of nodes. */
  nodes: Array<AnyCollectionAccessGrant>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AnyCollectionAccessGrantEdge = {
  __typename?: 'AnyCollectionAccessGrantEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: AnyCollectionAccessGrant;
};

export type AnyCommunityAccessGrant = UserCommunityAccessGrant | UserGroupCommunityAccessGrant | { __typename?: "%other" };

/** The connection type for AnyCommunityAccessGrant. */
export type AnyCommunityAccessGrantConnection = Paginated & {
  __typename?: 'AnyCommunityAccessGrantConnection';
  /** A list of edges. */
  edges: Array<AnyCommunityAccessGrantEdge>;
  /** A list of nodes. */
  nodes: Array<AnyCommunityAccessGrant>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AnyCommunityAccessGrantEdge = {
  __typename?: 'AnyCommunityAccessGrantEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: AnyCommunityAccessGrant;
};

/** A union of possible contribution types */
export type AnyContribution = CollectionContribution | ItemContribution | { __typename?: "%other" };

export type AnyContributor = OrganizationContributor | PersonContributor | { __typename?: "%other" };

/** The connection type for AnyContributor. */
export type AnyContributorConnection = Paginated & {
  __typename?: 'AnyContributorConnection';
  /** A list of edges. */
  edges: Array<AnyContributorEdge>;
  /** A list of nodes. */
  nodes: Array<AnyContributor>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AnyContributorEdge = {
  __typename?: 'AnyContributorEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: AnyContributor;
};

/** A hierarchical entity type */
export type AnyEntity = Collection | Community | Item | { __typename?: "%other" };

/** Used by a LinkTargetCandidate, this describes any type of model that can act as a target for an EntityLink */
export type AnyLinkTarget = Collection | Item | { __typename?: "%other" };

/** The various types an OrderingEntry can refer to */
export type AnyOrderingEntry = Collection | Community | EntityLink | Item | { __typename?: "%other" };

/** All types in this union implement OrderingPath. */
export type AnyOrderingPath = SchemaOrderingPath | StaticOrderingPath | { __typename?: "%other" };

/**
 * `AnyScalarProperty` represents a collection of known *scalar* properties. In effect,
 * it includes every possible schema property type except for groups (`GroupProperty`).
 *
 * This union is intended to iterate the properties within a group. To iterate over the
 * properties in a `SchemaInstance`, you should use `AnySchemaPropertyType` to ensure that
 * you are also seeing groups.
 *
 * Any object contained within this union is guaranteed to implement `ScalarProperty`
 * as well as `SchemaProperty`.
 */
export type AnyScalarProperty = AssetProperty | AssetsProperty | BooleanProperty | ContributorProperty | ContributorsProperty | DateProperty | EmailProperty | EntitiesProperty | EntityProperty | FloatProperty | FullTextProperty | IntegerProperty | MarkdownProperty | MultiselectProperty | SelectProperty | StringProperty | TagsProperty | TimestampProperty | UrlProperty | UnknownProperty | VariableDateProperty | { __typename?: "%other" };

/**
 * `AnySchemaProperty` represents the top level of a schema instance's properties. It can include any scalar property, as
 * well as any `GroupProperty` that the instance might have. To query only scalar properties, see `AnyScalarProperty`.
 *
 * All properties contained in this union are guaranteed to implement `SchemaProperty`.
 */
export type AnySchemaProperty = AssetProperty | AssetsProperty | BooleanProperty | ContributorProperty | ContributorsProperty | DateProperty | EmailProperty | EntitiesProperty | EntityProperty | FloatProperty | FullTextProperty | GroupProperty | IntegerProperty | MarkdownProperty | MultiselectProperty | SelectProperty | StringProperty | TagsProperty | TimestampProperty | UrlProperty | UnknownProperty | VariableDateProperty | { __typename?: "%other" };

/**
 * `AnySearchableProperty` represents a property that can be searched on.
 *
 * Any property underneath this can be assured to implement `SearchableProperty`.
 */
export type AnySearchableProperty = BooleanProperty | DateProperty | FloatProperty | FullTextProperty | IntegerProperty | MarkdownProperty | MultiselectProperty | SelectProperty | StringProperty | TimestampProperty | VariableDateProperty | { __typename?: "%other" };

/** Encompasses any access grant for a specific user. */
export type AnyUserAccessGrant = UserCollectionAccessGrant | UserCommunityAccessGrant | UserItemAccessGrant | { __typename?: "%other" };

/** The connection type for AnyUserAccessGrant. */
export type AnyUserAccessGrantConnection = Paginated & {
  __typename?: 'AnyUserAccessGrantConnection';
  /** A list of edges. */
  edges: Array<AnyUserAccessGrantEdge>;
  /** A list of nodes. */
  nodes: Array<AnyUserAccessGrant>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AnyUserAccessGrantEdge = {
  __typename?: 'AnyUserAccessGrantEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: AnyUserAccessGrant;
};

/** Encompasses any access grant for a group of users. Not currently exposed. */
export type AnyUserGroupAccessGrant = UserGroupCollectionAccessGrant | UserGroupCommunityAccessGrant | UserGroupItemAccessGrant | { __typename?: "%other" };

/** The connection type for AnyUserGroupAccessGrant. */
export type AnyUserGroupAccessGrantConnection = Paginated & {
  __typename?: 'AnyUserGroupAccessGrantConnection';
  /** A list of edges. */
  edges: Array<AnyUserGroupAccessGrantEdge>;
  /** A list of nodes. */
  nodes: Array<AnyUserGroupAccessGrant>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AnyUserGroupAccessGrantEdge = {
  __typename?: 'AnyUserGroupAccessGrantEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: AnyUserGroupAccessGrant;
};

/** Autogenerated input type of ApplySchemaProperties */
export type ApplySchemaPropertiesInput = {
  /** The entity that owns the attachment */
  entityId: Scalars['ID'];
  /**
   * An arbitrary set of property values. Owing to the dynamic nature, they do not have a specific GraphQL input type
   * associated with them. Validation will be performed within the application and returned as errors if not valid.
   */
  propertyValues: Scalars['JSON'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of ApplySchemaProperties */
export type ApplySchemaPropertiesPayload = StandardMutationPayload & {
  __typename?: 'ApplySchemaPropertiesPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  collection?: Maybe<Collection>;
  community?: Maybe<Community>;
  entity?: Maybe<AnyEntity>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']>;
  item?: Maybe<Item>;
  schemaErrors: Array<SchemaValueError>;
};

/** A generic asset type, implemented by all the more specific kinds */
export type Asset = {
  altText?: Maybe<Scalars['String']>;
  attachable: AnyAttachable;
  caption?: Maybe<Scalars['String']>;
  contentType: Scalars['String'];
  downloadUrl?: Maybe<Scalars['String']>;
  fileSize: Scalars['Int'];
  /** ID of the object. */
  id: Scalars['ID'];
  kind: AssetKind;
  name: Scalars['String'];
  preview: ImageAttachment;
  /** Configurable metadata for the preview attachment */
  previewMetadata?: Maybe<ImageMetadata>;
  slug: Scalars['Slug'];
};

export type AssetAudio = Asset & Node & Sluggable & {
  __typename?: 'AssetAudio';
  altText?: Maybe<Scalars['String']>;
  attachable: AnyAttachable;
  caption?: Maybe<Scalars['String']>;
  contentType: Scalars['String'];
  createdAt: Scalars['ISO8601DateTime'];
  downloadUrl?: Maybe<Scalars['String']>;
  fileSize: Scalars['Int'];
  /** ID of the object. */
  id: Scalars['ID'];
  kind: AssetKind;
  name: Scalars['String'];
  preview: ImageAttachment;
  /** Configurable metadata for the preview attachment */
  previewMetadata?: Maybe<ImageMetadata>;
  slug: Scalars['Slug'];
  updatedAt: Scalars['ISO8601DateTime'];
};

export type AssetDocument = Asset & Node & Sluggable & {
  __typename?: 'AssetDocument';
  altText?: Maybe<Scalars['String']>;
  attachable: AnyAttachable;
  caption?: Maybe<Scalars['String']>;
  contentType: Scalars['String'];
  createdAt: Scalars['ISO8601DateTime'];
  downloadUrl?: Maybe<Scalars['String']>;
  fileSize: Scalars['Int'];
  /** ID of the object. */
  id: Scalars['ID'];
  kind: AssetKind;
  name: Scalars['String'];
  preview: ImageAttachment;
  /** Configurable metadata for the preview attachment */
  previewMetadata?: Maybe<ImageMetadata>;
  slug: Scalars['Slug'];
  updatedAt: Scalars['ISO8601DateTime'];
};

export type AssetImage = Asset & Node & Sluggable & {
  __typename?: 'AssetImage';
  altText?: Maybe<Scalars['String']>;
  attachable: AnyAttachable;
  caption?: Maybe<Scalars['String']>;
  contentType: Scalars['String'];
  createdAt: Scalars['ISO8601DateTime'];
  downloadUrl?: Maybe<Scalars['String']>;
  fileSize: Scalars['Int'];
  /** ID of the object. */
  id: Scalars['ID'];
  kind: AssetKind;
  name: Scalars['String'];
  preview: ImageAttachment;
  /** Configurable metadata for the preview attachment */
  previewMetadata?: Maybe<ImageMetadata>;
  slug: Scalars['Slug'];
  updatedAt: Scalars['ISO8601DateTime'];
};

/** The supported kinds of assets in the system */
export type AssetKind =
  | 'image'
  | 'video'
  | 'audio'
  | 'pdf'
  | 'document'
  | 'unknown'
  | '%future added value';

/** The type(s) of assets to retrieve */
export type AssetKindFilter =
  | 'ALL'
  /** An image, video, or audio file */
  | 'MEDIA'
  | 'AUDIO'
  | 'IMAGE'
  | 'VIDEO'
  | 'PDF'
  | 'DOCUMENT'
  | 'UNKNOWN'
  | '%future added value';

export type AssetPdf = Asset & Node & Sluggable & {
  __typename?: 'AssetPDF';
  altText?: Maybe<Scalars['String']>;
  attachable: AnyAttachable;
  caption?: Maybe<Scalars['String']>;
  contentType: Scalars['String'];
  createdAt: Scalars['ISO8601DateTime'];
  downloadUrl?: Maybe<Scalars['String']>;
  fileSize: Scalars['Int'];
  /** ID of the object. */
  id: Scalars['ID'];
  kind: AssetKind;
  name: Scalars['String'];
  preview: ImageAttachment;
  /** Configurable metadata for the preview attachment */
  previewMetadata?: Maybe<ImageMetadata>;
  slug: Scalars['Slug'];
  updatedAt: Scalars['ISO8601DateTime'];
};

/** A grid of permissions for creating, retrieving, updating, and deleting an `Asset` */
export type AssetPermissionGrid = ExposesPermissions & PermissionGrid & CrudPermissionGrid & {
  __typename?: 'AssetPermissionGrid';
  /** A list of allowed actions for the given user on this entity (and its descendants). */
  allowedActions: Array<Scalars['String']>;
  create: Scalars['Boolean'];
  delete: Scalars['Boolean'];
  /** An array of hashes that can be requested to load in a context */
  permissions: Array<PermissionGrant>;
  read: Scalars['Boolean'];
  update: Scalars['Boolean'];
};

export type AssetProperty = SchemaProperty & ScalarProperty & {
  __typename?: 'AssetProperty';
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   */
  array: Scalars['Boolean'];
  asset?: Maybe<AnyAsset>;
  /**
   * A human-readable description for the property. It should describe the purpose of the
   * property as well as some details about the types of values it looks for.
   *
   * It can be rendered as help text, hints, etc.
   */
  description?: Maybe<Scalars['String']>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   */
  fullPath: Scalars['String'];
  /** The purpose or intent of this property relative to its entity, parents, and others. */
  function: SchemaPropertyFunction;
  /**
   * Whether to render a field as "wide" (two columns) in the form.
   * This is intended to help structure forms logically, as well as
   * provide ample space for certain types of data input, particularly
   * full-text, markdown, and other such complex fields.
   */
  isWide: Scalars['Boolean'];
  /** Provided for introspection. This describes the underlying structure of the data type. */
  kind: SchemaPropertyKind;
  /** A human-readable label for the schema property. */
  label: Scalars['String'];
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   */
  orderable: Scalars['Boolean'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   */
  path: Scalars['String'];
  /**
   * Whether or not this property is required in order for the schema instance
   * to be considered valid.
   *
   * Note: invalid data provided to a schema property will still invalidate
   * the instance as a whole???the required trait only determines whether a value
   * **must** be set.
   */
  required: Scalars['Boolean'];
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   */
  type: SchemaPropertyType;
};

/** A select option for a single asset */
export type AssetSelectOption = {
  __typename?: 'AssetSelectOption';
  kind: AssetKind;
  label: Scalars['String'];
  value: Scalars['String'];
};

export type AssetUnknown = Asset & Node & Sluggable & {
  __typename?: 'AssetUnknown';
  altText?: Maybe<Scalars['String']>;
  attachable: AnyAttachable;
  caption?: Maybe<Scalars['String']>;
  contentType: Scalars['String'];
  createdAt: Scalars['ISO8601DateTime'];
  downloadUrl?: Maybe<Scalars['String']>;
  fileSize: Scalars['Int'];
  /** ID of the object. */
  id: Scalars['ID'];
  kind: AssetKind;
  name: Scalars['String'];
  preview: ImageAttachment;
  /** Configurable metadata for the preview attachment */
  previewMetadata?: Maybe<ImageMetadata>;
  slug: Scalars['Slug'];
  updatedAt: Scalars['ISO8601DateTime'];
};

export type AssetVideo = Asset & Node & Sluggable & {
  __typename?: 'AssetVideo';
  altText?: Maybe<Scalars['String']>;
  attachable: AnyAttachable;
  caption?: Maybe<Scalars['String']>;
  contentType: Scalars['String'];
  createdAt: Scalars['ISO8601DateTime'];
  downloadUrl?: Maybe<Scalars['String']>;
  fileSize: Scalars['Int'];
  /** ID of the object. */
  id: Scalars['ID'];
  kind: AssetKind;
  name: Scalars['String'];
  preview: ImageAttachment;
  /** Configurable metadata for the preview attachment */
  previewMetadata?: Maybe<ImageMetadata>;
  slug: Scalars['Slug'];
  updatedAt: Scalars['ISO8601DateTime'];
};

export type AssetsProperty = SchemaProperty & ScalarProperty & {
  __typename?: 'AssetsProperty';
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   */
  array: Scalars['Boolean'];
  assets: Array<AnyAsset>;
  /**
   * A human-readable description for the property. It should describe the purpose of the
   * property as well as some details about the types of values it looks for.
   *
   * It can be rendered as help text, hints, etc.
   */
  description?: Maybe<Scalars['String']>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   */
  fullPath: Scalars['String'];
  /** The purpose or intent of this property relative to its entity, parents, and others. */
  function: SchemaPropertyFunction;
  /**
   * Whether to render a field as "wide" (two columns) in the form.
   * This is intended to help structure forms logically, as well as
   * provide ample space for certain types of data input, particularly
   * full-text, markdown, and other such complex fields.
   */
  isWide: Scalars['Boolean'];
  /** Provided for introspection. This describes the underlying structure of the data type. */
  kind: SchemaPropertyKind;
  /** A human-readable label for the schema property. */
  label: Scalars['String'];
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   */
  orderable: Scalars['Boolean'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   */
  path: Scalars['String'];
  /**
   * Whether or not this property is required in order for the schema instance
   * to be considered valid.
   *
   * Note: invalid data provided to a schema property will still invalidate
   * the instance as a whole???the required trait only determines whether a value
   * **must** be set.
   */
  required: Scalars['Boolean'];
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   */
  type: SchemaPropertyType;
};

/** A model that has attached assets */
export type Attachable = {
  /** Assets owned by this entity */
  assets: AnyAssetConnection;
};


/** A model that has attached assets */
export type AttachableAssetsArgs = {
  order?: Maybe<SimpleOrder>;
  kind?: Maybe<AssetKindFilter>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};

/** This describes where a given file attachment is stored (if at all) */
export type AttachmentStorage =
  /** STORE refers to permanent storage. An asset here has been fully processed and is ready for access */
  | 'STORE'
  /**
   * CACHE refers to temporary storage. When a file is first uploaded to the system, it lives in cache and needs to be processed.
   * A user could potentially fetch something from an API while a file is still being processed in the background, and if so, none
   * of its derivatives will be present yet.
   */
  | 'CACHE'
  /** Not yet used */
  | 'DERIVATIVES'
  /** Remote URL storage. Only used internally at present, but may sometimes appear during certain harvesting events. */
  | 'REMOTE'
  | '%future added value';

export type BooleanProperty = SchemaProperty & ScalarProperty & SearchableProperty & {
  __typename?: 'BooleanProperty';
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   */
  array: Scalars['Boolean'];
  checked?: Maybe<Scalars['Boolean']>;
  checkedByDefault?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   */
  fullPath: Scalars['String'];
  /** The purpose or intent of this property relative to its entity, parents, and others. */
  function: SchemaPropertyFunction;
  /**
   * Whether to render a field as "wide" (two columns) in the form.
   * This is intended to help structure forms logically, as well as
   * provide ample space for certain types of data input, particularly
   * full-text, markdown, and other such complex fields.
   */
  isWide: Scalars['Boolean'];
  /** Provided for introspection. This describes the underlying structure of the data type. */
  kind: SchemaPropertyKind;
  label: Scalars['String'];
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   */
  orderable: Scalars['Boolean'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   */
  path: Scalars['String'];
  /**
   * Whether or not this property is required in order for the schema instance
   * to be considered valid.
   *
   * Note: invalid data provided to a schema property will still invalidate
   * the instance as a whole???the required trait only determines whether a value
   * **must** be set.
   */
  required: Scalars['Boolean'];
  searchOperators: Array<SearchOperator>;
  searchPath: Scalars['String'];
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   */
  type: SchemaPropertyType;
};

/** A grid of permissions for creating, retrieving, updating, and deleting a model */
export type CrudPermissionGrid = {
  /** A list of allowed actions for the given user on this entity (and its descendants). */
  allowedActions: Array<Scalars['String']>;
  create: Scalars['Boolean'];
  delete: Scalars['Boolean'];
  /** An array of hashes that can be requested to load in a context */
  permissions: Array<PermissionGrant>;
  read: Scalars['Boolean'];
  update: Scalars['Boolean'];
};

/**
 * An interface for entities that can contain actual content, as well as any number of themselves
 * in a tree structure.
 *
 * In practice, this means a `Collection` or an `Item`, not a `Community`.
 */
export type ChildEntity = {
  /** Derived access control list */
  accessControlList?: Maybe<AccessControlList>;
  /** A polymorphic connection for access grants from an entity */
  allAccessGrants: AnyAccessGrantConnection;
  /** A list of allowed actions for the given user on this entity (and its descendants). */
  allowedActions: Array<Scalars['String']>;
  /**
   * Directly fetch a defined named ancestor by its name. It can be null,
   * either because an invalid name was provided, the schema hierarchy is
   * incomplete, or the association itself is optional.
   */
  ancestorByName?: Maybe<AnyEntity>;
  /**
   * Look up an ancestor for this entity that implements a specific type. It ascends from this entity,
   * so it will first check the parent, then the grandparent, and so on.
   */
  ancestorOfType?: Maybe<AnyEntity>;
  /** Look up an announcement for this entity by slug */
  announcement?: Maybe<Announcement>;
  /** Announcements for a specific entity */
  announcements: AnnouncementConnection;
  /** The role(s) that gave the permissions to access this resource, if any. */
  applicableRoles: Array<Role>;
  /** The role(s) that the current user could assign to other users on this entity, if applicable. */
  assignableRoles: Array<Role>;
  /** Retrieve a list of user & role assignments for this entity */
  assignedUsers: ContextualPermissionConnection;
  /** Previous entries in the hierarchy */
  breadcrumbs: Array<EntityBreadcrumb>;
  /** The community this entity belongs to */
  community: Community;
  /** The date this entity was added to the WDP */
  createdAt: Scalars['ISO8601DateTime'];
  /** Whether the entity is _currently_ hidden, based on the server's time zone. */
  currentlyHidden: Scalars['Boolean'];
  /** Whether the entity is _currently_ visible, based on the server's time zone. */
  currentlyVisible: Scalars['Boolean'];
  /** Search and retrieve *all* descendants of this `Entity`, regardless of type. */
  descendants: EntityDescendantConnection;
  /** The Digital Object Identifier for this entity. See https://doi.org */
  doi?: Maybe<Scalars['String']>;
  /** A hero image for the entity, suitable for displaying in page headers */
  heroImage: ImageAttachment;
  /** Configurable metadata for the hero_image attachment */
  heroImageMetadata?: Maybe<ImageMetadata>;
  /** Whether the entity's visibility is set to `HIDDEN` */
  hidden: Scalars['Boolean'];
  /** Specify a time to check to see if the entity will be hidden. */
  hiddenAsOf: Scalars['Boolean'];
  /** If present, this is the timestamp the entity was hidden at */
  hiddenAt?: Maybe<Scalars['ISO8601DateTime']>;
  /** The depth of the hierarchical entity, taking into account any parent types */
  hierarchicalDepth: Scalars['Int'];
  /** A machine-readable identifier for the entity. Not presently used, but will be necessary for synchronizing with upstream providers. */
  identifier: Scalars['String'];
  inCommunityOrdering?: Maybe<OrderingEntry>;
  /** The initial ordering to display for this entity. */
  initialOrdering?: Maybe<Ordering>;
  /** The International Standard Serial Number for this entity. See https://issn.org */
  issn?: Maybe<Scalars['String']>;
  leaf: Scalars['Boolean'];
  /** Available link targets for this entity */
  linkTargetCandidates: LinkTargetCandidateConnection;
  links: EntityLinkConnection;
  /**
   * Fetch a list of named ancestors for this entity. This list is deterministically sorted
   * to retrieve the "closest" ancestors first, ascending upwards in the hierarchy from there.
   *
   * **Note**: Like breadcrumbs, this association is intentionally not paginated for ease of use,
   * because in practice a schema should not have many associations.
   */
  namedAncestors: Array<NamedAncestor>;
  /** Look up an ordering for this entity by identifier */
  ordering?: Maybe<Ordering>;
  /** Look up an ordering that is set up to handle a specific schema. */
  orderingForSchema?: Maybe<Ordering>;
  /** Retrieve a connection of orderings for the parent object. */
  orderings: OrderingConnection;
  /** Look up a page for this entity by slug */
  page?: Maybe<Page>;
  pages: PageConnection;
  /** An array of hashes that can be requested to load in a context */
  permissions: Array<PermissionGrant>;
  /** The date this entity was published */
  published: VariablePrecisionDate;
  root: Scalars['Boolean'];
  schemaDefinition: SchemaDefinition;
  schemaRanks: Array<HierarchicalSchemaRank>;
  schemaVersion: SchemaVersion;
  /** A human-readable subtitle for the entity */
  subtitle?: Maybe<Scalars['String']>;
  /** A description of the contents of the entity */
  summary?: Maybe<Scalars['String']>;
  /** A representative thumbnail for the entity, suitable for displaying in lists, tables, grids, etc. */
  thumbnail: ImageAttachment;
  /** Configurable metadata for the thumbnail attachment */
  thumbnailMetadata?: Maybe<ImageMetadata>;
  /** A human-readable title for the entity */
  title: Scalars['String'];
  /** The date this entity was last updated within the WDP */
  updatedAt: Scalars['ISO8601DateTime'];
  /** If an entity is available in the frontend */
  visibility: EntityVisibility;
  /** Whether the entity's visibility is set to `VISIBLE`. */
  visible: Scalars['Boolean'];
  /** If present, this is the timestamp an entity is visible after */
  visibleAfterAt?: Maybe<Scalars['ISO8601DateTime']>;
  /** Specify a time to check to see if the entity will be visible. */
  visibleAsOf: Scalars['Boolean'];
  /** If present, this is the timestamp an entity is visible until */
  visibleUntilAt?: Maybe<Scalars['ISO8601DateTime']>;
};


/**
 * An interface for entities that can contain actual content, as well as any number of themselves
 * in a tree structure.
 *
 * In practice, this means a `Collection` or an `Item`, not a `Community`.
 */
export type ChildEntityAllAccessGrantsArgs = {
  subject?: Maybe<AccessGrantSubjectFilter>;
  order?: Maybe<SimpleOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/**
 * An interface for entities that can contain actual content, as well as any number of themselves
 * in a tree structure.
 *
 * In practice, this means a `Collection` or an `Item`, not a `Community`.
 */
export type ChildEntityAncestorByNameArgs = {
  name: Scalars['String'];
};


/**
 * An interface for entities that can contain actual content, as well as any number of themselves
 * in a tree structure.
 *
 * In practice, this means a `Collection` or an `Item`, not a `Community`.
 */
export type ChildEntityAncestorOfTypeArgs = {
  schema: Scalars['String'];
};


/**
 * An interface for entities that can contain actual content, as well as any number of themselves
 * in a tree structure.
 *
 * In practice, this means a `Collection` or an `Item`, not a `Community`.
 */
export type ChildEntityAnnouncementArgs = {
  slug: Scalars['Slug'];
};


/**
 * An interface for entities that can contain actual content, as well as any number of themselves
 * in a tree structure.
 *
 * In practice, this means a `Collection` or an `Item`, not a `Community`.
 */
export type ChildEntityAnnouncementsArgs = {
  order?: Maybe<AnnouncementOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/**
 * An interface for entities that can contain actual content, as well as any number of themselves
 * in a tree structure.
 *
 * In practice, this means a `Collection` or an `Item`, not a `Community`.
 */
export type ChildEntityAssignedUsersArgs = {
  order?: Maybe<ContextualPermissionOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/**
 * An interface for entities that can contain actual content, as well as any number of themselves
 * in a tree structure.
 *
 * In practice, this means a `Collection` or an `Item`, not a `Community`.
 */
export type ChildEntityDescendantsArgs = {
  scope?: Maybe<EntityDescendantScopeFilter>;
  schema?: Maybe<Array<Scalars['String']>>;
  order?: EntityDescendantOrder;
  maxDepth?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/**
 * An interface for entities that can contain actual content, as well as any number of themselves
 * in a tree structure.
 *
 * In practice, this means a `Collection` or an `Item`, not a `Community`.
 */
export type ChildEntityHiddenAsOfArgs = {
  time?: Maybe<Scalars['ISO8601DateTime']>;
};


/**
 * An interface for entities that can contain actual content, as well as any number of themselves
 * in a tree structure.
 *
 * In practice, this means a `Collection` or an `Item`, not a `Community`.
 */
export type ChildEntityInCommunityOrderingArgs = {
  identifier: Scalars['String'];
};


/**
 * An interface for entities that can contain actual content, as well as any number of themselves
 * in a tree structure.
 *
 * In practice, this means a `Collection` or an `Item`, not a `Community`.
 */
export type ChildEntityLinkTargetCandidatesArgs = {
  kind?: Maybe<LinkTargetCandidateFilter>;
  title?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/**
 * An interface for entities that can contain actual content, as well as any number of themselves
 * in a tree structure.
 *
 * In practice, this means a `Collection` or an `Item`, not a `Community`.
 */
export type ChildEntityLinksArgs = {
  order?: Maybe<SimpleOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/**
 * An interface for entities that can contain actual content, as well as any number of themselves
 * in a tree structure.
 *
 * In practice, this means a `Collection` or an `Item`, not a `Community`.
 */
export type ChildEntityOrderingArgs = {
  identifier: Scalars['String'];
};


/**
 * An interface for entities that can contain actual content, as well as any number of themselves
 * in a tree structure.
 *
 * In practice, this means a `Collection` or an `Item`, not a `Community`.
 */
export type ChildEntityOrderingForSchemaArgs = {
  slug: Scalars['Slug'];
};


/**
 * An interface for entities that can contain actual content, as well as any number of themselves
 * in a tree structure.
 *
 * In practice, this means a `Collection` or an `Item`, not a `Community`.
 */
export type ChildEntityOrderingsArgs = {
  order?: Maybe<OrderingOrder>;
  availability?: Maybe<OrderingAvailabilityFilter>;
  visibility?: Maybe<OrderingVisibilityFilter>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/**
 * An interface for entities that can contain actual content, as well as any number of themselves
 * in a tree structure.
 *
 * In practice, this means a `Collection` or an `Item`, not a `Community`.
 */
export type ChildEntityPageArgs = {
  slug: Scalars['String'];
};


/**
 * An interface for entities that can contain actual content, as well as any number of themselves
 * in a tree structure.
 *
 * In practice, this means a `Collection` or an `Item`, not a `Community`.
 */
export type ChildEntityPagesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/**
 * An interface for entities that can contain actual content, as well as any number of themselves
 * in a tree structure.
 *
 * In practice, this means a `Collection` or an `Item`, not a `Community`.
 */
export type ChildEntityVisibleAsOfArgs = {
  time?: Maybe<Scalars['ISO8601DateTime']>;
};

/** Autogenerated input type of ClearInitialOrdering */
export type ClearInitialOrderingInput = {
  entityId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of ClearInitialOrdering */
export type ClearInitialOrderingPayload = StandardMutationPayload & {
  __typename?: 'ClearInitialOrderingPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  entity?: Maybe<AnyEntity>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']>;
};

/** A collection of items */
export type Collection = Accessible & HasEntityBreadcrumbs & Entity & ReferencesGlobalEntityDates & ChildEntity & HasDoi & HasIssn & Contributable & HasSchemaProperties & Attachable & SchemaInstance & Searchable & Node & Sluggable & {
  __typename?: 'Collection';
  /** Derived access control list */
  accessControlList?: Maybe<AccessControlList>;
  accessGrants: AnyCollectionAccessGrantConnection;
  /** A polymorphic connection for access grants from an entity */
  allAccessGrants: AnyAccessGrantConnection;
  /** A list of allowed actions for the given user on this entity (and its descendants). */
  allowedActions: Array<Scalars['String']>;
  /**
   * Directly fetch a defined named ancestor by its name. It can be null,
   * either because an invalid name was provided, the schema hierarchy is
   * incomplete, or the association itself is optional.
   */
  ancestorByName?: Maybe<AnyEntity>;
  /**
   * Look up an ancestor for this entity that implements a specific type. It ascends from this entity,
   * so it will first check the parent, then the grandparent, and so on.
   */
  ancestorOfType?: Maybe<AnyEntity>;
  /** Look up an announcement for this entity by slug */
  announcement?: Maybe<Announcement>;
  /** Announcements for a specific entity */
  announcements: AnnouncementConnection;
  /** The role(s) that gave the permissions to access this resource, if any. */
  applicableRoles: Array<Role>;
  /** Assets owned by this entity */
  assets: AnyAssetConnection;
  /** The role(s) that the current user could assign to other users on this entity, if applicable. */
  assignableRoles: Array<Role>;
  /** Retrieve a list of user & role assignments for this entity */
  assignedUsers: ContextualPermissionConnection;
  /** Expose all available entities for this schema property. */
  availableEntitiesFor: Array<EntitySelectOption>;
  /** Previous entries in the hierarchy */
  breadcrumbs: Array<EntityBreadcrumb>;
  /** @deprecated Use Collection.collections */
  children: CollectionConnection;
  /** Retrieve the collections beneath this collection. */
  collections: CollectionConnection;
  community: Community;
  contributions: CollectionContributionConnection;
  /** Contributors to this element */
  contributors: AnyContributorConnection;
  /** The date this entity was added to the WDP */
  createdAt: Scalars['ISO8601DateTime'];
  /** Whether the entity is _currently_ hidden, based on the server's time zone. */
  currentlyHidden: Scalars['Boolean'];
  /** Whether the entity is _currently_ visible, based on the server's time zone. */
  currentlyVisible: Scalars['Boolean'];
  /** Search and retrieve *all* descendants of this `Entity`, regardless of type. */
  descendants: EntityDescendantConnection;
  /** The Digital Object Identifier for this entity. See https://doi.org */
  doi?: Maybe<Scalars['String']>;
  /** Retrieve the first matching collection beneath this collection. */
  firstCollection?: Maybe<Collection>;
  /** Retrieve the first matching item beneath this item. */
  firstItem?: Maybe<Item>;
  /** Whether this collection has any child collections */
  hasCollections: Scalars['Boolean'];
  /** Whether this collection has any child items */
  hasItems: Scalars['Boolean'];
  /** A hero image for the entity, suitable for displaying in page headers */
  heroImage: ImageAttachment;
  /** Configurable metadata for the hero_image attachment */
  heroImageMetadata?: Maybe<ImageMetadata>;
  /** Whether the entity's visibility is set to `HIDDEN` */
  hidden: Scalars['Boolean'];
  /** Specify a time to check to see if the entity will be hidden. */
  hiddenAsOf: Scalars['Boolean'];
  /** If present, this is the timestamp the entity was hidden at */
  hiddenAt?: Maybe<Scalars['ISO8601DateTime']>;
  /** The depth of the hierarchical entity, taking into account any parent types */
  hierarchicalDepth: Scalars['Int'];
  id: Scalars['ID'];
  /** A machine-readable identifier for the entity. Not presently used, but will be necessary for synchronizing with upstream providers. */
  identifier: Scalars['String'];
  inCommunityOrdering?: Maybe<OrderingEntry>;
  /** The initial ordering to display for this entity. */
  initialOrdering?: Maybe<Ordering>;
  /** The International Standard Serial Number for this entity. See https://issn.org */
  issn?: Maybe<Scalars['String']>;
  items: ItemConnection;
  leaf: Scalars['Boolean'];
  /** Available link targets for this entity */
  linkTargetCandidates: LinkTargetCandidateConnection;
  links: EntityLinkConnection;
  /**
   * Fetch a list of named ancestors for this entity. This list is deterministically sorted
   * to retrieve the "closest" ancestors first, ascending upwards in the hierarchy from there.
   *
   * **Note**: Like breadcrumbs, this association is intentionally not paginated for ease of use,
   * because in practice a schema should not have many associations.
   */
  namedAncestors: Array<NamedAncestor>;
  /** Look up an ordering for this entity by identifier */
  ordering?: Maybe<Ordering>;
  /** Look up an ordering that is set up to handle a specific schema. */
  orderingForSchema?: Maybe<Ordering>;
  /** Retrieve a connection of orderings for the parent object. */
  orderings: OrderingConnection;
  /** Look up a page for this entity by slug */
  page?: Maybe<Page>;
  pages: PageConnection;
  parent?: Maybe<CollectionParent>;
  /** An array of hashes that can be requested to load in a context */
  permissions: Array<PermissionGrant>;
  /** The date this entity was published */
  published: VariablePrecisionDate;
  /** Retrieve linked collections of the same schema type */
  relatedCollections: CollectionConnection;
  root: Scalars['Boolean'];
  schemaDefinition: SchemaDefinition;
  /** The context for our schema instance. Includes form values and necessary referents. */
  schemaInstanceContext: SchemaInstanceContext;
  /** A list of schema properties associated with this instance or version. */
  schemaProperties: Array<AnySchemaProperty>;
  /** Read a single schema property by its full path. */
  schemaProperty?: Maybe<AnySchemaProperty>;
  schemaRanks: Array<HierarchicalSchemaRank>;
  schemaVersion: SchemaVersion;
  /** Search from this level of the API using it as the origin */
  search: SearchScope;
  slug: Scalars['Slug'];
  /** A human-readable subtitle for the entity */
  subtitle?: Maybe<Scalars['String']>;
  /** A description of the contents of the entity */
  summary?: Maybe<Scalars['String']>;
  /** A representative thumbnail for the entity, suitable for displaying in lists, tables, grids, etc. */
  thumbnail: ImageAttachment;
  /** Configurable metadata for the thumbnail attachment */
  thumbnailMetadata?: Maybe<ImageMetadata>;
  /** A human-readable title for the entity */
  title: Scalars['String'];
  /** The date this entity was last updated within the WDP */
  updatedAt: Scalars['ISO8601DateTime'];
  /** Access grants for specific users */
  userAccessGrants: UserCollectionAccessGrantConnection;
  /** Not presently used */
  userGroupAccessGrants: UserGroupCollectionAccessGrantConnection;
  /** If an entity is available in the frontend */
  visibility: EntityVisibility;
  /** Whether the entity's visibility is set to `VISIBLE`. */
  visible: Scalars['Boolean'];
  /** If present, this is the timestamp an entity is visible after */
  visibleAfterAt?: Maybe<Scalars['ISO8601DateTime']>;
  /** Specify a time to check to see if the entity will be visible. */
  visibleAsOf: Scalars['Boolean'];
  /** If present, this is the timestamp an entity is visible until */
  visibleUntilAt?: Maybe<Scalars['ISO8601DateTime']>;
};


/** A collection of items */
export type CollectionAccessGrantsArgs = {
  subject?: Maybe<AccessGrantSubjectFilter>;
  order?: Maybe<SimpleOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** A collection of items */
export type CollectionAllAccessGrantsArgs = {
  subject?: Maybe<AccessGrantSubjectFilter>;
  order?: Maybe<SimpleOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** A collection of items */
export type CollectionAncestorByNameArgs = {
  name: Scalars['String'];
};


/** A collection of items */
export type CollectionAncestorOfTypeArgs = {
  schema: Scalars['String'];
};


/** A collection of items */
export type CollectionAnnouncementArgs = {
  slug: Scalars['Slug'];
};


/** A collection of items */
export type CollectionAnnouncementsArgs = {
  order?: Maybe<AnnouncementOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** A collection of items */
export type CollectionAssetsArgs = {
  order?: Maybe<SimpleOrder>;
  kind?: Maybe<AssetKindFilter>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** A collection of items */
export type CollectionAssignedUsersArgs = {
  order?: Maybe<ContextualPermissionOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** A collection of items */
export type CollectionAvailableEntitiesForArgs = {
  fullPath: Scalars['String'];
};


/** A collection of items */
export type CollectionChildrenArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A collection of items */
export type CollectionCollectionsArgs = {
  order?: Maybe<EntityOrder>;
  schema?: Maybe<Array<Scalars['String']>>;
  nodeFilter?: Maybe<SubtreeNodeFilter>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** A collection of items */
export type CollectionContributionsArgs = {
  order?: Maybe<ContributionOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** A collection of items */
export type CollectionContributorsArgs = {
  order?: Maybe<ContributorOrder>;
  kind?: Maybe<ContributorFilterKind>;
  prefix?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** A collection of items */
export type CollectionDescendantsArgs = {
  scope?: Maybe<EntityDescendantScopeFilter>;
  schema?: Maybe<Array<Scalars['String']>>;
  order?: EntityDescendantOrder;
  maxDepth?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** A collection of items */
export type CollectionFirstCollectionArgs = {
  order?: Maybe<EntityOrder>;
  schema?: Maybe<Array<Scalars['String']>>;
  nodeFilter?: Maybe<SubtreeNodeFilter>;
};


/** A collection of items */
export type CollectionFirstItemArgs = {
  order?: Maybe<EntityOrder>;
  schema?: Maybe<Array<Scalars['String']>>;
  nodeFilter?: Maybe<SubtreeNodeFilter>;
};


/** A collection of items */
export type CollectionHiddenAsOfArgs = {
  time?: Maybe<Scalars['ISO8601DateTime']>;
};


/** A collection of items */
export type CollectionInCommunityOrderingArgs = {
  identifier: Scalars['String'];
};


/** A collection of items */
export type CollectionItemsArgs = {
  order?: Maybe<EntityOrder>;
  schema?: Maybe<Array<Scalars['String']>>;
  nodeFilter?: Maybe<TreeNodeFilter>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** A collection of items */
export type CollectionLinkTargetCandidatesArgs = {
  kind?: Maybe<LinkTargetCandidateFilter>;
  title?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** A collection of items */
export type CollectionLinksArgs = {
  order?: Maybe<SimpleOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** A collection of items */
export type CollectionOrderingArgs = {
  identifier: Scalars['String'];
};


/** A collection of items */
export type CollectionOrderingForSchemaArgs = {
  slug: Scalars['Slug'];
};


/** A collection of items */
export type CollectionOrderingsArgs = {
  order?: Maybe<OrderingOrder>;
  availability?: Maybe<OrderingAvailabilityFilter>;
  visibility?: Maybe<OrderingVisibilityFilter>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** A collection of items */
export type CollectionPageArgs = {
  slug: Scalars['String'];
};


/** A collection of items */
export type CollectionPagesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** A collection of items */
export type CollectionRelatedCollectionsArgs = {
  order?: Maybe<EntityOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** A collection of items */
export type CollectionSchemaPropertyArgs = {
  fullPath: Scalars['String'];
};


/** A collection of items */
export type CollectionSearchArgs = {
  maxDepth?: Maybe<Scalars['Int']>;
  visibility?: Maybe<EntityVisibilityFilter>;
};


/** A collection of items */
export type CollectionUserAccessGrantsArgs = {
  order?: Maybe<SimpleOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** A collection of items */
export type CollectionUserGroupAccessGrantsArgs = {
  order?: Maybe<SimpleOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** A collection of items */
export type CollectionVisibleAsOfArgs = {
  time?: Maybe<Scalars['ISO8601DateTime']>;
};

/** The connection type for Collection. */
export type CollectionConnection = Paginated & {
  __typename?: 'CollectionConnection';
  /** A list of edges. */
  edges: Array<CollectionEdge>;
  /** A list of nodes. */
  nodes: Array<Collection>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** A contribution to a collection */
export type CollectionContribution = Contribution & Node & Sluggable & {
  __typename?: 'CollectionContribution';
  /** A potentially-overridden value from person contributors */
  affiliation?: Maybe<Scalars['String']>;
  collection: Collection;
  contributor: AnyContributor;
  contributorKind: ContributorKind;
  createdAt: Scalars['ISO8601DateTime'];
  /** A potentially-overridden display name value for all contributor types */
  displayName: Scalars['String'];
  id: Scalars['ID'];
  /** A potentially-overridden value from organization contributors */
  location?: Maybe<Scalars['String']>;
  metadata: ContributionMetadata;
  /** An arbitrary text value describing the role the contributor had */
  role?: Maybe<Scalars['String']>;
  slug: Scalars['Slug'];
  /** A potentially-overridden value from person contributors */
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['ISO8601DateTime'];
};

/** The connection type for CollectionContribution. */
export type CollectionContributionConnection = Paginated & {
  __typename?: 'CollectionContributionConnection';
  /** A list of edges. */
  edges: Array<CollectionContributionEdge>;
  /** A list of nodes. */
  nodes: Array<CollectionContribution>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CollectionContributionEdge = {
  __typename?: 'CollectionContributionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: CollectionContribution;
};

/** An edge in a connection. */
export type CollectionEdge = {
  __typename?: 'CollectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Collection;
};

export type CollectionParent = Collection | Community | { __typename?: "%other" };

/** A community of users */
export type Community = Accessible & Entity & HasSchemaProperties & Attachable & SchemaInstance & Searchable & Node & Sluggable & {
  __typename?: 'Community';
  /** Derived access control list */
  accessControlList?: Maybe<AccessControlList>;
  accessGrants: AnyCommunityAccessGrantConnection;
  /** A polymorphic connection for access grants from an entity */
  allAccessGrants: AnyAccessGrantConnection;
  /** A list of allowed actions for the given user on this entity (and its descendants). */
  allowedActions: Array<Scalars['String']>;
  /** Look up an announcement for this entity by slug */
  announcement?: Maybe<Announcement>;
  /** Announcements for a specific entity */
  announcements: AnnouncementConnection;
  /** The role(s) that gave the permissions to access this resource, if any. */
  applicableRoles: Array<Role>;
  /** Assets owned by this entity */
  assets: AnyAssetConnection;
  /** The role(s) that the current user could assign to other users on this entity, if applicable. */
  assignableRoles: Array<Role>;
  /** Retrieve a list of user & role assignments for this entity */
  assignedUsers: ContextualPermissionConnection;
  /** Expose all available entities for this schema property. */
  availableEntitiesFor: Array<EntitySelectOption>;
  /** Previous entries in the hierarchy */
  breadcrumbs: Array<EntityBreadcrumb>;
  collections: CollectionConnection;
  createdAt: Scalars['ISO8601DateTime'];
  /** Search and retrieve *all* descendants of this `Entity`, regardless of type. */
  descendants: EntityDescendantConnection;
  /** Retrieve the first matching collection beneath this collection. */
  firstCollection?: Maybe<Collection>;
  /** Retrieve the first matching item beneath this item. */
  firstItem?: Maybe<Item>;
  /** A hero image for the entity, suitable for displaying in page headers */
  heroImage: ImageAttachment;
  /** The layout to use when rendering this community's hero image. */
  heroImageLayout: HeroImageLayout;
  /** Configurable metadata for the hero_image attachment */
  heroImageMetadata?: Maybe<ImageMetadata>;
  /** The depth of the hierarchical entity, taking into account any parent types */
  hierarchicalDepth: Scalars['Int'];
  id: Scalars['ID'];
  /** The initial ordering to display for this entity. */
  initialOrdering?: Maybe<Ordering>;
  /** Available link targets for this entity */
  linkTargetCandidates: LinkTargetCandidateConnection;
  links: EntityLinkConnection;
  /** A logo for the community */
  logo: ImageAttachment;
  /** Configurable metadata for the logo attachment */
  logoMetadata?: Maybe<ImageMetadata>;
  metadata?: Maybe<Scalars['JSON']>;
  /** @deprecated Use Community.title */
  name: Scalars['String'];
  /** Look up an ordering for this entity by identifier */
  ordering?: Maybe<Ordering>;
  /** Look up an ordering that is set up to handle a specific schema. */
  orderingForSchema?: Maybe<Ordering>;
  /** Retrieve a connection of orderings for the parent object. */
  orderings: OrderingConnection;
  /** Look up a page for this entity by slug */
  page?: Maybe<Page>;
  pages: PageConnection;
  /** An array of hashes that can be requested to load in a context */
  permissions: Array<PermissionGrant>;
  position?: Maybe<Scalars['Int']>;
  schemaDefinition: SchemaDefinition;
  /** The context for our schema instance. Includes form values and necessary referents. */
  schemaInstanceContext: SchemaInstanceContext;
  /** A list of schema properties associated with this instance or version. */
  schemaProperties: Array<AnySchemaProperty>;
  /** Read a single schema property by its full path. */
  schemaProperty?: Maybe<AnySchemaProperty>;
  schemaRanks: Array<HierarchicalSchemaRank>;
  schemaVersion: SchemaVersion;
  /** Search from this level of the API using it as the origin */
  search: SearchScope;
  slug: Scalars['Slug'];
  /** A human-readable subtitle for the entity */
  subtitle?: Maybe<Scalars['String']>;
  /** A description of the contents of the entity */
  summary?: Maybe<Scalars['String']>;
  tagline?: Maybe<Scalars['String']>;
  /** A representative thumbnail for the entity, suitable for displaying in lists, tables, grids, etc. */
  thumbnail: ImageAttachment;
  /** Configurable metadata for the thumbnail attachment */
  thumbnailMetadata?: Maybe<ImageMetadata>;
  /** A human-readable title for the entity */
  title: Scalars['String'];
  updatedAt: Scalars['ISO8601DateTime'];
  /** Access grants for specific users */
  userAccessGrants: UserCommunityAccessGrantConnection;
  /** Not presently used */
  userGroupAccessGrants: UserGroupCommunityAccessGrantConnection;
};


/** A community of users */
export type CommunityAccessGrantsArgs = {
  subject?: Maybe<AccessGrantSubjectFilter>;
  order?: Maybe<SimpleOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** A community of users */
export type CommunityAllAccessGrantsArgs = {
  subject?: Maybe<AccessGrantSubjectFilter>;
  order?: Maybe<SimpleOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** A community of users */
export type CommunityAnnouncementArgs = {
  slug: Scalars['Slug'];
};


/** A community of users */
export type CommunityAnnouncementsArgs = {
  order?: Maybe<AnnouncementOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** A community of users */
export type CommunityAssetsArgs = {
  order?: Maybe<SimpleOrder>;
  kind?: Maybe<AssetKindFilter>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** A community of users */
export type CommunityAssignedUsersArgs = {
  order?: Maybe<ContextualPermissionOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** A community of users */
export type CommunityAvailableEntitiesForArgs = {
  fullPath: Scalars['String'];
};


/** A community of users */
export type CommunityCollectionsArgs = {
  order?: Maybe<EntityOrder>;
  schema?: Maybe<Array<Scalars['String']>>;
  nodeFilter?: Maybe<TreeNodeFilter>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** A community of users */
export type CommunityDescendantsArgs = {
  scope?: Maybe<EntityDescendantScopeFilter>;
  schema?: Maybe<Array<Scalars['String']>>;
  order?: EntityDescendantOrder;
  maxDepth?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** A community of users */
export type CommunityFirstCollectionArgs = {
  order?: Maybe<EntityOrder>;
  schema?: Maybe<Array<Scalars['String']>>;
  nodeFilter?: Maybe<SubtreeNodeFilter>;
};


/** A community of users */
export type CommunityFirstItemArgs = {
  order?: Maybe<EntityOrder>;
  schema?: Maybe<Array<Scalars['String']>>;
  nodeFilter?: Maybe<SubtreeNodeFilter>;
};


/** A community of users */
export type CommunityLinkTargetCandidatesArgs = {
  kind?: Maybe<LinkTargetCandidateFilter>;
  title?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** A community of users */
export type CommunityLinksArgs = {
  order?: Maybe<SimpleOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** A community of users */
export type CommunityOrderingArgs = {
  identifier: Scalars['String'];
};


/** A community of users */
export type CommunityOrderingForSchemaArgs = {
  slug: Scalars['Slug'];
};


/** A community of users */
export type CommunityOrderingsArgs = {
  order?: Maybe<OrderingOrder>;
  availability?: Maybe<OrderingAvailabilityFilter>;
  visibility?: Maybe<OrderingVisibilityFilter>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** A community of users */
export type CommunityPageArgs = {
  slug: Scalars['String'];
};


/** A community of users */
export type CommunityPagesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** A community of users */
export type CommunitySchemaPropertyArgs = {
  fullPath: Scalars['String'];
};


/** A community of users */
export type CommunitySearchArgs = {
  maxDepth?: Maybe<Scalars['Int']>;
  visibility?: Maybe<EntityVisibilityFilter>;
};


/** A community of users */
export type CommunityUserAccessGrantsArgs = {
  order?: Maybe<SimpleOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** A community of users */
export type CommunityUserGroupAccessGrantsArgs = {
  order?: Maybe<SimpleOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};

/** The connection type for Community. */
export type CommunityConnection = Paginated & {
  __typename?: 'CommunityConnection';
  /** A list of edges. */
  edges: Array<CommunityEdge>;
  /** A list of nodes. */
  nodes: Array<Community>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CommunityEdge = {
  __typename?: 'CommunityEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Community;
};

/** A contextual permission for a user, role, and entity */
export type ContextualPermission = ExposesPermissions & Node & Sluggable & {
  __typename?: 'ContextualPermission';
  /** Derived access control list */
  accessControlList?: Maybe<AccessControlList>;
  /** The access grants that correspond to this contextual permission */
  accessGrants: Array<AnyUserAccessGrant>;
  /** A list of allowed actions for the given user on this entity (and its descendants). */
  allowedActions: Array<Scalars['String']>;
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  /** An array of hashes that can be requested to load in a context */
  permissions: Array<PermissionGrant>;
  /** The roles that correspond to this contextual permission */
  roles: Array<Role>;
  slug: Scalars['Slug'];
  updatedAt: Scalars['ISO8601DateTime'];
  user: User;
};

/** The connection type for ContextualPermission. */
export type ContextualPermissionConnection = Paginated & {
  __typename?: 'ContextualPermissionConnection';
  /** A list of edges. */
  edges: Array<ContextualPermissionEdge>;
  /** A list of nodes. */
  nodes: Array<ContextualPermission>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ContextualPermissionEdge = {
  __typename?: 'ContextualPermissionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ContextualPermission;
};

/** A collection of options used to dictate how to order contextual permissions */
export type ContextualPermissionOrder =
  /** Order by the most recently granted permissions */
  | 'RECENT'
  /** Order by the oldest granted permissions */
  | 'OLDEST'
  /** Order by the user's name from A-Z */
  | 'USER_NAME_ASC'
  /** Order by the user's name from Z-A */
  | 'USER_NAME_DESC'
  | '%future added value';

/** Something that can be contributed to */
export type Contributable = {
  /** Contributors to this element */
  contributors: AnyContributorConnection;
};


/** Something that can be contributed to */
export type ContributableContributorsArgs = {
  order?: Maybe<ContributorOrder>;
  kind?: Maybe<ContributorFilterKind>;
  prefix?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};

/** A contribution from a certain contributor */
export type Contribution = {
  /** A potentially-overridden value from person contributors */
  affiliation?: Maybe<Scalars['String']>;
  contributor: AnyContributor;
  contributorKind: ContributorKind;
  /** A potentially-overridden display name value for all contributor types */
  displayName: Scalars['String'];
  /** A potentially-overridden value from organization contributors */
  location?: Maybe<Scalars['String']>;
  metadata: ContributionMetadata;
  /** An arbitrary text value describing the role the contributor had */
  role?: Maybe<Scalars['String']>;
  /** A potentially-overridden value from person contributors */
  title?: Maybe<Scalars['String']>;
};

/** Metadata for a contribution */
export type ContributionMetadata = {
  __typename?: 'ContributionMetadata';
  /** A value that can override a contribution's contributor's affiliation */
  affiliation?: Maybe<Scalars['String']>;
  /** A value that can oerride a contribution's contributor's displayed name */
  displayName?: Maybe<Scalars['String']>;
  /** An arbitrary field describing how the contributor contributed */
  role?: Maybe<Scalars['String']>;
  /** A value that can override a contribution's contributor's title */
  title?: Maybe<Scalars['String']>;
};

/** An input type that builds contribution metadata */
export type ContributionMetadataInput = {
  /** A value that can override a contribution's contributor's title */
  title?: Maybe<Scalars['String']>;
  /** A value that can override a contribution's contributor's affiliation */
  affiliation?: Maybe<Scalars['String']>;
  /** A value that can override a contribution's contributor's displayed name */
  displayName?: Maybe<Scalars['String']>;
  /** A value that can override a contribution's contributor's location */
  location?: Maybe<Scalars['String']>;
};

/** Sort contributions by various properties and directions */
export type ContributionOrder =
  /** Sort contributors by newest created date */
  | 'RECENT'
  /** Sort contributors by oldest created date */
  | 'OLDEST'
  /** Sort contributors by their target's title A-Z */
  | 'TARGET_TITLE_ASCENDING'
  /** Sort contributors by their target's title Z-A */
  | 'TARGET_TITLE_DESCENDING'
  | '%future added value';

/** A contributor who has made a contribution */
export type Contributor = {
  bio?: Maybe<Scalars['String']>;
  /** The total number of collection contributions from this contributor */
  collectionContributionCount: Scalars['Int'];
  collectionContributions: CollectionContributionConnection;
  /** The total number of contributions (item + collection) from this contributor */
  contributionCount: Scalars['Int'];
  email?: Maybe<Scalars['String']>;
  identifier: Scalars['String'];
  /** An optional image associated with the contributor. */
  image: ImageAttachment;
  /** Configurable metadata for the image attachment */
  imageMetadata?: Maybe<ImageMetadata>;
  /** The total number of item contributions from this contributor */
  itemContributionCount: Scalars['Int'];
  itemContributions: ItemContributionConnection;
  kind: ContributorKind;
  links: Array<ContributorLink>;
  /** A display name, independent of the type of contributor */
  name: Scalars['String'];
  /** An optional, unique [**O**pen **R**esearcher and **C**ontributor **ID**](https://orcid.org) associated with this contributor. */
  orcid?: Maybe<Scalars['String']>;
  prefix?: Maybe<Scalars['String']>;
  suffix?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


/** A contributor who has made a contribution */
export type ContributorCollectionContributionsArgs = {
  order?: Maybe<ContributionOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** A contributor who has made a contribution */
export type ContributorItemContributionsArgs = {
  order?: Maybe<ContributionOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};

export type ContributorFilterKind =
  | 'ALL'
  | 'ORGANIZATION'
  | 'PERSON'
  | '%future added value';

export type ContributorKind =
  | 'organization'
  | 'person'
  | '%future added value';

/** A link for a contributor */
export type ContributorLink = {
  __typename?: 'ContributorLink';
  title: Scalars['String'];
  url: Scalars['String'];
};

/** A mapping to build a contributor link */
export type ContributorLinkInput = {
  title: Scalars['String'];
  url: Scalars['String'];
};

export type ContributorLookupField =
  | 'EMAIL'
  | 'NAME'
  | 'ORCID'
  | '%future added value';

/** Sort contributors by various properties and directions */
export type ContributorOrder =
  /** Sort contributors by newest created date */
  | 'RECENT'
  /** Sort contributors by oldest created date */
  | 'OLDEST'
  /** Sort contributors by most contributions, then fall back to name A-Z */
  | 'MOST_CONTRIBUTIONS'
  /** Sort contributors by least contributions, then fall back to name A-Z */
  | 'LEAST_CONTRIBUTIONS'
  /** Sort contributors by name A-Z. For people, this currently uses western naming order (family name, given name). */
  | 'NAME_ASCENDING'
  /** Sort contributors by name Z-A. For people, this currently uses western naming order (family name, given name). */
  | 'NAME_DESCENDING'
  /** Sort contributors by affiliation A-Z, then fall back to name A-Z */
  | 'AFFILIATION_ASCENDING'
  /** Sort contributors by affiliation Z-A, then fall back to name A-Z */
  | 'AFFILIATION_DESCENDING'
  | '%future added value';

export type ContributorProperty = SchemaProperty & ScalarProperty & {
  __typename?: 'ContributorProperty';
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   */
  array: Scalars['Boolean'];
  contributor?: Maybe<AnyContributor>;
  /**
   * A human-readable description for the property. It should describe the purpose of the
   * property as well as some details about the types of values it looks for.
   *
   * It can be rendered as help text, hints, etc.
   */
  description?: Maybe<Scalars['String']>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   */
  fullPath: Scalars['String'];
  /** The purpose or intent of this property relative to its entity, parents, and others. */
  function: SchemaPropertyFunction;
  /**
   * Whether to render a field as "wide" (two columns) in the form.
   * This is intended to help structure forms logically, as well as
   * provide ample space for certain types of data input, particularly
   * full-text, markdown, and other such complex fields.
   */
  isWide: Scalars['Boolean'];
  /** Provided for introspection. This describes the underlying structure of the data type. */
  kind: SchemaPropertyKind;
  /** A human-readable label for the schema property. */
  label: Scalars['String'];
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   */
  orderable: Scalars['Boolean'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   */
  path: Scalars['String'];
  /**
   * Whether or not this property is required in order for the schema instance
   * to be considered valid.
   *
   * Note: invalid data provided to a schema property will still invalidate
   * the instance as a whole???the required trait only determines whether a value
   * **must** be set.
   */
  required: Scalars['Boolean'];
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   */
  type: SchemaPropertyType;
};

/** A select option for a single contributor */
export type ContributorSelectOption = {
  __typename?: 'ContributorSelectOption';
  kind: ContributorKind;
  label: Scalars['String'];
  value: Scalars['String'];
};

export type ContributorsProperty = SchemaProperty & ScalarProperty & {
  __typename?: 'ContributorsProperty';
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   */
  array: Scalars['Boolean'];
  contributors: Array<AnyContributor>;
  /**
   * A human-readable description for the property. It should describe the purpose of the
   * property as well as some details about the types of values it looks for.
   *
   * It can be rendered as help text, hints, etc.
   */
  description?: Maybe<Scalars['String']>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   */
  fullPath: Scalars['String'];
  /** The purpose or intent of this property relative to its entity, parents, and others. */
  function: SchemaPropertyFunction;
  /**
   * Whether to render a field as "wide" (two columns) in the form.
   * This is intended to help structure forms logically, as well as
   * provide ample space for certain types of data input, particularly
   * full-text, markdown, and other such complex fields.
   */
  isWide: Scalars['Boolean'];
  /** Provided for introspection. This describes the underlying structure of the data type. */
  kind: SchemaPropertyKind;
  /** A human-readable label for the schema property. */
  label: Scalars['String'];
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   */
  orderable: Scalars['Boolean'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   */
  path: Scalars['String'];
  /**
   * Whether or not this property is required in order for the schema instance
   * to be considered valid.
   *
   * Note: invalid data provided to a schema property will still invalidate
   * the instance as a whole???the required trait only determines whether a value
   * **must** be set.
   */
  required: Scalars['Boolean'];
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   */
  type: SchemaPropertyType;
};

/** Autogenerated input type of CreateAnnouncement */
export type CreateAnnouncementInput = {
  /** The ID for an entity to create the announcement under. */
  entityId: Scalars['ID'];
  /** The date of the announcement. */
  publishedOn: Scalars['ISO8601Date'];
  /** A header value for the announcement */
  header: Scalars['String'];
  /** A teaser for the announcement */
  teaser: Scalars['String'];
  /** A body for the announcement */
  body: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of CreateAnnouncement */
export type CreateAnnouncementPayload = StandardMutationPayload & {
  __typename?: 'CreateAnnouncementPayload';
  announcement?: Maybe<Announcement>;
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of CreateAsset */
export type CreateAssetInput = {
  /** The entity that owns the attachment */
  entityId: Scalars['ID'];
  /** A reference to an upload in Tus. */
  attachment: UploadedFileInput;
  /** A human readable name for the asset */
  name: Scalars['String'];
  /** The position the asset occupies amongst siblings */
  position?: Maybe<Scalars['Int']>;
  /** Alt text to display for the asset (if applicable) */
  altText?: Maybe<Scalars['String']>;
  /** A caption to display below the asset (if applicable) */
  caption?: Maybe<Scalars['String']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of CreateAsset */
export type CreateAssetPayload = StandardMutationPayload & {
  __typename?: 'CreateAssetPayload';
  asset?: Maybe<AnyAsset>;
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of CreateCollection */
export type CreateCollectionInput = {
  /** The parent of the new collection. This can be the encoded ID of a community or another collection. */
  parentId: Scalars['ID'];
  schemaVersionSlug?: Maybe<Scalars['String']>;
  /** Human-readable title for the entity */
  title: Scalars['String'];
  /** Human-readable subtitle for the entity */
  subtitle?: Maybe<Scalars['String']>;
  /** A brief description of the entity's contents. */
  summary?: Maybe<Scalars['String']>;
  /** A reference to an uploaded image in Tus. */
  heroImage?: Maybe<UploadedFileInput>;
  /** Metadata for an image attachment. */
  heroImageMetadata?: Maybe<ImageMetadataInput>;
  /** A reference to an uploaded image in Tus. */
  thumbnail?: Maybe<UploadedFileInput>;
  /** Metadata for an image attachment. */
  thumbnailMetadata?: Maybe<ImageMetadataInput>;
  /** The date this entity was published */
  published?: Maybe<VariablePrecisionDateInput>;
  /** What level of visibility the entity has */
  visibility: EntityVisibility;
  /** If present, this is the timestamp an entity is visible after */
  visibleAfterAt?: Maybe<Scalars['ISO8601DateTime']>;
  /** If present, this is the timestamp an entity is visible until */
  visibleUntilAt?: Maybe<Scalars['ISO8601DateTime']>;
  /** Digital Object Identifier (see: https://doi.org) */
  doi?: Maybe<Scalars['String']>;
  /** International Standard Serial Number (see: https://issn.org) */
  issn?: Maybe<Scalars['String']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of CreateCollection */
export type CreateCollectionPayload = StandardMutationPayload & {
  __typename?: 'CreateCollectionPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  collection?: Maybe<Collection>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of CreateCommunity */
export type CreateCommunityInput = {
  /** Human-readable title for the entity */
  title: Scalars['String'];
  /** The position the community occupies in the list */
  position?: Maybe<Scalars['Int']>;
  schemaVersionSlug?: Maybe<Scalars['String']>;
  /** Human-readable subtitle for the entity */
  subtitle?: Maybe<Scalars['String']>;
  /** A brief description of the entity's contents. */
  summary?: Maybe<Scalars['String']>;
  /** A reference to an uploaded image in Tus. */
  heroImage?: Maybe<UploadedFileInput>;
  /** Metadata for an image attachment. */
  heroImageMetadata?: Maybe<ImageMetadataInput>;
  /** A reference to an uploaded image in Tus. */
  thumbnail?: Maybe<UploadedFileInput>;
  /** Metadata for an image attachment. */
  thumbnailMetadata?: Maybe<ImageMetadataInput>;
  heroImageLayout: HeroImageLayout;
  tagline?: Maybe<Scalars['String']>;
  /** A reference to an uploaded image in Tus. */
  logo?: Maybe<UploadedFileInput>;
  /** Metadata for an image attachment. */
  logoMetadata?: Maybe<ImageMetadataInput>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of CreateCommunity */
export type CreateCommunityPayload = StandardMutationPayload & {
  __typename?: 'CreateCommunityPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** A representation of a successfully created community */
  community?: Maybe<Community>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of CreateItem */
export type CreateItemInput = {
  /** The parent of the item. This can be the encoded ID of a collection or another item. */
  parentId: Scalars['ID'];
  schemaVersionSlug?: Maybe<Scalars['String']>;
  /** Human-readable title for the entity */
  title: Scalars['String'];
  /** Human-readable subtitle for the entity */
  subtitle?: Maybe<Scalars['String']>;
  /** A brief description of the entity's contents. */
  summary?: Maybe<Scalars['String']>;
  /** A reference to an uploaded image in Tus. */
  heroImage?: Maybe<UploadedFileInput>;
  /** Metadata for an image attachment. */
  heroImageMetadata?: Maybe<ImageMetadataInput>;
  /** A reference to an uploaded image in Tus. */
  thumbnail?: Maybe<UploadedFileInput>;
  /** Metadata for an image attachment. */
  thumbnailMetadata?: Maybe<ImageMetadataInput>;
  /** The date this entity was published */
  published?: Maybe<VariablePrecisionDateInput>;
  /** What level of visibility the entity has */
  visibility: EntityVisibility;
  /** If present, this is the timestamp an entity is visible after */
  visibleAfterAt?: Maybe<Scalars['ISO8601DateTime']>;
  /** If present, this is the timestamp an entity is visible until */
  visibleUntilAt?: Maybe<Scalars['ISO8601DateTime']>;
  /** Digital Object Identifier (see: https://doi.org) */
  doi?: Maybe<Scalars['String']>;
  /** International Standard Serial Number (see: https://issn.org) */
  issn?: Maybe<Scalars['String']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of CreateItem */
export type CreateItemPayload = StandardMutationPayload & {
  __typename?: 'CreateItemPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']>;
  /** A representation of a successfully created item */
  item?: Maybe<Item>;
};

/** Autogenerated input type of CreateOrdering */
export type CreateOrderingInput = {
  /** The entity to create the ordering for. */
  entityId: Scalars['ID'];
  /** A unique (within the context of the entity) identifier. Cannot be changed */
  identifier: Scalars['String'];
  /** A human readable label for the ordering */
  name?: Maybe<Scalars['String']>;
  /** Optional markdown content to display before the ordering's children */
  header?: Maybe<Scalars['String']>;
  /** Optional markdown content to display after the ordering's children */
  footer?: Maybe<Scalars['String']>;
  filter?: Maybe<OrderingFilterDefinitionInput>;
  select?: Maybe<OrderingSelectDefinitionInput>;
  order: Array<OrderDefinitionInput>;
  render?: Maybe<OrderingRenderDefinitionInput>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of CreateOrdering */
export type CreateOrderingPayload = StandardMutationPayload & {
  __typename?: 'CreateOrderingPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']>;
  /** The created ordering */
  ordering?: Maybe<Ordering>;
};

/** Autogenerated input type of CreateOrganizationContributor */
export type CreateOrganizationContributorInput = {
  /** An email associated with the contributor */
  email?: Maybe<Scalars['String']>;
  /** A url associated with the contributor */
  url?: Maybe<Scalars['String']>;
  /** A summary of the contributor */
  bio?: Maybe<Scalars['String']>;
  links?: Maybe<Array<ContributorLinkInput>>;
  /** An optional, unique [**O**pen **R**esearcher and **C**ontributor **ID**](https://orcid.org) associated with this contributor. */
  orcid?: Maybe<Scalars['String']>;
  /** A reference to an uploaded image in Tus. */
  image?: Maybe<UploadedFileInput>;
  /** Metadata for an image attachment. */
  imageMetadata?: Maybe<ImageMetadataInput>;
  /** The legal name of the organization */
  legalName?: Maybe<Scalars['String']>;
  /** Where the organization is located (if applicable) */
  location?: Maybe<Scalars['String']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of CreateOrganizationContributor */
export type CreateOrganizationContributorPayload = StandardMutationPayload & {
  __typename?: 'CreateOrganizationContributorPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The created organization */
  contributor?: Maybe<OrganizationContributor>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of CreatePage */
export type CreatePageInput = {
  entityId: Scalars['ID'];
  title: Scalars['String'];
  slug: Scalars['String'];
  position?: Maybe<Scalars['Int']>;
  body: Scalars['String'];
  /** A reference to an uploaded image in Tus. */
  heroImage?: Maybe<UploadedFileInput>;
  /** Metadata for an image attachment. */
  heroImageMetadata?: Maybe<ImageMetadataInput>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of CreatePage */
export type CreatePagePayload = StandardMutationPayload & {
  __typename?: 'CreatePagePayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']>;
  page?: Maybe<Page>;
};

/** Autogenerated input type of CreatePersonContributor */
export type CreatePersonContributorInput = {
  /** An email associated with the contributor */
  email?: Maybe<Scalars['String']>;
  /** A url associated with the contributor */
  url?: Maybe<Scalars['String']>;
  /** A summary of the contributor */
  bio?: Maybe<Scalars['String']>;
  links?: Maybe<Array<ContributorLinkInput>>;
  /** An optional, unique [**O**pen **R**esearcher and **C**ontributor **ID**](https://orcid.org) associated with this contributor. */
  orcid?: Maybe<Scalars['String']>;
  /** A reference to an uploaded image in Tus. */
  image?: Maybe<UploadedFileInput>;
  /** Metadata for an image attachment. */
  imageMetadata?: Maybe<ImageMetadataInput>;
  givenName?: Maybe<Scalars['String']>;
  familyName?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  affiliation?: Maybe<Scalars['String']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of CreatePersonContributor */
export type CreatePersonContributorPayload = StandardMutationPayload & {
  __typename?: 'CreatePersonContributorPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The created person */
  contributor?: Maybe<PersonContributor>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of CreateRole */
export type CreateRoleInput = {
  name: Scalars['String'];
  accessControlList: Scalars['JSON'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of CreateRole */
export type CreateRolePayload = StandardMutationPayload & {
  __typename?: 'CreateRolePayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
};

/** Require that `path = value` while enforcing that value is a date. */
export type DateEqualsOperatorInput = {
  path: Scalars['String'];
  value: Scalars['ISO8601Date'];
};

/** Require that `path ??? value` while enforcing that value is a date. */
export type DateGteOperatorInput = {
  path: Scalars['String'];
  value: Scalars['ISO8601Date'];
};

/** Require that `path ??? value` while enforcing that value is a date. */
export type DateLteOperatorInput = {
  path: Scalars['String'];
  value: Scalars['ISO8601Date'];
};

/** This describes the level of precision a VariablePrecisionDate has, in increasing order of specificity. */
export type DatePrecision =
  | 'NONE'
  | 'YEAR'
  | 'MONTH'
  | 'DAY'
  | '%future added value';

export type DateProperty = SchemaProperty & ScalarProperty & SearchableProperty & {
  __typename?: 'DateProperty';
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   */
  array: Scalars['Boolean'];
  date?: Maybe<Scalars['ISO8601Date']>;
  default?: Maybe<Scalars['ISO8601Date']>;
  description?: Maybe<Scalars['String']>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   */
  fullPath: Scalars['String'];
  /** The purpose or intent of this property relative to its entity, parents, and others. */
  function: SchemaPropertyFunction;
  /**
   * Whether to render a field as "wide" (two columns) in the form.
   * This is intended to help structure forms logically, as well as
   * provide ample space for certain types of data input, particularly
   * full-text, markdown, and other such complex fields.
   */
  isWide: Scalars['Boolean'];
  /** Provided for introspection. This describes the underlying structure of the data type. */
  kind: SchemaPropertyKind;
  label: Scalars['String'];
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   */
  orderable: Scalars['Boolean'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   */
  path: Scalars['String'];
  /**
   * Whether or not this property is required in order for the schema instance
   * to be considered valid.
   *
   * Note: invalid data provided to a schema property will still invalidate
   * the instance as a whole???the required trait only determines whether a value
   * **must** be set.
   */
  required: Scalars['Boolean'];
  searchOperators: Array<SearchOperator>;
  searchPath: Scalars['String'];
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   */
  type: SchemaPropertyType;
};

/**
 * The most basic shared properties for a single schema, whether a definition,
 * a version, or an aggregate based on the former types.
 */
export type DescribesSchema = {
  /** A unique (per-namespace) value that names the schema within the system. */
  identifier: Scalars['String'];
  /** The kind of entity this schema applies to */
  kind: SchemaKind;
  /** A human-readable name for the schema */
  name: Scalars['String'];
  /** A unique namespace the schema lives in */
  namespace: Scalars['String'];
};

/** Autogenerated input type of DestroyAnnouncement */
export type DestroyAnnouncementInput = {
  announcementId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of DestroyAnnouncement */
export type DestroyAnnouncementPayload = StandardMutationPayload & DestroyMutationPayload & {
  __typename?: 'DestroyAnnouncementPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Whether or not the model was successfully destroyed. If false, check globalErrors */
  destroyed?: Maybe<Scalars['Boolean']>;
  /** The ID of the deleted model */
  destroyedId?: Maybe<Scalars['ID']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of DestroyAsset */
export type DestroyAssetInput = {
  /** The ID for the asset to destroy */
  assetId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of DestroyAsset */
export type DestroyAssetPayload = StandardMutationPayload & DestroyMutationPayload & {
  __typename?: 'DestroyAssetPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Whether or not the model was successfully destroyed. If false, check globalErrors */
  destroyed?: Maybe<Scalars['Boolean']>;
  /** The ID of the deleted model */
  destroyedId?: Maybe<Scalars['ID']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of DestroyCollection */
export type DestroyCollectionInput = {
  /** The ID for the collection to destroy */
  collectionId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of DestroyCollection */
export type DestroyCollectionPayload = StandardMutationPayload & DestroyMutationPayload & {
  __typename?: 'DestroyCollectionPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Whether or not the model was successfully destroyed. If false, check globalErrors */
  destroyed?: Maybe<Scalars['Boolean']>;
  /** The ID of the deleted model */
  destroyedId?: Maybe<Scalars['ID']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of DestroyCommunity */
export type DestroyCommunityInput = {
  /** The ID for the community to destroy */
  communityId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of DestroyCommunity */
export type DestroyCommunityPayload = StandardMutationPayload & DestroyMutationPayload & {
  __typename?: 'DestroyCommunityPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Whether or not the model was successfully destroyed. If false, check globalErrors */
  destroyed?: Maybe<Scalars['Boolean']>;
  /** The ID of the deleted model */
  destroyedId?: Maybe<Scalars['ID']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of DestroyContribution */
export type DestroyContributionInput = {
  contributionId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of DestroyContribution */
export type DestroyContributionPayload = StandardMutationPayload & DestroyMutationPayload & {
  __typename?: 'DestroyContributionPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Whether or not the model was successfully destroyed. If false, check globalErrors */
  destroyed?: Maybe<Scalars['Boolean']>;
  /** The ID of the deleted model */
  destroyedId?: Maybe<Scalars['ID']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of DestroyContributor */
export type DestroyContributorInput = {
  contributorId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of DestroyContributor */
export type DestroyContributorPayload = StandardMutationPayload & DestroyMutationPayload & {
  __typename?: 'DestroyContributorPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Whether or not the model was successfully destroyed. If false, check globalErrors */
  destroyed?: Maybe<Scalars['Boolean']>;
  /** The ID of the deleted model */
  destroyedId?: Maybe<Scalars['ID']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of DestroyEntityLink */
export type DestroyEntityLinkInput = {
  /** The ID for the EntityLink to destroy */
  entityLinkId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of DestroyEntityLink */
export type DestroyEntityLinkPayload = StandardMutationPayload & DestroyMutationPayload & {
  __typename?: 'DestroyEntityLinkPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Whether or not the model was successfully destroyed. If false, check globalErrors */
  destroyed?: Maybe<Scalars['Boolean']>;
  /** The ID of the deleted model */
  destroyedId?: Maybe<Scalars['ID']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of DestroyItem */
export type DestroyItemInput = {
  /** The ID for the item to destroy */
  itemId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of DestroyItem */
export type DestroyItemPayload = StandardMutationPayload & DestroyMutationPayload & {
  __typename?: 'DestroyItemPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Whether or not the model was successfully destroyed. If false, check globalErrors */
  destroyed?: Maybe<Scalars['Boolean']>;
  /** The ID of the deleted model */
  destroyedId?: Maybe<Scalars['ID']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']>;
};

/** This mutation destroys a model */
export type DestroyMutationPayload = {
  attributeErrors: Array<MutationAttributeError>;
  /** Whether or not the model was successfully destroyed. If false, check globalErrors */
  destroyed?: Maybe<Scalars['Boolean']>;
  /** The ID of the deleted model */
  destroyedId?: Maybe<Scalars['ID']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of DestroyOrdering */
export type DestroyOrderingInput = {
  orderingId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of DestroyOrdering */
export type DestroyOrderingPayload = StandardMutationPayload & DestroyMutationPayload & {
  __typename?: 'DestroyOrderingPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Whether or not the model was successfully destroyed. If false, check globalErrors */
  destroyed?: Maybe<Scalars['Boolean']>;
  /** The ID of the deleted model */
  destroyedId?: Maybe<Scalars['ID']>;
  disabled?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of DestroyPage */
export type DestroyPageInput = {
  pageId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of DestroyPage */
export type DestroyPagePayload = StandardMutationPayload & DestroyMutationPayload & {
  __typename?: 'DestroyPagePayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Whether or not the model was successfully destroyed. If false, check globalErrors */
  destroyed?: Maybe<Scalars['Boolean']>;
  /** The ID of the deleted model */
  destroyedId?: Maybe<Scalars['ID']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']>;
};

export type Direction =
  | 'ASCENDING'
  | 'DESCENDING'
  | '%future added value';

/** User-specific access permissions for non-hierarchical records. */
export type EffectiveAccess = ExposesPermissions & {
  __typename?: 'EffectiveAccess';
  /** A list of allowed actions for the given user on this entity (and its descendants). */
  allowedActions: Array<Scalars['String']>;
  /**
   * The values that may appear in `allowed_actions`. This is for introspection
   * and type-checking: the presence of a string here does _not_ mean the user
   * has the effective capability.
   */
  availableActions: Array<Scalars['String']>;
  /** An array of hashes that can be requested to load in a context */
  permissions: Array<PermissionGrant>;
};

export type EmailProperty = SchemaProperty & ScalarProperty & {
  __typename?: 'EmailProperty';
  address?: Maybe<Scalars['String']>;
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   */
  array: Scalars['Boolean'];
  defaultAddress?: Maybe<Scalars['String']>;
  /**
   * A human-readable description for the property. It should describe the purpose of the
   * property as well as some details about the types of values it looks for.
   *
   * It can be rendered as help text, hints, etc.
   */
  description?: Maybe<Scalars['String']>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   */
  fullPath: Scalars['String'];
  /** The purpose or intent of this property relative to its entity, parents, and others. */
  function: SchemaPropertyFunction;
  /**
   * Whether to render a field as "wide" (two columns) in the form.
   * This is intended to help structure forms logically, as well as
   * provide ample space for certain types of data input, particularly
   * full-text, markdown, and other such complex fields.
   */
  isWide: Scalars['Boolean'];
  /** Provided for introspection. This describes the underlying structure of the data type. */
  kind: SchemaPropertyKind;
  /** A human-readable label for the schema property. */
  label: Scalars['String'];
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   */
  orderable: Scalars['Boolean'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   */
  path: Scalars['String'];
  /**
   * Whether or not this property is required in order for the schema instance
   * to be considered valid.
   *
   * Note: invalid data provided to a schema property will still invalidate
   * the instance as a whole???the required trait only determines whether a value
   * **must** be set.
   */
  required: Scalars['Boolean'];
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   */
  type: SchemaPropertyType;
};

/** A property that references a deterministically-ordered list of entities. */
export type EntitiesProperty = SchemaProperty & ScalarProperty & HasAvailableEntities & {
  __typename?: 'EntitiesProperty';
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   */
  array: Scalars['Boolean'];
  /** Expose all available entities for this schema property. */
  availableEntities: Array<EntitySelectOption>;
  /**
   * A human-readable description for the property. It should describe the purpose of the
   * property as well as some details about the types of values it looks for.
   *
   * It can be rendered as help text, hints, etc.
   */
  description?: Maybe<Scalars['String']>;
  /**
   * A deterministically-ordered list of entities.
   *
   * Given the same input, this array will always be returned in the same order.
   */
  entities: Array<AnyEntity>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   */
  fullPath: Scalars['String'];
  /** The purpose or intent of this property relative to its entity, parents, and others. */
  function: SchemaPropertyFunction;
  /**
   * Whether to render a field as "wide" (two columns) in the form.
   * This is intended to help structure forms logically, as well as
   * provide ample space for certain types of data input, particularly
   * full-text, markdown, and other such complex fields.
   */
  isWide: Scalars['Boolean'];
  /** Provided for introspection. This describes the underlying structure of the data type. */
  kind: SchemaPropertyKind;
  /** A human-readable label for the schema property. */
  label: Scalars['String'];
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   */
  orderable: Scalars['Boolean'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   */
  path: Scalars['String'];
  /**
   * Whether or not this property is required in order for the schema instance
   * to be considered valid.
   *
   * Note: invalid data provided to a schema property will still invalidate
   * the instance as a whole???the required trait only determines whether a value
   * **must** be set.
   */
  required: Scalars['Boolean'];
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   */
  type: SchemaPropertyType;
};

/** An entity that exists in the hierarchy. */
export type Entity = {
  /** Derived access control list */
  accessControlList?: Maybe<AccessControlList>;
  /** A polymorphic connection for access grants from an entity */
  allAccessGrants: AnyAccessGrantConnection;
  /** A list of allowed actions for the given user on this entity (and its descendants). */
  allowedActions: Array<Scalars['String']>;
  /** Look up an announcement for this entity by slug */
  announcement?: Maybe<Announcement>;
  /** Announcements for a specific entity */
  announcements: AnnouncementConnection;
  /** The role(s) that gave the permissions to access this resource, if any. */
  applicableRoles: Array<Role>;
  /** The role(s) that the current user could assign to other users on this entity, if applicable. */
  assignableRoles: Array<Role>;
  /** Retrieve a list of user & role assignments for this entity */
  assignedUsers: ContextualPermissionConnection;
  /** Previous entries in the hierarchy */
  breadcrumbs: Array<EntityBreadcrumb>;
  /** Search and retrieve *all* descendants of this `Entity`, regardless of type. */
  descendants: EntityDescendantConnection;
  /** A hero image for the entity, suitable for displaying in page headers */
  heroImage: ImageAttachment;
  /** Configurable metadata for the hero_image attachment */
  heroImageMetadata?: Maybe<ImageMetadata>;
  /** The depth of the hierarchical entity, taking into account any parent types */
  hierarchicalDepth: Scalars['Int'];
  /** The initial ordering to display for this entity. */
  initialOrdering?: Maybe<Ordering>;
  /** Available link targets for this entity */
  linkTargetCandidates: LinkTargetCandidateConnection;
  links: EntityLinkConnection;
  /** Look up an ordering for this entity by identifier */
  ordering?: Maybe<Ordering>;
  /** Look up an ordering that is set up to handle a specific schema. */
  orderingForSchema?: Maybe<Ordering>;
  /** Retrieve a connection of orderings for the parent object. */
  orderings: OrderingConnection;
  /** Look up a page for this entity by slug */
  page?: Maybe<Page>;
  pages: PageConnection;
  /** An array of hashes that can be requested to load in a context */
  permissions: Array<PermissionGrant>;
  schemaDefinition: SchemaDefinition;
  /** A list of schema properties associated with this instance or version. */
  schemaProperties: Array<AnySchemaProperty>;
  schemaRanks: Array<HierarchicalSchemaRank>;
  schemaVersion: SchemaVersion;
  /** Search from this level of the API using it as the origin */
  search: SearchScope;
  /** A human-readable subtitle for the entity */
  subtitle?: Maybe<Scalars['String']>;
  /** A description of the contents of the entity */
  summary?: Maybe<Scalars['String']>;
  /** A representative thumbnail for the entity, suitable for displaying in lists, tables, grids, etc. */
  thumbnail: ImageAttachment;
  /** Configurable metadata for the thumbnail attachment */
  thumbnailMetadata?: Maybe<ImageMetadata>;
  /** A human-readable title for the entity */
  title: Scalars['String'];
};


/** An entity that exists in the hierarchy. */
export type EntityAllAccessGrantsArgs = {
  subject?: Maybe<AccessGrantSubjectFilter>;
  order?: Maybe<SimpleOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** An entity that exists in the hierarchy. */
export type EntityAnnouncementArgs = {
  slug: Scalars['Slug'];
};


/** An entity that exists in the hierarchy. */
export type EntityAnnouncementsArgs = {
  order?: Maybe<AnnouncementOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** An entity that exists in the hierarchy. */
export type EntityAssignedUsersArgs = {
  order?: Maybe<ContextualPermissionOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** An entity that exists in the hierarchy. */
export type EntityDescendantsArgs = {
  scope?: Maybe<EntityDescendantScopeFilter>;
  schema?: Maybe<Array<Scalars['String']>>;
  order?: EntityDescendantOrder;
  maxDepth?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** An entity that exists in the hierarchy. */
export type EntityLinkTargetCandidatesArgs = {
  kind?: Maybe<LinkTargetCandidateFilter>;
  title?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** An entity that exists in the hierarchy. */
export type EntityLinksArgs = {
  order?: Maybe<SimpleOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** An entity that exists in the hierarchy. */
export type EntityOrderingArgs = {
  identifier: Scalars['String'];
};


/** An entity that exists in the hierarchy. */
export type EntityOrderingForSchemaArgs = {
  slug: Scalars['Slug'];
};


/** An entity that exists in the hierarchy. */
export type EntityOrderingsArgs = {
  order?: Maybe<OrderingOrder>;
  availability?: Maybe<OrderingAvailabilityFilter>;
  visibility?: Maybe<OrderingVisibilityFilter>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** An entity that exists in the hierarchy. */
export type EntityPageArgs = {
  slug: Scalars['String'];
};


/** An entity that exists in the hierarchy. */
export type EntityPagesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** An entity that exists in the hierarchy. */
export type EntitySearchArgs = {
  maxDepth?: Maybe<Scalars['Int']>;
  visibility?: Maybe<EntityVisibilityFilter>;
};

export type EntityBreadcrumb = Node & {
  __typename?: 'EntityBreadcrumb';
  crumb: AnyEntity;
  depth: Scalars['Int'];
  id: Scalars['ID'];
  kind: EntityKind;
  label: Scalars['String'];
  slug: Scalars['String'];
};

/** A descendant of an `Entity`. */
export type EntityDescendant = {
  __typename?: 'EntityDescendant';
  /** The actual descendant entity */
  descendant: AnyEntity;
  /** The relative depth of this entity from its ancestor */
  relativeDepth: Scalars['Int'];
  /** The scope of this entity relative to its ancestor */
  scope: EntityScope;
};

/** The connection type for EntityDescendant. */
export type EntityDescendantConnection = Paginated & {
  __typename?: 'EntityDescendantConnection';
  /** A list of edges. */
  edges: Array<EntityDescendantEdge>;
  /** A list of nodes. */
  nodes: Array<EntityDescendant>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type EntityDescendantEdge = {
  __typename?: 'EntityDescendantEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: EntityDescendant;
};

/** Sort entity descendants by specific attributes and order */
export type EntityDescendantOrder =
  /** Sort descendants by oldest published date (or OLDEST for communities) */
  | 'PUBLISHED_ASCENDING'
  /** Sort descendants by newest published date (or RECENT for communities) */
  | 'PUBLISHED_DESCENDING'
  /** Sort descendants by title A-Z */
  | 'TITLE_ASCENDING'
  /** Sort descendants by title Z-A */
  | 'TITLE_DESCENDING'
  | '%future added value';

/**
 * This enum is used to filter the type(s) of descendants to include
 * in a set of results.
 */
export type EntityDescendantScopeFilter =
  /** This will include anything regardless of type. */
  | 'ALL'
  /** This will include all `Collection`s and `Item`s that are direct descendants and not linked. */
  | 'ANY_ENTITY'
  /** This will include any _linked_ `Collection`s or `Item`s. */
  | 'ANY_LINK'
  /** This will include only directly descending `Collection`s, no links. */
  | 'COLLECTION'
  /** This will include any descendant `Collection`s, whether or not it is a link. */
  | 'COLLECTION_OR_LINK'
  /** This will include only directly descending `Item`s, no links. */
  | 'ITEM'
  /** This will include any descendant `Item`s, whether or not it is a link. */
  | 'ITEM_OR_LINK'
  /** This will only descendant `Collection`s that are linked. */
  | 'LINKED_COLLECTION'
  /** This will only descendant `Item`s that are linked. */
  | 'LINKED_ITEM'
  | '%future added value';

/** An enumeration of the different kinds of hierarchical entities */
export type EntityKind =
  | 'COMMUNITY'
  | 'COLLECTION'
  | 'ITEM'
  | '%future added value';

/** A link between different entities */
export type EntityLink = Node & Sluggable & {
  __typename?: 'EntityLink';
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  operator: EntityLinkOperator;
  scope: EntityLinkScope;
  slug: Scalars['Slug'];
  source: AnyEntity;
  sourceCollection?: Maybe<Collection>;
  sourceCommunity?: Maybe<Community>;
  sourceItem?: Maybe<Item>;
  target: AnyEntity;
  targetCollection?: Maybe<Collection>;
  targetCommunity?: Maybe<Community>;
  targetItem?: Maybe<Item>;
  updatedAt: Scalars['ISO8601DateTime'];
};

/** The connection type for EntityLink. */
export type EntityLinkConnection = Paginated & {
  __typename?: 'EntityLinkConnection';
  /** A list of edges. */
  edges: Array<EntityLinkEdge>;
  /** A list of nodes. */
  nodes: Array<EntityLink>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type EntityLinkEdge = {
  __typename?: 'EntityLinkEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: EntityLink;
};

/** A link operator describes how a source is linked to its target */
export type EntityLinkOperator =
  | 'CONTAINS'
  | 'REFERENCES'
  | '%future added value';

/** A link scope succinctly describes the source and target types */
export type EntityLinkScope =
  /** A link to a community from another community */
  | 'COMMUNITY_LINKED_COMMUNITY'
  /** A link to a collection not directly owned by a community */
  | 'COMMUNITY_LINKED_COLLECTION'
  /** A link to an item from a community */
  | 'COMMUNITY_LINKED_ITEM'
  /** A link to a community from a collection */
  | 'COLLECTION_LINKED_COMMUNITY'
  /** A link to a collection from another collection */
  | 'COLLECTION_LINKED_COLLECTION'
  /** A link to an item from a community */
  | 'COLLECTION_LINKED_ITEM'
  /** A link to a community from an item */
  | 'ITEM_LINKED_COMMUNITY'
  /** A link to a collection from an item */
  | 'ITEM_LINKED_COLLECTION'
  /** A link to an item from another item */
  | 'ITEM_LINKED_ITEM'
  | '%future added value';

/** Sort entities by a specific property and order */
export type EntityOrder =
  /** Sort entities by newest created date */
  | 'RECENT'
  /** Sort entities by oldest created date */
  | 'OLDEST'
  /** Sort entities by oldest published date (or OLDEST for communities) */
  | 'PUBLISHED_ASCENDING'
  /** Sort entities by newest published date (or RECENT for communities) */
  | 'PUBLISHED_DESCENDING'
  /** Sort entities by title A-Z */
  | 'TITLE_ASCENDING'
  /** Sort entities by title Z-A */
  | 'TITLE_DESCENDING'
  /** Sort entities by the name of their schema A-Z */
  | 'SCHEMA_NAME_ASCENDING'
  /** Sort entities by the name of their schema Z-A */
  | 'SCHEMA_NAME_DESCENDING'
  | '%future added value';

export type EntityPermissionFilter =
  | 'READ_ONLY'
  | 'CRUD'
  | '%future added value';

/** A grid of permissions for various hierarchical entity scopes. */
export type EntityPermissionGrid = ExposesPermissions & PermissionGrid & CrudPermissionGrid & {
  __typename?: 'EntityPermissionGrid';
  /** A list of allowed actions for the given user on this entity (and its descendants). */
  allowedActions: Array<Scalars['String']>;
  assets: AssetPermissionGrid;
  create: Scalars['Boolean'];
  delete: Scalars['Boolean'];
  manageAccess: Scalars['Boolean'];
  /** An array of hashes that can be requested to load in a context */
  permissions: Array<PermissionGrant>;
  read: Scalars['Boolean'];
  update: Scalars['Boolean'];
};

/** A property that references another entity within the system. */
export type EntityProperty = SchemaProperty & ScalarProperty & HasAvailableEntities & {
  __typename?: 'EntityProperty';
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   */
  array: Scalars['Boolean'];
  /** Expose all available entities for this schema property. */
  availableEntities: Array<EntitySelectOption>;
  /**
   * A human-readable description for the property. It should describe the purpose of the
   * property as well as some details about the types of values it looks for.
   *
   * It can be rendered as help text, hints, etc.
   */
  description?: Maybe<Scalars['String']>;
  /** A single reference to another entity within the system. */
  entity?: Maybe<AnyEntity>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   */
  fullPath: Scalars['String'];
  /** The purpose or intent of this property relative to its entity, parents, and others. */
  function: SchemaPropertyFunction;
  /**
   * Whether to render a field as "wide" (two columns) in the form.
   * This is intended to help structure forms logically, as well as
   * provide ample space for certain types of data input, particularly
   * full-text, markdown, and other such complex fields.
   */
  isWide: Scalars['Boolean'];
  /** Provided for introspection. This describes the underlying structure of the data type. */
  kind: SchemaPropertyKind;
  /** A human-readable label for the schema property. */
  label: Scalars['String'];
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   */
  orderable: Scalars['Boolean'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   */
  path: Scalars['String'];
  /**
   * Whether or not this property is required in order for the schema instance
   * to be considered valid.
   *
   * Note: invalid data provided to a schema property will still invalidate
   * the instance as a whole???the required trait only determines whether a value
   * **must** be set.
   */
  required: Scalars['Boolean'];
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   */
  type: SchemaPropertyType;
};

/**
 * This type is used for authorization and filtering, and can
 * distinguish an entity that has been linked to another from
 * one that exists directly in a hierarchy.
 */
export type EntityScope =
  /** A `Community` that is an actual descendant at this point in the hierarchy. */
  | 'COMMUNITY'
  /** A `Collection` that is an actual descendant at this point in the hierarchy. */
  | 'COLLECTION'
  /** An `Item` that is an actual descendant at this point in the hierarchy. */
  | 'ITEM'
  /** A `Community` that was linked from another `Community`. */
  | 'COMMUNITY_LINKED_COMMUNITY'
  /** A `Collection` that was linked from a `Community`. */
  | 'COMMUNITY_LINKED_COLLECTION'
  /** An `Item` that was linked from a `Community`. */
  | 'COMMUNITY_LINKED_ITEM'
  /** A `Community` that was linked from a `Collection`. */
  | 'COLLECTION_LINKED_COMMUNITY'
  /** A `Collection` that was linked from another `Collection`. */
  | 'COLLECTION_LINKED_COLLECTION'
  /** An `Item` that was linked from a `Collection`. */
  | 'COLLECTION_LINKED_ITEM'
  /** A `Community` that was linked from an `Item`. */
  | 'ITEM_LINKED_COMMUNITY'
  /** A `Collection` that was linked from an `Item`. */
  | 'ITEM_LINKED_COLLECTION'
  /** An `Item` that was linked from another `Item`. */
  | 'ITEM_LINKED_ITEM'
  | '%future added value';

/** A select option for a single entity */
export type EntitySelectOption = HasEntityBreadcrumbs & {
  __typename?: 'EntitySelectOption';
  /** Previous entries in the hierarchy */
  breadcrumbs: Array<EntityBreadcrumb>;
  entity: AnyEntity;
  kind: EntityKind;
  label: Scalars['String'];
  schemaVersion: SchemaVersion;
  slug: Scalars['Slug'];
  value: Scalars['ID'];
};

/** The level of visibility an entity can have */
export type EntityVisibility =
  | 'VISIBLE'
  | 'HIDDEN'
  | 'LIMITED'
  | '%future added value';

/**
 * Filter entities by their visibility.
 *
 * `VISIBLE` is the default in most cases. Any other option requires special privileges.
 */
export type EntityVisibilityFilter =
  /** Do not filter entities by their visibility at all. */
  | 'ALL'
  /** Fetch only *currently visible* entities. */
  | 'VISIBLE'
  /** Fetch only *currently hidden* entities. */
  | 'HIDDEN'
  | '%future added value';

/** Require that `path = value`. */
export type EqualsOperatorInput = {
  path: Scalars['String'];
  value: Scalars['JSON'];
};

export type ExposesEffectiveAccess = {
  /** User-specific access permissions for this object. */
  effectiveAccess: EffectiveAccess;
};

export type ExposesPermissions = {
  /** A list of allowed actions for the given user on this entity (and its descendants). */
  allowedActions: Array<Scalars['String']>;
  /** An array of hashes that can be requested to load in a context */
  permissions: Array<PermissionGrant>;
};

export type FloatProperty = SchemaProperty & ScalarProperty & SearchableProperty & {
  __typename?: 'FloatProperty';
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   */
  array: Scalars['Boolean'];
  defaultFloat?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  floatValue?: Maybe<Scalars['Float']>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   */
  fullPath: Scalars['String'];
  /** The purpose or intent of this property relative to its entity, parents, and others. */
  function: SchemaPropertyFunction;
  /**
   * Whether to render a field as "wide" (two columns) in the form.
   * This is intended to help structure forms logically, as well as
   * provide ample space for certain types of data input, particularly
   * full-text, markdown, and other such complex fields.
   */
  isWide: Scalars['Boolean'];
  /** Provided for introspection. This describes the underlying structure of the data type. */
  kind: SchemaPropertyKind;
  label: Scalars['String'];
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   */
  orderable: Scalars['Boolean'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   */
  path: Scalars['String'];
  /**
   * Whether or not this property is required in order for the schema instance
   * to be considered valid.
   *
   * Note: invalid data provided to a schema property will still invalidate
   * the instance as a whole???the required trait only determines whether a value
   * **must** be set.
   */
  required: Scalars['Boolean'];
  searchOperators: Array<SearchOperator>;
  searchPath: Scalars['String'];
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   */
  type: SchemaPropertyType;
};

/** A full-text searchable value for an entity */
export type FullText = {
  __typename?: 'FullText';
  /** The full-text searchable value itself */
  content?: Maybe<Scalars['String']>;
  /** The content type for the text, if any */
  kind?: Maybe<FullTextKind>;
  /** The ISO-639 language code of this content, if any */
  lang?: Maybe<Scalars['String']>;
};

/** It is necessary for the system to know what kind the content is in order to properly index it */
export type FullTextKind =
  | 'HTML'
  | 'MARKDOWN'
  | 'TEXT'
  | '%future added value';

export type FullTextProperty = SchemaProperty & ScalarProperty & SearchableProperty & {
  __typename?: 'FullTextProperty';
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   */
  array: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   */
  fullPath: Scalars['String'];
  fullText?: Maybe<FullText>;
  /** The purpose or intent of this property relative to its entity, parents, and others. */
  function: SchemaPropertyFunction;
  /**
   * Whether to render a field as "wide" (two columns) in the form.
   * This is intended to help structure forms logically, as well as
   * provide ample space for certain types of data input, particularly
   * full-text, markdown, and other such complex fields.
   */
  isWide: Scalars['Boolean'];
  /** Provided for introspection. This describes the underlying structure of the data type. */
  kind: SchemaPropertyKind;
  label: Scalars['String'];
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   */
  orderable: Scalars['Boolean'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   */
  path: Scalars['String'];
  /**
   * Whether or not this property is required in order for the schema instance
   * to be considered valid.
   *
   * Note: invalid data provided to a schema property will still invalidate
   * the instance as a whole???the required trait only determines whether a value
   * **must** be set.
   */
  required: Scalars['Boolean'];
  searchOperators: Array<SearchOperator>;
  searchPath: Scalars['String'];
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   */
  type: SchemaPropertyType;
};

/** A global ACL */
export type GlobalAccessControlList = ExposesPermissions & {
  __typename?: 'GlobalAccessControlList';
  /** A list of allowed actions for the given user on this entity (and its descendants). */
  allowedActions: Array<Scalars['String']>;
  /** An array of hashes that can be requested to load in a context */
  permissions: Array<PermissionGrant>;
};

/** The global configuration for this installation of WDP. */
export type GlobalConfiguration = Node & {
  __typename?: 'GlobalConfiguration';
  id: Scalars['ID'];
  /** Settings specific to this institution. */
  institution: InstitutionSettings;
  /** The logo attachment. It may not always be present. */
  logo: SiteLogoAttachment;
  /** Configurable metadata for the logo attachment. */
  logoMetadata?: Maybe<ImageMetadata>;
  /** Settings specific to this site */
  site: SiteSettings;
  /** Settings specific to the site's theme */
  theme: ThemeSettings;
};

/** Autogenerated input type of GrantAccess */
export type GrantAccessInput = {
  entityId: Scalars['ID'];
  roleId: Scalars['ID'];
  userId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of GrantAccess */
export type GrantAccessPayload = StandardMutationPayload & {
  __typename?: 'GrantAccessPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  entity?: Maybe<AnyEntity>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Whether or not access was granted */
  granted?: Maybe<Scalars['Boolean']>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']>;
};

export type GroupProperty = SchemaProperty & {
  __typename?: 'GroupProperty';
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   */
  array: Scalars['Boolean'];
  /**
   * A human-readable description for the property. It should describe the purpose of the
   * property as well as some details about the types of values it looks for.
   *
   * It can be rendered as help text, hints, etc.
   */
  description?: Maybe<Scalars['String']>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   */
  fullPath: Scalars['String'];
  /** Provided for introspection. This describes the underlying structure of the data type. */
  kind: SchemaPropertyKind;
  legend?: Maybe<Scalars['String']>;
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   */
  orderable: Scalars['Boolean'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   */
  path: Scalars['String'];
  properties: Array<AnyScalarProperty>;
  required: Scalars['Boolean'];
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   */
  type: SchemaPropertyType;
};

/** Something which implements a #storage key that identifies where its attachment currently lives. */
export type HasAttachmentStorage = {
  /**
   * This field describes how an attachment is stored in the system. If it is nil, there is no associated attachment for this field.
   * Otherwise, see the documentation for AttachmentStorage to see what the individual fields mean.
   */
  storage?: Maybe<AttachmentStorage>;
};

export type HasAvailableEntities = {
  /** Expose all available entities for this schema property. */
  availableEntities: Array<EntitySelectOption>;
};

/** An entity that has a DOI */
export type HasDoi = {
  /** The Digital Object Identifier for this entity. See https://doi.org */
  doi?: Maybe<Scalars['String']>;
};

export type HasEntityBreadcrumbs = {
  /** Previous entries in the hierarchy */
  breadcrumbs: Array<EntityBreadcrumb>;
};

/** An entity that has an ISSN */
export type HasIssn = {
  /** The International Standard Serial Number for this entity. See https://issn.org */
  issn?: Maybe<Scalars['String']>;
};

export type HasSchemaProperties = {
  /** A list of schema properties associated with this instance or version. */
  schemaProperties: Array<AnySchemaProperty>;
};

/** The layout to use when rendering a Hero for an `Entity`. */
export type HeroImageLayout =
  | 'ONE_COLUMN'
  | 'TWO_COLUMN'
  | '%future added value';

/**
 * A ranking of a schema from a certain point in the hierarchy. This can be used to generate
 * navigation or calculate statistics about what various entities contain.
 */
export type HierarchicalSchemaRank = Node & DescribesSchema & {
  __typename?: 'HierarchicalSchemaRank';
  /** The number of entities that implement this schema from this point in the hierarchy. */
  count: Scalars['Int'];
  /** A count of distinct versions of this specific schema type from this point of the hierarchy. */
  distinctVersionCount: Scalars['Int'];
  id: Scalars['ID'];
  /** A unique (per-namespace) value that names the schema within the system. */
  identifier: Scalars['String'];
  /** The kind of entity this schema applies to */
  kind: SchemaKind;
  /** A human-readable name for the schema */
  name: Scalars['String'];
  /** A unique namespace the schema lives in */
  namespace: Scalars['String'];
  /** The rank of this schema at this point in the hierarchy, based on the statistical mode of its depth relative to the parent. */
  rank: Scalars['Int'];
  /** A reference to the discrete schema definition */
  schemaDefinition: SchemaDefinition;
  /** A fully-qualified unique value that can be used to refer to this schema within the system */
  slug: Scalars['String'];
  /** A reference to the schema versions from this ranking */
  versionRanks: Array<HierarchicalSchemaVersionRank>;
};

/**
 * A ranking of a schema version from a certain point in the hierarchy. This can be used to generate
 * navigation or calculate statistics about what versions of a schema various entities contain.
 */
export type HierarchicalSchemaVersionRank = Node & DescribesSchema & {
  __typename?: 'HierarchicalSchemaVersionRank';
  /** The number of entities that implement this schema from this point in the hierarchy. */
  count: Scalars['Int'];
  id: Scalars['ID'];
  /** A unique (per-namespace) value that names the schema within the system. */
  identifier: Scalars['String'];
  /** The kind of entity this schema applies to */
  kind: SchemaKind;
  /** A human-readable name for the schema */
  name: Scalars['String'];
  /** A unique namespace the schema lives in */
  namespace: Scalars['String'];
  /** The rank of this schema at this point in the hierarchy, based on the statistical mode of its depth relative to the parent. */
  rank: Scalars['Int'];
  /** A reference to the discrete schema definition */
  schemaDefinition: SchemaDefinition;
  /** A reference to the discrete schema version */
  schemaVersion: SchemaVersion;
  /** A fully-qualified unique value that can be used to refer to this schema within the system */
  slug: Scalars['String'];
  /** A semantic version associated with the schema */
  versionNumber: Scalars['String'];
};



/**
 * An interface for various component types of an image attachment
 * that allow it to be identified in name and purpose.
 */
export type Image = {
  /** Alt text for accessible images */
  alt?: Maybe<Scalars['String']>;
  /** The MIME type of the image, if present */
  contentType?: Maybe<Scalars['String']>;
  /** @deprecated Use width and height directly. */
  dimensions?: Maybe<Array<Scalars['Int']>>;
  /** The height of the image, if present */
  height?: Maybe<Scalars['Int']>;
  /**
   * The original filename, if one was detected during attachment.
   *
   * Filename detection is not always consistent across browsers, so this
   * may not always be present, even with a valid attachment.
   */
  originalFilename?: Maybe<Scalars['String']>;
  /**
   * The intended purpose of this image attachment. This is intended to
   * help fragments that operate solely on image subcomponents to have
   * some context for what they are without extra work.
   */
  purpose: ImagePurpose;
  /**
   * This field describes how an attachment is stored in the system. If it is nil, there is no associated attachment for this field.
   * Otherwise, see the documentation for AttachmentStorage to see what the individual fields mean.
   */
  storage?: Maybe<AttachmentStorage>;
  /** The URL for the image, if present. */
  url?: Maybe<Scalars['String']>;
  /** The width of the image, if present */
  width?: Maybe<Scalars['Int']>;
};

/** An attached image with standardized derivatives. */
export type ImageAttachment = HasAttachmentStorage & ImageIdentification & {
  __typename?: 'ImageAttachment';
  /** Alt text for accessible images */
  alt?: Maybe<Scalars['String']>;
  /** A hero-sized mapping for derivative formats */
  hero: ImageSize;
  /** A large-sized mapping for derivative formats */
  large: ImageSize;
  /** A medium-sized mapping for derivative formats */
  medium: ImageSize;
  /** Configurable metadata for the image. */
  metadata?: Maybe<ImageMetadata>;
  /** The original source for the image */
  original: ImageOriginal;
  /**
   * The original filename, if one was detected during attachment.
   *
   * Filename detection is not always consistent across browsers, so this
   * may not always be present, even with a valid attachment.
   */
  originalFilename?: Maybe<Scalars['String']>;
  /**
   * The intended purpose of this image attachment. This is intended to
   * help fragments that operate solely on image subcomponents to have
   * some context for what they are without extra work.
   */
  purpose: ImagePurpose;
  /** A small-sized mapping for derivative formats */
  small: ImageSize;
  /**
   * This field describes how an attachment is stored in the system. If it is nil, there is no associated attachment for this field.
   * Otherwise, see the documentation for AttachmentStorage to see what the individual fields mean.
   */
  storage?: Maybe<AttachmentStorage>;
  /** A thumb-sized mapping for derivative formats */
  thumb: ImageSize;
};

/** A derivative of the image with a specific size and format. */
export type ImageDerivative = ImageIdentification & Image & {
  __typename?: 'ImageDerivative';
  /** Alt text for accessible images */
  alt?: Maybe<Scalars['String']>;
  /** The MIME type of the image, if present */
  contentType?: Maybe<Scalars['String']>;
  /** @deprecated Use width and height directly. */
  dimensions?: Maybe<Array<Scalars['Int']>>;
  /** The format of this derivative */
  format: ImageDerivativeFormat;
  /** The height of the image, if present */
  height?: Maybe<Scalars['Int']>;
  /** The maximum height this size can occupy */
  maxHeight?: Maybe<Scalars['Int']>;
  /** The maximum width this size can occupy */
  maxWidth?: Maybe<Scalars['Int']>;
  /**
   * The original filename, if one was detected during attachment.
   *
   * Filename detection is not always consistent across browsers, so this
   * may not always be present, even with a valid attachment.
   */
  originalFilename?: Maybe<Scalars['String']>;
  /**
   * The intended purpose of this image attachment. This is intended to
   * help fragments that operate solely on image subcomponents to have
   * some context for what they are without extra work.
   */
  purpose: ImagePurpose;
  /** The size of this derivative */
  size: ImageDerivativeSize;
  /**
   * This field describes how an attachment is stored in the system. If it is nil, there is no associated attachment for this field.
   * Otherwise, see the documentation for AttachmentStorage to see what the individual fields mean.
   */
  storage?: Maybe<AttachmentStorage>;
  /** The URL for the image, if present. */
  url?: Maybe<Scalars['String']>;
  /** The width of the image, if present */
  width?: Maybe<Scalars['Int']>;
};

/** The format of a specific image derivative. */
export type ImageDerivativeFormat =
  /** A more efficiently compressed image supported by most browsers worldwide. */
  | 'WEBP'
  /** A Portable Network Graphics-formatted file, for legacy support on most all browsers. */
  | 'PNG'
  | '%future added value';

/** The size of a specific image derivative. */
export type ImageDerivativeSize =
  /** A thumb-sized image, constrained to 100px wide by 100px high. */
  | 'THUMB'
  /** A small-sized image, constrained to 250px wide by 250px high. */
  | 'SMALL'
  /** A medium-sized image, constrained to 500px wide by 500px high. */
  | 'MEDIUM'
  /** A large-sized image, constrained to 750px wide by 750px high. */
  | 'LARGE'
  /** A hero-sized image, constrained to 2880px wide with no height limit. */
  | 'HERO'
  /** A logo intended to be used when the site title is hidden, constrained to 80px high with no width limit. */
  | 'SANS_TEXT'
  /** A logo intended to be used when the site title is visible, constrained to 80px wide by 80px high. */
  | 'WITH_TEXT'
  | '%future added value';

/**
 * An interface for various component types of an image attachment
 * that allow it to be identified in name and purpose.
 */
export type ImageIdentification = {
  /**
   * The original filename, if one was detected during attachment.
   *
   * Filename detection is not always consistent across browsers, so this
   * may not always be present, even with a valid attachment.
   */
  originalFilename?: Maybe<Scalars['String']>;
  /**
   * The intended purpose of this image attachment. This is intended to
   * help fragments that operate solely on image subcomponents to have
   * some context for what they are without extra work.
   */
  purpose: ImagePurpose;
};

/** Shared metadata for image attachments */
export type ImageMetadata = {
  __typename?: 'ImageMetadata';
  /** Alt text for accessible images */
  alt?: Maybe<Scalars['String']>;
};

/** Shared metadata for updating image attachments */
export type ImageMetadataInput = {
  /** Alt text for accessible images */
  alt?: Maybe<Scalars['String']>;
};

/**
 * The original source for the image. While derivatives are processing, it could be useful
 * for a temporary preview in the admin section, or for troubleshooting.
 *
 * As this is the raw image, it is not optimized for display in the frontend and is best
 * used only as a fallback.
 */
export type ImageOriginal = HasAttachmentStorage & ImageIdentification & Image & {
  __typename?: 'ImageOriginal';
  /** Alt text for accessible images */
  alt?: Maybe<Scalars['String']>;
  /** The MIME type of the image, if present */
  contentType?: Maybe<Scalars['String']>;
  /** @deprecated Use width and height directly. */
  dimensions?: Maybe<Array<Scalars['Int']>>;
  /** The height of the image, if present */
  height?: Maybe<Scalars['Int']>;
  /**
   * The original filename, if one was detected during attachment.
   *
   * Filename detection is not always consistent across browsers, so this
   * may not always be present, even with a valid attachment.
   */
  originalFilename?: Maybe<Scalars['String']>;
  /**
   * The intended purpose of this image attachment. This is intended to
   * help fragments that operate solely on image subcomponents to have
   * some context for what they are without extra work.
   */
  purpose: ImagePurpose;
  /**
   * This field describes how an attachment is stored in the system. If it is nil, there is no associated attachment for this field.
   * Otherwise, see the documentation for AttachmentStorage to see what the individual fields mean.
   */
  storage?: Maybe<AttachmentStorage>;
  /** The URL for the image, if present. */
  url?: Maybe<Scalars['String']>;
  /** The width of the image, if present */
  width?: Maybe<Scalars['Int']>;
};

/**
 * Image attachments on entities fulfill different purposes. This can
 * be used to distinguish them at the `ImageAttachment` level.
 */
export type ImagePurpose =
  /** A hero image. */
  | 'HERO_IMAGE'
  /** A logo (on a Community). */
  | 'LOGO'
  /** The logo for the site. */
  | 'SITE_LOGO'
  /** A thumbnail that appears next to the entity in lists, grids, etc. */
  | 'THUMBNAIL'
  /** A fallback for otherwise-unspecified images. */
  | 'OTHER'
  | '%future added value';

/**
 * This describes a specific derivative style
 * for an attachment, e.g. small, medium, thumb.
 *
 * It is further broken down into the various formats
 * the WDP generates, presently WEBP and PNG.
 */
export type ImageSize = ImageIdentification & {
  __typename?: 'ImageSize';
  /** Alt text for accessible images */
  alt?: Maybe<Scalars['String']>;
  /** The (maximum) height for this size. */
  height?: Maybe<Scalars['Int']>;
  /**
   * The original filename, if one was detected during attachment.
   *
   * Filename detection is not always consistent across browsers, so this
   * may not always be present, even with a valid attachment.
   */
  originalFilename?: Maybe<Scalars['String']>;
  /** A png-formatted image derivative for this particular size. */
  png: ImageDerivative;
  /**
   * The intended purpose of this image attachment. This is intended to
   * help fragments that operate solely on image subcomponents to have
   * some context for what they are without extra work.
   */
  purpose: ImagePurpose;
  size: ImageDerivativeSize;
  /** A webp-formatted image derivative for this particular size. */
  webp: ImageDerivative;
  /** The (maximum) width for this size. */
  width?: Maybe<Scalars['Int']>;
};

/**
 * Require that the `path` must include or be one of the strings provided in `value`.
 *
 * The actual value of `path` may be an array (multiselect) or string (select).
 */
export type InAnyOperatorInput = {
  path: Scalars['String'];
  value: Array<Scalars['String']>;
};

/** Configuration settings for the specific institution featured on this installation. */
export type InstitutionSettings = {
  __typename?: 'InstitutionSettings';
  /** The name of the institution. */
  name: Scalars['String'];
};

/** An object for updating the site's configuration */
export type InstitutionSettingsInput = {
  /** The name of the institution. */
  name?: Maybe<Scalars['String']>;
};

export type IntegerProperty = SchemaProperty & ScalarProperty & SearchableProperty & {
  __typename?: 'IntegerProperty';
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   */
  array: Scalars['Boolean'];
  defaultInteger?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   */
  fullPath: Scalars['String'];
  /** The purpose or intent of this property relative to its entity, parents, and others. */
  function: SchemaPropertyFunction;
  integerValue?: Maybe<Scalars['Int']>;
  /**
   * Whether to render a field as "wide" (two columns) in the form.
   * This is intended to help structure forms logically, as well as
   * provide ample space for certain types of data input, particularly
   * full-text, markdown, and other such complex fields.
   */
  isWide: Scalars['Boolean'];
  /** Provided for introspection. This describes the underlying structure of the data type. */
  kind: SchemaPropertyKind;
  label: Scalars['String'];
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   */
  orderable: Scalars['Boolean'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   */
  path: Scalars['String'];
  /**
   * Whether or not this property is required in order for the schema instance
   * to be considered valid.
   *
   * Note: invalid data provided to a schema property will still invalidate
   * the instance as a whole???the required trait only determines whether a value
   * **must** be set.
   */
  required: Scalars['Boolean'];
  searchOperators: Array<SearchOperator>;
  searchPath: Scalars['String'];
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   */
  type: SchemaPropertyType;
};

/** An item that belongs to a collection */
export type Item = Accessible & HasEntityBreadcrumbs & Entity & ReferencesGlobalEntityDates & ChildEntity & HasDoi & HasIssn & Contributable & HasSchemaProperties & Attachable & SchemaInstance & Searchable & Node & Sluggable & {
  __typename?: 'Item';
  /** Derived access control list */
  accessControlList?: Maybe<AccessControlList>;
  accessGrants: AnyCollectionAccessGrantConnection;
  /** A polymorphic connection for access grants from an entity */
  allAccessGrants: AnyAccessGrantConnection;
  /** A list of allowed actions for the given user on this entity (and its descendants). */
  allowedActions: Array<Scalars['String']>;
  /**
   * Directly fetch a defined named ancestor by its name. It can be null,
   * either because an invalid name was provided, the schema hierarchy is
   * incomplete, or the association itself is optional.
   */
  ancestorByName?: Maybe<AnyEntity>;
  /**
   * Look up an ancestor for this entity that implements a specific type. It ascends from this entity,
   * so it will first check the parent, then the grandparent, and so on.
   */
  ancestorOfType?: Maybe<AnyEntity>;
  /** Look up an announcement for this entity by slug */
  announcement?: Maybe<Announcement>;
  /** Announcements for a specific entity */
  announcements: AnnouncementConnection;
  /** The role(s) that gave the permissions to access this resource, if any. */
  applicableRoles: Array<Role>;
  /** Assets owned by this entity */
  assets: AnyAssetConnection;
  /** The role(s) that the current user could assign to other users on this entity, if applicable. */
  assignableRoles: Array<Role>;
  /** Retrieve a list of user & role assignments for this entity */
  assignedUsers: ContextualPermissionConnection;
  /** Expose all available entities for this schema property. */
  availableEntitiesFor: Array<EntitySelectOption>;
  /** Previous entries in the hierarchy */
  breadcrumbs: Array<EntityBreadcrumb>;
  /** @deprecated Use Item.items */
  children: ItemConnection;
  collection: Collection;
  community: Community;
  contributions: ItemContributionConnection;
  /** Contributors to this element */
  contributors: AnyContributorConnection;
  /** The date this entity was added to the WDP */
  createdAt: Scalars['ISO8601DateTime'];
  /** Whether the entity is _currently_ hidden, based on the server's time zone. */
  currentlyHidden: Scalars['Boolean'];
  /** Whether the entity is _currently_ visible, based on the server's time zone. */
  currentlyVisible: Scalars['Boolean'];
  /** Search and retrieve *all* descendants of this `Entity`, regardless of type. */
  descendants: EntityDescendantConnection;
  /** The Digital Object Identifier for this entity. See https://doi.org */
  doi?: Maybe<Scalars['String']>;
  /** Retrieve the first matching item beneath this item. */
  firstItem?: Maybe<Item>;
  /** Whether this item has any child items */
  hasItems: Scalars['Boolean'];
  /** A hero image for the entity, suitable for displaying in page headers */
  heroImage: ImageAttachment;
  /** Configurable metadata for the hero_image attachment */
  heroImageMetadata?: Maybe<ImageMetadata>;
  /** Whether the entity's visibility is set to `HIDDEN` */
  hidden: Scalars['Boolean'];
  /** Specify a time to check to see if the entity will be hidden. */
  hiddenAsOf: Scalars['Boolean'];
  /** If present, this is the timestamp the entity was hidden at */
  hiddenAt?: Maybe<Scalars['ISO8601DateTime']>;
  /** The depth of the hierarchical entity, taking into account any parent types */
  hierarchicalDepth: Scalars['Int'];
  id: Scalars['ID'];
  /** A machine-readable identifier for the entity. Not presently used, but will be necessary for synchronizing with upstream providers. */
  identifier: Scalars['String'];
  inCommunityOrdering?: Maybe<OrderingEntry>;
  /** The initial ordering to display for this entity. */
  initialOrdering?: Maybe<Ordering>;
  /** The International Standard Serial Number for this entity. See https://issn.org */
  issn?: Maybe<Scalars['String']>;
  /** Retrieve the items beneath this item */
  items: ItemConnection;
  leaf: Scalars['Boolean'];
  /** Available link targets for this entity */
  linkTargetCandidates: LinkTargetCandidateConnection;
  links: EntityLinkConnection;
  /**
   * Fetch a list of named ancestors for this entity. This list is deterministically sorted
   * to retrieve the "closest" ancestors first, ascending upwards in the hierarchy from there.
   *
   * **Note**: Like breadcrumbs, this association is intentionally not paginated for ease of use,
   * because in practice a schema should not have many associations.
   */
  namedAncestors: Array<NamedAncestor>;
  /** Look up an ordering for this entity by identifier */
  ordering?: Maybe<Ordering>;
  /** Look up an ordering that is set up to handle a specific schema. */
  orderingForSchema?: Maybe<Ordering>;
  /** Retrieve a connection of orderings for the parent object. */
  orderings: OrderingConnection;
  /** Look up a page for this entity by slug */
  page?: Maybe<Page>;
  pages: PageConnection;
  parent?: Maybe<ItemParent>;
  /** An array of hashes that can be requested to load in a context */
  permissions: Array<PermissionGrant>;
  /** The date this entity was published */
  published: VariablePrecisionDate;
  /** Retrieve linked items of the same schema type */
  relatedItems: ItemConnection;
  root: Scalars['Boolean'];
  schemaDefinition: SchemaDefinition;
  /** The context for our schema instance. Includes form values and necessary referents. */
  schemaInstanceContext: SchemaInstanceContext;
  /** A list of schema properties associated with this instance or version. */
  schemaProperties: Array<AnySchemaProperty>;
  /** Read a single schema property by its full path. */
  schemaProperty?: Maybe<AnySchemaProperty>;
  schemaRanks: Array<HierarchicalSchemaRank>;
  schemaVersion: SchemaVersion;
  /** Search from this level of the API using it as the origin */
  search: SearchScope;
  slug: Scalars['Slug'];
  /** A human-readable subtitle for the entity */
  subtitle?: Maybe<Scalars['String']>;
  /** A description of the contents of the entity */
  summary?: Maybe<Scalars['String']>;
  /** A representative thumbnail for the entity, suitable for displaying in lists, tables, grids, etc. */
  thumbnail: ImageAttachment;
  /** Configurable metadata for the thumbnail attachment */
  thumbnailMetadata?: Maybe<ImageMetadata>;
  /** A human-readable title for the entity */
  title: Scalars['String'];
  /** The date this entity was last updated within the WDP */
  updatedAt: Scalars['ISO8601DateTime'];
  /** Access grants for specific users */
  userAccessGrants: UserCollectionAccessGrantConnection;
  /** Not presently used */
  userGroupAccessGrants: UserGroupCollectionAccessGrantConnection;
  /** If an entity is available in the frontend */
  visibility: EntityVisibility;
  /** Whether the entity's visibility is set to `VISIBLE`. */
  visible: Scalars['Boolean'];
  /** If present, this is the timestamp an entity is visible after */
  visibleAfterAt?: Maybe<Scalars['ISO8601DateTime']>;
  /** Specify a time to check to see if the entity will be visible. */
  visibleAsOf: Scalars['Boolean'];
  /** If present, this is the timestamp an entity is visible until */
  visibleUntilAt?: Maybe<Scalars['ISO8601DateTime']>;
};


/** An item that belongs to a collection */
export type ItemAccessGrantsArgs = {
  subject?: Maybe<AccessGrantSubjectFilter>;
  order?: Maybe<SimpleOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** An item that belongs to a collection */
export type ItemAllAccessGrantsArgs = {
  subject?: Maybe<AccessGrantSubjectFilter>;
  order?: Maybe<SimpleOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** An item that belongs to a collection */
export type ItemAncestorByNameArgs = {
  name: Scalars['String'];
};


/** An item that belongs to a collection */
export type ItemAncestorOfTypeArgs = {
  schema: Scalars['String'];
};


/** An item that belongs to a collection */
export type ItemAnnouncementArgs = {
  slug: Scalars['Slug'];
};


/** An item that belongs to a collection */
export type ItemAnnouncementsArgs = {
  order?: Maybe<AnnouncementOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** An item that belongs to a collection */
export type ItemAssetsArgs = {
  order?: Maybe<SimpleOrder>;
  kind?: Maybe<AssetKindFilter>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** An item that belongs to a collection */
export type ItemAssignedUsersArgs = {
  order?: Maybe<ContextualPermissionOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** An item that belongs to a collection */
export type ItemAvailableEntitiesForArgs = {
  fullPath: Scalars['String'];
};


/** An item that belongs to a collection */
export type ItemChildrenArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** An item that belongs to a collection */
export type ItemContributionsArgs = {
  order?: Maybe<ContributionOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** An item that belongs to a collection */
export type ItemContributorsArgs = {
  order?: Maybe<ContributorOrder>;
  kind?: Maybe<ContributorFilterKind>;
  prefix?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** An item that belongs to a collection */
export type ItemDescendantsArgs = {
  scope?: Maybe<EntityDescendantScopeFilter>;
  schema?: Maybe<Array<Scalars['String']>>;
  order?: EntityDescendantOrder;
  maxDepth?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** An item that belongs to a collection */
export type ItemFirstItemArgs = {
  order?: Maybe<EntityOrder>;
  schema?: Maybe<Array<Scalars['String']>>;
  nodeFilter?: Maybe<SubtreeNodeFilter>;
};


/** An item that belongs to a collection */
export type ItemHiddenAsOfArgs = {
  time?: Maybe<Scalars['ISO8601DateTime']>;
};


/** An item that belongs to a collection */
export type ItemInCommunityOrderingArgs = {
  identifier: Scalars['String'];
};


/** An item that belongs to a collection */
export type ItemItemsArgs = {
  order?: Maybe<EntityOrder>;
  schema?: Maybe<Array<Scalars['String']>>;
  nodeFilter?: Maybe<SubtreeNodeFilter>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** An item that belongs to a collection */
export type ItemLinkTargetCandidatesArgs = {
  kind?: Maybe<LinkTargetCandidateFilter>;
  title?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** An item that belongs to a collection */
export type ItemLinksArgs = {
  order?: Maybe<SimpleOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** An item that belongs to a collection */
export type ItemOrderingArgs = {
  identifier: Scalars['String'];
};


/** An item that belongs to a collection */
export type ItemOrderingForSchemaArgs = {
  slug: Scalars['Slug'];
};


/** An item that belongs to a collection */
export type ItemOrderingsArgs = {
  order?: Maybe<OrderingOrder>;
  availability?: Maybe<OrderingAvailabilityFilter>;
  visibility?: Maybe<OrderingVisibilityFilter>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** An item that belongs to a collection */
export type ItemPageArgs = {
  slug: Scalars['String'];
};


/** An item that belongs to a collection */
export type ItemPagesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** An item that belongs to a collection */
export type ItemRelatedItemsArgs = {
  order?: Maybe<EntityOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** An item that belongs to a collection */
export type ItemSchemaPropertyArgs = {
  fullPath: Scalars['String'];
};


/** An item that belongs to a collection */
export type ItemSearchArgs = {
  maxDepth?: Maybe<Scalars['Int']>;
  visibility?: Maybe<EntityVisibilityFilter>;
};


/** An item that belongs to a collection */
export type ItemUserAccessGrantsArgs = {
  order?: Maybe<SimpleOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** An item that belongs to a collection */
export type ItemUserGroupAccessGrantsArgs = {
  order?: Maybe<SimpleOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** An item that belongs to a collection */
export type ItemVisibleAsOfArgs = {
  time?: Maybe<Scalars['ISO8601DateTime']>;
};

/** The connection type for Item. */
export type ItemConnection = Paginated & {
  __typename?: 'ItemConnection';
  /** A list of edges. */
  edges: Array<ItemEdge>;
  /** A list of nodes. */
  nodes: Array<Item>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** A contribution to an item */
export type ItemContribution = Contribution & Node & Sluggable & {
  __typename?: 'ItemContribution';
  /** A potentially-overridden value from person contributors */
  affiliation?: Maybe<Scalars['String']>;
  contributor: AnyContributor;
  contributorKind: ContributorKind;
  createdAt: Scalars['ISO8601DateTime'];
  /** A potentially-overridden display name value for all contributor types */
  displayName: Scalars['String'];
  id: Scalars['ID'];
  item: Item;
  /** A potentially-overridden value from organization contributors */
  location?: Maybe<Scalars['String']>;
  metadata: ContributionMetadata;
  /** An arbitrary text value describing the role the contributor had */
  role?: Maybe<Scalars['String']>;
  slug: Scalars['Slug'];
  /** A potentially-overridden value from person contributors */
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['ISO8601DateTime'];
};

/** The connection type for ItemContribution. */
export type ItemContributionConnection = Paginated & {
  __typename?: 'ItemContributionConnection';
  /** A list of edges. */
  edges: Array<ItemContributionEdge>;
  /** A list of nodes. */
  nodes: Array<ItemContribution>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ItemContributionEdge = {
  __typename?: 'ItemContributionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ItemContribution;
};

/** An edge in a connection. */
export type ItemEdge = {
  __typename?: 'ItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Item;
};

export type ItemParent = Collection | Item | { __typename?: "%other" };


/** Autogenerated input type of LinkEntity */
export type LinkEntityInput = {
  /** The ID for the source entity */
  sourceId: Scalars['ID'];
  /** The ID for the target entity */
  targetId: Scalars['ID'];
  /** The 'type' of link */
  operator: EntityLinkOperator;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of LinkEntity */
export type LinkEntityPayload = StandardMutationPayload & {
  __typename?: 'LinkEntityPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']>;
  /** The created or updated link, if applicable */
  link?: Maybe<EntityLink>;
};

/** A candidate for a link target, scoped to a parent source */
export type LinkTargetCandidate = Node & {
  __typename?: 'LinkTargetCandidate';
  createdAt: Scalars['ISO8601DateTime'];
  /** How deeply nested the candidate entity is */
  depth: Scalars['Int'];
  id: Scalars['ID'];
  kind: LinkTargetCandidateKind;
  /** The actual target */
  target: AnyLinkTarget;
  /** The targetID to provide to linkEntity */
  targetId: Scalars['ID'];
  /** The target entity's title */
  title: Scalars['String'];
  updatedAt: Scalars['ISO8601DateTime'];
};

/** The connection type for LinkTargetCandidate. */
export type LinkTargetCandidateConnection = Paginated & {
  __typename?: 'LinkTargetCandidateConnection';
  /** A list of edges. */
  edges: Array<LinkTargetCandidateEdge>;
  /** A list of nodes. */
  nodes: Array<LinkTargetCandidate>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type LinkTargetCandidateEdge = {
  __typename?: 'LinkTargetCandidateEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: LinkTargetCandidate;
};

/** Filter the available candidates for a link target */
export type LinkTargetCandidateFilter =
  /** Show all possible link target candidate types */
  | 'ALL'
  /** Limit to collection candidates */
  | 'COLLECTION'
  /** Limit to item candidates */
  | 'ITEM'
  | '%future added value';

/** The kind of link target candidate */
export type LinkTargetCandidateKind =
  | 'COLLECTION'
  | 'ITEM'
  | '%future added value';

export type MarkdownProperty = SchemaProperty & ScalarProperty & SearchableProperty & {
  __typename?: 'MarkdownProperty';
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   */
  array: Scalars['Boolean'];
  content?: Maybe<Scalars['String']>;
  default?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   */
  fullPath: Scalars['String'];
  /** The purpose or intent of this property relative to its entity, parents, and others. */
  function: SchemaPropertyFunction;
  /**
   * Whether to render a field as "wide" (two columns) in the form.
   * This is intended to help structure forms logically, as well as
   * provide ample space for certain types of data input, particularly
   * full-text, markdown, and other such complex fields.
   */
  isWide: Scalars['Boolean'];
  /** Provided for introspection. This describes the underlying structure of the data type. */
  kind: SchemaPropertyKind;
  label: Scalars['String'];
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   */
  orderable: Scalars['Boolean'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   */
  path: Scalars['String'];
  /**
   * Whether or not this property is required in order for the schema instance
   * to be considered valid.
   *
   * Note: invalid data provided to a schema property will still invalidate
   * the instance as a whole???the required trait only determines whether a value
   * **must** be set.
   */
  required: Scalars['Boolean'];
  searchOperators: Array<SearchOperator>;
  searchPath: Scalars['String'];
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   */
  type: SchemaPropertyType;
};

/**
 * Use full-text search on `path` to match `value`.
 *
 * As with top-level query searches, basic quoting and similar features are supported. See
 * [websearch_to_tsquery](https://www.postgresql.org/docs/13/textsearch-controls.html) for
 * more information.
 */
export type MatchesOperatorInput = {
  path: Scalars['String'];
  value: Scalars['String'];
};

export type MultiselectProperty = SchemaProperty & ScalarProperty & OptionableProperty & SearchableProperty & {
  __typename?: 'MultiselectProperty';
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   */
  array: Scalars['Boolean'];
  defaultSelections?: Maybe<Array<Scalars['String']>>;
  description?: Maybe<Scalars['String']>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   */
  fullPath: Scalars['String'];
  /** The purpose or intent of this property relative to its entity, parents, and others. */
  function: SchemaPropertyFunction;
  /**
   * Whether to render a field as "wide" (two columns) in the form.
   * This is intended to help structure forms logically, as well as
   * provide ample space for certain types of data input, particularly
   * full-text, markdown, and other such complex fields.
   */
  isWide: Scalars['Boolean'];
  /** Provided for introspection. This describes the underlying structure of the data type. */
  kind: SchemaPropertyKind;
  label: Scalars['String'];
  options: Array<SelectOption>;
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   */
  orderable: Scalars['Boolean'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   */
  path: Scalars['String'];
  /**
   * Whether or not this property is required in order for the schema instance
   * to be considered valid.
   *
   * Note: invalid data provided to a schema property will still invalidate
   * the instance as a whole???the required trait only determines whether a value
   * **must** be set.
   */
  required: Scalars['Boolean'];
  searchOperators: Array<SearchOperator>;
  searchPath: Scalars['String'];
  selections?: Maybe<Array<Scalars['String']>>;
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   */
  type: SchemaPropertyType;
};

/** The entry point for making changes to the data within the WDP API. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Change a schema version for an entity. */
  alterSchemaVersion?: Maybe<AlterSchemaVersionPayload>;
  applySchemaProperties?: Maybe<ApplySchemaPropertiesPayload>;
  /**
   * Clear any previously manually-set initial orderings for the entity.
   *
   * This mutation is safe to call if none have been set previously,
   * it will just be a no-op in that case.
   */
  clearInitialOrdering?: Maybe<ClearInitialOrderingPayload>;
  /** Create an announcement on an entity. */
  createAnnouncement?: Maybe<CreateAnnouncementPayload>;
  /** Associate an uploaded asset (already present in the Tus cache store) with an entity. */
  createAsset?: Maybe<CreateAssetPayload>;
  createCollection?: Maybe<CreateCollectionPayload>;
  /** Create a community */
  createCommunity?: Maybe<CreateCommunityPayload>;
  /** Create an item */
  createItem?: Maybe<CreateItemPayload>;
  /** Create an ordering for an entity */
  createOrdering?: Maybe<CreateOrderingPayload>;
  /** Create an organization contributor */
  createOrganizationContributor?: Maybe<CreateOrganizationContributorPayload>;
  /** Create a page on an entity. */
  createPage?: Maybe<CreatePagePayload>;
  /** Create a contributor */
  createPersonContributor?: Maybe<CreatePersonContributorPayload>;
  /**
   * Create a global role, with a set of permissions, that can be used to grant access to various parts of the hierarchy
   * in a granular fashion.
   */
  createRole?: Maybe<CreateRolePayload>;
  /** Destroy a announcement by ID. */
  destroyAnnouncement?: Maybe<DestroyAnnouncementPayload>;
  /** Destroy an asset by ID. */
  destroyAsset?: Maybe<DestroyAssetPayload>;
  /** Destroy a collection by ID. */
  destroyCollection?: Maybe<DestroyCollectionPayload>;
  /** Destroy a community by ID. */
  destroyCommunity?: Maybe<DestroyCommunityPayload>;
  /** Destroy a Contribution by ID. */
  destroyContribution?: Maybe<DestroyContributionPayload>;
  /** Destroy a contributor by ID. */
  destroyContributor?: Maybe<DestroyContributorPayload>;
  /** Destroy an EntityLink by ID. */
  destroyEntityLink?: Maybe<DestroyEntityLinkPayload>;
  /** Destroy an item by ID. */
  destroyItem?: Maybe<DestroyItemPayload>;
  /** Destroy (or disable a schema-inherited) ordering. */
  destroyOrdering?: Maybe<DestroyOrderingPayload>;
  /** Destroy a page by ID. */
  destroyPage?: Maybe<DestroyPagePayload>;
  /** Grant access to a specific hierarchical entity */
  grantAccess?: Maybe<GrantAccessPayload>;
  /** Link two entities together */
  linkEntity?: Maybe<LinkEntityPayload>;
  /**
   * A polymorphic mutation to reassign an entity to another point in the hierarchy.
   *
   * It performs validations to make sure that the parent entity can accept the child.
   */
  reparentEntity?: Maybe<ReparentEntityPayload>;
  /**
   * Reset an ordering to "factory" settings. For schema-inherited orderings,
   * this will reload its definition from the schema definition. For custom
   * orderings, this will load minimal defaults.
   */
  resetOrdering?: Maybe<ResetOrderingPayload>;
  /** Revoke access from a specific hierarchical entity */
  revokeAccess?: Maybe<RevokeAccessPayload>;
  /**
   * Specify the initial ordering for a specific entity, rather than falling back
   * to the default derivation.
   */
  selectInitialOrdering?: Maybe<SelectInitialOrderingPayload>;
  /** Update an announcement by its ID. */
  updateAnnouncement?: Maybe<UpdateAnnouncementPayload>;
  /** Update an asset by ID. */
  updateAsset?: Maybe<UpdateAssetPayload>;
  /**
   * Update an asset's attachment by ID.
   *
   * This mutation is for updating **only** an asset's attachment,
   * as opposed to the rest of its attributes (handled in `updateAsset`).
   */
  updateAssetAttachment?: Maybe<UpdateAssetAttachmentPayload>;
  /** Update a collection */
  updateCollection?: Maybe<UpdateCollectionPayload>;
  /** Update a community */
  updateCommunity?: Maybe<UpdateCommunityPayload>;
  /** Update a Contribution by ID. */
  updateContribution?: Maybe<UpdateContributionPayload>;
  /** Update the global configuration for this site. */
  updateGlobalConfiguration?: Maybe<UpdateGlobalConfigurationPayload>;
  /** Update an item */
  updateItem?: Maybe<UpdateItemPayload>;
  /** Update an ordering by ID */
  updateOrdering?: Maybe<UpdateOrderingPayload>;
  /** Update an organization contributor */
  updateOrganizationContributor?: Maybe<UpdateOrganizationContributorPayload>;
  /** Update a page. */
  updatePage?: Maybe<UpdatePagePayload>;
  /** Update a person contributor */
  updatePersonContributor?: Maybe<UpdatePersonContributorPayload>;
  /** Update the name or permissions for a given role. */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Update a user. */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Update the current viewer (i.e. you). */
  updateViewerSettings?: Maybe<UpdateViewerSettingsPayload>;
  /**
   * Upsert a Contribution by contributable & contributor ID. It will override any
   * existing contributions for the same contributor on the same entity.
   */
  upsertContribution?: Maybe<UpsertContributionPayload>;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationAlterSchemaVersionArgs = {
  input: AlterSchemaVersionInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationApplySchemaPropertiesArgs = {
  input: ApplySchemaPropertiesInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationClearInitialOrderingArgs = {
  input: ClearInitialOrderingInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationCreateAnnouncementArgs = {
  input: CreateAnnouncementInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationCreateAssetArgs = {
  input: CreateAssetInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationCreateCollectionArgs = {
  input: CreateCollectionInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationCreateCommunityArgs = {
  input: CreateCommunityInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationCreateItemArgs = {
  input: CreateItemInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationCreateOrderingArgs = {
  input: CreateOrderingInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationCreateOrganizationContributorArgs = {
  input: CreateOrganizationContributorInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationCreatePageArgs = {
  input: CreatePageInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationCreatePersonContributorArgs = {
  input: CreatePersonContributorInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationCreateRoleArgs = {
  input: CreateRoleInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationDestroyAnnouncementArgs = {
  input: DestroyAnnouncementInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationDestroyAssetArgs = {
  input: DestroyAssetInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationDestroyCollectionArgs = {
  input: DestroyCollectionInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationDestroyCommunityArgs = {
  input: DestroyCommunityInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationDestroyContributionArgs = {
  input: DestroyContributionInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationDestroyContributorArgs = {
  input: DestroyContributorInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationDestroyEntityLinkArgs = {
  input: DestroyEntityLinkInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationDestroyItemArgs = {
  input: DestroyItemInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationDestroyOrderingArgs = {
  input: DestroyOrderingInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationDestroyPageArgs = {
  input: DestroyPageInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationGrantAccessArgs = {
  input: GrantAccessInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationLinkEntityArgs = {
  input: LinkEntityInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationReparentEntityArgs = {
  input: ReparentEntityInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationResetOrderingArgs = {
  input: ResetOrderingInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationRevokeAccessArgs = {
  input: RevokeAccessInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationSelectInitialOrderingArgs = {
  input: SelectInitialOrderingInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationUpdateAnnouncementArgs = {
  input: UpdateAnnouncementInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationUpdateAssetArgs = {
  input: UpdateAssetInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationUpdateAssetAttachmentArgs = {
  input: UpdateAssetAttachmentInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationUpdateCollectionArgs = {
  input: UpdateCollectionInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationUpdateCommunityArgs = {
  input: UpdateCommunityInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationUpdateContributionArgs = {
  input: UpdateContributionInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationUpdateGlobalConfigurationArgs = {
  input: UpdateGlobalConfigurationInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationUpdateItemArgs = {
  input: UpdateItemInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationUpdateOrderingArgs = {
  input: UpdateOrderingInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationUpdateOrganizationContributorArgs = {
  input: UpdateOrganizationContributorInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationUpdatePageArgs = {
  input: UpdatePageInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationUpdatePersonContributorArgs = {
  input: UpdatePersonContributorInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationUpdateRoleArgs = {
  input: UpdateRoleInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationUpdateViewerSettingsArgs = {
  input: UpdateViewerSettingsInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationUpsertContributionArgs = {
  input: UpsertContributionInput;
};

/** An error for a specific attribute in a mutation???intended for use with react-hook-form and similarly shaped structures */
export type MutationAttributeError = {
  __typename?: 'MutationAttributeError';
  /** The accumulated messages for this combination of path and type */
  messages: Array<Scalars['String']>;
  /** The attribute that should have the error */
  path: Scalars['String'];
  /** A grouping type for the attribute */
  type: Scalars['String'];
};

export type MutationErrorScope =
  | 'GLOBAL'
  | 'ATTRIBUTE'
  | '%future added value';

/** An error that encapsulates the entire mutation input and is not tied to a specific input field. */
export type MutationGlobalError = {
  __typename?: 'MutationGlobalError';
  /** The actual message */
  message: Scalars['String'];
  type: Scalars['String'];
};

/**
 * Entity schemas can define named ancestors, which allows UI developers to refer
 * authoritatively to significant relatives in an entity's ancestor. This object
 * represents the connection between an originating entity and its ancestors,
 * should any be defined for the schema.
 */
export type NamedAncestor = {
  __typename?: 'NamedAncestor';
  /** The actual ancestor */
  ancestor: AnyEntity;
  /** The depth of the ancestor in the hierarchy */
  ancestorDepth: Scalars['Int'];
  /** The name of the ancestor. Guaranteed to be unique for this specific entity. */
  name: Scalars['String'];
  /** The relative depth of the originating entity */
  originDepth: Scalars['Int'];
  /**
   * The relative depth from the source entity to its ancestor. In other words, `(origin_depth - ancestor_depth)`.
   * Used for sorting ancestors deterministically.
   */
  relativeDepth: Scalars['Int'];
};

/** An object with an ID. */
export type Node = {
  /** ID of the object. */
  id: Scalars['ID'];
};

/** The priority for NULL values when sorting */
export type NullOrderPriority =
  | 'LAST'
  | 'FIRST'
  | '%future added value';

/**
 * Require that `path ??? value` while enforcing that value is numeric.
 *
 * Note: this will also work for integer paths. Coercion is handled
 * transparently by the API.
 */
export type NumericGteOperatorInput = {
  path: Scalars['String'];
  value: Scalars['Float'];
};

/**
 * Require that `path ??? value` while enforcing that value is numeric.
 *
 * Note: this will also work for integer paths. Coercion is handled
 * transparently by the API.
 */
export type NumericLteOperatorInput = {
  path: Scalars['String'];
  value: Scalars['Float'];
};

export type OptionableProperty = {
  options: Array<SelectOption>;
};

/**
 * The boolean result of evaluating the left and right predicates. At least one must be true.
 *
 * While this is implemented, it is not likely that the first version of the search
 * UI will utilize it. It is intended for advanced searching.
 */
export type OrOperatorInput = {
  left: SearchPredicateInput;
  right: SearchPredicateInput;
};

/** Ordering for a specific column */
export type OrderDefinition = {
  __typename?: 'OrderDefinition';
  direction: Direction;
  nulls: NullOrderPriority;
  path: Scalars['String'];
};

/** Ordering for a specific column */
export type OrderDefinitionInput = {
  path: Scalars['String'];
  direction?: Maybe<Direction>;
  nulls?: Maybe<NullOrderPriority>;
};

/** An ordering that belongs to an entity and arranges its children in a pre-configured way */
export type Ordering = Node & Sluggable & {
  __typename?: 'Ordering';
  children: OrderingEntryConnection;
  /** A constant ordering should be treated as not being able to invert itself. */
  constant: Scalars['Boolean'];
  /** The number of entries currently visible within the ordering */
  count: Scalars['Int'];
  createdAt: Scalars['ISO8601DateTime'];
  /** Whether the ordering has been disabled???orderings inherited from schemas will be disabled if deleted. */
  disabled: Scalars['Boolean'];
  /** The time the ordering was disabled, if applicable */
  disabledAt?: Maybe<Scalars['ISO8601Date']>;
  /** The entity that owns the ordering */
  entity: AnyEntity;
  filter: OrderingFilterDefinition;
  /** Optional markdown content to render after the children */
  footer?: Maybe<Scalars['String']>;
  /** Optional markdown content to render before the children */
  header?: Maybe<Scalars['String']>;
  /**
   * A hidden ordering represents an ordering that should not be shown in the frontend,
   * when iterating over an entity's available orderings. It does not affect access, as
   * hidden orderings may still serve a functional purpose for their schema.
   */
  hidden: Scalars['Boolean'];
  id: Scalars['ID'];
  /** A unique identifier for the ordering within the context of its parent entity. */
  identifier: Scalars['String'];
  /** Whether the ordering was inherited from its entity's schema definition */
  inheritedFromSchema: Scalars['Boolean'];
  /** Whether this ordering serves as the initial ordering for its parent entity */
  initial: Scalars['Boolean'];
  /** An optional, human-readable name for the ordering */
  name?: Maybe<Scalars['String']>;
  order: Array<OrderDefinition>;
  /**
   * For orderings that are `inheritedFromSchema`, this tracks whether or not the
   * entity has been modified from the schema's definition. It is always false
   * for custom, user-created orderings.
   */
  pristine: Scalars['Boolean'];
  /** Configuration for how to render an ordering and its entries. */
  render: OrderingRenderDefinition;
  select: OrderingSelectDefinition;
  slug: Scalars['Slug'];
  /**
   * A tree ordering has some special handling to return entities
   * in deterministic order based on their hierarchical position
   * and relation to other entities in the same ordering.
   *
   * This is effectively a shortcut for `Ordering.render.mode === "TREE"`.
   */
  tree: Scalars['Boolean'];
  updatedAt: Scalars['ISO8601DateTime'];
};


/** An ordering that belongs to an entity and arranges its children in a pre-configured way */
export type OrderingChildrenArgs = {
  order?: Maybe<OrderingEntrySortMode>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};

/** An ordering's availability refers to it being enabled or disabled. */
export type OrderingAvailabilityFilter =
  /** Do not filter orderings by whether they are enabled or disabled. */
  | 'ALL'
  /** Fetch only *enabled* orderings. */
  | 'ENABLED'
  /** Fetch only *disabled* orderings. */
  | 'DISABLED'
  | '%future added value';

/** The connection type for Ordering. */
export type OrderingConnection = Paginated & {
  __typename?: 'OrderingConnection';
  /** A list of edges. */
  edges: Array<OrderingEdge>;
  /** A list of nodes. */
  nodes: Array<Ordering>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type OrderingDirectSelection =
  | 'NONE'
  | 'CHILDREN'
  | 'DESCENDANTS'
  | '%future added value';

/** An edge in a connection. */
export type OrderingEdge = {
  __typename?: 'OrderingEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Ordering;
};

/** An entry within an ordering, it can refer to an entity or an entity link */
export type OrderingEntry = Node & Sluggable & {
  __typename?: 'OrderingEntry';
  /**
   * When the associated `Ordering` is a `TREE`, and the current entry is a leaf, this array can be used
   * to get the associated ancestors within the entry that
   */
  ancestors: Array<OrderingEntry>;
  createdAt: Scalars['ISO8601DateTime'];
  /**
   * The actual element being ordered. At present, this will only be a `Community`, `Collection`, or `Item`,
   * but future implementations of orderings may include other content, such as presentation elements.
   */
  entry: AnyOrderingEntry;
  /**
   * The delegated `slug` from the associated `entry`.
   *
   * This can be null because future entries may not implement it.
   */
  entrySlug?: Maybe<Scalars['Slug']>;
  /**
   * The delegated `title` from the associated `entry`.
   *
   * This can be null because future entries may not implement it.
   */
  entryTitle?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The next entry in the current ordering, if one exists. This will be null if this entry is the last. */
  nextSibling?: Maybe<OrderingEntry>;
  /** The parent ordering */
  ordering: Ordering;
  /** The previous entry in the current ordering, if one exists. This will be null if this entry is the first. */
  prevSibling?: Maybe<OrderingEntry>;
  /** A calculation of the depth of an entry in the hierarchy, relative to the ordering's owning entity. */
  relativeDepth: Scalars['Int'];
  slug: Scalars['Slug'];
  /**
   * When an ordering's render mode is set to TREE, its entries will have this set.
   * It is a normalized depth based on what other entities were accepted into the ordering.
   */
  treeDepth?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['ISO8601DateTime'];
};

/** The connection type for OrderingEntry. */
export type OrderingEntryConnection = Paginated & {
  __typename?: 'OrderingEntryConnection';
  /** A list of edges. */
  edges: Array<OrderingEntryEdge>;
  /** A list of nodes. */
  nodes: Array<OrderingEntry>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type OrderingEntryEdge = {
  __typename?: 'OrderingEntryEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: OrderingEntry;
};

/** When fetching entries from an ordering, you can swap between the default or a special 'inverted' mode */
export type OrderingEntrySortMode =
  /** Retrieve the ordering entries as defined by default */
  | 'DEFAULT'
  /** Retrieve the ordering entries in an inverted order, accounting for paths */
  | 'INVERSE'
  | '%future added value';

/**
 * A collection of settings for filtering what appears what entities
 * may populate an ordering. At present, this only supports schemas.
 */
export type OrderingFilterDefinition = {
  __typename?: 'OrderingFilterDefinition';
  /**
   * If set, any child or descendant that matches one of these schemas will
   * be availabel to be included in the ordering.
   */
  schemas: Array<OrderingSchemaFilter>;
};

/**
 * A collection of settings for filtering what appears what entities
 * may populate an ordering. At present, this only supports schemas.
 */
export type OrderingFilterDefinitionInput = {
  /**
   * If set, any child or descendant that matches one of these schemas will
   * be availabel to be included in the ordering.
   */
  schemas?: Maybe<Array<OrderingSchemaFilterInput>>;
};

/** An enum used to order `Ordering`s. It uses `DETERMINISTIC` by default to ensure a consistent rendering experience. */
export type OrderingOrder =
  /** Sort orderings by their static position of the ordering, falling back to the name if unset. */
  | 'DETERMINISTIC'
  /** Sort orderings by newest created date */
  | 'RECENT'
  /** Sort orderings by oldest created date */
  | 'OLDEST'
  | '%future added value';

/** This represents a valid path that can be used for orderings. */
export type OrderingPath = {
  /** A helpful description of the path */
  description?: Maybe<Scalars['String']>;
  /** A logical grouping for ordering paths */
  grouping: OrderingPathGrouping;
  /** A human-readable label for the path */
  label: Scalars['String'];
  /** Some paths may have a prefix. For instance, schema properties will have the name of the schema. */
  labelPrefix?: Maybe<Scalars['String']>;
  /** The exact path that should be provided to mutation inputs. */
  path: Scalars['String'];
  /** The schema property type */
  type: SchemaPropertyType;
};

/** A logical grouping for ordering paths. */
export type OrderingPathGrouping =
  /** Static properties that are directly on an entity. */
  | 'ENTITY'
  /** Static properties that are derived from a link. */
  | 'LINK'
  /**
   * Paths under this type come from a schema. Not every entity is guaranteed
   * to have one, and in orderings with mixed entities, missing props will be
   * treated as null.
   */
  | 'PROPS'
  /** Static properties that are derived from a schema. */
  | 'SCHEMA'
  | '%future added value';

/** Configuration for controlling how an ordering renders itself and its entries. */
export type OrderingRenderDefinition = {
  __typename?: 'OrderingRenderDefinition';
  /** How to render entries within */
  mode: OrderingRenderMode;
};

/** Describe how an ordering should render its entries. */
export type OrderingRenderDefinitionInput = {
  mode?: Maybe<OrderingRenderMode>;
};

/** How entries in an ordering should be rendered. */
export type OrderingRenderMode =
  /**
   * The default for most orderings. Every ordering is considered to be on
   * the same level of the hierarchy, and positions are calculated based
   * solely on the paths.
   */
  | 'FLAT'
  /**
   * A special mode for handling orderings that should operate like a tree. In this setting,
   * entries will be calculated first as though they were flat, then analyzed in order to
   * adjust the positioning to account for the entry's ancestors and position relative to
   * other entries in the ordering.
   */
  | 'TREE'
  | '%future added value';

/** This defines a specific schema that an ordering can filter its entries by */
export type OrderingSchemaFilter = {
  __typename?: 'OrderingSchemaFilter';
  /** The identifier within the namespace for the schema. */
  identifier: Scalars['String'];
  /** The namespace the schema occupies. */
  namespace: Scalars['String'];
  /** An optional version requirement for the associated schema. */
  version?: Maybe<Scalars['VersionRequirement']>;
};

/** This defines a specific schema that an ordering can filter its entries by */
export type OrderingSchemaFilterInput = {
  /** The namespace the schema occupies. */
  namespace: Scalars['String'];
  /** The identifier within the namespace for the schema. */
  identifier: Scalars['String'];
  /**
   * An optional version requirement for this ordering. It supports
   * Ruby's version declaration syntax, so you can provide a value
   * like `">= 1.2"` to match against semantically-versioned schemas.
   */
  version?: Maybe<Scalars['VersionRequirement']>;
};

/** Defines how an ordering should select its entries. */
export type OrderingSelectDefinition = {
  __typename?: 'OrderingSelectDefinition';
  direct: OrderingDirectSelection;
  links: OrderingSelectLinkDefinition;
};

/** Define how an ordering should select its entries */
export type OrderingSelectDefinitionInput = {
  direct?: Maybe<OrderingDirectSelection>;
  links?: Maybe<OrderingSelectLinkDefinitionInput>;
};

/** Describes how an ordering should select its links. */
export type OrderingSelectLinkDefinition = {
  __typename?: 'OrderingSelectLinkDefinition';
  contains: Scalars['Boolean'];
  references: Scalars['Boolean'];
};

/** Describe how an ordering should select its links. */
export type OrderingSelectLinkDefinitionInput = {
  contains?: Maybe<Scalars['Boolean']>;
  references?: Maybe<Scalars['Boolean']>;
};

export type OrderingVisibilityFilter =
  /** Do not filter orderings by their visibility. */
  | 'ALL'
  /** Fetch only *visible* orderings. This has no bearing on the ordering's *availability*. */
  | 'VISIBLE'
  /** Fetch only *hidden* orderings. */
  | 'HIDDEN'
  | '%future added value';

/** An organization that has made contributions */
export type OrganizationContributor = Contributor & Node & Sluggable & {
  __typename?: 'OrganizationContributor';
  bio?: Maybe<Scalars['String']>;
  /** The total number of collection contributions from this contributor */
  collectionContributionCount: Scalars['Int'];
  collectionContributions: CollectionContributionConnection;
  /** The total number of contributions (item + collection) from this contributor */
  contributionCount: Scalars['Int'];
  createdAt: Scalars['ISO8601DateTime'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  identifier: Scalars['String'];
  /** An optional image associated with the contributor. */
  image: ImageAttachment;
  /** Configurable metadata for the image attachment */
  imageMetadata?: Maybe<ImageMetadata>;
  /** The total number of item contributions from this contributor */
  itemContributionCount: Scalars['Int'];
  itemContributions: ItemContributionConnection;
  kind: ContributorKind;
  legalName?: Maybe<Scalars['String']>;
  links: Array<ContributorLink>;
  location?: Maybe<Scalars['String']>;
  /** A display name, independent of the type of contributor */
  name: Scalars['String'];
  /** An optional, unique [**O**pen **R**esearcher and **C**ontributor **ID**](https://orcid.org) associated with this contributor. */
  orcid?: Maybe<Scalars['String']>;
  prefix?: Maybe<Scalars['String']>;
  slug: Scalars['Slug'];
  suffix?: Maybe<Scalars['String']>;
  updatedAt: Scalars['ISO8601DateTime'];
  url?: Maybe<Scalars['String']>;
};


/** An organization that has made contributions */
export type OrganizationContributorCollectionContributionsArgs = {
  order?: Maybe<ContributionOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** An organization that has made contributions */
export type OrganizationContributorItemContributionsArgs = {
  order?: Maybe<ContributionOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};

/** A page of arbitrary content for an entity */
export type Page = Node & {
  __typename?: 'Page';
  body: Scalars['String'];
  createdAt: Scalars['ISO8601DateTime'];
  entity: AnyEntity;
  /** The hero image for a page */
  heroImage: ImageAttachment;
  /** Configurable metadata for the hero_image attachment */
  heroImageMetadata?: Maybe<ImageMetadata>;
  id: Scalars['ID'];
  position?: Maybe<Scalars['Int']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['ISO8601DateTime'];
};

/** The connection type for Page. */
export type PageConnection = Paginated & {
  __typename?: 'PageConnection';
  /** A list of edges. */
  edges: Array<PageEdge>;
  /** A list of nodes. */
  nodes: Array<Page>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** Determines the direction that page-number based pagination should flow */
export type PageDirection =
  | 'FORWARDS'
  | 'BACKWARDS'
  | '%future added value';

/** An edge in a connection. */
export type PageEdge = {
  __typename?: 'PageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Page;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** The page (if page-based pagination is supported and one was provided, does not introspect a value with cursor-based pagination) */
  page?: Maybe<Scalars['Int']>;
  /** The total number of pages available to the connection (if page-based pagination supported and a page was provided) */
  pageCount?: Maybe<Scalars['Int']>;
  /** The number of edges/nodes per page (if page-based pagination supported and a page was provided) */
  perPage?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** The total number of nodes available to this connection, constrained by applied filters (if any) */
  totalCount: Scalars['Int'];
  /** The total number of nodes available to this connection, independent of any filters */
  totalUnfilteredCount: Scalars['Int'];
};

/** Connections can be paginated by cursor or number. */
export type Paginated = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** A grant of a specific permission within a specific scope. */
export type PermissionGrant = {
  __typename?: 'PermissionGrant';
  /** Whether this permission has been granted in the current context. */
  allowed: Scalars['Boolean'];
  /** The unqualified, single name for this permission. */
  name: Scalars['String'];
  /** The fully-qualified path for this permission (composed of scope + name). */
  path: Scalars['String'];
  /** The scope (or namespace) for this permission. */
  scope?: Maybe<Scalars['String']>;
};

/** A mapping of permissions specific to a certain scope */
export type PermissionGrid = {
  /** A list of allowed actions for the given user on this entity (and its descendants). */
  allowedActions: Array<Scalars['String']>;
  /** An array of hashes that can be requested to load in a context */
  permissions: Array<PermissionGrant>;
};

/** A person that has made contributions */
export type PersonContributor = Contributor & Node & Sluggable & {
  __typename?: 'PersonContributor';
  affiliation?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  /** The total number of collection contributions from this contributor */
  collectionContributionCount: Scalars['Int'];
  collectionContributions: CollectionContributionConnection;
  /** The total number of contributions (item + collection) from this contributor */
  contributionCount: Scalars['Int'];
  createdAt: Scalars['ISO8601DateTime'];
  email?: Maybe<Scalars['String']>;
  familyName?: Maybe<Scalars['String']>;
  givenName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  identifier: Scalars['String'];
  /** An optional image associated with the contributor. */
  image: ImageAttachment;
  /** Configurable metadata for the image attachment */
  imageMetadata?: Maybe<ImageMetadata>;
  /** The total number of item contributions from this contributor */
  itemContributionCount: Scalars['Int'];
  itemContributions: ItemContributionConnection;
  kind: ContributorKind;
  links: Array<ContributorLink>;
  /** A display name, independent of the type of contributor */
  name: Scalars['String'];
  /** An optional, unique [**O**pen **R**esearcher and **C**ontributor **ID**](https://orcid.org) associated with this contributor. */
  orcid?: Maybe<Scalars['String']>;
  prefix?: Maybe<Scalars['String']>;
  slug: Scalars['Slug'];
  suffix?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['ISO8601DateTime'];
  url?: Maybe<Scalars['String']>;
};


/** A person that has made contributions */
export type PersonContributorCollectionContributionsArgs = {
  order?: Maybe<ContributionOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** A person that has made contributions */
export type PersonContributorItemContributionsArgs = {
  order?: Maybe<ContributionOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};

/** When altering a schema version for an entity, there are various strategies that can be used to determine how to handle the provided properties. */
export type PropertyApplicationStrategy =
  /** If set to this value, property values will be validated and applied */
  | 'APPLY'
  /** If set to this value, property values will not be applied, and the entity will likely exist in an invalid state. */
  | 'SKIP'
  | '%future added value';

/** The entry point for retrieving data from within the WDP API. */
export type Query = Searchable & {
  __typename?: 'Query';
  /** Retrieve all access grants */
  accessGrants: AnyAccessGrantConnection;
  /** Look up an asset by slug */
  asset?: Maybe<AnyAsset>;
  /** Look up a collection by slug */
  collection?: Maybe<Collection>;
  /** Look up a collection contribution by slug */
  collectionContribution?: Maybe<CollectionContribution>;
  /** List all communities */
  communities: CommunityConnection;
  /** Look up a community by slug */
  community?: Maybe<Community>;
  /** Look up a community by its title */
  communityByTitle?: Maybe<Community>;
  /** Look up a contributor by slug */
  contributor?: Maybe<AnyContributor>;
  /** Look up a contributor `by` a certain `value`. */
  contributorLookup?: Maybe<AnyContributor>;
  /** A list of all contributors in the system */
  contributors: AnyContributorConnection;
  /** Fetch the global configuration for this installation */
  globalConfiguration: GlobalConfiguration;
  /** Look up an item by slug */
  item?: Maybe<Item>;
  /** Look up an item contribution by slug */
  itemContribution?: Maybe<ItemContribution>;
  /** Fetches an object given its ID. */
  node?: Maybe<Node>;
  /** Fetches a list of objects given a list of IDs. */
  nodes: Array<Maybe<Node>>;
  /** A list of ordering paths for creating and updating orderings. */
  orderingPaths: Array<AnyOrderingPath>;
  /** List all roles */
  roles: RoleConnection;
  /** Look up a schema definition by slug */
  schemaDefinition?: Maybe<SchemaDefinition>;
  /** List all schema definitions */
  schemaDefinitions: SchemaDefinitionConnection;
  /** Look up a schema version by slug */
  schemaVersion?: Maybe<SchemaVersion>;
  /** List all options for schema versions */
  schemaVersionOptions: Array<SchemaVersionOption>;
  /** List all schema versions */
  schemaVersions: SchemaVersionConnection;
  /** Search from this level of the API using it as the origin */
  search: SearchScope;
  /** A helper field that is used to look up various details about the WDP-API ecosystem. */
  systemInfo: SystemInfo;
  /** Look up a user by slug */
  user?: Maybe<User>;
  /** A list of all users in the system */
  users: UserConnection;
  /** The currently authenticated user. AKA: you */
  viewer: User;
};


/** The entry point for retrieving data from within the WDP API. */
export type QueryAccessGrantsArgs = {
  entity?: Maybe<AccessGrantEntityFilter>;
  subject?: Maybe<AccessGrantSubjectFilter>;
  order?: Maybe<SimpleOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** The entry point for retrieving data from within the WDP API. */
export type QueryAssetArgs = {
  slug: Scalars['Slug'];
};


/** The entry point for retrieving data from within the WDP API. */
export type QueryCollectionArgs = {
  slug: Scalars['Slug'];
};


/** The entry point for retrieving data from within the WDP API. */
export type QueryCollectionContributionArgs = {
  slug: Scalars['Slug'];
};


/** The entry point for retrieving data from within the WDP API. */
export type QueryCommunitiesArgs = {
  order?: Maybe<EntityOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** The entry point for retrieving data from within the WDP API. */
export type QueryCommunityArgs = {
  slug: Scalars['Slug'];
};


/** The entry point for retrieving data from within the WDP API. */
export type QueryCommunityByTitleArgs = {
  title: Scalars['String'];
};


/** The entry point for retrieving data from within the WDP API. */
export type QueryContributorArgs = {
  slug: Scalars['Slug'];
};


/** The entry point for retrieving data from within the WDP API. */
export type QueryContributorLookupArgs = {
  by: ContributorLookupField;
  value: Scalars['String'];
  order?: SimpleOrder;
};


/** The entry point for retrieving data from within the WDP API. */
export type QueryContributorsArgs = {
  order?: Maybe<ContributorOrder>;
  kind?: Maybe<ContributorFilterKind>;
  prefix?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** The entry point for retrieving data from within the WDP API. */
export type QueryItemArgs = {
  slug: Scalars['Slug'];
};


/** The entry point for retrieving data from within the WDP API. */
export type QueryItemContributionArgs = {
  slug: Scalars['Slug'];
};


/** The entry point for retrieving data from within the WDP API. */
export type QueryNodeArgs = {
  id: Scalars['ID'];
};


/** The entry point for retrieving data from within the WDP API. */
export type QueryNodesArgs = {
  ids: Array<Scalars['ID']>;
};


/** The entry point for retrieving data from within the WDP API. */
export type QueryOrderingPathsArgs = {
  schemas?: Maybe<Array<OrderingSchemaFilterInput>>;
};


/** The entry point for retrieving data from within the WDP API. */
export type QueryRolesArgs = {
  order?: Maybe<RoleOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** The entry point for retrieving data from within the WDP API. */
export type QuerySchemaDefinitionArgs = {
  slug: Scalars['Slug'];
};


/** The entry point for retrieving data from within the WDP API. */
export type QuerySchemaDefinitionsArgs = {
  order?: Maybe<SimpleOrder>;
  namespace?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** The entry point for retrieving data from within the WDP API. */
export type QuerySchemaVersionArgs = {
  slug: Scalars['Slug'];
};


/** The entry point for retrieving data from within the WDP API. */
export type QuerySchemaVersionOptionsArgs = {
  kind?: Maybe<SchemaKind>;
  namespace?: Maybe<Scalars['String']>;
};


/** The entry point for retrieving data from within the WDP API. */
export type QuerySchemaVersionsArgs = {
  namespace?: Maybe<Scalars['String']>;
  order?: Maybe<SchemaVersionOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** The entry point for retrieving data from within the WDP API. */
export type QuerySearchArgs = {
  maxDepth?: Maybe<Scalars['Int']>;
  visibility?: Maybe<EntityVisibilityFilter>;
};


/** The entry point for retrieving data from within the WDP API. */
export type QueryUserArgs = {
  slug: Scalars['Slug'];
};


/** The entry point for retrieving data from within the WDP API. */
export type QueryUsersArgs = {
  order?: Maybe<UserOrder>;
  prefix?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};

/**
 * An interface for retrieving certain shared, common variable-precision dates
 * that are associated with events in the publication, collection, and release
 * of an entity.
 */
export type ReferencesGlobalEntityDates = {
  /** The date this entity was published */
  published: VariablePrecisionDate;
};

/** Autogenerated input type of ReparentEntity */
export type ReparentEntityInput = {
  /** The collection in need of a new parent */
  childId: Scalars['ID'];
  /**
   * The ID for the new parent entity. For children of the collection type, this
   * must be a community or another collection. For children of the item type,
   * this must be a collection or another item.
   */
  parentId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of ReparentEntity */
export type ReparentEntityPayload = StandardMutationPayload & {
  __typename?: 'ReparentEntityPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** If the child was successfully reparented, this field will be populated */
  child?: Maybe<AnyChildEntity>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of ResetOrdering */
export type ResetOrderingInput = {
  orderingId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of ResetOrdering */
export type ResetOrderingPayload = StandardMutationPayload & {
  __typename?: 'ResetOrderingPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']>;
  ordering?: Maybe<Ordering>;
};

/** Autogenerated input type of RevokeAccess */
export type RevokeAccessInput = {
  entityId: Scalars['ID'];
  roleId: Scalars['ID'];
  userId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of RevokeAccess */
export type RevokeAccessPayload = StandardMutationPayload & {
  __typename?: 'RevokeAccessPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  entity?: Maybe<AnyEntity>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']>;
  /** Whether or not access was revoked */
  revoked?: Maybe<Scalars['Boolean']>;
};

/** A named role in the WDP API */
export type Role = ExposesEffectiveAccess & Node & Sluggable & {
  __typename?: 'Role';
  /** The access control list for this specific role */
  accessControlList: AccessControlList;
  /** A list of action names that have been granted to this role */
  allowedActions: Array<Scalars['String']>;
  createdAt: Scalars['ISO8601DateTime'];
  /** Only relevant for `custom` roles, this affects sorting. */
  customPriority?: Maybe<Scalars['Int']>;
  /** User-specific access permissions for this object. */
  effectiveAccess: EffectiveAccess;
  /** The global access control list that this assigned role implies, based on its sort order. */
  globalAccessControlList: GlobalAccessControlList;
  /** A list of global action names that this role implies, based on its sort order. */
  globalAllowedActions: Array<Scalars['String']>;
  id: Scalars['ID'];
  /**
   * For `system` roles, this will be populated with the unique identifier
   * that marks this as a system role.
   */
  identifier?: Maybe<RoleSystemIdentifier>;
  /** The specific kind of role this is, based on how it entered the WDP-API. */
  kind: RoleKind;
  /** The human readable name of the role within the system */
  name: Scalars['String'];
  /**
   * Surfaced from the accessControlList for convenience, these are returned as
   * an array that allows a user to check for the state of all possible roles
   * without having to specify them explicitly in the GraphQL request
   */
  permissions: Array<PermissionGrant>;
  /**
   * Used internally to sort roles and ensure certain role types are above
   * and below others, irrespective of priority.
   */
  primacy: RolePrimacy;
  /**
   * The calculated sort priority for this role.
   *
   * * For `custom` roles, it is based on `custom_priority`.
   * * For `system` roles, it is based on hard-coded values within the system
   *   and cannot be modified.
   */
  priority: Scalars['Int'];
  slug: Scalars['Slug'];
  updatedAt: Scalars['ISO8601DateTime'];
};

/** The connection type for Role. */
export type RoleConnection = Paginated & {
  __typename?: 'RoleConnection';
  /** A list of edges. */
  edges: Array<RoleEdge>;
  /** A list of nodes. */
  nodes: Array<Role>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type RoleEdge = {
  __typename?: 'RoleEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Role;
};

/** A categorization of a `Role` based on how it gets into the WDP-API. */
export type RoleKind =
  /** Custom roles are created and managed through the `createRole`, `updateRole`, and `destroyRole` mutations. */
  | 'CUSTOM'
  /** System roles are shipped by default with WDP-API and cannot be modified. */
  | 'SYSTEM'
  | '%future added value';

/** Sort roles by a specific property and order */
export type RoleOrder =
  /** Sort roles by default priority within the system */
  | 'DEFAULT'
  /** Sort roles by newest created date */
  | 'RECENT'
  /** Sort roles by oldest created date */
  | 'OLDEST'
  /** Sort roles by their name A-Z */
  | 'NAME_ASCENDING'
  /** Sort roles by their name Z-A */
  | 'NAME_DESCENDING'
  | '%future added value';

/** The level of importance any given role has when it comes to determing what a user's "primary" role is. */
export type RolePrimacy =
  /** Values with this primacy level take priority over all others. They cannot be directly assigned through the API. */
  | 'HIGH'
  /** Values with this primacy level are the default. Any custom roles will be in this scope. */
  | 'DEFAULT'
  /** Values with this primacy level are always sorted after every other role. */
  | 'LOW'
  | '%future added value';

/** This will identify _which_ `system` role this is, if applicable. See `RoleKind` for more information. */
export type RoleSystemIdentifier =
  /** A global administrator. This role cannot be directly assigned. */
  | 'ADMIN'
  /**
   * A manager can be assigned to handle most `Community` and other entity management concerns.
   *
   * They can also appoint other roles (except for other managers) to any entity they manage.
   */
  | 'MANAGER'
  /** An editor has basic update permissions for a specific point in the hierarchy. */
  | 'EDITOR'
  /**
   * A reader is anyone who has been given explicit read-access to an entity.
   * This role is primarily used by the administration UI.
   *
   * **Note**: Anonymous users can still view public entities in the frontend.
   */
  | 'READER'
  | '%future added value';

/** A property on a `SchemaInstance`. */
export type ScalarProperty = {
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   */
  array: Scalars['Boolean'];
  /**
   * A human-readable description for the property. It should describe the purpose of the
   * property as well as some details about the types of values it looks for.
   *
   * It can be rendered as help text, hints, etc.
   */
  description?: Maybe<Scalars['String']>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   */
  fullPath: Scalars['String'];
  /** The purpose or intent of this property relative to its entity, parents, and others. */
  function: SchemaPropertyFunction;
  /**
   * Whether to render a field as "wide" (two columns) in the form.
   * This is intended to help structure forms logically, as well as
   * provide ample space for certain types of data input, particularly
   * full-text, markdown, and other such complex fields.
   */
  isWide: Scalars['Boolean'];
  /** Provided for introspection. This describes the underlying structure of the data type. */
  kind: SchemaPropertyKind;
  /** A human-readable label for the schema property. */
  label: Scalars['String'];
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   */
  orderable: Scalars['Boolean'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   */
  path: Scalars['String'];
  /**
   * Whether or not this property is required in order for the schema instance
   * to be considered valid.
   *
   * Note: invalid data provided to a schema property will still invalidate
   * the instance as a whole???the required trait only determines whether a value
   * **must** be set.
   */
  required: Scalars['Boolean'];
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   */
  type: SchemaPropertyType;
};

/** Configuration for controlling how instances handle specific optional core properties. */
export type SchemaCoreDefinition = {
  __typename?: 'SchemaCoreDefinition';
  /** Whether to expose or hide an entity's DOI */
  doi: Scalars['Boolean'];
  /** Whether to expose or hide an entity's ISSN */
  issn: Scalars['Boolean'];
  /** Whether to expose or hide an entity's subtitle */
  subtitle: Scalars['Boolean'];
};

/**
 * A schema definition is a logical grouping of `SchemaVersion`s that identifies
 * only the shared kind, namespace, and identifier. The name is also most likely
 * shared, although it can change between schema versions, and the value on the
 * definition will default to whatever the most recent version uses.
 */
export type SchemaDefinition = DescribesSchema & Node & Sluggable & {
  __typename?: 'SchemaDefinition';
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  /** A unique (per-namespace) value that names the schema within the system. */
  identifier: Scalars['String'];
  /** The kind of entity this schema applies to */
  kind: SchemaKind;
  /** A human-readable name for the schema */
  name: Scalars['String'];
  /** A unique namespace the schema lives in */
  namespace: Scalars['String'];
  slug: Scalars['Slug'];
  updatedAt: Scalars['ISO8601DateTime'];
};

/** The connection type for SchemaDefinition. */
export type SchemaDefinitionConnection = Paginated & {
  __typename?: 'SchemaDefinitionConnection';
  /** A list of edges. */
  edges: Array<SchemaDefinitionEdge>;
  /** A list of nodes. */
  nodes: Array<SchemaDefinition>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SchemaDefinitionEdge = {
  __typename?: 'SchemaDefinitionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: SchemaDefinition;
};

/**
 * Being an instance that implements a schema version with strongly-typed properties.
 * Overlaps with Entity, but intended for focused access to just the properties
 * and the necessary context.
 */
export type SchemaInstance = {
  /** Expose all available entities for this schema property. */
  availableEntitiesFor: Array<EntitySelectOption>;
  /** The context for our schema instance. Includes form values and necessary referents. */
  schemaInstanceContext: SchemaInstanceContext;
  /** A list of schema properties associated with this instance or version. */
  schemaProperties: Array<AnySchemaProperty>;
  /** Read a single schema property by its full path. */
  schemaProperty?: Maybe<AnySchemaProperty>;
};


/**
 * Being an instance that implements a schema version with strongly-typed properties.
 * Overlaps with Entity, but intended for focused access to just the properties
 * and the necessary context.
 */
export type SchemaInstanceAvailableEntitiesForArgs = {
  fullPath: Scalars['String'];
};


/**
 * Being an instance that implements a schema version with strongly-typed properties.
 * Overlaps with Entity, but intended for focused access to just the properties
 * and the necessary context.
 */
export type SchemaInstanceSchemaPropertyArgs = {
  fullPath: Scalars['String'];
};

/** A context that describes the current state of the form */
export type SchemaInstanceContext = {
  __typename?: 'SchemaInstanceContext';
  assets: Array<AssetSelectOption>;
  contributors: Array<ContributorSelectOption>;
  /** Not yet populated. May be used in the future. */
  defaultValues: Scalars['JSON'];
  /** The entity ID for this schema instance. */
  entityId: Scalars['ID'];
  /** The values for the schema form on this instance */
  fieldValues: Scalars['JSON'];
  /** The slug for the current schema version */
  schemaVersionSlug: Scalars['String'];
  /** Information about the validity of the schema instance */
  validity?: Maybe<SchemaInstanceValidation>;
};

export type SchemaInstanceValidation = {
  __typename?: 'SchemaInstanceValidation';
  errors: Array<SchemaValueError>;
  valid: Scalars['Boolean'];
  validatedAt: Scalars['ISO8601DateTime'];
};

/** The kind of entity a schema applies to */
export type SchemaKind =
  | 'COMMUNITY'
  | 'COLLECTION'
  | 'ITEM'
  | '%future added value';

/**
 * This ordering path represents a schema property and is variably
 * available based on whether matched entities' schemas implement it.
 */
export type SchemaOrderingPath = OrderingPath & {
  __typename?: 'SchemaOrderingPath';
  /** A helpful description of the path */
  description?: Maybe<Scalars['String']>;
  /** A logical grouping for ordering paths */
  grouping: OrderingPathGrouping;
  /** A human-readable label for the path */
  label: Scalars['String'];
  /** Some paths may have a prefix. For instance, schema properties will have the name of the schema. */
  labelPrefix?: Maybe<Scalars['String']>;
  /** The exact path that should be provided to mutation inputs. */
  path: Scalars['String'];
  schemaVersion: SchemaVersion;
  /** The schema property type */
  type: SchemaPropertyType;
};

/** A property on a `SchemaInstance`. */
export type SchemaProperty = {
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   */
  array: Scalars['Boolean'];
  /**
   * A human-readable description for the property. It should describe the purpose of the
   * property as well as some details about the types of values it looks for.
   *
   * It can be rendered as help text, hints, etc.
   */
  description?: Maybe<Scalars['String']>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   */
  fullPath: Scalars['String'];
  /** Provided for introspection. This describes the underlying structure of the data type. */
  kind: SchemaPropertyKind;
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   */
  orderable: Scalars['Boolean'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   */
  path: Scalars['String'];
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   */
  type: SchemaPropertyType;
};

/** Schema properties can serve various functions. This helps communicate the purpose of them, for building UIs, and general introspection. */
export type SchemaPropertyFunction =
  /** This property acts as data inherently representative of the entity. Full text of an article, titling, and other such purposes. */
  | 'CONTENT'
  /**
   * This property is intended to offer further information about the content, but not necessarily the content itself.
   * Most metadata should be things that are filterable or searchable to help users find and learn more about related
   * content.
   */
  | 'METADATA'
  /**
   * This property is used for presenting information *about* the content, or how it should be formatted, but is less reflective
   * of the content itself. An option for changing a specific render style, an additional image to display, etc.
   */
  | 'PRESENTATION'
  /**
   * This property is only used when ordering this entity by ancestors. It should not generally be visible in the frontend, but
   * remain editable by admins to adjust ordering.
   */
  | 'SORTING'
  /**
   * This property's purpose remains unspecified and is likely the mark of a schema still in development. It should not generally
   * be in a finished schema, as it is important to help communicate the intent of a property for those building a UI.
   */
  | 'UNSPECIFIED'
  | '%future added value';

/**
 * The _kind_ of a data type for a schema property. Mostly informational
 * in the API, this value represents the underlying structure of the data type.
 */
export type SchemaPropertyKind =
  /** A composite of other properties. See `GroupProperty` */
  | 'GROUP'
  /**
   * A reference (or references) to other models in the system.
   *
   * See `AssetProperty`, `ContributorsProperty` for examples
   */
  | 'REFERENCE'
  /**
   * A complex data type that is composed of multiple subproperties
   * or requires other processing. Their values cannot be easily
   * mapped to GraphQL / JavaScript primitives.
   *
   * See `VariableDateProperty`, `FullTextProperty` for examples.
   */
  | 'COMPLEX'
  /**
   * The most common type of property, and what most values are likely to be. Strings,
   * integers, floats, booleans, and so on.
   */
  | 'SIMPLE'
  | '%future added value';

/** The data type for a schema property. */
export type SchemaPropertyType =
  /** A reference to a single asset owned by the schema instance. See `AssetProperty` */
  | 'ASSET'
  /** A reference to multiple assets owned by the schema instance. See `AssetsProperty` */
  | 'ASSETS'
  /** True or false, yes or no, a checkbox. See `BooleanProperty` */
  | 'BOOLEAN'
  /** A reference to a single contributor in the system. See `ContributorProperty` */
  | 'CONTRIBUTOR'
  /** A reference to multiple contributors in the system. See `ContributorsProperty` */
  | 'CONTRIBUTORS'
  /** An ISO8601-formatted date. See `DateProperty` */
  | 'DATE'
  /** An email address. See `EmailProperty` */
  | 'EMAIL'
  /** A reference to multiple entities. See `EntitiesProperty` */
  | 'ENTITIES'
  /** A reference to a single entity. See `EntityProperty` */
  | 'ENTITY'
  /** A decimal / floating-point number. See `FloatProperty` */
  | 'FLOAT'
  /** A complex type representing textual content. See `FullTextProperty` */
  | 'FULL_TEXT'
  /** A type composed of other properties. See `GroupProperty` */
  | 'GROUP'
  /** A whole number. See `IntegerProperty` */
  | 'INTEGER'
  /** Markdown-formatted text. See `MarkdownProperty` */
  | 'MARKDOWN'
  /** A dropdown that supports selecting multiple values. See `MultiselectProperty` */
  | 'MULTISELECT'
  /** A dropdown that can select only one value. See `SelectProperty` */
  | 'SELECT'
  /** Simple text values. See `StringProperty` */
  | 'STRING'
  /** An array of tags that can be introspected. See `TagsProperty` */
  | 'TAGS'
  /** An ISO8601-formatted timestamp. See `TimestampProperty` */
  | 'TIMESTAMP'
  /** A fallback type for invalid schemas. See `UnknownProperty` */
  | 'UNKNOWN'
  /** A complex type representing a URL, with metadata. See `URLProperty` */
  | 'URL'
  /** A complex type representing a date that cannot be expressed exactly. See `VariableDateProperty` */
  | 'VARIABLE_DATE'
  | '%future added value';

/** Configuration for controlling how instances of a schema render outside of orderings. */
export type SchemaRenderDefinition = {
  __typename?: 'SchemaRenderDefinition';
  /** How to render a list */
  listMode: SchemaRenderListMode;
};

/**
 * How instances that implement a certain schema should be rendered outside of an ordering,
 * when rendering only entities for the same type of schema.
 *
 * This value is currently only intended to be used by the frontend. It enforces no special
 * handling within the API itself, unlike an `OrderingRenderModeType`.
 */
export type SchemaRenderListMode =
  | 'GRID'
  | 'TABLE'
  | 'TREE'
  | '%future added value';

/** An error that stems from trying to apply an invalid schema value. */
export type SchemaValueError = {
  __typename?: 'SchemaValueError';
  /**
   * An error with the entire set of values
   * @deprecated Not presently used: see globalErrors
   */
  base: Scalars['Boolean'];
  /** Whether this is a hint */
  hint: Scalars['Boolean'];
  /** A human-readable description of the error */
  message: Scalars['String'];
  /** Additional metadata attached to the error */
  metadata?: Maybe<Scalars['JSON']>;
  /** Which input value this error came from */
  path: Scalars['String'];
};

/** A specific version of a `SchemaDefinition`. */
export type SchemaVersion = DescribesSchema & Searchable & HasSchemaProperties & Node & Sluggable & {
  __typename?: 'SchemaVersion';
  /** Configuration for controlling how instances of a schema handle certain optional core properties. */
  core: SchemaCoreDefinition;
  createdAt: Scalars['ISO8601DateTime'];
  /** Declarations / slugs for `enforcedChildVersions`. */
  enforcedChildDeclarations: Array<Scalars['Slug']>;
  /**
   * The versions that this schema accepts as a child.
   *
   * If there are no schemas, then this schema does not enforce its children.
   */
  enforcedChildVersions: Array<SchemaVersion>;
  /** Declarations / slugs for `enforcedParentVersions`. */
  enforcedParentDeclarations: Array<Scalars['Slug']>;
  /**
   * The versions that are allowed to parent this schema.
   *
   * If there are no schemas, then this schema does not enforce its parentage.
   */
  enforcedParentVersions: Array<SchemaVersion>;
  /** A boolean for the logic on `enforcedChildVersions`. */
  enforcesChildren: Scalars['Boolean'];
  /** A boolean for the logic on `enforcedParentVersions`. */
  enforcesParent: Scalars['Boolean'];
  id: Scalars['ID'];
  /** A unique (per-namespace) value that names the schema within the system. */
  identifier: Scalars['String'];
  /** The kind of entity this schema applies to */
  kind: SchemaKind;
  /** A human-readable name for the schema */
  name: Scalars['String'];
  /** A unique namespace the schema lives in */
  namespace: Scalars['String'];
  /** A semantic version for the schema */
  number: Scalars['String'];
  /** Configuration for rendering schema instances outside of orderings */
  render: SchemaRenderDefinition;
  /** The shared schema definition for all versions of this namespace and identifier */
  schemaDefinition: SchemaDefinition;
  /** A list of schema properties associated with this instance or version. */
  schemaProperties: Array<AnySchemaProperty>;
  /** Search from this level of the API using it as the origin */
  search: SearchScope;
  /** A subset of properties that can be searched for this schema. */
  searchableProperties: Array<AnySearchableProperty>;
  slug: Scalars['Slug'];
  updatedAt: Scalars['ISO8601DateTime'];
};


/** A specific version of a `SchemaDefinition`. */
export type SchemaVersionSearchArgs = {
  maxDepth?: Maybe<Scalars['Int']>;
  visibility?: Maybe<EntityVisibilityFilter>;
};

/** The connection type for SchemaVersion. */
export type SchemaVersionConnection = Paginated & {
  __typename?: 'SchemaVersionConnection';
  /** A list of edges. */
  edges: Array<SchemaVersionEdge>;
  /** A list of nodes. */
  nodes: Array<SchemaVersion>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SchemaVersionEdge = {
  __typename?: 'SchemaVersionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: SchemaVersion;
};

export type SchemaVersionOption = {
  __typename?: 'SchemaVersionOption';
  identifier: Scalars['String'];
  kind: SchemaKind;
  /** The label to display in a select box */
  label: Scalars['String'];
  name: Scalars['String'];
  namespace: Scalars['String'];
  schemaDefinition: SchemaDefinition;
  schemaVersion: SchemaVersion;
  /** The value to use in a select box */
  value: Scalars['String'];
};

/** Order schema versions by various factors */
export type SchemaVersionOrder =
  /** Order with newest versions at the top */
  | 'LATEST'
  /** Order with oldest versions at the top */
  | 'OLDEST'
  | '%future added value';

/** These operators serve as keys for `SearchPredicateInput`. */
export type SearchOperator =
  /** See `AndOperatorInput` */
  | 'and'
  /** See `OrOperatorInput` */
  | 'or'
  /** See `EqualsOperatorInput` */
  | 'equals'
  /** See `MatchesOperatorInput` */
  | 'matches'
  /** See `InAnyOperatorInput` */
  | 'inAny'
  /** See `DateEqualsOperatorInput` */
  | 'dateEquals'
  /** See `DateGTEOperatorInput` */
  | 'dateGTE'
  /** See `DateLTEOperatorInput` */
  | 'dateLTE'
  /** See `NumericGTEOperatorInput` */
  | 'numericGTE'
  /** See `NumericLTEOperatorInput` */
  | 'numericLTE'
  | '%future added value';

/** The type of origin for this search scope. */
export type SearchOriginType =
  | 'ENTITY'
  | 'GLOBAL'
  | 'SCHEMA'
  | '%future added value';

/**
 * A predicate clause for searching entities.
 *
 * Each key corresponds to a `SearchOperator`, and multiple keys combined
 * in the same predicate will be implicitly `AND`ed together.
 */
export type SearchPredicateInput = {
  /** See `AndOperatorInput` */
  and?: Maybe<AndOperatorInput>;
  /** See `OrOperatorInput` */
  or?: Maybe<OrOperatorInput>;
  /** See `DateEqualsOperatorInput` */
  dateEquals?: Maybe<DateEqualsOperatorInput>;
  /** See `DateGTEOperatorInput` */
  dateGTE?: Maybe<DateGteOperatorInput>;
  /** See `DateLTEOperatorInput` */
  dateLTE?: Maybe<DateLteOperatorInput>;
  /** See `EqualsOperatorInput` */
  equals?: Maybe<EqualsOperatorInput>;
  /** See `MatchesOperatorInput` */
  matches?: Maybe<MatchesOperatorInput>;
  /** See `InAnyOperatorInput` */
  inAny?: Maybe<InAnyOperatorInput>;
  /** See `NumericGTEOperatorInput` */
  numericGTE?: Maybe<NumericGteOperatorInput>;
  /** See `NumericLTEOperatorInput` */
  numericLTE?: Maybe<NumericLteOperatorInput>;
};

/** An entity that's the result of a search. */
export type SearchResult = {
  __typename?: 'SearchResult';
  entity: AnyEntity;
  id: Scalars['ID'];
  kind: EntityKind;
  schemaVersion: SchemaVersion;
  slug: Scalars['Slug'];
  title: Scalars['String'];
};

/** The connection type for SearchResult. */
export type SearchResultConnection = Paginated & {
  __typename?: 'SearchResultConnection';
  /** A list of edges. */
  edges: Array<SearchResultEdge>;
  /** A list of nodes. */
  nodes: Array<SearchResult>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SearchResultEdge = {
  __typename?: 'SearchResultEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: SearchResult;
};

export type SearchScope = {
  __typename?: 'SearchScope';
  /** The available schema versions underneath this search scope. */
  availableSchemaVersions: Array<SchemaVersion>;
  coreProperties: Array<SearchableCoreProperty>;
  originType: SearchOriginType;
  /**
   * The results of a search. Either `query` or `predicates` should be provided,
   * otherwise it will return as if everything matches.
   */
  results: SearchResultConnection;
  visibility: EntityVisibilityFilter;
};


export type SearchScopeResultsArgs = {
  scope?: Maybe<EntityDescendantScopeFilter>;
  schema?: Maybe<Array<Scalars['String']>>;
  order?: Maybe<EntityOrder>;
  predicates?: Maybe<Array<SearchPredicateInput>>;
  prefix?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};

export type Searchable = {
  /** Search from this level of the API using it as the origin */
  search: SearchScope;
};


export type SearchableSearchArgs = {
  maxDepth?: Maybe<Scalars['Int']>;
  visibility?: Maybe<EntityVisibilityFilter>;
};

export type SearchableCoreProperty = SearchableProperty & {
  __typename?: 'SearchableCoreProperty';
  description?: Maybe<Scalars['String']>;
  label: Scalars['String'];
  searchOperators: Array<SearchOperator>;
  searchPath: Scalars['String'];
};

export type SearchableProperty = {
  description?: Maybe<Scalars['String']>;
  label: Scalars['String'];
  searchOperators: Array<SearchOperator>;
  searchPath: Scalars['String'];
};

/** Autogenerated input type of SelectInitialOrdering */
export type SelectInitialOrderingInput = {
  entityId: Scalars['ID'];
  orderingId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of SelectInitialOrdering */
export type SelectInitialOrderingPayload = StandardMutationPayload & {
  __typename?: 'SelectInitialOrderingPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  entity?: Maybe<AnyEntity>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']>;
  ordering?: Maybe<Ordering>;
};

export type SelectOption = {
  __typename?: 'SelectOption';
  label: Scalars['String'];
  value: Scalars['String'];
};

export type SelectProperty = SchemaProperty & ScalarProperty & OptionableProperty & SearchableProperty & {
  __typename?: 'SelectProperty';
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   */
  array: Scalars['Boolean'];
  defaultSelection?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   */
  fullPath: Scalars['String'];
  /** The purpose or intent of this property relative to its entity, parents, and others. */
  function: SchemaPropertyFunction;
  /**
   * Whether to render a field as "wide" (two columns) in the form.
   * This is intended to help structure forms logically, as well as
   * provide ample space for certain types of data input, particularly
   * full-text, markdown, and other such complex fields.
   */
  isWide: Scalars['Boolean'];
  /** Provided for introspection. This describes the underlying structure of the data type. */
  kind: SchemaPropertyKind;
  label: Scalars['String'];
  options: Array<SelectOption>;
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   */
  orderable: Scalars['Boolean'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   */
  path: Scalars['String'];
  /**
   * Whether or not this property is required in order for the schema instance
   * to be considered valid.
   *
   * Note: invalid data provided to a schema property will still invalidate
   * the instance as a whole???the required trait only determines whether a value
   * **must** be set.
   */
  required: Scalars['Boolean'];
  searchOperators: Array<SearchOperator>;
  searchPath: Scalars['String'];
  selection?: Maybe<Scalars['String']>;
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   */
  type: SchemaPropertyType;
};

/** A generic enum for sorting models that don't have anything more specific implemented */
export type SimpleOrder =
  /** Sort models by newest created date */
  | 'RECENT'
  /** Sort models by oldest created date */
  | 'OLDEST'
  | '%future added value';

/** A value for updating the site's configuration */
export type SiteFooter = {
  __typename?: 'SiteFooter';
  /** A copyright statement that lives in the site's footer. */
  copyrightStatement: Scalars['String'];
  /** A description that lives in the site's footer. */
  description: Scalars['String'];
};

/** A value for updating the site's configuration */
export type SiteFooterInput = {
  /** A description that lives in the site's footer. */
  description?: Maybe<Scalars['String']>;
  /** A copyright statement that lives in the site's footer. */
  copyrightStatement?: Maybe<Scalars['String']>;
};

/** An interface for accessing derivatives of the site logo (if present). */
export type SiteLogoAttachment = HasAttachmentStorage & ImageIdentification & {
  __typename?: 'SiteLogoAttachment';
  /** Alt text for accessible images */
  alt?: Maybe<Scalars['String']>;
  /** Configurable metadata for the image. */
  metadata?: Maybe<ImageMetadata>;
  /** The original source for the image */
  original: ImageOriginal;
  /**
   * The original filename, if one was detected during attachment.
   *
   * Filename detection is not always consistent across browsers, so this
   * may not always be present, even with a valid attachment.
   */
  originalFilename?: Maybe<Scalars['String']>;
  /**
   * The intended purpose of this image attachment. This is intended to
   * help fragments that operate solely on image subcomponents to have
   * some context for what they are without extra work.
   */
  purpose: ImagePurpose;
  /** A logo intended to be used when the site title is hidden, constrained to 80px high with no width limit. */
  sansText: ImageSize;
  /**
   * This field describes how an attachment is stored in the system. If it is nil, there is no associated attachment for this field.
   * Otherwise, see the documentation for AttachmentStorage to see what the individual fields mean.
   */
  storage?: Maybe<AttachmentStorage>;
  /** A logo intended to be used when the site title is visible, constrained to 80px wide by 80px high. */
  withText: ImageSize;
};

/** An option that determines how the site logo should be rendered */
export type SiteLogoMode =
  /** The site logo should be displayed with the site title _hidden_. */
  | 'SANS_TEXT'
  /** The site logo should be displayed with the site title _visible_. */
  | 'WITH_TEXT'
  /** The site logo is unavailable. */
  | 'NONE'
  | '%future added value';

/** Configuration settings for information about this installation. */
export type SiteSettings = {
  __typename?: 'SiteSettings';
  /** Settings related to the site's footer */
  footer: SiteFooter;
  /** The text that appears on the root page of the frontend. Supports basic markdown. */
  installationHomePageCopy: Scalars['String'];
  /** The name of the installation. */
  installationName: Scalars['String'];
  /** How the logo should be rendered */
  logoMode: SiteLogoMode;
  /** The name of the provider supporting and maintaining this installation. */
  providerName: Scalars['String'];
};

/** A value for updating the site's configuration */
export type SiteSettingsInput = {
  /** The name of the installation. */
  installationName?: Maybe<Scalars['String']>;
  /** The text that appears on the root page of the frontend. Supports basic markdown. */
  installationHomePageCopy?: Maybe<Scalars['String']>;
  /** How the logo should be rendered */
  logoMode?: Maybe<SiteLogoMode>;
  /** The name of the provider supporting and maintaining this installation. */
  providerName?: Maybe<Scalars['String']>;
  /** Settings for the site's footer */
  footer?: Maybe<SiteFooterInput>;
};


/** Objects have a serialized slug for looking them up in the system and generating links without UUIDs */
export type Sluggable = {
  slug: Scalars['Slug'];
};

/** Most mutations implement this interface in their payload in order to offer a standardize response value */
export type StandardMutationPayload = {
  attributeErrors: Array<MutationAttributeError>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']>;
};

/**
 * This property is static and is always available on an
 * entity, irrespective of its schema.
 */
export type StaticOrderingPath = OrderingPath & {
  __typename?: 'StaticOrderingPath';
  /** A helpful description of the path */
  description?: Maybe<Scalars['String']>;
  /** A logical grouping for ordering paths */
  grouping: OrderingPathGrouping;
  /** A human-readable label for the path */
  label: Scalars['String'];
  /** Some paths may have a prefix. For instance, schema properties will have the name of the schema. */
  labelPrefix?: Maybe<Scalars['String']>;
  /** The exact path that should be provided to mutation inputs. */
  path: Scalars['String'];
  /** The schema property type */
  type: SchemaPropertyType;
};

export type StringProperty = SchemaProperty & ScalarProperty & SearchableProperty & {
  __typename?: 'StringProperty';
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   */
  array: Scalars['Boolean'];
  content?: Maybe<Scalars['String']>;
  default?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   */
  fullPath: Scalars['String'];
  /** The purpose or intent of this property relative to its entity, parents, and others. */
  function: SchemaPropertyFunction;
  /**
   * Whether to render a field as "wide" (two columns) in the form.
   * This is intended to help structure forms logically, as well as
   * provide ample space for certain types of data input, particularly
   * full-text, markdown, and other such complex fields.
   */
  isWide: Scalars['Boolean'];
  /** Provided for introspection. This describes the underlying structure of the data type. */
  kind: SchemaPropertyKind;
  label: Scalars['String'];
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   */
  orderable: Scalars['Boolean'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   */
  path: Scalars['String'];
  /**
   * Whether or not this property is required in order for the schema instance
   * to be considered valid.
   *
   * Note: invalid data provided to a schema property will still invalidate
   * the instance as a whole???the required trait only determines whether a value
   * **must** be set.
   */
  required: Scalars['Boolean'];
  searchOperators: Array<SearchOperator>;
  searchPath: Scalars['String'];
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   */
  type: SchemaPropertyType;
};

/** When retrieving subtypes of a specific entity, you can distinguish between grabbing its children (default) or all of its descendants. */
export type SubtreeNodeFilter =
  /** Fetch only the first level of the same type of entity (Item, Collection) */
  | 'CHILDREN'
  /** Fetch all descendant entities of the same base type (Item, Collection) */
  | 'DESCENDANTS'
  | '%future added value';

/** A helper field that can look up various information about the WDP-API Ecosystem. */
export type SystemInfo = {
  __typename?: 'SystemInfo';
  /** Check to see if an entity of a given `descendant` type exists with a given `ancestor` type. */
  entityHierarchyExists: Scalars['Boolean'];
};


/** A helper field that can look up various information about the WDP-API Ecosystem. */
export type SystemInfoEntityHierarchyExistsArgs = {
  ancestor: Scalars['Slug'];
  descendant: Scalars['Slug'];
};

export type TagsProperty = SchemaProperty & ScalarProperty & {
  __typename?: 'TagsProperty';
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   */
  array: Scalars['Boolean'];
  /**
   * A human-readable description for the property. It should describe the purpose of the
   * property as well as some details about the types of values it looks for.
   *
   * It can be rendered as help text, hints, etc.
   */
  description?: Maybe<Scalars['String']>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   */
  fullPath: Scalars['String'];
  /** The purpose or intent of this property relative to its entity, parents, and others. */
  function: SchemaPropertyFunction;
  /**
   * Whether to render a field as "wide" (two columns) in the form.
   * This is intended to help structure forms logically, as well as
   * provide ample space for certain types of data input, particularly
   * full-text, markdown, and other such complex fields.
   */
  isWide: Scalars['Boolean'];
  /** Provided for introspection. This describes the underlying structure of the data type. */
  kind: SchemaPropertyKind;
  /** A human-readable label for the schema property. */
  label: Scalars['String'];
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   */
  orderable: Scalars['Boolean'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   */
  path: Scalars['String'];
  /**
   * Whether or not this property is required in order for the schema instance
   * to be considered valid.
   *
   * Note: invalid data provided to a schema property will still invalidate
   * the instance as a whole???the required trait only determines whether a value
   * **must** be set.
   */
  required: Scalars['Boolean'];
  tags: Array<Scalars['String']>;
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   */
  type: SchemaPropertyType;
};

/** Configuration settings for the theme of the WDP frontend. */
export type ThemeSettings = {
  __typename?: 'ThemeSettings';
  color: Scalars['String'];
  font: Scalars['String'];
};

/** A value for updating the theme */
export type ThemeSettingsInput = {
  color: Scalars['String'];
  font: Scalars['String'];
};

export type TimestampProperty = SchemaProperty & ScalarProperty & SearchableProperty & {
  __typename?: 'TimestampProperty';
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   */
  array: Scalars['Boolean'];
  default?: Maybe<Scalars['ISO8601DateTime']>;
  description?: Maybe<Scalars['String']>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   */
  fullPath: Scalars['String'];
  /** The purpose or intent of this property relative to its entity, parents, and others. */
  function: SchemaPropertyFunction;
  /**
   * Whether to render a field as "wide" (two columns) in the form.
   * This is intended to help structure forms logically, as well as
   * provide ample space for certain types of data input, particularly
   * full-text, markdown, and other such complex fields.
   */
  isWide: Scalars['Boolean'];
  /** Provided for introspection. This describes the underlying structure of the data type. */
  kind: SchemaPropertyKind;
  label: Scalars['String'];
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   */
  orderable: Scalars['Boolean'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   */
  path: Scalars['String'];
  /**
   * Whether or not this property is required in order for the schema instance
   * to be considered valid.
   *
   * Note: invalid data provided to a schema property will still invalidate
   * the instance as a whole???the required trait only determines whether a value
   * **must** be set.
   */
  required: Scalars['Boolean'];
  searchOperators: Array<SearchOperator>;
  searchPath: Scalars['String'];
  timestamp?: Maybe<Scalars['ISO8601DateTime']>;
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   */
  type: SchemaPropertyType;
};

/** When retrieving a paginated connection of tree-like entities, this enum is used to delineate which class of nodes to retrieve. Usually, you only want roots, but two other possibilities are exposed. */
export type TreeNodeFilter =
  /** Fetch only nodes that are "roots": nodes that do not have a parent of the same type */
  | 'ROOTS_ONLY'
  /** Fetch all nodes that match other filters passed to the resolver */
  | 'ROOTS_AND_LEAVES'
  /** Fetch only nodes that are "leaves"; nodes that have a parent of the same type */
  | 'LEAVES_ONLY'
  | '%future added value';

/** A schematic reference to a URL, with href, label, and optional title */
export type UrlProperty = SchemaProperty & ScalarProperty & {
  __typename?: 'URLProperty';
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   */
  array: Scalars['Boolean'];
  /**
   * A human-readable description for the property. It should describe the purpose of the
   * property as well as some details about the types of values it looks for.
   *
   * It can be rendered as help text, hints, etc.
   */
  description?: Maybe<Scalars['String']>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   */
  fullPath: Scalars['String'];
  /** The purpose or intent of this property relative to its entity, parents, and others. */
  function: SchemaPropertyFunction;
  /**
   * Whether to render a field as "wide" (two columns) in the form.
   * This is intended to help structure forms logically, as well as
   * provide ample space for certain types of data input, particularly
   * full-text, markdown, and other such complex fields.
   */
  isWide: Scalars['Boolean'];
  /** Provided for introspection. This describes the underlying structure of the data type. */
  kind: SchemaPropertyKind;
  /** A human-readable label for the schema property. */
  label: Scalars['String'];
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   */
  orderable: Scalars['Boolean'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   */
  path: Scalars['String'];
  /**
   * Whether or not this property is required in order for the schema instance
   * to be considered valid.
   *
   * Note: invalid data provided to a schema property will still invalidate
   * the instance as a whole???the required trait only determines whether a value
   * **must** be set.
   */
  required: Scalars['Boolean'];
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   */
  type: SchemaPropertyType;
  url?: Maybe<UrlReference>;
};

/** A representation of a URL suitable for creating anchor tags */
export type UrlReference = {
  __typename?: 'URLReference';
  /** The actual URL */
  href?: Maybe<Scalars['String']>;
  /** A label to display within the text content of the anchor tag */
  label?: Maybe<Scalars['String']>;
  /** A title to display when mousing over the URL */
  title?: Maybe<Scalars['String']>;
};

export type UnknownProperty = SchemaProperty & ScalarProperty & {
  __typename?: 'UnknownProperty';
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   */
  array: Scalars['Boolean'];
  default?: Maybe<Scalars['JSON']>;
  /**
   * A human-readable description for the property. It should describe the purpose of the
   * property as well as some details about the types of values it looks for.
   *
   * It can be rendered as help text, hints, etc.
   */
  description?: Maybe<Scalars['String']>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   */
  fullPath: Scalars['String'];
  /** The purpose or intent of this property relative to its entity, parents, and others. */
  function: SchemaPropertyFunction;
  /**
   * Whether to render a field as "wide" (two columns) in the form.
   * This is intended to help structure forms logically, as well as
   * provide ample space for certain types of data input, particularly
   * full-text, markdown, and other such complex fields.
   */
  isWide: Scalars['Boolean'];
  /** Provided for introspection. This describes the underlying structure of the data type. */
  kind: SchemaPropertyKind;
  /** A human-readable label for the schema property. */
  label: Scalars['String'];
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   */
  orderable: Scalars['Boolean'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   */
  path: Scalars['String'];
  /**
   * Whether or not this property is required in order for the schema instance
   * to be considered valid.
   *
   * Note: invalid data provided to a schema property will still invalidate
   * the instance as a whole???the required trait only determines whether a value
   * **must** be set.
   */
  required: Scalars['Boolean'];
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   */
  type: SchemaPropertyType;
  unknownValue?: Maybe<Scalars['JSON']>;
};

/** Autogenerated input type of UpdateAnnouncement */
export type UpdateAnnouncementInput = {
  /** The ID for the announcement to update. */
  announcementId: Scalars['ID'];
  /** The date of the announcement. */
  publishedOn: Scalars['ISO8601Date'];
  /** A header value for the announcement */
  header: Scalars['String'];
  /** A teaser for the announcement */
  teaser: Scalars['String'];
  /** A body for the announcement */
  body: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateAnnouncement */
export type UpdateAnnouncementPayload = StandardMutationPayload & {
  __typename?: 'UpdateAnnouncementPayload';
  announcement?: Maybe<Announcement>;
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of UpdateAssetAttachment */
export type UpdateAssetAttachmentInput = {
  /** The ID for the asset to update */
  assetId: Scalars['ID'];
  /** A reference to an upload in Tus. */
  attachment: UploadedFileInput;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateAssetAttachment */
export type UpdateAssetAttachmentPayload = StandardMutationPayload & {
  __typename?: 'UpdateAssetAttachmentPayload';
  asset?: Maybe<AnyAsset>;
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of UpdateAsset */
export type UpdateAssetInput = {
  /** The ID for the asset to update */
  assetId: Scalars['ID'];
  /**
   * An optional reference to an upload in Tus. It will replace the current file if provided.
   * Note: Unlike other attachments in the API, there is no way to clear an attachment from
   * an existing asset. If you wish to do that, simply call destroyAsset.
   */
  attachment?: Maybe<UploadedFileInput>;
  /** A human readable name for the asset */
  name: Scalars['String'];
  /** The position the asset occupies amongst siblings */
  position?: Maybe<Scalars['Int']>;
  /** Alt text to display for the asset (if applicable) */
  altText?: Maybe<Scalars['String']>;
  /** A caption to display below the asset (if applicable) */
  caption?: Maybe<Scalars['String']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateAsset */
export type UpdateAssetPayload = StandardMutationPayload & {
  __typename?: 'UpdateAssetPayload';
  asset?: Maybe<AnyAsset>;
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of UpdateCollection */
export type UpdateCollectionInput = {
  collectionId: Scalars['ID'];
  /** Human-readable title for the entity */
  title: Scalars['String'];
  /** Human-readable subtitle for the entity */
  subtitle?: Maybe<Scalars['String']>;
  /** A brief description of the entity's contents. */
  summary?: Maybe<Scalars['String']>;
  /** A reference to an uploaded image in Tus. */
  heroImage?: Maybe<UploadedFileInput>;
  /** Metadata for an image attachment. */
  heroImageMetadata?: Maybe<ImageMetadataInput>;
  /** A reference to an uploaded image in Tus. */
  thumbnail?: Maybe<UploadedFileInput>;
  /** Metadata for an image attachment. */
  thumbnailMetadata?: Maybe<ImageMetadataInput>;
  /** The date this entity was published */
  published?: Maybe<VariablePrecisionDateInput>;
  /** What level of visibility the entity has */
  visibility: EntityVisibility;
  /** If present, this is the timestamp an entity is visible after */
  visibleAfterAt?: Maybe<Scalars['ISO8601DateTime']>;
  /** If present, this is the timestamp an entity is visible until */
  visibleUntilAt?: Maybe<Scalars['ISO8601DateTime']>;
  /** If set to true, this will clear the attachment hero_image on this model. */
  clearHeroImage?: Maybe<Scalars['Boolean']>;
  /** If set to true, this will clear the attachment thumbnail on this model. */
  clearThumbnail?: Maybe<Scalars['Boolean']>;
  /**
   * An arbitrary set of property values. Owing to the dynamic nature, they do not have a specific GraphQL input type
   * associated with them. Validation will be performed within the application and returned as errors if not valid.
   */
  schemaProperties?: Maybe<Scalars['JSON']>;
  /** Digital Object Identifier (see: https://doi.org) */
  doi?: Maybe<Scalars['String']>;
  /** International Standard Serial Number (see: https://issn.org) */
  issn?: Maybe<Scalars['String']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateCollection */
export type UpdateCollectionPayload = StandardMutationPayload & {
  __typename?: 'UpdateCollectionPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** A new representation of the collection, on a successful update */
  collection?: Maybe<Collection>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']>;
  schemaErrors: Array<SchemaValueError>;
};

/** Autogenerated input type of UpdateCommunity */
export type UpdateCommunityInput = {
  communityId: Scalars['ID'];
  /** The position the community occupies in the list */
  position?: Maybe<Scalars['Int']>;
  /** Human-readable title for the entity */
  title: Scalars['String'];
  /** Human-readable subtitle for the entity */
  subtitle?: Maybe<Scalars['String']>;
  /** A brief description of the entity's contents. */
  summary?: Maybe<Scalars['String']>;
  /** A reference to an uploaded image in Tus. */
  heroImage?: Maybe<UploadedFileInput>;
  /** Metadata for an image attachment. */
  heroImageMetadata?: Maybe<ImageMetadataInput>;
  /** A reference to an uploaded image in Tus. */
  thumbnail?: Maybe<UploadedFileInput>;
  /** Metadata for an image attachment. */
  thumbnailMetadata?: Maybe<ImageMetadataInput>;
  /** If set to true, this will clear the attachment hero_image on this model. */
  clearHeroImage?: Maybe<Scalars['Boolean']>;
  /** If set to true, this will clear the attachment thumbnail on this model. */
  clearThumbnail?: Maybe<Scalars['Boolean']>;
  /**
   * An arbitrary set of property values. Owing to the dynamic nature, they do not have a specific GraphQL input type
   * associated with them. Validation will be performed within the application and returned as errors if not valid.
   */
  schemaProperties?: Maybe<Scalars['JSON']>;
  heroImageLayout: HeroImageLayout;
  tagline?: Maybe<Scalars['String']>;
  /** A reference to an uploaded image in Tus. */
  logo?: Maybe<UploadedFileInput>;
  /** Metadata for an image attachment. */
  logoMetadata?: Maybe<ImageMetadataInput>;
  /** If set to true, this will clear the attachment logo on this model. */
  clearLogo?: Maybe<Scalars['Boolean']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateCommunity */
export type UpdateCommunityPayload = StandardMutationPayload & {
  __typename?: 'UpdateCommunityPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** A new representation of the community, on a succesful update */
  community?: Maybe<Community>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']>;
  schemaErrors: Array<SchemaValueError>;
};

/** Autogenerated input type of UpdateContribution */
export type UpdateContributionInput = {
  contributionId: Scalars['ID'];
  /** An arbitrary text value that describes the kind of contribution */
  role?: Maybe<Scalars['String']>;
  metadata?: Maybe<ContributionMetadataInput>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateContribution */
export type UpdateContributionPayload = StandardMutationPayload & {
  __typename?: 'UpdateContributionPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  contribution?: Maybe<AnyContribution>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of UpdateGlobalConfiguration */
export type UpdateGlobalConfigurationInput = {
  /** Possible new settings for the institution */
  institution?: Maybe<InstitutionSettingsInput>;
  /** A reference to an uploaded image in Tus. */
  logo?: Maybe<UploadedFileInput>;
  /** Metadata for an image attachment. */
  logoMetadata?: Maybe<ImageMetadataInput>;
  /** If set to true, this will clear the attachment logo on this model. */
  clearLogo?: Maybe<Scalars['Boolean']>;
  /** Possible new settings for the site */
  site?: Maybe<SiteSettingsInput>;
  /** Possible new settings for the theme */
  theme?: Maybe<ThemeSettingsInput>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateGlobalConfiguration */
export type UpdateGlobalConfigurationPayload = StandardMutationPayload & {
  __typename?: 'UpdateGlobalConfigurationPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  /** Though a global configuration always exists, this will be null if it fails to apply for some reason. */
  globalConfiguration?: Maybe<GlobalConfiguration>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of UpdateItem */
export type UpdateItemInput = {
  /** The item to update */
  itemId: Scalars['ID'];
  /** Human-readable title for the entity */
  title: Scalars['String'];
  /** Human-readable subtitle for the entity */
  subtitle?: Maybe<Scalars['String']>;
  /** A brief description of the entity's contents. */
  summary?: Maybe<Scalars['String']>;
  /** A reference to an uploaded image in Tus. */
  heroImage?: Maybe<UploadedFileInput>;
  /** Metadata for an image attachment. */
  heroImageMetadata?: Maybe<ImageMetadataInput>;
  /** A reference to an uploaded image in Tus. */
  thumbnail?: Maybe<UploadedFileInput>;
  /** Metadata for an image attachment. */
  thumbnailMetadata?: Maybe<ImageMetadataInput>;
  /** The date this entity was published */
  published?: Maybe<VariablePrecisionDateInput>;
  /** What level of visibility the entity has */
  visibility: EntityVisibility;
  /** If present, this is the timestamp an entity is visible after */
  visibleAfterAt?: Maybe<Scalars['ISO8601DateTime']>;
  /** If present, this is the timestamp an entity is visible until */
  visibleUntilAt?: Maybe<Scalars['ISO8601DateTime']>;
  /** If set to true, this will clear the attachment hero_image on this model. */
  clearHeroImage?: Maybe<Scalars['Boolean']>;
  /** If set to true, this will clear the attachment thumbnail on this model. */
  clearThumbnail?: Maybe<Scalars['Boolean']>;
  /**
   * An arbitrary set of property values. Owing to the dynamic nature, they do not have a specific GraphQL input type
   * associated with them. Validation will be performed within the application and returned as errors if not valid.
   */
  schemaProperties?: Maybe<Scalars['JSON']>;
  /** Digital Object Identifier (see: https://doi.org) */
  doi?: Maybe<Scalars['String']>;
  /** International Standard Serial Number (see: https://issn.org) */
  issn?: Maybe<Scalars['String']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateItem */
export type UpdateItemPayload = StandardMutationPayload & {
  __typename?: 'UpdateItemPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']>;
  /** A new representation of the item, on a succesful update */
  item?: Maybe<Item>;
  schemaErrors: Array<SchemaValueError>;
};

/** Autogenerated input type of UpdateOrdering */
export type UpdateOrderingInput = {
  /** The ID for the ordering to update */
  orderingId: Scalars['ID'];
  /** A human readable label for the ordering */
  name?: Maybe<Scalars['String']>;
  /** Optional markdown content to display before the ordering's children */
  header?: Maybe<Scalars['String']>;
  /** Optional markdown content to display after the ordering's children */
  footer?: Maybe<Scalars['String']>;
  filter?: Maybe<OrderingFilterDefinitionInput>;
  select?: Maybe<OrderingSelectDefinitionInput>;
  order: Array<OrderDefinitionInput>;
  render?: Maybe<OrderingRenderDefinitionInput>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateOrdering */
export type UpdateOrderingPayload = StandardMutationPayload & {
  __typename?: 'UpdateOrderingPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']>;
  /** The updated ordering */
  ordering?: Maybe<Ordering>;
};

/** Autogenerated input type of UpdateOrganizationContributor */
export type UpdateOrganizationContributorInput = {
  /** An email associated with the contributor */
  email?: Maybe<Scalars['String']>;
  /** A url associated with the contributor */
  url?: Maybe<Scalars['String']>;
  /** A summary of the contributor */
  bio?: Maybe<Scalars['String']>;
  links?: Maybe<Array<ContributorLinkInput>>;
  /** An optional, unique [**O**pen **R**esearcher and **C**ontributor **ID**](https://orcid.org) associated with this contributor. */
  orcid?: Maybe<Scalars['String']>;
  /** A reference to an uploaded image in Tus. */
  image?: Maybe<UploadedFileInput>;
  /** Metadata for an image attachment. */
  imageMetadata?: Maybe<ImageMetadataInput>;
  /** The legal name of the organization */
  legalName?: Maybe<Scalars['String']>;
  /** Where the organization is located (if applicable) */
  location?: Maybe<Scalars['String']>;
  contributorId: Scalars['ID'];
  /** If set to true, this will clear the attachment image on this model. */
  clearImage?: Maybe<Scalars['Boolean']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateOrganizationContributor */
export type UpdateOrganizationContributorPayload = StandardMutationPayload & {
  __typename?: 'UpdateOrganizationContributorPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The updated organization */
  contributor?: Maybe<OrganizationContributor>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of UpdatePage */
export type UpdatePageInput = {
  pageId: Scalars['ID'];
  title: Scalars['String'];
  slug: Scalars['String'];
  position?: Maybe<Scalars['Int']>;
  body: Scalars['String'];
  /** A reference to an uploaded image in Tus. */
  heroImage?: Maybe<UploadedFileInput>;
  /** Metadata for an image attachment. */
  heroImageMetadata?: Maybe<ImageMetadataInput>;
  /** If set to true, this will clear the attachment hero_image on this model. */
  clearHeroImage?: Maybe<Scalars['Boolean']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdatePage */
export type UpdatePagePayload = StandardMutationPayload & {
  __typename?: 'UpdatePagePayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']>;
  page?: Maybe<Page>;
};

/** Autogenerated input type of UpdatePersonContributor */
export type UpdatePersonContributorInput = {
  /** An email associated with the contributor */
  email?: Maybe<Scalars['String']>;
  /** A url associated with the contributor */
  url?: Maybe<Scalars['String']>;
  /** A summary of the contributor */
  bio?: Maybe<Scalars['String']>;
  links?: Maybe<Array<ContributorLinkInput>>;
  /** An optional, unique [**O**pen **R**esearcher and **C**ontributor **ID**](https://orcid.org) associated with this contributor. */
  orcid?: Maybe<Scalars['String']>;
  /** A reference to an uploaded image in Tus. */
  image?: Maybe<UploadedFileInput>;
  /** Metadata for an image attachment. */
  imageMetadata?: Maybe<ImageMetadataInput>;
  givenName?: Maybe<Scalars['String']>;
  familyName?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  affiliation?: Maybe<Scalars['String']>;
  contributorId: Scalars['ID'];
  /** If set to true, this will clear the attachment image on this model. */
  clearImage?: Maybe<Scalars['Boolean']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdatePersonContributor */
export type UpdatePersonContributorPayload = StandardMutationPayload & {
  __typename?: 'UpdatePersonContributorPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The created person */
  contributor?: Maybe<PersonContributor>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of UpdateRole */
export type UpdateRoleInput = {
  roleId: Scalars['ID'];
  name: Scalars['String'];
  accessControlList: Scalars['JSON'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateRole */
export type UpdateRolePayload = StandardMutationPayload & {
  __typename?: 'UpdateRolePayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
};

/** Autogenerated input type of UpdateUser */
export type UpdateUserInput = {
  userId: Scalars['ID'];
  /** A reference to an uploaded image in Tus. */
  avatar?: Maybe<UploadedFileInput>;
  /** Metadata for an image attachment. */
  avatarMetadata?: Maybe<ImageMetadataInput>;
  /** If set to true, this will clear the attachment avatar on this model. */
  clearAvatar?: Maybe<Scalars['Boolean']>;
  /** Attributes for the user that correspond to attributes in Keycloak. */
  profile: UserProfileInput;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateUser */
export type UpdateUserPayload = StandardMutationPayload & {
  __typename?: 'UpdateUserPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

/** Autogenerated input type of UpdateViewerSettings */
export type UpdateViewerSettingsInput = {
  /** A reference to an uploaded image in Tus. */
  avatar?: Maybe<UploadedFileInput>;
  /** Metadata for an image attachment. */
  avatarMetadata?: Maybe<ImageMetadataInput>;
  /** If set to true, this will clear the attachment avatar on this model. */
  clearAvatar?: Maybe<Scalars['Boolean']>;
  /** Attributes for the user that correspond to attributes in Keycloak. */
  profile: UserProfileInput;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateViewerSettings */
export type UpdateViewerSettingsPayload = StandardMutationPayload & {
  __typename?: 'UpdateViewerSettingsPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};


/** The name of a storage that can contain user uploads. There's only one option at present. */
export type UploadStorage =
  /** Temporary storage. Cleaned on a regular basis if uploads are not attached anywhere. */
  | 'CACHE'
  | '%future added value';

/** A definition for a file upload */
export type UploadedFileInput = {
  id: Scalars['UploadID'];
  /** The storage that contains the input. */
  storage?: Maybe<UploadStorage>;
  /** Metadata to associate with the upload */
  metadata?: Maybe<UploadedFileMetadataInput>;
};

/** File metadata to attach to the upload. */
export type UploadedFileMetadataInput = {
  /** Alt text for the upload (not always applicable) */
  alt?: Maybe<Scalars['String']>;
  /** The original filename, since Tus mangles them. */
  filename?: Maybe<Scalars['String']>;
  /**
   * The original content type. WDP will detect a real content type, so this can't be spoofed, but it can be helpful with generating
   * an initial asset with the correct kind.
   */
  mimeType?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of UpsertContribution */
export type UpsertContributionInput = {
  contributableId: Scalars['ID'];
  contributorId: Scalars['ID'];
  /** An arbitrary text value that describes the kind of contribution */
  role?: Maybe<Scalars['String']>;
  metadata?: Maybe<ContributionMetadataInput>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpsertContribution */
export type UpsertContributionPayload = StandardMutationPayload & {
  __typename?: 'UpsertContributionPayload';
  attributeErrors: Array<MutationAttributeError>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  contribution?: Maybe<AnyContribution>;
  /** @deprecated Use attributeErrors or globalErrors */
  errors: Array<UserError>;
  globalErrors: Array<MutationGlobalError>;
  /** Not presently used */
  haltCode?: Maybe<Scalars['String']>;
};

/** A known or anonymous user in the system. Registration and management is primarily handled through the WDP Keycloak instance. */
export type User = AccessGrantSubject & ExposesPermissions & Node & Sluggable & {
  __typename?: 'User';
  /** All access grants for this user */
  accessGrants: AnyUserAccessGrantConnection;
  /** A polymorphic connection for access grants from a subject */
  allAccessGrants: AnyAccessGrantConnection;
  /** A list of allowed actions for the given user on this entity (and its descendants). */
  allowedActions: Array<Scalars['String']>;
  /** Is this an anonymous / unauthenticated user? */
  anonymous: Scalars['Boolean'];
  /**
   * The roles this user has access to assign based on their `primaryRole`,
   * outside of any hierarchical context.
   *
   * When actually assigning roles for an entity, you should use `Entity.assignableRoles`,
   * because it will ensure that the user sufficient permissions at that level.
   */
  assignableRoles: Array<Role>;
  /** A user's avatar */
  avatar: ImageAttachment;
  /** Configurable metadata for the avatar attachment */
  avatarMetadata?: Maybe<ImageMetadata>;
  /** All access grants for this user on a collection */
  collectionAccessGrants: UserCollectionAccessGrantConnection;
  /** Query the collections this user has access to */
  collections: CollectionConnection;
  /** Query the communities this user has access to */
  communities: CommunityConnection;
  /** All access grants for this user on a community */
  communityAccessGrants: UserCommunityAccessGrantConnection;
  createdAt: Scalars['ISO8601DateTime'];
  /** A user's email. Depending on the upstream provider, this may not be set. */
  email?: Maybe<Scalars['String']>;
  /** Has this user's email been verified to work through Keycloak? */
  emailVerified: Scalars['Boolean'];
  /** The user's family (last) name. Depending on the upstream provider, this may not be set. */
  familyName?: Maybe<Scalars['String']>;
  /** The user's given (first) name. Depending on the upstream provider, this may not be set. */
  givenName?: Maybe<Scalars['String']>;
  /** Does this user have access to administer the entire instance? */
  globalAdmin: Scalars['Boolean'];
  id: Scalars['ID'];
  /** All access grants for this user on an item */
  itemAccessGrants: UserItemAccessGrantConnection;
  /** Query the items this user has access to */
  items: ItemConnection;
  /** The user's full provided name. Depending on the upstream provider, this may not be set. */
  name?: Maybe<Scalars['String']>;
  /** An array of hashes that can be requested to load in a context */
  permissions: Array<PermissionGrant>;
  /** The primary role associated with this subject. */
  primaryRole?: Maybe<Role>;
  slug: Scalars['Slug'];
  updatedAt: Scalars['ISO8601DateTime'];
  /** Can this user upload anything at all? */
  uploadAccess: Scalars['Boolean'];
  /** If a user has any upload access, this token will allow them to do so. */
  uploadToken?: Maybe<Scalars['String']>;
  /** A unique username for the user. Depending on the upstream provider, this may not be set. */
  username?: Maybe<Scalars['String']>;
};


/** A known or anonymous user in the system. Registration and management is primarily handled through the WDP Keycloak instance. */
export type UserAccessGrantsArgs = {
  entity?: Maybe<AccessGrantEntityFilter>;
  order?: Maybe<SimpleOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** A known or anonymous user in the system. Registration and management is primarily handled through the WDP Keycloak instance. */
export type UserAllAccessGrantsArgs = {
  entity?: Maybe<AccessGrantEntityFilter>;
  order?: Maybe<SimpleOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** A known or anonymous user in the system. Registration and management is primarily handled through the WDP Keycloak instance. */
export type UserCollectionAccessGrantsArgs = {
  order?: Maybe<SimpleOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** A known or anonymous user in the system. Registration and management is primarily handled through the WDP Keycloak instance. */
export type UserCollectionsArgs = {
  access?: Maybe<EntityPermissionFilter>;
  order?: Maybe<EntityOrder>;
  schema?: Maybe<Array<Scalars['String']>>;
  nodeFilter?: Maybe<TreeNodeFilter>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** A known or anonymous user in the system. Registration and management is primarily handled through the WDP Keycloak instance. */
export type UserCommunitiesArgs = {
  access?: Maybe<EntityPermissionFilter>;
  order?: Maybe<EntityOrder>;
  schema?: Maybe<Array<Scalars['String']>>;
  nodeFilter?: Maybe<TreeNodeFilter>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** A known or anonymous user in the system. Registration and management is primarily handled through the WDP Keycloak instance. */
export type UserCommunityAccessGrantsArgs = {
  order?: Maybe<SimpleOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** A known or anonymous user in the system. Registration and management is primarily handled through the WDP Keycloak instance. */
export type UserItemAccessGrantsArgs = {
  order?: Maybe<SimpleOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** A known or anonymous user in the system. Registration and management is primarily handled through the WDP Keycloak instance. */
export type UserItemsArgs = {
  access?: Maybe<EntityPermissionFilter>;
  order?: Maybe<EntityOrder>;
  schema?: Maybe<Array<Scalars['String']>>;
  nodeFilter?: Maybe<TreeNodeFilter>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};

/** An access grant for a user */
export type UserAccessGrant = {
  /** The polymorphic entity to which access has been granted */
  entity: AnyEntity;
  /** The role the subject has been assigned */
  role: Role;
  /** The polymorphic subject that has been granted access */
  subject: AccessGrantSubject;
  /** The user which has been granted access */
  user: User;
};

/** An access grant for a user to a collection. */
export type UserCollectionAccessGrant = AccessGrant & UserAccessGrant & Node & Sluggable & {
  __typename?: 'UserCollectionAccessGrant';
  /** The collection to which a user has been granted access */
  collection: Collection;
  createdAt: Scalars['ISO8601DateTime'];
  /** The polymorphic entity to which access has been granted */
  entity: AnyEntity;
  id: Scalars['ID'];
  /** The role the subject has been assigned */
  role: Role;
  slug: Scalars['Slug'];
  /** The polymorphic subject that has been granted access */
  subject: AccessGrantSubject;
  updatedAt: Scalars['ISO8601DateTime'];
  /** The user which has been granted access */
  user: User;
};

/** The connection type for UserCollectionAccessGrant. */
export type UserCollectionAccessGrantConnection = Paginated & {
  __typename?: 'UserCollectionAccessGrantConnection';
  /** A list of edges. */
  edges: Array<UserCollectionAccessGrantEdge>;
  /** A list of nodes. */
  nodes: Array<UserCollectionAccessGrant>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UserCollectionAccessGrantEdge = {
  __typename?: 'UserCollectionAccessGrantEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: UserCollectionAccessGrant;
};

/** An access grant for a user to a community. */
export type UserCommunityAccessGrant = AccessGrant & UserAccessGrant & Node & Sluggable & {
  __typename?: 'UserCommunityAccessGrant';
  /** The community to which a user has been granted access */
  community: Community;
  createdAt: Scalars['ISO8601DateTime'];
  /** The polymorphic entity to which access has been granted */
  entity: AnyEntity;
  id: Scalars['ID'];
  /** The role the subject has been assigned */
  role: Role;
  slug: Scalars['Slug'];
  /** The polymorphic subject that has been granted access */
  subject: AccessGrantSubject;
  updatedAt: Scalars['ISO8601DateTime'];
  /** The user which has been granted access */
  user: User;
};

/** The connection type for UserCommunityAccessGrant. */
export type UserCommunityAccessGrantConnection = Paginated & {
  __typename?: 'UserCommunityAccessGrantConnection';
  /** A list of edges. */
  edges: Array<UserCommunityAccessGrantEdge>;
  /** A list of nodes. */
  nodes: Array<UserCommunityAccessGrant>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UserCommunityAccessGrantEdge = {
  __typename?: 'UserCommunityAccessGrantEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: UserCommunityAccessGrant;
};

/** The connection type for User. */
export type UserConnection = Paginated & {
  __typename?: 'UserConnection';
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** A list of nodes. */
  nodes: Array<User>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: User;
};

/** A user-readable error. Somewhat deprecated now, but may be repurposed */
export type UserError = {
  __typename?: 'UserError';
  /** The attribute path to this error, if applicable */
  attributePath?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  /** A description of the error */
  message: Scalars['String'];
  /** Which input value this error came from */
  path?: Maybe<Array<Scalars['String']>>;
  /** Whether this error applies to a single attribute, or globally to the entire form */
  scope: MutationErrorScope;
};

/** Not presently exposed through the API. */
export type UserGroup = AccessGrantSubject & Node & Sluggable & {
  __typename?: 'UserGroup';
  /** All access grants for this group */
  accessGrants: AnyUserGroupAccessGrantConnection;
  /** A polymorphic connection for access grants from a subject */
  allAccessGrants: AnyAccessGrantConnection;
  /**
   * The roles this user has access to assign based on their `primaryRole`,
   * outside of any hierarchical context.
   *
   * When actually assigning roles for an entity, you should use `Entity.assignableRoles`,
   * because it will ensure that the user sufficient permissions at that level.
   */
  assignableRoles: Array<Role>;
  /** All access grants for this group on a collection */
  collectionAccessGrants: UserGroupCollectionAccessGrantConnection;
  /** All access grants for this group on a community */
  communityAccessGrants: UserGroupCommunityAccessGrantConnection;
  createdAt: Scalars['ISO8601DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  /** All access grants for this group on an item */
  itemAccessGrants: UserGroupItemAccessGrantConnection;
  name: Scalars['String'];
  /** The primary role associated with this subject. */
  primaryRole?: Maybe<Role>;
  slug: Scalars['Slug'];
  updatedAt: Scalars['ISO8601DateTime'];
  users: UserConnection;
};


/** Not presently exposed through the API. */
export type UserGroupAccessGrantsArgs = {
  entity?: Maybe<AccessGrantEntityFilter>;
  order?: Maybe<SimpleOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** Not presently exposed through the API. */
export type UserGroupAllAccessGrantsArgs = {
  entity?: Maybe<AccessGrantEntityFilter>;
  order?: Maybe<SimpleOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** Not presently exposed through the API. */
export type UserGroupCollectionAccessGrantsArgs = {
  order?: Maybe<SimpleOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** Not presently exposed through the API. */
export type UserGroupCommunityAccessGrantsArgs = {
  order?: Maybe<SimpleOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** Not presently exposed through the API. */
export type UserGroupItemAccessGrantsArgs = {
  order?: Maybe<SimpleOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};


/** Not presently exposed through the API. */
export type UserGroupUsersArgs = {
  order?: Maybe<UserOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Maybe<Scalars['Int']>;
};

/** An access grant for a user group */
export type UserGroupAccessGrant = {
  /** The polymorphic entity to which access has been granted */
  entity: AnyEntity;
  /** The role the subject has been assigned */
  role: Role;
  /** The polymorphic subject that has been granted access */
  subject: AccessGrantSubject;
  /** The group which has been granted access */
  userGroup: UserGroup;
};

/** An access grant for a group to a collection. */
export type UserGroupCollectionAccessGrant = AccessGrant & UserGroupAccessGrant & Node & Sluggable & {
  __typename?: 'UserGroupCollectionAccessGrant';
  /** The collection to which a group has been granted access */
  collection: Collection;
  createdAt: Scalars['ISO8601DateTime'];
  /** The polymorphic entity to which access has been granted */
  entity: AnyEntity;
  id: Scalars['ID'];
  /** The role the subject has been assigned */
  role: Role;
  slug: Scalars['Slug'];
  /** The polymorphic subject that has been granted access */
  subject: AccessGrantSubject;
  updatedAt: Scalars['ISO8601DateTime'];
  /** The group which has been granted access */
  userGroup: UserGroup;
};

/** The connection type for UserGroupCollectionAccessGrant. */
export type UserGroupCollectionAccessGrantConnection = Paginated & {
  __typename?: 'UserGroupCollectionAccessGrantConnection';
  /** A list of edges. */
  edges: Array<UserGroupCollectionAccessGrantEdge>;
  /** A list of nodes. */
  nodes: Array<UserGroupCollectionAccessGrant>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UserGroupCollectionAccessGrantEdge = {
  __typename?: 'UserGroupCollectionAccessGrantEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: UserGroupCollectionAccessGrant;
};

/** An access grant for a group to a community. */
export type UserGroupCommunityAccessGrant = AccessGrant & UserGroupAccessGrant & Node & Sluggable & {
  __typename?: 'UserGroupCommunityAccessGrant';
  /** The community to which a group has been granted access */
  community: Community;
  createdAt: Scalars['ISO8601DateTime'];
  /** The polymorphic entity to which access has been granted */
  entity: AnyEntity;
  id: Scalars['ID'];
  /** The role the subject has been assigned */
  role: Role;
  slug: Scalars['Slug'];
  /** The polymorphic subject that has been granted access */
  subject: AccessGrantSubject;
  updatedAt: Scalars['ISO8601DateTime'];
  /** The group which has been granted access */
  userGroup: UserGroup;
};

/** The connection type for UserGroupCommunityAccessGrant. */
export type UserGroupCommunityAccessGrantConnection = Paginated & {
  __typename?: 'UserGroupCommunityAccessGrantConnection';
  /** A list of edges. */
  edges: Array<UserGroupCommunityAccessGrantEdge>;
  /** A list of nodes. */
  nodes: Array<UserGroupCommunityAccessGrant>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UserGroupCommunityAccessGrantEdge = {
  __typename?: 'UserGroupCommunityAccessGrantEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: UserGroupCommunityAccessGrant;
};

/** An access grant for a group to a item. */
export type UserGroupItemAccessGrant = AccessGrant & UserGroupAccessGrant & Node & Sluggable & {
  __typename?: 'UserGroupItemAccessGrant';
  createdAt: Scalars['ISO8601DateTime'];
  /** The polymorphic entity to which access has been granted */
  entity: AnyEntity;
  id: Scalars['ID'];
  /** The item to which a group has been granted access */
  item: Item;
  /** The role the subject has been assigned */
  role: Role;
  slug: Scalars['Slug'];
  /** The polymorphic subject that has been granted access */
  subject: AccessGrantSubject;
  updatedAt: Scalars['ISO8601DateTime'];
  /** The group which has been granted access */
  userGroup: UserGroup;
};

/** The connection type for UserGroupItemAccessGrant. */
export type UserGroupItemAccessGrantConnection = Paginated & {
  __typename?: 'UserGroupItemAccessGrantConnection';
  /** A list of edges. */
  edges: Array<UserGroupItemAccessGrantEdge>;
  /** A list of nodes. */
  nodes: Array<UserGroupItemAccessGrant>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UserGroupItemAccessGrantEdge = {
  __typename?: 'UserGroupItemAccessGrantEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: UserGroupItemAccessGrant;
};

/** An access grant for a user to a collection. */
export type UserItemAccessGrant = AccessGrant & UserAccessGrant & Node & Sluggable & {
  __typename?: 'UserItemAccessGrant';
  createdAt: Scalars['ISO8601DateTime'];
  /** The polymorphic entity to which access has been granted */
  entity: AnyEntity;
  id: Scalars['ID'];
  /** The item to which a user has been granted access */
  item: Item;
  /** The role the subject has been assigned */
  role: Role;
  slug: Scalars['Slug'];
  /** The polymorphic subject that has been granted access */
  subject: AccessGrantSubject;
  updatedAt: Scalars['ISO8601DateTime'];
  /** The user which has been granted access */
  user: User;
};

/** The connection type for UserItemAccessGrant. */
export type UserItemAccessGrantConnection = Paginated & {
  __typename?: 'UserItemAccessGrantConnection';
  /** A list of edges. */
  edges: Array<UserItemAccessGrantEdge>;
  /** A list of nodes. */
  nodes: Array<UserItemAccessGrant>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UserItemAccessGrantEdge = {
  __typename?: 'UserItemAccessGrantEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: UserItemAccessGrant;
};

/** Sort users by a specific property and order */
export type UserOrder =
  /** Sort users by newest created date */
  | 'RECENT'
  /** Sort users by oldest created date */
  | 'OLDEST'
  /** Sort users with admins pushed to the top, followed by name A-Z */
  | 'ADMINS_FIRST'
  /** Sort users with admins pushed to the bottom, followed by name Z-A */
  | 'ADMINS_LAST'
  /** Sort users with admins pushed to the top, followed by recent */
  | 'ADMINS_RECENT'
  /** Sort users with admins pushed to the bottom, followed by `OLDEST` */
  | 'ADMINS_OLDEST'
  /** Sort users by their name A-Z */
  | 'NAME_ASCENDING'
  /** Sort users by their name Z-A */
  | 'NAME_DESCENDING'
  /** Sort users by their email A-Z */
  | 'EMAIL_ASCENDING'
  /** Sort users by their email Z-A */
  | 'EMAIL_DESCENDING'
  | '%future added value';

/** A mapping of attributes for a user to update in the authentication provider. */
export type UserProfileInput = {
  givenName: Scalars['String'];
  familyName: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
};

export type VariableDateProperty = SchemaProperty & ScalarProperty & SearchableProperty & {
  __typename?: 'VariableDateProperty';
  /**
   * Provided for introspection. This describes whether or not the property's value
   * comes in an array rather than representing a discrete piece of information.
   *
   * See `AssetsProperty`, `ContributorsProperty`, `MultiselectProperty`, and `TagsProperty`
   * for examples.
   */
  array: Scalars['Boolean'];
  dateWithPrecision?: Maybe<VariablePrecisionDate>;
  description?: Maybe<Scalars['String']>;
  /**
   * The full path that represents the property on the schema instance. It is guaranteed
   * to be unique for the instance, and can be used to grab a property directly, as well as
   * facilitating schema validation and errors within the admin application's forms.
   */
  fullPath: Scalars['String'];
  /** The purpose or intent of this property relative to its entity, parents, and others. */
  function: SchemaPropertyFunction;
  /**
   * Whether to render a field as "wide" (two columns) in the form.
   * This is intended to help structure forms logically, as well as
   * provide ample space for certain types of data input, particularly
   * full-text, markdown, and other such complex fields.
   */
  isWide: Scalars['Boolean'];
  /** Provided for introspection. This describes the underlying structure of the data type. */
  kind: SchemaPropertyKind;
  label: Scalars['String'];
  /**
   * Provided for introspection. Whether this property can be used to order entities.
   * For certain data types, there's no sensible way to order properties.
   */
  orderable: Scalars['Boolean'];
  /**
   * The "short" path for the property. For properties nested within a group, this can
   * be considered the name of the property without the group's prefix.
   */
  path: Scalars['String'];
  /**
   * Whether or not this property is required in order for the schema instance
   * to be considered valid.
   *
   * Note: invalid data provided to a schema property will still invalidate
   * the instance as a whole???the required trait only determines whether a value
   * **must** be set.
   */
  required: Scalars['Boolean'];
  searchOperators: Array<SearchOperator>;
  searchPath: Scalars['String'];
  /**
   * Provided for introspection. This represents the actual data type this property
   * uses.
   *
   * Rendering in the frontend should rely primarily on the `AnySchemaProperty` and
   * `AnyScalarProperty` unions (in that order)`, rather than relying on this value,
   * since the actual implementations of these properties differ in the GraphQL types
   * associated with their values.
   */
  type: SchemaPropertyType;
};

/**
 * A wrapper around a date that allows us to describe a level of precision to apply to it,
 * which can be used in the frontend to affect its display.
 */
export type VariablePrecisionDate = {
  __typename?: 'VariablePrecisionDate';
  /** The level of precision: the frontend can make decisions about how to format the associated value based on this */
  precision: DatePrecision;
  /** The actual date, encoded in ISO8601 format (if available) */
  value?: Maybe<Scalars['ISO8601Date']>;
};

/** A corresponding input type for VariablePrecisionDate. */
export type VariablePrecisionDateInput = {
  /** The actual date, encoded in ISO8601 format (if available) */
  value?: Maybe<Scalars['ISO8601Date']>;
  /** The level of precision: the frontend can make decisions about how to format the associated value based on this */
  precision: DatePrecision;
};




export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AccessControlList: ResolverTypeWrapper<AccessControlList>;
  String: ResolverTypeWrapper<Scalars['String']>;
  AccessGrant: ResolversTypes['UserCollectionAccessGrant'] | ResolversTypes['UserCommunityAccessGrant'] | ResolversTypes['UserGroupCollectionAccessGrant'] | ResolversTypes['UserGroupCommunityAccessGrant'] | ResolversTypes['UserGroupItemAccessGrant'] | ResolversTypes['UserItemAccessGrant'];
  AccessGrantEntityFilter: AccessGrantEntityFilter;
  AccessGrantSubject: ResolversTypes['User'] | ResolversTypes['UserGroup'];
  Int: ResolverTypeWrapper<Scalars['Int']>;
  AccessGrantSubjectFilter: AccessGrantSubjectFilter;
  Accessible: ResolversTypes['Collection'] | ResolversTypes['Community'] | ResolversTypes['Item'];
  AlterSchemaVersionInput: AlterSchemaVersionInput;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  AlterSchemaVersionPayload: ResolverTypeWrapper<Omit<AlterSchemaVersionPayload, 'entity'> & { entity?: Maybe<ResolversTypes['AnyEntity']> }>;
  AndOperatorInput: AndOperatorInput;
  Announcement: ResolverTypeWrapper<Omit<Announcement, 'entity'> & { entity: ResolversTypes['AnyEntity'] }>;
  AnnouncementConnection: ResolverTypeWrapper<AnnouncementConnection>;
  AnnouncementEdge: ResolverTypeWrapper<AnnouncementEdge>;
  AnnouncementOrder: AnnouncementOrder;
  AnyAccessGrant: ResolversTypes['UserCollectionAccessGrant'] | ResolversTypes['UserCommunityAccessGrant'] | ResolversTypes['UserGroupCollectionAccessGrant'] | ResolversTypes['UserGroupCommunityAccessGrant'] | ResolversTypes['UserGroupItemAccessGrant'] | ResolversTypes['UserItemAccessGrant'];
  AnyAccessGrantConnection: ResolverTypeWrapper<Omit<AnyAccessGrantConnection, 'nodes'> & { nodes: Array<ResolversTypes['AnyAccessGrant']> }>;
  AnyAccessGrantEdge: ResolverTypeWrapper<Omit<AnyAccessGrantEdge, 'node'> & { node: ResolversTypes['AnyAccessGrant'] }>;
  AnyAsset: ResolversTypes['AssetAudio'] | ResolversTypes['AssetDocument'] | ResolversTypes['AssetImage'] | ResolversTypes['AssetPDF'] | ResolversTypes['AssetUnknown'] | ResolversTypes['AssetVideo'];
  AnyAssetConnection: ResolverTypeWrapper<Omit<AnyAssetConnection, 'nodes'> & { nodes: Array<ResolversTypes['AnyAsset']> }>;
  AnyAssetEdge: ResolverTypeWrapper<Omit<AnyAssetEdge, 'node'> & { node: ResolversTypes['AnyAsset'] }>;
  AnyAttachable: ResolversTypes['Collection'] | ResolversTypes['Community'] | ResolversTypes['Item'];
  AnyChildEntity: ResolversTypes['Collection'] | ResolversTypes['Item'];
  AnyCollectionAccessGrant: ResolversTypes['UserCollectionAccessGrant'] | ResolversTypes['UserGroupCollectionAccessGrant'];
  AnyCollectionAccessGrantConnection: ResolverTypeWrapper<Omit<AnyCollectionAccessGrantConnection, 'nodes'> & { nodes: Array<ResolversTypes['AnyCollectionAccessGrant']> }>;
  AnyCollectionAccessGrantEdge: ResolverTypeWrapper<Omit<AnyCollectionAccessGrantEdge, 'node'> & { node: ResolversTypes['AnyCollectionAccessGrant'] }>;
  AnyCommunityAccessGrant: ResolversTypes['UserCommunityAccessGrant'] | ResolversTypes['UserGroupCommunityAccessGrant'];
  AnyCommunityAccessGrantConnection: ResolverTypeWrapper<Omit<AnyCommunityAccessGrantConnection, 'nodes'> & { nodes: Array<ResolversTypes['AnyCommunityAccessGrant']> }>;
  AnyCommunityAccessGrantEdge: ResolverTypeWrapper<Omit<AnyCommunityAccessGrantEdge, 'node'> & { node: ResolversTypes['AnyCommunityAccessGrant'] }>;
  AnyContribution: ResolversTypes['CollectionContribution'] | ResolversTypes['ItemContribution'];
  AnyContributor: ResolversTypes['OrganizationContributor'] | ResolversTypes['PersonContributor'];
  AnyContributorConnection: ResolverTypeWrapper<Omit<AnyContributorConnection, 'nodes'> & { nodes: Array<ResolversTypes['AnyContributor']> }>;
  AnyContributorEdge: ResolverTypeWrapper<Omit<AnyContributorEdge, 'node'> & { node: ResolversTypes['AnyContributor'] }>;
  AnyEntity: ResolversTypes['Collection'] | ResolversTypes['Community'] | ResolversTypes['Item'];
  AnyLinkTarget: ResolversTypes['Collection'] | ResolversTypes['Item'];
  AnyOrderingEntry: ResolversTypes['Collection'] | ResolversTypes['Community'] | ResolversTypes['EntityLink'] | ResolversTypes['Item'];
  AnyOrderingPath: ResolversTypes['SchemaOrderingPath'] | ResolversTypes['StaticOrderingPath'];
  AnyScalarProperty: ResolversTypes['AssetProperty'] | ResolversTypes['AssetsProperty'] | ResolversTypes['BooleanProperty'] | ResolversTypes['ContributorProperty'] | ResolversTypes['ContributorsProperty'] | ResolversTypes['DateProperty'] | ResolversTypes['EmailProperty'] | ResolversTypes['EntitiesProperty'] | ResolversTypes['EntityProperty'] | ResolversTypes['FloatProperty'] | ResolversTypes['FullTextProperty'] | ResolversTypes['IntegerProperty'] | ResolversTypes['MarkdownProperty'] | ResolversTypes['MultiselectProperty'] | ResolversTypes['SelectProperty'] | ResolversTypes['StringProperty'] | ResolversTypes['TagsProperty'] | ResolversTypes['TimestampProperty'] | ResolversTypes['URLProperty'] | ResolversTypes['UnknownProperty'] | ResolversTypes['VariableDateProperty'];
  AnySchemaProperty: ResolversTypes['AssetProperty'] | ResolversTypes['AssetsProperty'] | ResolversTypes['BooleanProperty'] | ResolversTypes['ContributorProperty'] | ResolversTypes['ContributorsProperty'] | ResolversTypes['DateProperty'] | ResolversTypes['EmailProperty'] | ResolversTypes['EntitiesProperty'] | ResolversTypes['EntityProperty'] | ResolversTypes['FloatProperty'] | ResolversTypes['FullTextProperty'] | ResolversTypes['GroupProperty'] | ResolversTypes['IntegerProperty'] | ResolversTypes['MarkdownProperty'] | ResolversTypes['MultiselectProperty'] | ResolversTypes['SelectProperty'] | ResolversTypes['StringProperty'] | ResolversTypes['TagsProperty'] | ResolversTypes['TimestampProperty'] | ResolversTypes['URLProperty'] | ResolversTypes['UnknownProperty'] | ResolversTypes['VariableDateProperty'];
  AnySearchableProperty: ResolversTypes['BooleanProperty'] | ResolversTypes['DateProperty'] | ResolversTypes['FloatProperty'] | ResolversTypes['FullTextProperty'] | ResolversTypes['IntegerProperty'] | ResolversTypes['MarkdownProperty'] | ResolversTypes['MultiselectProperty'] | ResolversTypes['SelectProperty'] | ResolversTypes['StringProperty'] | ResolversTypes['TimestampProperty'] | ResolversTypes['VariableDateProperty'];
  AnyUserAccessGrant: ResolversTypes['UserCollectionAccessGrant'] | ResolversTypes['UserCommunityAccessGrant'] | ResolversTypes['UserItemAccessGrant'];
  AnyUserAccessGrantConnection: ResolverTypeWrapper<Omit<AnyUserAccessGrantConnection, 'nodes'> & { nodes: Array<ResolversTypes['AnyUserAccessGrant']> }>;
  AnyUserAccessGrantEdge: ResolverTypeWrapper<Omit<AnyUserAccessGrantEdge, 'node'> & { node: ResolversTypes['AnyUserAccessGrant'] }>;
  AnyUserGroupAccessGrant: ResolversTypes['UserGroupCollectionAccessGrant'] | ResolversTypes['UserGroupCommunityAccessGrant'] | ResolversTypes['UserGroupItemAccessGrant'];
  AnyUserGroupAccessGrantConnection: ResolverTypeWrapper<Omit<AnyUserGroupAccessGrantConnection, 'nodes'> & { nodes: Array<ResolversTypes['AnyUserGroupAccessGrant']> }>;
  AnyUserGroupAccessGrantEdge: ResolverTypeWrapper<Omit<AnyUserGroupAccessGrantEdge, 'node'> & { node: ResolversTypes['AnyUserGroupAccessGrant'] }>;
  ApplySchemaPropertiesInput: ApplySchemaPropertiesInput;
  ApplySchemaPropertiesPayload: ResolverTypeWrapper<Omit<ApplySchemaPropertiesPayload, 'entity'> & { entity?: Maybe<ResolversTypes['AnyEntity']> }>;
  Asset: ResolversTypes['AssetAudio'] | ResolversTypes['AssetDocument'] | ResolversTypes['AssetImage'] | ResolversTypes['AssetPDF'] | ResolversTypes['AssetUnknown'] | ResolversTypes['AssetVideo'];
  AssetAudio: ResolverTypeWrapper<Omit<AssetAudio, 'attachable'> & { attachable: ResolversTypes['AnyAttachable'] }>;
  AssetDocument: ResolverTypeWrapper<Omit<AssetDocument, 'attachable'> & { attachable: ResolversTypes['AnyAttachable'] }>;
  AssetImage: ResolverTypeWrapper<Omit<AssetImage, 'attachable'> & { attachable: ResolversTypes['AnyAttachable'] }>;
  AssetKind: AssetKind;
  AssetKindFilter: AssetKindFilter;
  AssetPDF: ResolverTypeWrapper<Omit<AssetPdf, 'attachable'> & { attachable: ResolversTypes['AnyAttachable'] }>;
  AssetPermissionGrid: ResolverTypeWrapper<AssetPermissionGrid>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  AssetProperty: ResolverTypeWrapper<Omit<AssetProperty, 'asset'> & { asset?: Maybe<ResolversTypes['AnyAsset']> }>;
  AssetSelectOption: ResolverTypeWrapper<AssetSelectOption>;
  AssetUnknown: ResolverTypeWrapper<Omit<AssetUnknown, 'attachable'> & { attachable: ResolversTypes['AnyAttachable'] }>;
  AssetVideo: ResolverTypeWrapper<Omit<AssetVideo, 'attachable'> & { attachable: ResolversTypes['AnyAttachable'] }>;
  AssetsProperty: ResolverTypeWrapper<Omit<AssetsProperty, 'assets'> & { assets: Array<ResolversTypes['AnyAsset']> }>;
  Attachable: ResolversTypes['Collection'] | ResolversTypes['Community'] | ResolversTypes['Item'];
  AttachmentStorage: AttachmentStorage;
  BooleanProperty: ResolverTypeWrapper<BooleanProperty>;
  CRUDPermissionGrid: ResolversTypes['AssetPermissionGrid'] | ResolversTypes['EntityPermissionGrid'];
  ChildEntity: ResolversTypes['Collection'] | ResolversTypes['Item'];
  ClearInitialOrderingInput: ClearInitialOrderingInput;
  ClearInitialOrderingPayload: ResolverTypeWrapper<Omit<ClearInitialOrderingPayload, 'entity'> & { entity?: Maybe<ResolversTypes['AnyEntity']> }>;
  Collection: ResolverTypeWrapper<Omit<Collection, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<ResolversTypes['AnyEntity']>, ancestorOfType?: Maybe<ResolversTypes['AnyEntity']>, parent?: Maybe<ResolversTypes['CollectionParent']>, schemaProperties: Array<ResolversTypes['AnySchemaProperty']>, schemaProperty?: Maybe<ResolversTypes['AnySchemaProperty']> }>;
  CollectionConnection: ResolverTypeWrapper<CollectionConnection>;
  CollectionContribution: ResolverTypeWrapper<Omit<CollectionContribution, 'contributor'> & { contributor: ResolversTypes['AnyContributor'] }>;
  CollectionContributionConnection: ResolverTypeWrapper<CollectionContributionConnection>;
  CollectionContributionEdge: ResolverTypeWrapper<CollectionContributionEdge>;
  CollectionEdge: ResolverTypeWrapper<CollectionEdge>;
  CollectionParent: ResolversTypes['Collection'] | ResolversTypes['Community'];
  Community: ResolverTypeWrapper<Omit<Community, 'schemaProperties' | 'schemaProperty'> & { schemaProperties: Array<ResolversTypes['AnySchemaProperty']>, schemaProperty?: Maybe<ResolversTypes['AnySchemaProperty']> }>;
  CommunityConnection: ResolverTypeWrapper<CommunityConnection>;
  CommunityEdge: ResolverTypeWrapper<CommunityEdge>;
  ContextualPermission: ResolverTypeWrapper<Omit<ContextualPermission, 'accessGrants'> & { accessGrants: Array<ResolversTypes['AnyUserAccessGrant']> }>;
  ContextualPermissionConnection: ResolverTypeWrapper<ContextualPermissionConnection>;
  ContextualPermissionEdge: ResolverTypeWrapper<ContextualPermissionEdge>;
  ContextualPermissionOrder: ContextualPermissionOrder;
  Contributable: ResolversTypes['Collection'] | ResolversTypes['Item'];
  Contribution: ResolversTypes['CollectionContribution'] | ResolversTypes['ItemContribution'];
  ContributionMetadata: ResolverTypeWrapper<ContributionMetadata>;
  ContributionMetadataInput: ContributionMetadataInput;
  ContributionOrder: ContributionOrder;
  Contributor: ResolversTypes['OrganizationContributor'] | ResolversTypes['PersonContributor'];
  ContributorFilterKind: ContributorFilterKind;
  ContributorKind: ContributorKind;
  ContributorLink: ResolverTypeWrapper<ContributorLink>;
  ContributorLinkInput: ContributorLinkInput;
  ContributorLookupField: ContributorLookupField;
  ContributorOrder: ContributorOrder;
  ContributorProperty: ResolverTypeWrapper<Omit<ContributorProperty, 'contributor'> & { contributor?: Maybe<ResolversTypes['AnyContributor']> }>;
  ContributorSelectOption: ResolverTypeWrapper<ContributorSelectOption>;
  ContributorsProperty: ResolverTypeWrapper<Omit<ContributorsProperty, 'contributors'> & { contributors: Array<ResolversTypes['AnyContributor']> }>;
  CreateAnnouncementInput: CreateAnnouncementInput;
  CreateAnnouncementPayload: ResolverTypeWrapper<CreateAnnouncementPayload>;
  CreateAssetInput: CreateAssetInput;
  CreateAssetPayload: ResolverTypeWrapper<Omit<CreateAssetPayload, 'asset'> & { asset?: Maybe<ResolversTypes['AnyAsset']> }>;
  CreateCollectionInput: CreateCollectionInput;
  CreateCollectionPayload: ResolverTypeWrapper<CreateCollectionPayload>;
  CreateCommunityInput: CreateCommunityInput;
  CreateCommunityPayload: ResolverTypeWrapper<CreateCommunityPayload>;
  CreateItemInput: CreateItemInput;
  CreateItemPayload: ResolverTypeWrapper<CreateItemPayload>;
  CreateOrderingInput: CreateOrderingInput;
  CreateOrderingPayload: ResolverTypeWrapper<CreateOrderingPayload>;
  CreateOrganizationContributorInput: CreateOrganizationContributorInput;
  CreateOrganizationContributorPayload: ResolverTypeWrapper<CreateOrganizationContributorPayload>;
  CreatePageInput: CreatePageInput;
  CreatePagePayload: ResolverTypeWrapper<CreatePagePayload>;
  CreatePersonContributorInput: CreatePersonContributorInput;
  CreatePersonContributorPayload: ResolverTypeWrapper<CreatePersonContributorPayload>;
  CreateRoleInput: CreateRoleInput;
  CreateRolePayload: ResolverTypeWrapper<CreateRolePayload>;
  DateEqualsOperatorInput: DateEqualsOperatorInput;
  DateGTEOperatorInput: DateGteOperatorInput;
  DateLTEOperatorInput: DateLteOperatorInput;
  DatePrecision: DatePrecision;
  DateProperty: ResolverTypeWrapper<DateProperty>;
  DescribesSchema: ResolversTypes['HierarchicalSchemaRank'] | ResolversTypes['HierarchicalSchemaVersionRank'] | ResolversTypes['SchemaDefinition'] | ResolversTypes['SchemaVersion'];
  DestroyAnnouncementInput: DestroyAnnouncementInput;
  DestroyAnnouncementPayload: ResolverTypeWrapper<DestroyAnnouncementPayload>;
  DestroyAssetInput: DestroyAssetInput;
  DestroyAssetPayload: ResolverTypeWrapper<DestroyAssetPayload>;
  DestroyCollectionInput: DestroyCollectionInput;
  DestroyCollectionPayload: ResolverTypeWrapper<DestroyCollectionPayload>;
  DestroyCommunityInput: DestroyCommunityInput;
  DestroyCommunityPayload: ResolverTypeWrapper<DestroyCommunityPayload>;
  DestroyContributionInput: DestroyContributionInput;
  DestroyContributionPayload: ResolverTypeWrapper<DestroyContributionPayload>;
  DestroyContributorInput: DestroyContributorInput;
  DestroyContributorPayload: ResolverTypeWrapper<DestroyContributorPayload>;
  DestroyEntityLinkInput: DestroyEntityLinkInput;
  DestroyEntityLinkPayload: ResolverTypeWrapper<DestroyEntityLinkPayload>;
  DestroyItemInput: DestroyItemInput;
  DestroyItemPayload: ResolverTypeWrapper<DestroyItemPayload>;
  DestroyMutationPayload: ResolversTypes['DestroyAnnouncementPayload'] | ResolversTypes['DestroyAssetPayload'] | ResolversTypes['DestroyCollectionPayload'] | ResolversTypes['DestroyCommunityPayload'] | ResolversTypes['DestroyContributionPayload'] | ResolversTypes['DestroyContributorPayload'] | ResolversTypes['DestroyEntityLinkPayload'] | ResolversTypes['DestroyItemPayload'] | ResolversTypes['DestroyOrderingPayload'] | ResolversTypes['DestroyPagePayload'];
  DestroyOrderingInput: DestroyOrderingInput;
  DestroyOrderingPayload: ResolverTypeWrapper<DestroyOrderingPayload>;
  DestroyPageInput: DestroyPageInput;
  DestroyPagePayload: ResolverTypeWrapper<DestroyPagePayload>;
  Direction: Direction;
  EffectiveAccess: ResolverTypeWrapper<EffectiveAccess>;
  EmailProperty: ResolverTypeWrapper<EmailProperty>;
  EntitiesProperty: ResolverTypeWrapper<Omit<EntitiesProperty, 'entities'> & { entities: Array<ResolversTypes['AnyEntity']> }>;
  Entity: ResolversTypes['Collection'] | ResolversTypes['Community'] | ResolversTypes['Item'];
  EntityBreadcrumb: ResolverTypeWrapper<Omit<EntityBreadcrumb, 'crumb'> & { crumb: ResolversTypes['AnyEntity'] }>;
  EntityDescendant: ResolverTypeWrapper<Omit<EntityDescendant, 'descendant'> & { descendant: ResolversTypes['AnyEntity'] }>;
  EntityDescendantConnection: ResolverTypeWrapper<EntityDescendantConnection>;
  EntityDescendantEdge: ResolverTypeWrapper<EntityDescendantEdge>;
  EntityDescendantOrder: EntityDescendantOrder;
  EntityDescendantScopeFilter: EntityDescendantScopeFilter;
  EntityKind: EntityKind;
  EntityLink: ResolverTypeWrapper<Omit<EntityLink, 'source' | 'target'> & { source: ResolversTypes['AnyEntity'], target: ResolversTypes['AnyEntity'] }>;
  EntityLinkConnection: ResolverTypeWrapper<EntityLinkConnection>;
  EntityLinkEdge: ResolverTypeWrapper<EntityLinkEdge>;
  EntityLinkOperator: EntityLinkOperator;
  EntityLinkScope: EntityLinkScope;
  EntityOrder: EntityOrder;
  EntityPermissionFilter: EntityPermissionFilter;
  EntityPermissionGrid: ResolverTypeWrapper<EntityPermissionGrid>;
  EntityProperty: ResolverTypeWrapper<Omit<EntityProperty, 'entity'> & { entity?: Maybe<ResolversTypes['AnyEntity']> }>;
  EntityScope: EntityScope;
  EntitySelectOption: ResolverTypeWrapper<Omit<EntitySelectOption, 'entity'> & { entity: ResolversTypes['AnyEntity'] }>;
  EntityVisibility: EntityVisibility;
  EntityVisibilityFilter: EntityVisibilityFilter;
  EqualsOperatorInput: EqualsOperatorInput;
  ExposesEffectiveAccess: ResolversTypes['Role'];
  ExposesPermissions: ResolversTypes['AccessControlList'] | ResolversTypes['AssetPermissionGrid'] | ResolversTypes['ContextualPermission'] | ResolversTypes['EffectiveAccess'] | ResolversTypes['EntityPermissionGrid'] | ResolversTypes['GlobalAccessControlList'] | ResolversTypes['User'];
  FloatProperty: ResolverTypeWrapper<FloatProperty>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  FullText: ResolverTypeWrapper<FullText>;
  FullTextKind: FullTextKind;
  FullTextProperty: ResolverTypeWrapper<FullTextProperty>;
  GlobalAccessControlList: ResolverTypeWrapper<GlobalAccessControlList>;
  GlobalConfiguration: ResolverTypeWrapper<GlobalConfiguration>;
  GrantAccessInput: GrantAccessInput;
  GrantAccessPayload: ResolverTypeWrapper<Omit<GrantAccessPayload, 'entity'> & { entity?: Maybe<ResolversTypes['AnyEntity']> }>;
  GroupProperty: ResolverTypeWrapper<Omit<GroupProperty, 'properties'> & { properties: Array<ResolversTypes['AnyScalarProperty']> }>;
  HasAttachmentStorage: ResolversTypes['ImageAttachment'] | ResolversTypes['ImageOriginal'] | ResolversTypes['SiteLogoAttachment'];
  HasAvailableEntities: ResolversTypes['EntitiesProperty'] | ResolversTypes['EntityProperty'];
  HasDOI: ResolversTypes['Collection'] | ResolversTypes['Item'];
  HasEntityBreadcrumbs: ResolversTypes['Collection'] | ResolversTypes['EntitySelectOption'] | ResolversTypes['Item'];
  HasISSN: ResolversTypes['Collection'] | ResolversTypes['Item'];
  HasSchemaProperties: ResolversTypes['Collection'] | ResolversTypes['Community'] | ResolversTypes['Item'] | ResolversTypes['SchemaVersion'];
  HeroImageLayout: HeroImageLayout;
  HierarchicalSchemaRank: ResolverTypeWrapper<HierarchicalSchemaRank>;
  HierarchicalSchemaVersionRank: ResolverTypeWrapper<HierarchicalSchemaVersionRank>;
  ISO8601Date: ResolverTypeWrapper<Scalars['ISO8601Date']>;
  ISO8601DateTime: ResolverTypeWrapper<Scalars['ISO8601DateTime']>;
  Image: ResolversTypes['ImageDerivative'] | ResolversTypes['ImageOriginal'];
  ImageAttachment: ResolverTypeWrapper<ImageAttachment>;
  ImageDerivative: ResolverTypeWrapper<ImageDerivative>;
  ImageDerivativeFormat: ImageDerivativeFormat;
  ImageDerivativeSize: ImageDerivativeSize;
  ImageIdentification: ResolversTypes['ImageAttachment'] | ResolversTypes['ImageDerivative'] | ResolversTypes['ImageOriginal'] | ResolversTypes['ImageSize'] | ResolversTypes['SiteLogoAttachment'];
  ImageMetadata: ResolverTypeWrapper<ImageMetadata>;
  ImageMetadataInput: ImageMetadataInput;
  ImageOriginal: ResolverTypeWrapper<ImageOriginal>;
  ImagePurpose: ImagePurpose;
  ImageSize: ResolverTypeWrapper<ImageSize>;
  InAnyOperatorInput: InAnyOperatorInput;
  InstitutionSettings: ResolverTypeWrapper<InstitutionSettings>;
  InstitutionSettingsInput: InstitutionSettingsInput;
  IntegerProperty: ResolverTypeWrapper<IntegerProperty>;
  Item: ResolverTypeWrapper<Omit<Item, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<ResolversTypes['AnyEntity']>, ancestorOfType?: Maybe<ResolversTypes['AnyEntity']>, parent?: Maybe<ResolversTypes['ItemParent']>, schemaProperties: Array<ResolversTypes['AnySchemaProperty']>, schemaProperty?: Maybe<ResolversTypes['AnySchemaProperty']> }>;
  ItemConnection: ResolverTypeWrapper<ItemConnection>;
  ItemContribution: ResolverTypeWrapper<Omit<ItemContribution, 'contributor'> & { contributor: ResolversTypes['AnyContributor'] }>;
  ItemContributionConnection: ResolverTypeWrapper<ItemContributionConnection>;
  ItemContributionEdge: ResolverTypeWrapper<ItemContributionEdge>;
  ItemEdge: ResolverTypeWrapper<ItemEdge>;
  ItemParent: ResolversTypes['Collection'] | ResolversTypes['Item'];
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  LinkEntityInput: LinkEntityInput;
  LinkEntityPayload: ResolverTypeWrapper<LinkEntityPayload>;
  LinkTargetCandidate: ResolverTypeWrapper<Omit<LinkTargetCandidate, 'target'> & { target: ResolversTypes['AnyLinkTarget'] }>;
  LinkTargetCandidateConnection: ResolverTypeWrapper<LinkTargetCandidateConnection>;
  LinkTargetCandidateEdge: ResolverTypeWrapper<LinkTargetCandidateEdge>;
  LinkTargetCandidateFilter: LinkTargetCandidateFilter;
  LinkTargetCandidateKind: LinkTargetCandidateKind;
  MarkdownProperty: ResolverTypeWrapper<MarkdownProperty>;
  MatchesOperatorInput: MatchesOperatorInput;
  MultiselectProperty: ResolverTypeWrapper<MultiselectProperty>;
  Mutation: ResolverTypeWrapper<{}>;
  MutationAttributeError: ResolverTypeWrapper<MutationAttributeError>;
  MutationErrorScope: MutationErrorScope;
  MutationGlobalError: ResolverTypeWrapper<MutationGlobalError>;
  NamedAncestor: ResolverTypeWrapper<Omit<NamedAncestor, 'ancestor'> & { ancestor: ResolversTypes['AnyEntity'] }>;
  Node: ResolversTypes['Announcement'] | ResolversTypes['AssetAudio'] | ResolversTypes['AssetDocument'] | ResolversTypes['AssetImage'] | ResolversTypes['AssetPDF'] | ResolversTypes['AssetUnknown'] | ResolversTypes['AssetVideo'] | ResolversTypes['Collection'] | ResolversTypes['CollectionContribution'] | ResolversTypes['Community'] | ResolversTypes['ContextualPermission'] | ResolversTypes['EntityBreadcrumb'] | ResolversTypes['EntityLink'] | ResolversTypes['GlobalConfiguration'] | ResolversTypes['HierarchicalSchemaRank'] | ResolversTypes['HierarchicalSchemaVersionRank'] | ResolversTypes['Item'] | ResolversTypes['ItemContribution'] | ResolversTypes['LinkTargetCandidate'] | ResolversTypes['Ordering'] | ResolversTypes['OrderingEntry'] | ResolversTypes['OrganizationContributor'] | ResolversTypes['Page'] | ResolversTypes['PersonContributor'] | ResolversTypes['Role'] | ResolversTypes['SchemaDefinition'] | ResolversTypes['SchemaVersion'] | ResolversTypes['User'] | ResolversTypes['UserCollectionAccessGrant'] | ResolversTypes['UserCommunityAccessGrant'] | ResolversTypes['UserGroup'] | ResolversTypes['UserGroupCollectionAccessGrant'] | ResolversTypes['UserGroupCommunityAccessGrant'] | ResolversTypes['UserGroupItemAccessGrant'] | ResolversTypes['UserItemAccessGrant'];
  NullOrderPriority: NullOrderPriority;
  NumericGTEOperatorInput: NumericGteOperatorInput;
  NumericLTEOperatorInput: NumericLteOperatorInput;
  OptionableProperty: ResolversTypes['MultiselectProperty'] | ResolversTypes['SelectProperty'];
  OrOperatorInput: OrOperatorInput;
  OrderDefinition: ResolverTypeWrapper<OrderDefinition>;
  OrderDefinitionInput: OrderDefinitionInput;
  Ordering: ResolverTypeWrapper<Omit<Ordering, 'entity'> & { entity: ResolversTypes['AnyEntity'] }>;
  OrderingAvailabilityFilter: OrderingAvailabilityFilter;
  OrderingConnection: ResolverTypeWrapper<OrderingConnection>;
  OrderingDirectSelection: OrderingDirectSelection;
  OrderingEdge: ResolverTypeWrapper<OrderingEdge>;
  OrderingEntry: ResolverTypeWrapper<Omit<OrderingEntry, 'entry'> & { entry: ResolversTypes['AnyOrderingEntry'] }>;
  OrderingEntryConnection: ResolverTypeWrapper<OrderingEntryConnection>;
  OrderingEntryEdge: ResolverTypeWrapper<OrderingEntryEdge>;
  OrderingEntrySortMode: OrderingEntrySortMode;
  OrderingFilterDefinition: ResolverTypeWrapper<OrderingFilterDefinition>;
  OrderingFilterDefinitionInput: OrderingFilterDefinitionInput;
  OrderingOrder: OrderingOrder;
  OrderingPath: ResolversTypes['SchemaOrderingPath'] | ResolversTypes['StaticOrderingPath'];
  OrderingPathGrouping: OrderingPathGrouping;
  OrderingRenderDefinition: ResolverTypeWrapper<OrderingRenderDefinition>;
  OrderingRenderDefinitionInput: OrderingRenderDefinitionInput;
  OrderingRenderMode: OrderingRenderMode;
  OrderingSchemaFilter: ResolverTypeWrapper<OrderingSchemaFilter>;
  OrderingSchemaFilterInput: OrderingSchemaFilterInput;
  OrderingSelectDefinition: ResolverTypeWrapper<OrderingSelectDefinition>;
  OrderingSelectDefinitionInput: OrderingSelectDefinitionInput;
  OrderingSelectLinkDefinition: ResolverTypeWrapper<OrderingSelectLinkDefinition>;
  OrderingSelectLinkDefinitionInput: OrderingSelectLinkDefinitionInput;
  OrderingVisibilityFilter: OrderingVisibilityFilter;
  OrganizationContributor: ResolverTypeWrapper<OrganizationContributor>;
  Page: ResolverTypeWrapper<Omit<Page, 'entity'> & { entity: ResolversTypes['AnyEntity'] }>;
  PageConnection: ResolverTypeWrapper<PageConnection>;
  PageDirection: PageDirection;
  PageEdge: ResolverTypeWrapper<PageEdge>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Paginated: ResolversTypes['AnnouncementConnection'] | ResolversTypes['AnyAccessGrantConnection'] | ResolversTypes['AnyAssetConnection'] | ResolversTypes['AnyCollectionAccessGrantConnection'] | ResolversTypes['AnyCommunityAccessGrantConnection'] | ResolversTypes['AnyContributorConnection'] | ResolversTypes['AnyUserAccessGrantConnection'] | ResolversTypes['AnyUserGroupAccessGrantConnection'] | ResolversTypes['CollectionConnection'] | ResolversTypes['CollectionContributionConnection'] | ResolversTypes['CommunityConnection'] | ResolversTypes['ContextualPermissionConnection'] | ResolversTypes['EntityDescendantConnection'] | ResolversTypes['EntityLinkConnection'] | ResolversTypes['ItemConnection'] | ResolversTypes['ItemContributionConnection'] | ResolversTypes['LinkTargetCandidateConnection'] | ResolversTypes['OrderingConnection'] | ResolversTypes['OrderingEntryConnection'] | ResolversTypes['PageConnection'] | ResolversTypes['RoleConnection'] | ResolversTypes['SchemaDefinitionConnection'] | ResolversTypes['SchemaVersionConnection'] | ResolversTypes['SearchResultConnection'] | ResolversTypes['UserCollectionAccessGrantConnection'] | ResolversTypes['UserCommunityAccessGrantConnection'] | ResolversTypes['UserConnection'] | ResolversTypes['UserGroupCollectionAccessGrantConnection'] | ResolversTypes['UserGroupCommunityAccessGrantConnection'] | ResolversTypes['UserGroupItemAccessGrantConnection'] | ResolversTypes['UserItemAccessGrantConnection'];
  PermissionGrant: ResolverTypeWrapper<PermissionGrant>;
  PermissionGrid: ResolversTypes['AssetPermissionGrid'] | ResolversTypes['EntityPermissionGrid'];
  PersonContributor: ResolverTypeWrapper<PersonContributor>;
  PropertyApplicationStrategy: PropertyApplicationStrategy;
  Query: ResolverTypeWrapper<{}>;
  ReferencesGlobalEntityDates: ResolversTypes['Collection'] | ResolversTypes['Item'];
  ReparentEntityInput: ReparentEntityInput;
  ReparentEntityPayload: ResolverTypeWrapper<Omit<ReparentEntityPayload, 'child'> & { child?: Maybe<ResolversTypes['AnyChildEntity']> }>;
  ResetOrderingInput: ResetOrderingInput;
  ResetOrderingPayload: ResolverTypeWrapper<ResetOrderingPayload>;
  RevokeAccessInput: RevokeAccessInput;
  RevokeAccessPayload: ResolverTypeWrapper<Omit<RevokeAccessPayload, 'entity'> & { entity?: Maybe<ResolversTypes['AnyEntity']> }>;
  Role: ResolverTypeWrapper<Role>;
  RoleConnection: ResolverTypeWrapper<RoleConnection>;
  RoleEdge: ResolverTypeWrapper<RoleEdge>;
  RoleKind: RoleKind;
  RoleOrder: RoleOrder;
  RolePrimacy: RolePrimacy;
  RoleSystemIdentifier: RoleSystemIdentifier;
  ScalarProperty: ResolversTypes['AssetProperty'] | ResolversTypes['AssetsProperty'] | ResolversTypes['BooleanProperty'] | ResolversTypes['ContributorProperty'] | ResolversTypes['ContributorsProperty'] | ResolversTypes['DateProperty'] | ResolversTypes['EmailProperty'] | ResolversTypes['EntitiesProperty'] | ResolversTypes['EntityProperty'] | ResolversTypes['FloatProperty'] | ResolversTypes['FullTextProperty'] | ResolversTypes['IntegerProperty'] | ResolversTypes['MarkdownProperty'] | ResolversTypes['MultiselectProperty'] | ResolversTypes['SelectProperty'] | ResolversTypes['StringProperty'] | ResolversTypes['TagsProperty'] | ResolversTypes['TimestampProperty'] | ResolversTypes['URLProperty'] | ResolversTypes['UnknownProperty'] | ResolversTypes['VariableDateProperty'];
  SchemaCoreDefinition: ResolverTypeWrapper<SchemaCoreDefinition>;
  SchemaDefinition: ResolverTypeWrapper<SchemaDefinition>;
  SchemaDefinitionConnection: ResolverTypeWrapper<SchemaDefinitionConnection>;
  SchemaDefinitionEdge: ResolverTypeWrapper<SchemaDefinitionEdge>;
  SchemaInstance: ResolversTypes['Collection'] | ResolversTypes['Community'] | ResolversTypes['Item'];
  SchemaInstanceContext: ResolverTypeWrapper<SchemaInstanceContext>;
  SchemaInstanceValidation: ResolverTypeWrapper<SchemaInstanceValidation>;
  SchemaKind: SchemaKind;
  SchemaOrderingPath: ResolverTypeWrapper<SchemaOrderingPath>;
  SchemaProperty: ResolversTypes['AssetProperty'] | ResolversTypes['AssetsProperty'] | ResolversTypes['BooleanProperty'] | ResolversTypes['ContributorProperty'] | ResolversTypes['ContributorsProperty'] | ResolversTypes['DateProperty'] | ResolversTypes['EmailProperty'] | ResolversTypes['EntitiesProperty'] | ResolversTypes['EntityProperty'] | ResolversTypes['FloatProperty'] | ResolversTypes['FullTextProperty'] | ResolversTypes['GroupProperty'] | ResolversTypes['IntegerProperty'] | ResolversTypes['MarkdownProperty'] | ResolversTypes['MultiselectProperty'] | ResolversTypes['SelectProperty'] | ResolversTypes['StringProperty'] | ResolversTypes['TagsProperty'] | ResolversTypes['TimestampProperty'] | ResolversTypes['URLProperty'] | ResolversTypes['UnknownProperty'] | ResolversTypes['VariableDateProperty'];
  SchemaPropertyFunction: SchemaPropertyFunction;
  SchemaPropertyKind: SchemaPropertyKind;
  SchemaPropertyType: SchemaPropertyType;
  SchemaRenderDefinition: ResolverTypeWrapper<SchemaRenderDefinition>;
  SchemaRenderListMode: SchemaRenderListMode;
  SchemaValueError: ResolverTypeWrapper<SchemaValueError>;
  SchemaVersion: ResolverTypeWrapper<Omit<SchemaVersion, 'schemaProperties' | 'searchableProperties'> & { schemaProperties: Array<ResolversTypes['AnySchemaProperty']>, searchableProperties: Array<ResolversTypes['AnySearchableProperty']> }>;
  SchemaVersionConnection: ResolverTypeWrapper<SchemaVersionConnection>;
  SchemaVersionEdge: ResolverTypeWrapper<SchemaVersionEdge>;
  SchemaVersionOption: ResolverTypeWrapper<SchemaVersionOption>;
  SchemaVersionOrder: SchemaVersionOrder;
  SearchOperator: SearchOperator;
  SearchOriginType: SearchOriginType;
  SearchPredicateInput: SearchPredicateInput;
  SearchResult: ResolverTypeWrapper<Omit<SearchResult, 'entity'> & { entity: ResolversTypes['AnyEntity'] }>;
  SearchResultConnection: ResolverTypeWrapper<SearchResultConnection>;
  SearchResultEdge: ResolverTypeWrapper<SearchResultEdge>;
  SearchScope: ResolverTypeWrapper<SearchScope>;
  Searchable: ResolversTypes['Collection'] | ResolversTypes['Community'] | ResolversTypes['Item'] | ResolversTypes['Query'] | ResolversTypes['SchemaVersion'];
  SearchableCoreProperty: ResolverTypeWrapper<SearchableCoreProperty>;
  SearchableProperty: ResolversTypes['BooleanProperty'] | ResolversTypes['DateProperty'] | ResolversTypes['FloatProperty'] | ResolversTypes['FullTextProperty'] | ResolversTypes['IntegerProperty'] | ResolversTypes['MarkdownProperty'] | ResolversTypes['MultiselectProperty'] | ResolversTypes['SearchableCoreProperty'] | ResolversTypes['SelectProperty'] | ResolversTypes['StringProperty'] | ResolversTypes['TimestampProperty'] | ResolversTypes['VariableDateProperty'];
  SelectInitialOrderingInput: SelectInitialOrderingInput;
  SelectInitialOrderingPayload: ResolverTypeWrapper<Omit<SelectInitialOrderingPayload, 'entity'> & { entity?: Maybe<ResolversTypes['AnyEntity']> }>;
  SelectOption: ResolverTypeWrapper<SelectOption>;
  SelectProperty: ResolverTypeWrapper<SelectProperty>;
  SimpleOrder: SimpleOrder;
  SiteFooter: ResolverTypeWrapper<SiteFooter>;
  SiteFooterInput: SiteFooterInput;
  SiteLogoAttachment: ResolverTypeWrapper<SiteLogoAttachment>;
  SiteLogoMode: SiteLogoMode;
  SiteSettings: ResolverTypeWrapper<SiteSettings>;
  SiteSettingsInput: SiteSettingsInput;
  Slug: ResolverTypeWrapper<Scalars['Slug']>;
  Sluggable: ResolversTypes['Announcement'] | ResolversTypes['AssetAudio'] | ResolversTypes['AssetDocument'] | ResolversTypes['AssetImage'] | ResolversTypes['AssetPDF'] | ResolversTypes['AssetUnknown'] | ResolversTypes['AssetVideo'] | ResolversTypes['Collection'] | ResolversTypes['CollectionContribution'] | ResolversTypes['Community'] | ResolversTypes['ContextualPermission'] | ResolversTypes['EntityLink'] | ResolversTypes['Item'] | ResolversTypes['ItemContribution'] | ResolversTypes['Ordering'] | ResolversTypes['OrderingEntry'] | ResolversTypes['OrganizationContributor'] | ResolversTypes['PersonContributor'] | ResolversTypes['Role'] | ResolversTypes['SchemaDefinition'] | ResolversTypes['SchemaVersion'] | ResolversTypes['User'] | ResolversTypes['UserCollectionAccessGrant'] | ResolversTypes['UserCommunityAccessGrant'] | ResolversTypes['UserGroup'] | ResolversTypes['UserGroupCollectionAccessGrant'] | ResolversTypes['UserGroupCommunityAccessGrant'] | ResolversTypes['UserGroupItemAccessGrant'] | ResolversTypes['UserItemAccessGrant'];
  StandardMutationPayload: ResolversTypes['AlterSchemaVersionPayload'] | ResolversTypes['ApplySchemaPropertiesPayload'] | ResolversTypes['ClearInitialOrderingPayload'] | ResolversTypes['CreateAnnouncementPayload'] | ResolversTypes['CreateAssetPayload'] | ResolversTypes['CreateCollectionPayload'] | ResolversTypes['CreateCommunityPayload'] | ResolversTypes['CreateItemPayload'] | ResolversTypes['CreateOrderingPayload'] | ResolversTypes['CreateOrganizationContributorPayload'] | ResolversTypes['CreatePagePayload'] | ResolversTypes['CreatePersonContributorPayload'] | ResolversTypes['CreateRolePayload'] | ResolversTypes['DestroyAnnouncementPayload'] | ResolversTypes['DestroyAssetPayload'] | ResolversTypes['DestroyCollectionPayload'] | ResolversTypes['DestroyCommunityPayload'] | ResolversTypes['DestroyContributionPayload'] | ResolversTypes['DestroyContributorPayload'] | ResolversTypes['DestroyEntityLinkPayload'] | ResolversTypes['DestroyItemPayload'] | ResolversTypes['DestroyOrderingPayload'] | ResolversTypes['DestroyPagePayload'] | ResolversTypes['GrantAccessPayload'] | ResolversTypes['LinkEntityPayload'] | ResolversTypes['ReparentEntityPayload'] | ResolversTypes['ResetOrderingPayload'] | ResolversTypes['RevokeAccessPayload'] | ResolversTypes['SelectInitialOrderingPayload'] | ResolversTypes['UpdateAnnouncementPayload'] | ResolversTypes['UpdateAssetAttachmentPayload'] | ResolversTypes['UpdateAssetPayload'] | ResolversTypes['UpdateCollectionPayload'] | ResolversTypes['UpdateCommunityPayload'] | ResolversTypes['UpdateContributionPayload'] | ResolversTypes['UpdateGlobalConfigurationPayload'] | ResolversTypes['UpdateItemPayload'] | ResolversTypes['UpdateOrderingPayload'] | ResolversTypes['UpdateOrganizationContributorPayload'] | ResolversTypes['UpdatePagePayload'] | ResolversTypes['UpdatePersonContributorPayload'] | ResolversTypes['UpdateRolePayload'] | ResolversTypes['UpdateUserPayload'] | ResolversTypes['UpdateViewerSettingsPayload'] | ResolversTypes['UpsertContributionPayload'];
  StaticOrderingPath: ResolverTypeWrapper<StaticOrderingPath>;
  StringProperty: ResolverTypeWrapper<StringProperty>;
  SubtreeNodeFilter: SubtreeNodeFilter;
  SystemInfo: ResolverTypeWrapper<SystemInfo>;
  TagsProperty: ResolverTypeWrapper<TagsProperty>;
  ThemeSettings: ResolverTypeWrapper<ThemeSettings>;
  ThemeSettingsInput: ThemeSettingsInput;
  TimestampProperty: ResolverTypeWrapper<TimestampProperty>;
  TreeNodeFilter: TreeNodeFilter;
  URLProperty: ResolverTypeWrapper<UrlProperty>;
  URLReference: ResolverTypeWrapper<UrlReference>;
  UnknownProperty: ResolverTypeWrapper<UnknownProperty>;
  UpdateAnnouncementInput: UpdateAnnouncementInput;
  UpdateAnnouncementPayload: ResolverTypeWrapper<UpdateAnnouncementPayload>;
  UpdateAssetAttachmentInput: UpdateAssetAttachmentInput;
  UpdateAssetAttachmentPayload: ResolverTypeWrapper<Omit<UpdateAssetAttachmentPayload, 'asset'> & { asset?: Maybe<ResolversTypes['AnyAsset']> }>;
  UpdateAssetInput: UpdateAssetInput;
  UpdateAssetPayload: ResolverTypeWrapper<Omit<UpdateAssetPayload, 'asset'> & { asset?: Maybe<ResolversTypes['AnyAsset']> }>;
  UpdateCollectionInput: UpdateCollectionInput;
  UpdateCollectionPayload: ResolverTypeWrapper<UpdateCollectionPayload>;
  UpdateCommunityInput: UpdateCommunityInput;
  UpdateCommunityPayload: ResolverTypeWrapper<UpdateCommunityPayload>;
  UpdateContributionInput: UpdateContributionInput;
  UpdateContributionPayload: ResolverTypeWrapper<Omit<UpdateContributionPayload, 'contribution'> & { contribution?: Maybe<ResolversTypes['AnyContribution']> }>;
  UpdateGlobalConfigurationInput: UpdateGlobalConfigurationInput;
  UpdateGlobalConfigurationPayload: ResolverTypeWrapper<UpdateGlobalConfigurationPayload>;
  UpdateItemInput: UpdateItemInput;
  UpdateItemPayload: ResolverTypeWrapper<UpdateItemPayload>;
  UpdateOrderingInput: UpdateOrderingInput;
  UpdateOrderingPayload: ResolverTypeWrapper<UpdateOrderingPayload>;
  UpdateOrganizationContributorInput: UpdateOrganizationContributorInput;
  UpdateOrganizationContributorPayload: ResolverTypeWrapper<UpdateOrganizationContributorPayload>;
  UpdatePageInput: UpdatePageInput;
  UpdatePagePayload: ResolverTypeWrapper<UpdatePagePayload>;
  UpdatePersonContributorInput: UpdatePersonContributorInput;
  UpdatePersonContributorPayload: ResolverTypeWrapper<UpdatePersonContributorPayload>;
  UpdateRoleInput: UpdateRoleInput;
  UpdateRolePayload: ResolverTypeWrapper<UpdateRolePayload>;
  UpdateUserInput: UpdateUserInput;
  UpdateUserPayload: ResolverTypeWrapper<UpdateUserPayload>;
  UpdateViewerSettingsInput: UpdateViewerSettingsInput;
  UpdateViewerSettingsPayload: ResolverTypeWrapper<UpdateViewerSettingsPayload>;
  UploadID: ResolverTypeWrapper<Scalars['UploadID']>;
  UploadStorage: UploadStorage;
  UploadedFileInput: UploadedFileInput;
  UploadedFileMetadataInput: UploadedFileMetadataInput;
  UpsertContributionInput: UpsertContributionInput;
  UpsertContributionPayload: ResolverTypeWrapper<Omit<UpsertContributionPayload, 'contribution'> & { contribution?: Maybe<ResolversTypes['AnyContribution']> }>;
  User: ResolverTypeWrapper<User>;
  UserAccessGrant: ResolversTypes['UserCollectionAccessGrant'] | ResolversTypes['UserCommunityAccessGrant'] | ResolversTypes['UserItemAccessGrant'];
  UserCollectionAccessGrant: ResolverTypeWrapper<Omit<UserCollectionAccessGrant, 'entity'> & { entity: ResolversTypes['AnyEntity'] }>;
  UserCollectionAccessGrantConnection: ResolverTypeWrapper<UserCollectionAccessGrantConnection>;
  UserCollectionAccessGrantEdge: ResolverTypeWrapper<UserCollectionAccessGrantEdge>;
  UserCommunityAccessGrant: ResolverTypeWrapper<Omit<UserCommunityAccessGrant, 'entity'> & { entity: ResolversTypes['AnyEntity'] }>;
  UserCommunityAccessGrantConnection: ResolverTypeWrapper<UserCommunityAccessGrantConnection>;
  UserCommunityAccessGrantEdge: ResolverTypeWrapper<UserCommunityAccessGrantEdge>;
  UserConnection: ResolverTypeWrapper<UserConnection>;
  UserEdge: ResolverTypeWrapper<UserEdge>;
  UserError: ResolverTypeWrapper<UserError>;
  UserGroup: ResolverTypeWrapper<UserGroup>;
  UserGroupAccessGrant: ResolversTypes['UserGroupCollectionAccessGrant'] | ResolversTypes['UserGroupCommunityAccessGrant'] | ResolversTypes['UserGroupItemAccessGrant'];
  UserGroupCollectionAccessGrant: ResolverTypeWrapper<Omit<UserGroupCollectionAccessGrant, 'entity'> & { entity: ResolversTypes['AnyEntity'] }>;
  UserGroupCollectionAccessGrantConnection: ResolverTypeWrapper<UserGroupCollectionAccessGrantConnection>;
  UserGroupCollectionAccessGrantEdge: ResolverTypeWrapper<UserGroupCollectionAccessGrantEdge>;
  UserGroupCommunityAccessGrant: ResolverTypeWrapper<Omit<UserGroupCommunityAccessGrant, 'entity'> & { entity: ResolversTypes['AnyEntity'] }>;
  UserGroupCommunityAccessGrantConnection: ResolverTypeWrapper<UserGroupCommunityAccessGrantConnection>;
  UserGroupCommunityAccessGrantEdge: ResolverTypeWrapper<UserGroupCommunityAccessGrantEdge>;
  UserGroupItemAccessGrant: ResolverTypeWrapper<Omit<UserGroupItemAccessGrant, 'entity'> & { entity: ResolversTypes['AnyEntity'] }>;
  UserGroupItemAccessGrantConnection: ResolverTypeWrapper<UserGroupItemAccessGrantConnection>;
  UserGroupItemAccessGrantEdge: ResolverTypeWrapper<UserGroupItemAccessGrantEdge>;
  UserItemAccessGrant: ResolverTypeWrapper<Omit<UserItemAccessGrant, 'entity'> & { entity: ResolversTypes['AnyEntity'] }>;
  UserItemAccessGrantConnection: ResolverTypeWrapper<UserItemAccessGrantConnection>;
  UserItemAccessGrantEdge: ResolverTypeWrapper<UserItemAccessGrantEdge>;
  UserOrder: UserOrder;
  UserProfileInput: UserProfileInput;
  VariableDateProperty: ResolverTypeWrapper<VariableDateProperty>;
  VariablePrecisionDate: ResolverTypeWrapper<VariablePrecisionDate>;
  VariablePrecisionDateInput: VariablePrecisionDateInput;
  VersionRequirement: ResolverTypeWrapper<Scalars['VersionRequirement']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AccessControlList: AccessControlList;
  String: Scalars['String'];
  AccessGrant: ResolversParentTypes['UserCollectionAccessGrant'] | ResolversParentTypes['UserCommunityAccessGrant'] | ResolversParentTypes['UserGroupCollectionAccessGrant'] | ResolversParentTypes['UserGroupCommunityAccessGrant'] | ResolversParentTypes['UserGroupItemAccessGrant'] | ResolversParentTypes['UserItemAccessGrant'];
  AccessGrantSubject: ResolversParentTypes['User'] | ResolversParentTypes['UserGroup'];
  Int: Scalars['Int'];
  Accessible: ResolversParentTypes['Collection'] | ResolversParentTypes['Community'] | ResolversParentTypes['Item'];
  AlterSchemaVersionInput: AlterSchemaVersionInput;
  ID: Scalars['ID'];
  AlterSchemaVersionPayload: Omit<AlterSchemaVersionPayload, 'entity'> & { entity?: Maybe<ResolversParentTypes['AnyEntity']> };
  AndOperatorInput: AndOperatorInput;
  Announcement: Omit<Announcement, 'entity'> & { entity: ResolversParentTypes['AnyEntity'] };
  AnnouncementConnection: AnnouncementConnection;
  AnnouncementEdge: AnnouncementEdge;
  AnyAccessGrant: ResolversParentTypes['UserCollectionAccessGrant'] | ResolversParentTypes['UserCommunityAccessGrant'] | ResolversParentTypes['UserGroupCollectionAccessGrant'] | ResolversParentTypes['UserGroupCommunityAccessGrant'] | ResolversParentTypes['UserGroupItemAccessGrant'] | ResolversParentTypes['UserItemAccessGrant'];
  AnyAccessGrantConnection: Omit<AnyAccessGrantConnection, 'nodes'> & { nodes: Array<ResolversParentTypes['AnyAccessGrant']> };
  AnyAccessGrantEdge: Omit<AnyAccessGrantEdge, 'node'> & { node: ResolversParentTypes['AnyAccessGrant'] };
  AnyAsset: ResolversParentTypes['AssetAudio'] | ResolversParentTypes['AssetDocument'] | ResolversParentTypes['AssetImage'] | ResolversParentTypes['AssetPDF'] | ResolversParentTypes['AssetUnknown'] | ResolversParentTypes['AssetVideo'];
  AnyAssetConnection: Omit<AnyAssetConnection, 'nodes'> & { nodes: Array<ResolversParentTypes['AnyAsset']> };
  AnyAssetEdge: Omit<AnyAssetEdge, 'node'> & { node: ResolversParentTypes['AnyAsset'] };
  AnyAttachable: ResolversParentTypes['Collection'] | ResolversParentTypes['Community'] | ResolversParentTypes['Item'];
  AnyChildEntity: ResolversParentTypes['Collection'] | ResolversParentTypes['Item'];
  AnyCollectionAccessGrant: ResolversParentTypes['UserCollectionAccessGrant'] | ResolversParentTypes['UserGroupCollectionAccessGrant'];
  AnyCollectionAccessGrantConnection: Omit<AnyCollectionAccessGrantConnection, 'nodes'> & { nodes: Array<ResolversParentTypes['AnyCollectionAccessGrant']> };
  AnyCollectionAccessGrantEdge: Omit<AnyCollectionAccessGrantEdge, 'node'> & { node: ResolversParentTypes['AnyCollectionAccessGrant'] };
  AnyCommunityAccessGrant: ResolversParentTypes['UserCommunityAccessGrant'] | ResolversParentTypes['UserGroupCommunityAccessGrant'];
  AnyCommunityAccessGrantConnection: Omit<AnyCommunityAccessGrantConnection, 'nodes'> & { nodes: Array<ResolversParentTypes['AnyCommunityAccessGrant']> };
  AnyCommunityAccessGrantEdge: Omit<AnyCommunityAccessGrantEdge, 'node'> & { node: ResolversParentTypes['AnyCommunityAccessGrant'] };
  AnyContribution: ResolversParentTypes['CollectionContribution'] | ResolversParentTypes['ItemContribution'];
  AnyContributor: ResolversParentTypes['OrganizationContributor'] | ResolversParentTypes['PersonContributor'];
  AnyContributorConnection: Omit<AnyContributorConnection, 'nodes'> & { nodes: Array<ResolversParentTypes['AnyContributor']> };
  AnyContributorEdge: Omit<AnyContributorEdge, 'node'> & { node: ResolversParentTypes['AnyContributor'] };
  AnyEntity: ResolversParentTypes['Collection'] | ResolversParentTypes['Community'] | ResolversParentTypes['Item'];
  AnyLinkTarget: ResolversParentTypes['Collection'] | ResolversParentTypes['Item'];
  AnyOrderingEntry: ResolversParentTypes['Collection'] | ResolversParentTypes['Community'] | ResolversParentTypes['EntityLink'] | ResolversParentTypes['Item'];
  AnyOrderingPath: ResolversParentTypes['SchemaOrderingPath'] | ResolversParentTypes['StaticOrderingPath'];
  AnyScalarProperty: ResolversParentTypes['AssetProperty'] | ResolversParentTypes['AssetsProperty'] | ResolversParentTypes['BooleanProperty'] | ResolversParentTypes['ContributorProperty'] | ResolversParentTypes['ContributorsProperty'] | ResolversParentTypes['DateProperty'] | ResolversParentTypes['EmailProperty'] | ResolversParentTypes['EntitiesProperty'] | ResolversParentTypes['EntityProperty'] | ResolversParentTypes['FloatProperty'] | ResolversParentTypes['FullTextProperty'] | ResolversParentTypes['IntegerProperty'] | ResolversParentTypes['MarkdownProperty'] | ResolversParentTypes['MultiselectProperty'] | ResolversParentTypes['SelectProperty'] | ResolversParentTypes['StringProperty'] | ResolversParentTypes['TagsProperty'] | ResolversParentTypes['TimestampProperty'] | ResolversParentTypes['URLProperty'] | ResolversParentTypes['UnknownProperty'] | ResolversParentTypes['VariableDateProperty'];
  AnySchemaProperty: ResolversParentTypes['AssetProperty'] | ResolversParentTypes['AssetsProperty'] | ResolversParentTypes['BooleanProperty'] | ResolversParentTypes['ContributorProperty'] | ResolversParentTypes['ContributorsProperty'] | ResolversParentTypes['DateProperty'] | ResolversParentTypes['EmailProperty'] | ResolversParentTypes['EntitiesProperty'] | ResolversParentTypes['EntityProperty'] | ResolversParentTypes['FloatProperty'] | ResolversParentTypes['FullTextProperty'] | ResolversParentTypes['GroupProperty'] | ResolversParentTypes['IntegerProperty'] | ResolversParentTypes['MarkdownProperty'] | ResolversParentTypes['MultiselectProperty'] | ResolversParentTypes['SelectProperty'] | ResolversParentTypes['StringProperty'] | ResolversParentTypes['TagsProperty'] | ResolversParentTypes['TimestampProperty'] | ResolversParentTypes['URLProperty'] | ResolversParentTypes['UnknownProperty'] | ResolversParentTypes['VariableDateProperty'];
  AnySearchableProperty: ResolversParentTypes['BooleanProperty'] | ResolversParentTypes['DateProperty'] | ResolversParentTypes['FloatProperty'] | ResolversParentTypes['FullTextProperty'] | ResolversParentTypes['IntegerProperty'] | ResolversParentTypes['MarkdownProperty'] | ResolversParentTypes['MultiselectProperty'] | ResolversParentTypes['SelectProperty'] | ResolversParentTypes['StringProperty'] | ResolversParentTypes['TimestampProperty'] | ResolversParentTypes['VariableDateProperty'];
  AnyUserAccessGrant: ResolversParentTypes['UserCollectionAccessGrant'] | ResolversParentTypes['UserCommunityAccessGrant'] | ResolversParentTypes['UserItemAccessGrant'];
  AnyUserAccessGrantConnection: Omit<AnyUserAccessGrantConnection, 'nodes'> & { nodes: Array<ResolversParentTypes['AnyUserAccessGrant']> };
  AnyUserAccessGrantEdge: Omit<AnyUserAccessGrantEdge, 'node'> & { node: ResolversParentTypes['AnyUserAccessGrant'] };
  AnyUserGroupAccessGrant: ResolversParentTypes['UserGroupCollectionAccessGrant'] | ResolversParentTypes['UserGroupCommunityAccessGrant'] | ResolversParentTypes['UserGroupItemAccessGrant'];
  AnyUserGroupAccessGrantConnection: Omit<AnyUserGroupAccessGrantConnection, 'nodes'> & { nodes: Array<ResolversParentTypes['AnyUserGroupAccessGrant']> };
  AnyUserGroupAccessGrantEdge: Omit<AnyUserGroupAccessGrantEdge, 'node'> & { node: ResolversParentTypes['AnyUserGroupAccessGrant'] };
  ApplySchemaPropertiesInput: ApplySchemaPropertiesInput;
  ApplySchemaPropertiesPayload: Omit<ApplySchemaPropertiesPayload, 'entity'> & { entity?: Maybe<ResolversParentTypes['AnyEntity']> };
  Asset: ResolversParentTypes['AssetAudio'] | ResolversParentTypes['AssetDocument'] | ResolversParentTypes['AssetImage'] | ResolversParentTypes['AssetPDF'] | ResolversParentTypes['AssetUnknown'] | ResolversParentTypes['AssetVideo'];
  AssetAudio: Omit<AssetAudio, 'attachable'> & { attachable: ResolversParentTypes['AnyAttachable'] };
  AssetDocument: Omit<AssetDocument, 'attachable'> & { attachable: ResolversParentTypes['AnyAttachable'] };
  AssetImage: Omit<AssetImage, 'attachable'> & { attachable: ResolversParentTypes['AnyAttachable'] };
  AssetPDF: Omit<AssetPdf, 'attachable'> & { attachable: ResolversParentTypes['AnyAttachable'] };
  AssetPermissionGrid: AssetPermissionGrid;
  Boolean: Scalars['Boolean'];
  AssetProperty: Omit<AssetProperty, 'asset'> & { asset?: Maybe<ResolversParentTypes['AnyAsset']> };
  AssetSelectOption: AssetSelectOption;
  AssetUnknown: Omit<AssetUnknown, 'attachable'> & { attachable: ResolversParentTypes['AnyAttachable'] };
  AssetVideo: Omit<AssetVideo, 'attachable'> & { attachable: ResolversParentTypes['AnyAttachable'] };
  AssetsProperty: Omit<AssetsProperty, 'assets'> & { assets: Array<ResolversParentTypes['AnyAsset']> };
  Attachable: ResolversParentTypes['Collection'] | ResolversParentTypes['Community'] | ResolversParentTypes['Item'];
  BooleanProperty: BooleanProperty;
  CRUDPermissionGrid: ResolversParentTypes['AssetPermissionGrid'] | ResolversParentTypes['EntityPermissionGrid'];
  ChildEntity: ResolversParentTypes['Collection'] | ResolversParentTypes['Item'];
  ClearInitialOrderingInput: ClearInitialOrderingInput;
  ClearInitialOrderingPayload: Omit<ClearInitialOrderingPayload, 'entity'> & { entity?: Maybe<ResolversParentTypes['AnyEntity']> };
  Collection: Omit<Collection, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<ResolversParentTypes['AnyEntity']>, ancestorOfType?: Maybe<ResolversParentTypes['AnyEntity']>, parent?: Maybe<ResolversParentTypes['CollectionParent']>, schemaProperties: Array<ResolversParentTypes['AnySchemaProperty']>, schemaProperty?: Maybe<ResolversParentTypes['AnySchemaProperty']> };
  CollectionConnection: CollectionConnection;
  CollectionContribution: Omit<CollectionContribution, 'contributor'> & { contributor: ResolversParentTypes['AnyContributor'] };
  CollectionContributionConnection: CollectionContributionConnection;
  CollectionContributionEdge: CollectionContributionEdge;
  CollectionEdge: CollectionEdge;
  CollectionParent: ResolversParentTypes['Collection'] | ResolversParentTypes['Community'];
  Community: Omit<Community, 'schemaProperties' | 'schemaProperty'> & { schemaProperties: Array<ResolversParentTypes['AnySchemaProperty']>, schemaProperty?: Maybe<ResolversParentTypes['AnySchemaProperty']> };
  CommunityConnection: CommunityConnection;
  CommunityEdge: CommunityEdge;
  ContextualPermission: Omit<ContextualPermission, 'accessGrants'> & { accessGrants: Array<ResolversParentTypes['AnyUserAccessGrant']> };
  ContextualPermissionConnection: ContextualPermissionConnection;
  ContextualPermissionEdge: ContextualPermissionEdge;
  Contributable: ResolversParentTypes['Collection'] | ResolversParentTypes['Item'];
  Contribution: ResolversParentTypes['CollectionContribution'] | ResolversParentTypes['ItemContribution'];
  ContributionMetadata: ContributionMetadata;
  ContributionMetadataInput: ContributionMetadataInput;
  Contributor: ResolversParentTypes['OrganizationContributor'] | ResolversParentTypes['PersonContributor'];
  ContributorLink: ContributorLink;
  ContributorLinkInput: ContributorLinkInput;
  ContributorProperty: Omit<ContributorProperty, 'contributor'> & { contributor?: Maybe<ResolversParentTypes['AnyContributor']> };
  ContributorSelectOption: ContributorSelectOption;
  ContributorsProperty: Omit<ContributorsProperty, 'contributors'> & { contributors: Array<ResolversParentTypes['AnyContributor']> };
  CreateAnnouncementInput: CreateAnnouncementInput;
  CreateAnnouncementPayload: CreateAnnouncementPayload;
  CreateAssetInput: CreateAssetInput;
  CreateAssetPayload: Omit<CreateAssetPayload, 'asset'> & { asset?: Maybe<ResolversParentTypes['AnyAsset']> };
  CreateCollectionInput: CreateCollectionInput;
  CreateCollectionPayload: CreateCollectionPayload;
  CreateCommunityInput: CreateCommunityInput;
  CreateCommunityPayload: CreateCommunityPayload;
  CreateItemInput: CreateItemInput;
  CreateItemPayload: CreateItemPayload;
  CreateOrderingInput: CreateOrderingInput;
  CreateOrderingPayload: CreateOrderingPayload;
  CreateOrganizationContributorInput: CreateOrganizationContributorInput;
  CreateOrganizationContributorPayload: CreateOrganizationContributorPayload;
  CreatePageInput: CreatePageInput;
  CreatePagePayload: CreatePagePayload;
  CreatePersonContributorInput: CreatePersonContributorInput;
  CreatePersonContributorPayload: CreatePersonContributorPayload;
  CreateRoleInput: CreateRoleInput;
  CreateRolePayload: CreateRolePayload;
  DateEqualsOperatorInput: DateEqualsOperatorInput;
  DateGTEOperatorInput: DateGteOperatorInput;
  DateLTEOperatorInput: DateLteOperatorInput;
  DateProperty: DateProperty;
  DescribesSchema: ResolversParentTypes['HierarchicalSchemaRank'] | ResolversParentTypes['HierarchicalSchemaVersionRank'] | ResolversParentTypes['SchemaDefinition'] | ResolversParentTypes['SchemaVersion'];
  DestroyAnnouncementInput: DestroyAnnouncementInput;
  DestroyAnnouncementPayload: DestroyAnnouncementPayload;
  DestroyAssetInput: DestroyAssetInput;
  DestroyAssetPayload: DestroyAssetPayload;
  DestroyCollectionInput: DestroyCollectionInput;
  DestroyCollectionPayload: DestroyCollectionPayload;
  DestroyCommunityInput: DestroyCommunityInput;
  DestroyCommunityPayload: DestroyCommunityPayload;
  DestroyContributionInput: DestroyContributionInput;
  DestroyContributionPayload: DestroyContributionPayload;
  DestroyContributorInput: DestroyContributorInput;
  DestroyContributorPayload: DestroyContributorPayload;
  DestroyEntityLinkInput: DestroyEntityLinkInput;
  DestroyEntityLinkPayload: DestroyEntityLinkPayload;
  DestroyItemInput: DestroyItemInput;
  DestroyItemPayload: DestroyItemPayload;
  DestroyMutationPayload: ResolversParentTypes['DestroyAnnouncementPayload'] | ResolversParentTypes['DestroyAssetPayload'] | ResolversParentTypes['DestroyCollectionPayload'] | ResolversParentTypes['DestroyCommunityPayload'] | ResolversParentTypes['DestroyContributionPayload'] | ResolversParentTypes['DestroyContributorPayload'] | ResolversParentTypes['DestroyEntityLinkPayload'] | ResolversParentTypes['DestroyItemPayload'] | ResolversParentTypes['DestroyOrderingPayload'] | ResolversParentTypes['DestroyPagePayload'];
  DestroyOrderingInput: DestroyOrderingInput;
  DestroyOrderingPayload: DestroyOrderingPayload;
  DestroyPageInput: DestroyPageInput;
  DestroyPagePayload: DestroyPagePayload;
  EffectiveAccess: EffectiveAccess;
  EmailProperty: EmailProperty;
  EntitiesProperty: Omit<EntitiesProperty, 'entities'> & { entities: Array<ResolversParentTypes['AnyEntity']> };
  Entity: ResolversParentTypes['Collection'] | ResolversParentTypes['Community'] | ResolversParentTypes['Item'];
  EntityBreadcrumb: Omit<EntityBreadcrumb, 'crumb'> & { crumb: ResolversParentTypes['AnyEntity'] };
  EntityDescendant: Omit<EntityDescendant, 'descendant'> & { descendant: ResolversParentTypes['AnyEntity'] };
  EntityDescendantConnection: EntityDescendantConnection;
  EntityDescendantEdge: EntityDescendantEdge;
  EntityLink: Omit<EntityLink, 'source' | 'target'> & { source: ResolversParentTypes['AnyEntity'], target: ResolversParentTypes['AnyEntity'] };
  EntityLinkConnection: EntityLinkConnection;
  EntityLinkEdge: EntityLinkEdge;
  EntityPermissionGrid: EntityPermissionGrid;
  EntityProperty: Omit<EntityProperty, 'entity'> & { entity?: Maybe<ResolversParentTypes['AnyEntity']> };
  EntitySelectOption: Omit<EntitySelectOption, 'entity'> & { entity: ResolversParentTypes['AnyEntity'] };
  EqualsOperatorInput: EqualsOperatorInput;
  ExposesEffectiveAccess: ResolversParentTypes['Role'];
  ExposesPermissions: ResolversParentTypes['AccessControlList'] | ResolversParentTypes['AssetPermissionGrid'] | ResolversParentTypes['ContextualPermission'] | ResolversParentTypes['EffectiveAccess'] | ResolversParentTypes['EntityPermissionGrid'] | ResolversParentTypes['GlobalAccessControlList'] | ResolversParentTypes['User'];
  FloatProperty: FloatProperty;
  Float: Scalars['Float'];
  FullText: FullText;
  FullTextProperty: FullTextProperty;
  GlobalAccessControlList: GlobalAccessControlList;
  GlobalConfiguration: GlobalConfiguration;
  GrantAccessInput: GrantAccessInput;
  GrantAccessPayload: Omit<GrantAccessPayload, 'entity'> & { entity?: Maybe<ResolversParentTypes['AnyEntity']> };
  GroupProperty: Omit<GroupProperty, 'properties'> & { properties: Array<ResolversParentTypes['AnyScalarProperty']> };
  HasAttachmentStorage: ResolversParentTypes['ImageAttachment'] | ResolversParentTypes['ImageOriginal'] | ResolversParentTypes['SiteLogoAttachment'];
  HasAvailableEntities: ResolversParentTypes['EntitiesProperty'] | ResolversParentTypes['EntityProperty'];
  HasDOI: ResolversParentTypes['Collection'] | ResolversParentTypes['Item'];
  HasEntityBreadcrumbs: ResolversParentTypes['Collection'] | ResolversParentTypes['EntitySelectOption'] | ResolversParentTypes['Item'];
  HasISSN: ResolversParentTypes['Collection'] | ResolversParentTypes['Item'];
  HasSchemaProperties: ResolversParentTypes['Collection'] | ResolversParentTypes['Community'] | ResolversParentTypes['Item'] | ResolversParentTypes['SchemaVersion'];
  HierarchicalSchemaRank: HierarchicalSchemaRank;
  HierarchicalSchemaVersionRank: HierarchicalSchemaVersionRank;
  ISO8601Date: Scalars['ISO8601Date'];
  ISO8601DateTime: Scalars['ISO8601DateTime'];
  Image: ResolversParentTypes['ImageDerivative'] | ResolversParentTypes['ImageOriginal'];
  ImageAttachment: ImageAttachment;
  ImageDerivative: ImageDerivative;
  ImageIdentification: ResolversParentTypes['ImageAttachment'] | ResolversParentTypes['ImageDerivative'] | ResolversParentTypes['ImageOriginal'] | ResolversParentTypes['ImageSize'] | ResolversParentTypes['SiteLogoAttachment'];
  ImageMetadata: ImageMetadata;
  ImageMetadataInput: ImageMetadataInput;
  ImageOriginal: ImageOriginal;
  ImageSize: ImageSize;
  InAnyOperatorInput: InAnyOperatorInput;
  InstitutionSettings: InstitutionSettings;
  InstitutionSettingsInput: InstitutionSettingsInput;
  IntegerProperty: IntegerProperty;
  Item: Omit<Item, 'ancestorByName' | 'ancestorOfType' | 'parent' | 'schemaProperties' | 'schemaProperty'> & { ancestorByName?: Maybe<ResolversParentTypes['AnyEntity']>, ancestorOfType?: Maybe<ResolversParentTypes['AnyEntity']>, parent?: Maybe<ResolversParentTypes['ItemParent']>, schemaProperties: Array<ResolversParentTypes['AnySchemaProperty']>, schemaProperty?: Maybe<ResolversParentTypes['AnySchemaProperty']> };
  ItemConnection: ItemConnection;
  ItemContribution: Omit<ItemContribution, 'contributor'> & { contributor: ResolversParentTypes['AnyContributor'] };
  ItemContributionConnection: ItemContributionConnection;
  ItemContributionEdge: ItemContributionEdge;
  ItemEdge: ItemEdge;
  ItemParent: ResolversParentTypes['Collection'] | ResolversParentTypes['Item'];
  JSON: Scalars['JSON'];
  LinkEntityInput: LinkEntityInput;
  LinkEntityPayload: LinkEntityPayload;
  LinkTargetCandidate: Omit<LinkTargetCandidate, 'target'> & { target: ResolversParentTypes['AnyLinkTarget'] };
  LinkTargetCandidateConnection: LinkTargetCandidateConnection;
  LinkTargetCandidateEdge: LinkTargetCandidateEdge;
  MarkdownProperty: MarkdownProperty;
  MatchesOperatorInput: MatchesOperatorInput;
  MultiselectProperty: MultiselectProperty;
  Mutation: {};
  MutationAttributeError: MutationAttributeError;
  MutationGlobalError: MutationGlobalError;
  NamedAncestor: Omit<NamedAncestor, 'ancestor'> & { ancestor: ResolversParentTypes['AnyEntity'] };
  Node: ResolversParentTypes['Announcement'] | ResolversParentTypes['AssetAudio'] | ResolversParentTypes['AssetDocument'] | ResolversParentTypes['AssetImage'] | ResolversParentTypes['AssetPDF'] | ResolversParentTypes['AssetUnknown'] | ResolversParentTypes['AssetVideo'] | ResolversParentTypes['Collection'] | ResolversParentTypes['CollectionContribution'] | ResolversParentTypes['Community'] | ResolversParentTypes['ContextualPermission'] | ResolversParentTypes['EntityBreadcrumb'] | ResolversParentTypes['EntityLink'] | ResolversParentTypes['GlobalConfiguration'] | ResolversParentTypes['HierarchicalSchemaRank'] | ResolversParentTypes['HierarchicalSchemaVersionRank'] | ResolversParentTypes['Item'] | ResolversParentTypes['ItemContribution'] | ResolversParentTypes['LinkTargetCandidate'] | ResolversParentTypes['Ordering'] | ResolversParentTypes['OrderingEntry'] | ResolversParentTypes['OrganizationContributor'] | ResolversParentTypes['Page'] | ResolversParentTypes['PersonContributor'] | ResolversParentTypes['Role'] | ResolversParentTypes['SchemaDefinition'] | ResolversParentTypes['SchemaVersion'] | ResolversParentTypes['User'] | ResolversParentTypes['UserCollectionAccessGrant'] | ResolversParentTypes['UserCommunityAccessGrant'] | ResolversParentTypes['UserGroup'] | ResolversParentTypes['UserGroupCollectionAccessGrant'] | ResolversParentTypes['UserGroupCommunityAccessGrant'] | ResolversParentTypes['UserGroupItemAccessGrant'] | ResolversParentTypes['UserItemAccessGrant'];
  NumericGTEOperatorInput: NumericGteOperatorInput;
  NumericLTEOperatorInput: NumericLteOperatorInput;
  OptionableProperty: ResolversParentTypes['MultiselectProperty'] | ResolversParentTypes['SelectProperty'];
  OrOperatorInput: OrOperatorInput;
  OrderDefinition: OrderDefinition;
  OrderDefinitionInput: OrderDefinitionInput;
  Ordering: Omit<Ordering, 'entity'> & { entity: ResolversParentTypes['AnyEntity'] };
  OrderingConnection: OrderingConnection;
  OrderingEdge: OrderingEdge;
  OrderingEntry: Omit<OrderingEntry, 'entry'> & { entry: ResolversParentTypes['AnyOrderingEntry'] };
  OrderingEntryConnection: OrderingEntryConnection;
  OrderingEntryEdge: OrderingEntryEdge;
  OrderingFilterDefinition: OrderingFilterDefinition;
  OrderingFilterDefinitionInput: OrderingFilterDefinitionInput;
  OrderingPath: ResolversParentTypes['SchemaOrderingPath'] | ResolversParentTypes['StaticOrderingPath'];
  OrderingRenderDefinition: OrderingRenderDefinition;
  OrderingRenderDefinitionInput: OrderingRenderDefinitionInput;
  OrderingSchemaFilter: OrderingSchemaFilter;
  OrderingSchemaFilterInput: OrderingSchemaFilterInput;
  OrderingSelectDefinition: OrderingSelectDefinition;
  OrderingSelectDefinitionInput: OrderingSelectDefinitionInput;
  OrderingSelectLinkDefinition: OrderingSelectLinkDefinition;
  OrderingSelectLinkDefinitionInput: OrderingSelectLinkDefinitionInput;
  OrganizationContributor: OrganizationContributor;
  Page: Omit<Page, 'entity'> & { entity: ResolversParentTypes['AnyEntity'] };
  PageConnection: PageConnection;
  PageEdge: PageEdge;
  PageInfo: PageInfo;
  Paginated: ResolversParentTypes['AnnouncementConnection'] | ResolversParentTypes['AnyAccessGrantConnection'] | ResolversParentTypes['AnyAssetConnection'] | ResolversParentTypes['AnyCollectionAccessGrantConnection'] | ResolversParentTypes['AnyCommunityAccessGrantConnection'] | ResolversParentTypes['AnyContributorConnection'] | ResolversParentTypes['AnyUserAccessGrantConnection'] | ResolversParentTypes['AnyUserGroupAccessGrantConnection'] | ResolversParentTypes['CollectionConnection'] | ResolversParentTypes['CollectionContributionConnection'] | ResolversParentTypes['CommunityConnection'] | ResolversParentTypes['ContextualPermissionConnection'] | ResolversParentTypes['EntityDescendantConnection'] | ResolversParentTypes['EntityLinkConnection'] | ResolversParentTypes['ItemConnection'] | ResolversParentTypes['ItemContributionConnection'] | ResolversParentTypes['LinkTargetCandidateConnection'] | ResolversParentTypes['OrderingConnection'] | ResolversParentTypes['OrderingEntryConnection'] | ResolversParentTypes['PageConnection'] | ResolversParentTypes['RoleConnection'] | ResolversParentTypes['SchemaDefinitionConnection'] | ResolversParentTypes['SchemaVersionConnection'] | ResolversParentTypes['SearchResultConnection'] | ResolversParentTypes['UserCollectionAccessGrantConnection'] | ResolversParentTypes['UserCommunityAccessGrantConnection'] | ResolversParentTypes['UserConnection'] | ResolversParentTypes['UserGroupCollectionAccessGrantConnection'] | ResolversParentTypes['UserGroupCommunityAccessGrantConnection'] | ResolversParentTypes['UserGroupItemAccessGrantConnection'] | ResolversParentTypes['UserItemAccessGrantConnection'];
  PermissionGrant: PermissionGrant;
  PermissionGrid: ResolversParentTypes['AssetPermissionGrid'] | ResolversParentTypes['EntityPermissionGrid'];
  PersonContributor: PersonContributor;
  Query: {};
  ReferencesGlobalEntityDates: ResolversParentTypes['Collection'] | ResolversParentTypes['Item'];
  ReparentEntityInput: ReparentEntityInput;
  ReparentEntityPayload: Omit<ReparentEntityPayload, 'child'> & { child?: Maybe<ResolversParentTypes['AnyChildEntity']> };
  ResetOrderingInput: ResetOrderingInput;
  ResetOrderingPayload: ResetOrderingPayload;
  RevokeAccessInput: RevokeAccessInput;
  RevokeAccessPayload: Omit<RevokeAccessPayload, 'entity'> & { entity?: Maybe<ResolversParentTypes['AnyEntity']> };
  Role: Role;
  RoleConnection: RoleConnection;
  RoleEdge: RoleEdge;
  ScalarProperty: ResolversParentTypes['AssetProperty'] | ResolversParentTypes['AssetsProperty'] | ResolversParentTypes['BooleanProperty'] | ResolversParentTypes['ContributorProperty'] | ResolversParentTypes['ContributorsProperty'] | ResolversParentTypes['DateProperty'] | ResolversParentTypes['EmailProperty'] | ResolversParentTypes['EntitiesProperty'] | ResolversParentTypes['EntityProperty'] | ResolversParentTypes['FloatProperty'] | ResolversParentTypes['FullTextProperty'] | ResolversParentTypes['IntegerProperty'] | ResolversParentTypes['MarkdownProperty'] | ResolversParentTypes['MultiselectProperty'] | ResolversParentTypes['SelectProperty'] | ResolversParentTypes['StringProperty'] | ResolversParentTypes['TagsProperty'] | ResolversParentTypes['TimestampProperty'] | ResolversParentTypes['URLProperty'] | ResolversParentTypes['UnknownProperty'] | ResolversParentTypes['VariableDateProperty'];
  SchemaCoreDefinition: SchemaCoreDefinition;
  SchemaDefinition: SchemaDefinition;
  SchemaDefinitionConnection: SchemaDefinitionConnection;
  SchemaDefinitionEdge: SchemaDefinitionEdge;
  SchemaInstance: ResolversParentTypes['Collection'] | ResolversParentTypes['Community'] | ResolversParentTypes['Item'];
  SchemaInstanceContext: SchemaInstanceContext;
  SchemaInstanceValidation: SchemaInstanceValidation;
  SchemaOrderingPath: SchemaOrderingPath;
  SchemaProperty: ResolversParentTypes['AssetProperty'] | ResolversParentTypes['AssetsProperty'] | ResolversParentTypes['BooleanProperty'] | ResolversParentTypes['ContributorProperty'] | ResolversParentTypes['ContributorsProperty'] | ResolversParentTypes['DateProperty'] | ResolversParentTypes['EmailProperty'] | ResolversParentTypes['EntitiesProperty'] | ResolversParentTypes['EntityProperty'] | ResolversParentTypes['FloatProperty'] | ResolversParentTypes['FullTextProperty'] | ResolversParentTypes['GroupProperty'] | ResolversParentTypes['IntegerProperty'] | ResolversParentTypes['MarkdownProperty'] | ResolversParentTypes['MultiselectProperty'] | ResolversParentTypes['SelectProperty'] | ResolversParentTypes['StringProperty'] | ResolversParentTypes['TagsProperty'] | ResolversParentTypes['TimestampProperty'] | ResolversParentTypes['URLProperty'] | ResolversParentTypes['UnknownProperty'] | ResolversParentTypes['VariableDateProperty'];
  SchemaRenderDefinition: SchemaRenderDefinition;
  SchemaValueError: SchemaValueError;
  SchemaVersion: Omit<SchemaVersion, 'schemaProperties' | 'searchableProperties'> & { schemaProperties: Array<ResolversParentTypes['AnySchemaProperty']>, searchableProperties: Array<ResolversParentTypes['AnySearchableProperty']> };
  SchemaVersionConnection: SchemaVersionConnection;
  SchemaVersionEdge: SchemaVersionEdge;
  SchemaVersionOption: SchemaVersionOption;
  SearchPredicateInput: SearchPredicateInput;
  SearchResult: Omit<SearchResult, 'entity'> & { entity: ResolversParentTypes['AnyEntity'] };
  SearchResultConnection: SearchResultConnection;
  SearchResultEdge: SearchResultEdge;
  SearchScope: SearchScope;
  Searchable: ResolversParentTypes['Collection'] | ResolversParentTypes['Community'] | ResolversParentTypes['Item'] | ResolversParentTypes['Query'] | ResolversParentTypes['SchemaVersion'];
  SearchableCoreProperty: SearchableCoreProperty;
  SearchableProperty: ResolversParentTypes['BooleanProperty'] | ResolversParentTypes['DateProperty'] | ResolversParentTypes['FloatProperty'] | ResolversParentTypes['FullTextProperty'] | ResolversParentTypes['IntegerProperty'] | ResolversParentTypes['MarkdownProperty'] | ResolversParentTypes['MultiselectProperty'] | ResolversParentTypes['SearchableCoreProperty'] | ResolversParentTypes['SelectProperty'] | ResolversParentTypes['StringProperty'] | ResolversParentTypes['TimestampProperty'] | ResolversParentTypes['VariableDateProperty'];
  SelectInitialOrderingInput: SelectInitialOrderingInput;
  SelectInitialOrderingPayload: Omit<SelectInitialOrderingPayload, 'entity'> & { entity?: Maybe<ResolversParentTypes['AnyEntity']> };
  SelectOption: SelectOption;
  SelectProperty: SelectProperty;
  SiteFooter: SiteFooter;
  SiteFooterInput: SiteFooterInput;
  SiteLogoAttachment: SiteLogoAttachment;
  SiteSettings: SiteSettings;
  SiteSettingsInput: SiteSettingsInput;
  Slug: Scalars['Slug'];
  Sluggable: ResolversParentTypes['Announcement'] | ResolversParentTypes['AssetAudio'] | ResolversParentTypes['AssetDocument'] | ResolversParentTypes['AssetImage'] | ResolversParentTypes['AssetPDF'] | ResolversParentTypes['AssetUnknown'] | ResolversParentTypes['AssetVideo'] | ResolversParentTypes['Collection'] | ResolversParentTypes['CollectionContribution'] | ResolversParentTypes['Community'] | ResolversParentTypes['ContextualPermission'] | ResolversParentTypes['EntityLink'] | ResolversParentTypes['Item'] | ResolversParentTypes['ItemContribution'] | ResolversParentTypes['Ordering'] | ResolversParentTypes['OrderingEntry'] | ResolversParentTypes['OrganizationContributor'] | ResolversParentTypes['PersonContributor'] | ResolversParentTypes['Role'] | ResolversParentTypes['SchemaDefinition'] | ResolversParentTypes['SchemaVersion'] | ResolversParentTypes['User'] | ResolversParentTypes['UserCollectionAccessGrant'] | ResolversParentTypes['UserCommunityAccessGrant'] | ResolversParentTypes['UserGroup'] | ResolversParentTypes['UserGroupCollectionAccessGrant'] | ResolversParentTypes['UserGroupCommunityAccessGrant'] | ResolversParentTypes['UserGroupItemAccessGrant'] | ResolversParentTypes['UserItemAccessGrant'];
  StandardMutationPayload: ResolversParentTypes['AlterSchemaVersionPayload'] | ResolversParentTypes['ApplySchemaPropertiesPayload'] | ResolversParentTypes['ClearInitialOrderingPayload'] | ResolversParentTypes['CreateAnnouncementPayload'] | ResolversParentTypes['CreateAssetPayload'] | ResolversParentTypes['CreateCollectionPayload'] | ResolversParentTypes['CreateCommunityPayload'] | ResolversParentTypes['CreateItemPayload'] | ResolversParentTypes['CreateOrderingPayload'] | ResolversParentTypes['CreateOrganizationContributorPayload'] | ResolversParentTypes['CreatePagePayload'] | ResolversParentTypes['CreatePersonContributorPayload'] | ResolversParentTypes['CreateRolePayload'] | ResolversParentTypes['DestroyAnnouncementPayload'] | ResolversParentTypes['DestroyAssetPayload'] | ResolversParentTypes['DestroyCollectionPayload'] | ResolversParentTypes['DestroyCommunityPayload'] | ResolversParentTypes['DestroyContributionPayload'] | ResolversParentTypes['DestroyContributorPayload'] | ResolversParentTypes['DestroyEntityLinkPayload'] | ResolversParentTypes['DestroyItemPayload'] | ResolversParentTypes['DestroyOrderingPayload'] | ResolversParentTypes['DestroyPagePayload'] | ResolversParentTypes['GrantAccessPayload'] | ResolversParentTypes['LinkEntityPayload'] | ResolversParentTypes['ReparentEntityPayload'] | ResolversParentTypes['ResetOrderingPayload'] | ResolversParentTypes['RevokeAccessPayload'] | ResolversParentTypes['SelectInitialOrderingPayload'] | ResolversParentTypes['UpdateAnnouncementPayload'] | ResolversParentTypes['UpdateAssetAttachmentPayload'] | ResolversParentTypes['UpdateAssetPayload'] | ResolversParentTypes['UpdateCollectionPayload'] | ResolversParentTypes['UpdateCommunityPayload'] | ResolversParentTypes['UpdateContributionPayload'] | ResolversParentTypes['UpdateGlobalConfigurationPayload'] | ResolversParentTypes['UpdateItemPayload'] | ResolversParentTypes['UpdateOrderingPayload'] | ResolversParentTypes['UpdateOrganizationContributorPayload'] | ResolversParentTypes['UpdatePagePayload'] | ResolversParentTypes['UpdatePersonContributorPayload'] | ResolversParentTypes['UpdateRolePayload'] | ResolversParentTypes['UpdateUserPayload'] | ResolversParentTypes['UpdateViewerSettingsPayload'] | ResolversParentTypes['UpsertContributionPayload'];
  StaticOrderingPath: StaticOrderingPath;
  StringProperty: StringProperty;
  SystemInfo: SystemInfo;
  TagsProperty: TagsProperty;
  ThemeSettings: ThemeSettings;
  ThemeSettingsInput: ThemeSettingsInput;
  TimestampProperty: TimestampProperty;
  URLProperty: UrlProperty;
  URLReference: UrlReference;
  UnknownProperty: UnknownProperty;
  UpdateAnnouncementInput: UpdateAnnouncementInput;
  UpdateAnnouncementPayload: UpdateAnnouncementPayload;
  UpdateAssetAttachmentInput: UpdateAssetAttachmentInput;
  UpdateAssetAttachmentPayload: Omit<UpdateAssetAttachmentPayload, 'asset'> & { asset?: Maybe<ResolversParentTypes['AnyAsset']> };
  UpdateAssetInput: UpdateAssetInput;
  UpdateAssetPayload: Omit<UpdateAssetPayload, 'asset'> & { asset?: Maybe<ResolversParentTypes['AnyAsset']> };
  UpdateCollectionInput: UpdateCollectionInput;
  UpdateCollectionPayload: UpdateCollectionPayload;
  UpdateCommunityInput: UpdateCommunityInput;
  UpdateCommunityPayload: UpdateCommunityPayload;
  UpdateContributionInput: UpdateContributionInput;
  UpdateContributionPayload: Omit<UpdateContributionPayload, 'contribution'> & { contribution?: Maybe<ResolversParentTypes['AnyContribution']> };
  UpdateGlobalConfigurationInput: UpdateGlobalConfigurationInput;
  UpdateGlobalConfigurationPayload: UpdateGlobalConfigurationPayload;
  UpdateItemInput: UpdateItemInput;
  UpdateItemPayload: UpdateItemPayload;
  UpdateOrderingInput: UpdateOrderingInput;
  UpdateOrderingPayload: UpdateOrderingPayload;
  UpdateOrganizationContributorInput: UpdateOrganizationContributorInput;
  UpdateOrganizationContributorPayload: UpdateOrganizationContributorPayload;
  UpdatePageInput: UpdatePageInput;
  UpdatePagePayload: UpdatePagePayload;
  UpdatePersonContributorInput: UpdatePersonContributorInput;
  UpdatePersonContributorPayload: UpdatePersonContributorPayload;
  UpdateRoleInput: UpdateRoleInput;
  UpdateRolePayload: UpdateRolePayload;
  UpdateUserInput: UpdateUserInput;
  UpdateUserPayload: UpdateUserPayload;
  UpdateViewerSettingsInput: UpdateViewerSettingsInput;
  UpdateViewerSettingsPayload: UpdateViewerSettingsPayload;
  UploadID: Scalars['UploadID'];
  UploadedFileInput: UploadedFileInput;
  UploadedFileMetadataInput: UploadedFileMetadataInput;
  UpsertContributionInput: UpsertContributionInput;
  UpsertContributionPayload: Omit<UpsertContributionPayload, 'contribution'> & { contribution?: Maybe<ResolversParentTypes['AnyContribution']> };
  User: User;
  UserAccessGrant: ResolversParentTypes['UserCollectionAccessGrant'] | ResolversParentTypes['UserCommunityAccessGrant'] | ResolversParentTypes['UserItemAccessGrant'];
  UserCollectionAccessGrant: Omit<UserCollectionAccessGrant, 'entity'> & { entity: ResolversParentTypes['AnyEntity'] };
  UserCollectionAccessGrantConnection: UserCollectionAccessGrantConnection;
  UserCollectionAccessGrantEdge: UserCollectionAccessGrantEdge;
  UserCommunityAccessGrant: Omit<UserCommunityAccessGrant, 'entity'> & { entity: ResolversParentTypes['AnyEntity'] };
  UserCommunityAccessGrantConnection: UserCommunityAccessGrantConnection;
  UserCommunityAccessGrantEdge: UserCommunityAccessGrantEdge;
  UserConnection: UserConnection;
  UserEdge: UserEdge;
  UserError: UserError;
  UserGroup: UserGroup;
  UserGroupAccessGrant: ResolversParentTypes['UserGroupCollectionAccessGrant'] | ResolversParentTypes['UserGroupCommunityAccessGrant'] | ResolversParentTypes['UserGroupItemAccessGrant'];
  UserGroupCollectionAccessGrant: Omit<UserGroupCollectionAccessGrant, 'entity'> & { entity: ResolversParentTypes['AnyEntity'] };
  UserGroupCollectionAccessGrantConnection: UserGroupCollectionAccessGrantConnection;
  UserGroupCollectionAccessGrantEdge: UserGroupCollectionAccessGrantEdge;
  UserGroupCommunityAccessGrant: Omit<UserGroupCommunityAccessGrant, 'entity'> & { entity: ResolversParentTypes['AnyEntity'] };
  UserGroupCommunityAccessGrantConnection: UserGroupCommunityAccessGrantConnection;
  UserGroupCommunityAccessGrantEdge: UserGroupCommunityAccessGrantEdge;
  UserGroupItemAccessGrant: Omit<UserGroupItemAccessGrant, 'entity'> & { entity: ResolversParentTypes['AnyEntity'] };
  UserGroupItemAccessGrantConnection: UserGroupItemAccessGrantConnection;
  UserGroupItemAccessGrantEdge: UserGroupItemAccessGrantEdge;
  UserItemAccessGrant: Omit<UserItemAccessGrant, 'entity'> & { entity: ResolversParentTypes['AnyEntity'] };
  UserItemAccessGrantConnection: UserItemAccessGrantConnection;
  UserItemAccessGrantEdge: UserItemAccessGrantEdge;
  UserProfileInput: UserProfileInput;
  VariableDateProperty: VariableDateProperty;
  VariablePrecisionDate: VariablePrecisionDate;
  VariablePrecisionDateInput: VariablePrecisionDateInput;
  VersionRequirement: Scalars['VersionRequirement'];
};

export type AccessControlListResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccessControlList'] = ResolversParentTypes['AccessControlList']> = {
  allowedActions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  collections?: Resolver<ResolversTypes['EntityPermissionGrid'], ParentType, ContextType>;
  items?: Resolver<ResolversTypes['EntityPermissionGrid'], ParentType, ContextType>;
  permissions?: Resolver<Array<ResolversTypes['PermissionGrant']>, ParentType, ContextType>;
  self?: Resolver<ResolversTypes['EntityPermissionGrid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccessGrantResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccessGrant'] = ResolversParentTypes['AccessGrant']> = {
  __resolveType: TypeResolveFn<'UserCollectionAccessGrant' | 'UserCommunityAccessGrant' | 'UserGroupCollectionAccessGrant' | 'UserGroupCommunityAccessGrant' | 'UserGroupItemAccessGrant' | 'UserItemAccessGrant', ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['AccessGrantSubject'], ParentType, ContextType>;
};

export type AccessGrantSubjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccessGrantSubject'] = ResolversParentTypes['AccessGrantSubject']> = {
  __resolveType: TypeResolveFn<'User' | 'UserGroup', ParentType, ContextType>;
  allAccessGrants?: Resolver<ResolversTypes['AnyAccessGrantConnection'], ParentType, ContextType, RequireFields<AccessGrantSubjectAllAccessGrantsArgs, 'entity' | 'order' | 'pageDirection'>>;
  assignableRoles?: Resolver<Array<ResolversTypes['Role']>, ParentType, ContextType>;
  primaryRole?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType>;
};

export type AccessibleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Accessible'] = ResolversParentTypes['Accessible']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Community' | 'Item', ParentType, ContextType>;
  allAccessGrants?: Resolver<ResolversTypes['AnyAccessGrantConnection'], ParentType, ContextType, RequireFields<AccessibleAllAccessGrantsArgs, 'subject' | 'order' | 'pageDirection'>>;
};

export type AlterSchemaVersionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['AlterSchemaVersionPayload'] = ResolversParentTypes['AlterSchemaVersionPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  collection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType>;
  community?: Resolver<Maybe<ResolversTypes['Community']>, ParentType, ContextType>;
  entity?: Resolver<Maybe<ResolversTypes['AnyEntity']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  item?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType>;
  schemaErrors?: Resolver<Array<ResolversTypes['SchemaValueError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnnouncementResolvers<ContextType = any, ParentType extends ResolversParentTypes['Announcement'] = ResolversParentTypes['Announcement']> = {
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  header?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  publishedOn?: Resolver<ResolversTypes['ISO8601Date'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  teaser?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnnouncementConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnnouncementConnection'] = ResolversParentTypes['AnnouncementConnection']> = {
  edges?: Resolver<Array<ResolversTypes['AnnouncementEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Announcement']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnnouncementEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnnouncementEdge'] = ResolversParentTypes['AnnouncementEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Announcement'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnyAccessGrantResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyAccessGrant'] = ResolversParentTypes['AnyAccessGrant']> = {
  __resolveType: TypeResolveFn<'UserCollectionAccessGrant' | 'UserCommunityAccessGrant' | 'UserGroupCollectionAccessGrant' | 'UserGroupCommunityAccessGrant' | 'UserGroupItemAccessGrant' | 'UserItemAccessGrant', ParentType, ContextType>;
};

export type AnyAccessGrantConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyAccessGrantConnection'] = ResolversParentTypes['AnyAccessGrantConnection']> = {
  edges?: Resolver<Array<ResolversTypes['AnyAccessGrantEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['AnyAccessGrant']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnyAccessGrantEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyAccessGrantEdge'] = ResolversParentTypes['AnyAccessGrantEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['AnyAccessGrant'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnyAssetResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyAsset'] = ResolversParentTypes['AnyAsset']> = {
  __resolveType: TypeResolveFn<'AssetAudio' | 'AssetDocument' | 'AssetImage' | 'AssetPDF' | 'AssetUnknown' | 'AssetVideo', ParentType, ContextType>;
};

export type AnyAssetConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyAssetConnection'] = ResolversParentTypes['AnyAssetConnection']> = {
  edges?: Resolver<Array<ResolversTypes['AnyAssetEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['AnyAsset']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnyAssetEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyAssetEdge'] = ResolversParentTypes['AnyAssetEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['AnyAsset'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnyAttachableResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyAttachable'] = ResolversParentTypes['AnyAttachable']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Community' | 'Item', ParentType, ContextType>;
};

export type AnyChildEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyChildEntity'] = ResolversParentTypes['AnyChildEntity']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Item', ParentType, ContextType>;
};

export type AnyCollectionAccessGrantResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyCollectionAccessGrant'] = ResolversParentTypes['AnyCollectionAccessGrant']> = {
  __resolveType: TypeResolveFn<'UserCollectionAccessGrant' | 'UserGroupCollectionAccessGrant', ParentType, ContextType>;
};

export type AnyCollectionAccessGrantConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyCollectionAccessGrantConnection'] = ResolversParentTypes['AnyCollectionAccessGrantConnection']> = {
  edges?: Resolver<Array<ResolversTypes['AnyCollectionAccessGrantEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['AnyCollectionAccessGrant']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnyCollectionAccessGrantEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyCollectionAccessGrantEdge'] = ResolversParentTypes['AnyCollectionAccessGrantEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['AnyCollectionAccessGrant'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnyCommunityAccessGrantResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyCommunityAccessGrant'] = ResolversParentTypes['AnyCommunityAccessGrant']> = {
  __resolveType: TypeResolveFn<'UserCommunityAccessGrant' | 'UserGroupCommunityAccessGrant', ParentType, ContextType>;
};

export type AnyCommunityAccessGrantConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyCommunityAccessGrantConnection'] = ResolversParentTypes['AnyCommunityAccessGrantConnection']> = {
  edges?: Resolver<Array<ResolversTypes['AnyCommunityAccessGrantEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['AnyCommunityAccessGrant']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnyCommunityAccessGrantEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyCommunityAccessGrantEdge'] = ResolversParentTypes['AnyCommunityAccessGrantEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['AnyCommunityAccessGrant'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnyContributionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyContribution'] = ResolversParentTypes['AnyContribution']> = {
  __resolveType: TypeResolveFn<'CollectionContribution' | 'ItemContribution', ParentType, ContextType>;
};

export type AnyContributorResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyContributor'] = ResolversParentTypes['AnyContributor']> = {
  __resolveType: TypeResolveFn<'OrganizationContributor' | 'PersonContributor', ParentType, ContextType>;
};

export type AnyContributorConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyContributorConnection'] = ResolversParentTypes['AnyContributorConnection']> = {
  edges?: Resolver<Array<ResolversTypes['AnyContributorEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['AnyContributor']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnyContributorEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyContributorEdge'] = ResolversParentTypes['AnyContributorEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['AnyContributor'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnyEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyEntity'] = ResolversParentTypes['AnyEntity']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Community' | 'Item', ParentType, ContextType>;
};

export type AnyLinkTargetResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyLinkTarget'] = ResolversParentTypes['AnyLinkTarget']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Item', ParentType, ContextType>;
};

export type AnyOrderingEntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyOrderingEntry'] = ResolversParentTypes['AnyOrderingEntry']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Community' | 'EntityLink' | 'Item', ParentType, ContextType>;
};

export type AnyOrderingPathResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyOrderingPath'] = ResolversParentTypes['AnyOrderingPath']> = {
  __resolveType: TypeResolveFn<'SchemaOrderingPath' | 'StaticOrderingPath', ParentType, ContextType>;
};

export type AnyScalarPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyScalarProperty'] = ResolversParentTypes['AnyScalarProperty']> = {
  __resolveType: TypeResolveFn<'AssetProperty' | 'AssetsProperty' | 'BooleanProperty' | 'ContributorProperty' | 'ContributorsProperty' | 'DateProperty' | 'EmailProperty' | 'EntitiesProperty' | 'EntityProperty' | 'FloatProperty' | 'FullTextProperty' | 'IntegerProperty' | 'MarkdownProperty' | 'MultiselectProperty' | 'SelectProperty' | 'StringProperty' | 'TagsProperty' | 'TimestampProperty' | 'URLProperty' | 'UnknownProperty' | 'VariableDateProperty', ParentType, ContextType>;
};

export type AnySchemaPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnySchemaProperty'] = ResolversParentTypes['AnySchemaProperty']> = {
  __resolveType: TypeResolveFn<'AssetProperty' | 'AssetsProperty' | 'BooleanProperty' | 'ContributorProperty' | 'ContributorsProperty' | 'DateProperty' | 'EmailProperty' | 'EntitiesProperty' | 'EntityProperty' | 'FloatProperty' | 'FullTextProperty' | 'GroupProperty' | 'IntegerProperty' | 'MarkdownProperty' | 'MultiselectProperty' | 'SelectProperty' | 'StringProperty' | 'TagsProperty' | 'TimestampProperty' | 'URLProperty' | 'UnknownProperty' | 'VariableDateProperty', ParentType, ContextType>;
};

export type AnySearchablePropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnySearchableProperty'] = ResolversParentTypes['AnySearchableProperty']> = {
  __resolveType: TypeResolveFn<'BooleanProperty' | 'DateProperty' | 'FloatProperty' | 'FullTextProperty' | 'IntegerProperty' | 'MarkdownProperty' | 'MultiselectProperty' | 'SelectProperty' | 'StringProperty' | 'TimestampProperty' | 'VariableDateProperty', ParentType, ContextType>;
};

export type AnyUserAccessGrantResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyUserAccessGrant'] = ResolversParentTypes['AnyUserAccessGrant']> = {
  __resolveType: TypeResolveFn<'UserCollectionAccessGrant' | 'UserCommunityAccessGrant' | 'UserItemAccessGrant', ParentType, ContextType>;
};

export type AnyUserAccessGrantConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyUserAccessGrantConnection'] = ResolversParentTypes['AnyUserAccessGrantConnection']> = {
  edges?: Resolver<Array<ResolversTypes['AnyUserAccessGrantEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['AnyUserAccessGrant']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnyUserAccessGrantEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyUserAccessGrantEdge'] = ResolversParentTypes['AnyUserAccessGrantEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['AnyUserAccessGrant'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnyUserGroupAccessGrantResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyUserGroupAccessGrant'] = ResolversParentTypes['AnyUserGroupAccessGrant']> = {
  __resolveType: TypeResolveFn<'UserGroupCollectionAccessGrant' | 'UserGroupCommunityAccessGrant' | 'UserGroupItemAccessGrant', ParentType, ContextType>;
};

export type AnyUserGroupAccessGrantConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyUserGroupAccessGrantConnection'] = ResolversParentTypes['AnyUserGroupAccessGrantConnection']> = {
  edges?: Resolver<Array<ResolversTypes['AnyUserGroupAccessGrantEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['AnyUserGroupAccessGrant']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnyUserGroupAccessGrantEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyUserGroupAccessGrantEdge'] = ResolversParentTypes['AnyUserGroupAccessGrantEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['AnyUserGroupAccessGrant'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplySchemaPropertiesPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplySchemaPropertiesPayload'] = ResolversParentTypes['ApplySchemaPropertiesPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  collection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType>;
  community?: Resolver<Maybe<ResolversTypes['Community']>, ParentType, ContextType>;
  entity?: Resolver<Maybe<ResolversTypes['AnyEntity']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  item?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType>;
  schemaErrors?: Resolver<Array<ResolversTypes['SchemaValueError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Asset'] = ResolversParentTypes['Asset']> = {
  __resolveType: TypeResolveFn<'AssetAudio' | 'AssetDocument' | 'AssetImage' | 'AssetPDF' | 'AssetUnknown' | 'AssetVideo', ParentType, ContextType>;
  altText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attachable?: Resolver<ResolversTypes['AnyAttachable'], ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  downloadUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fileSize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['AssetKind'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  preview?: Resolver<ResolversTypes['ImageAttachment'], ParentType, ContextType>;
  previewMetadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
};

export type AssetAudioResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetAudio'] = ResolversParentTypes['AssetAudio']> = {
  altText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attachable?: Resolver<ResolversTypes['AnyAttachable'], ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  downloadUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fileSize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['AssetKind'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  preview?: Resolver<ResolversTypes['ImageAttachment'], ParentType, ContextType>;
  previewMetadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetDocumentResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetDocument'] = ResolversParentTypes['AssetDocument']> = {
  altText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attachable?: Resolver<ResolversTypes['AnyAttachable'], ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  downloadUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fileSize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['AssetKind'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  preview?: Resolver<ResolversTypes['ImageAttachment'], ParentType, ContextType>;
  previewMetadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetImage'] = ResolversParentTypes['AssetImage']> = {
  altText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attachable?: Resolver<ResolversTypes['AnyAttachable'], ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  downloadUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fileSize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['AssetKind'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  preview?: Resolver<ResolversTypes['ImageAttachment'], ParentType, ContextType>;
  previewMetadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetPdfResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetPDF'] = ResolversParentTypes['AssetPDF']> = {
  altText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attachable?: Resolver<ResolversTypes['AnyAttachable'], ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  downloadUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fileSize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['AssetKind'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  preview?: Resolver<ResolversTypes['ImageAttachment'], ParentType, ContextType>;
  previewMetadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetPermissionGridResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetPermissionGrid'] = ResolversParentTypes['AssetPermissionGrid']> = {
  allowedActions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  create?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  delete?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  permissions?: Resolver<Array<ResolversTypes['PermissionGrant']>, ParentType, ContextType>;
  read?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  update?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetProperty'] = ResolversParentTypes['AssetProperty']> = {
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  asset?: Resolver<Maybe<ResolversTypes['AnyAsset']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  function?: Resolver<ResolversTypes['SchemaPropertyFunction'], ParentType, ContextType>;
  isWide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetSelectOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetSelectOption'] = ResolversParentTypes['AssetSelectOption']> = {
  kind?: Resolver<ResolversTypes['AssetKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetUnknownResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetUnknown'] = ResolversParentTypes['AssetUnknown']> = {
  altText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attachable?: Resolver<ResolversTypes['AnyAttachable'], ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  downloadUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fileSize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['AssetKind'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  preview?: Resolver<ResolversTypes['ImageAttachment'], ParentType, ContextType>;
  previewMetadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetVideoResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetVideo'] = ResolversParentTypes['AssetVideo']> = {
  altText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attachable?: Resolver<ResolversTypes['AnyAttachable'], ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  downloadUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fileSize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['AssetKind'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  preview?: Resolver<ResolversTypes['ImageAttachment'], ParentType, ContextType>;
  previewMetadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetsPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetsProperty'] = ResolversParentTypes['AssetsProperty']> = {
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  assets?: Resolver<Array<ResolversTypes['AnyAsset']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  function?: Resolver<ResolversTypes['SchemaPropertyFunction'], ParentType, ContextType>;
  isWide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AttachableResolvers<ContextType = any, ParentType extends ResolversParentTypes['Attachable'] = ResolversParentTypes['Attachable']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Community' | 'Item', ParentType, ContextType>;
  assets?: Resolver<ResolversTypes['AnyAssetConnection'], ParentType, ContextType, RequireFields<AttachableAssetsArgs, 'order' | 'kind' | 'pageDirection'>>;
};

export type BooleanPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['BooleanProperty'] = ResolversParentTypes['BooleanProperty']> = {
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  checked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  checkedByDefault?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  function?: Resolver<ResolversTypes['SchemaPropertyFunction'], ParentType, ContextType>;
  isWide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  searchOperators?: Resolver<Array<ResolversTypes['SearchOperator']>, ParentType, ContextType>;
  searchPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CrudPermissionGridResolvers<ContextType = any, ParentType extends ResolversParentTypes['CRUDPermissionGrid'] = ResolversParentTypes['CRUDPermissionGrid']> = {
  __resolveType: TypeResolveFn<'AssetPermissionGrid' | 'EntityPermissionGrid', ParentType, ContextType>;
  allowedActions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  create?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  delete?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  permissions?: Resolver<Array<ResolversTypes['PermissionGrant']>, ParentType, ContextType>;
  read?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  update?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
};

export type ChildEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChildEntity'] = ResolversParentTypes['ChildEntity']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Item', ParentType, ContextType>;
  accessControlList?: Resolver<Maybe<ResolversTypes['AccessControlList']>, ParentType, ContextType>;
  allAccessGrants?: Resolver<ResolversTypes['AnyAccessGrantConnection'], ParentType, ContextType, RequireFields<ChildEntityAllAccessGrantsArgs, 'subject' | 'order' | 'pageDirection'>>;
  allowedActions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  ancestorByName?: Resolver<Maybe<ResolversTypes['AnyEntity']>, ParentType, ContextType, RequireFields<ChildEntityAncestorByNameArgs, 'name'>>;
  ancestorOfType?: Resolver<Maybe<ResolversTypes['AnyEntity']>, ParentType, ContextType, RequireFields<ChildEntityAncestorOfTypeArgs, 'schema'>>;
  announcement?: Resolver<Maybe<ResolversTypes['Announcement']>, ParentType, ContextType, RequireFields<ChildEntityAnnouncementArgs, 'slug'>>;
  announcements?: Resolver<ResolversTypes['AnnouncementConnection'], ParentType, ContextType, RequireFields<ChildEntityAnnouncementsArgs, 'order' | 'pageDirection'>>;
  applicableRoles?: Resolver<Array<ResolversTypes['Role']>, ParentType, ContextType>;
  assignableRoles?: Resolver<Array<ResolversTypes['Role']>, ParentType, ContextType>;
  assignedUsers?: Resolver<ResolversTypes['ContextualPermissionConnection'], ParentType, ContextType, RequireFields<ChildEntityAssignedUsersArgs, 'order' | 'pageDirection'>>;
  breadcrumbs?: Resolver<Array<ResolversTypes['EntityBreadcrumb']>, ParentType, ContextType>;
  community?: Resolver<ResolversTypes['Community'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  currentlyHidden?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  currentlyVisible?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  descendants?: Resolver<ResolversTypes['EntityDescendantConnection'], ParentType, ContextType, RequireFields<ChildEntityDescendantsArgs, 'scope' | 'order' | 'pageDirection'>>;
  doi?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  heroImage?: Resolver<ResolversTypes['ImageAttachment'], ParentType, ContextType>;
  heroImageMetadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  hidden?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hiddenAsOf?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<ChildEntityHiddenAsOfArgs, never>>;
  hiddenAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  hierarchicalDepth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  inCommunityOrdering?: Resolver<Maybe<ResolversTypes['OrderingEntry']>, ParentType, ContextType, RequireFields<ChildEntityInCommunityOrderingArgs, 'identifier'>>;
  initialOrdering?: Resolver<Maybe<ResolversTypes['Ordering']>, ParentType, ContextType>;
  issn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  leaf?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  linkTargetCandidates?: Resolver<ResolversTypes['LinkTargetCandidateConnection'], ParentType, ContextType, RequireFields<ChildEntityLinkTargetCandidatesArgs, 'kind' | 'title' | 'pageDirection'>>;
  links?: Resolver<ResolversTypes['EntityLinkConnection'], ParentType, ContextType, RequireFields<ChildEntityLinksArgs, 'order' | 'pageDirection'>>;
  namedAncestors?: Resolver<Array<ResolversTypes['NamedAncestor']>, ParentType, ContextType>;
  ordering?: Resolver<Maybe<ResolversTypes['Ordering']>, ParentType, ContextType, RequireFields<ChildEntityOrderingArgs, 'identifier'>>;
  orderingForSchema?: Resolver<Maybe<ResolversTypes['Ordering']>, ParentType, ContextType, RequireFields<ChildEntityOrderingForSchemaArgs, 'slug'>>;
  orderings?: Resolver<ResolversTypes['OrderingConnection'], ParentType, ContextType, RequireFields<ChildEntityOrderingsArgs, 'order' | 'availability' | 'visibility' | 'pageDirection'>>;
  page?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType, RequireFields<ChildEntityPageArgs, 'slug'>>;
  pages?: Resolver<ResolversTypes['PageConnection'], ParentType, ContextType, RequireFields<ChildEntityPagesArgs, 'pageDirection'>>;
  permissions?: Resolver<Array<ResolversTypes['PermissionGrant']>, ParentType, ContextType>;
  published?: Resolver<ResolversTypes['VariablePrecisionDate'], ParentType, ContextType>;
  root?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  schemaDefinition?: Resolver<ResolversTypes['SchemaDefinition'], ParentType, ContextType>;
  schemaRanks?: Resolver<Array<ResolversTypes['HierarchicalSchemaRank']>, ParentType, ContextType>;
  schemaVersion?: Resolver<ResolversTypes['SchemaVersion'], ParentType, ContextType>;
  subtitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<ResolversTypes['ImageAttachment'], ParentType, ContextType>;
  thumbnailMetadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  visibility?: Resolver<ResolversTypes['EntityVisibility'], ParentType, ContextType>;
  visible?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  visibleAfterAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  visibleAsOf?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<ChildEntityVisibleAsOfArgs, never>>;
  visibleUntilAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
};

export type ClearInitialOrderingPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClearInitialOrderingPayload'] = ResolversParentTypes['ClearInitialOrderingPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entity?: Resolver<Maybe<ResolversTypes['AnyEntity']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Collection'] = ResolversParentTypes['Collection']> = {
  accessControlList?: Resolver<Maybe<ResolversTypes['AccessControlList']>, ParentType, ContextType>;
  accessGrants?: Resolver<ResolversTypes['AnyCollectionAccessGrantConnection'], ParentType, ContextType, RequireFields<CollectionAccessGrantsArgs, 'subject' | 'order' | 'pageDirection'>>;
  allAccessGrants?: Resolver<ResolversTypes['AnyAccessGrantConnection'], ParentType, ContextType, RequireFields<CollectionAllAccessGrantsArgs, 'subject' | 'order' | 'pageDirection'>>;
  allowedActions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  ancestorByName?: Resolver<Maybe<ResolversTypes['AnyEntity']>, ParentType, ContextType, RequireFields<CollectionAncestorByNameArgs, 'name'>>;
  ancestorOfType?: Resolver<Maybe<ResolversTypes['AnyEntity']>, ParentType, ContextType, RequireFields<CollectionAncestorOfTypeArgs, 'schema'>>;
  announcement?: Resolver<Maybe<ResolversTypes['Announcement']>, ParentType, ContextType, RequireFields<CollectionAnnouncementArgs, 'slug'>>;
  announcements?: Resolver<ResolversTypes['AnnouncementConnection'], ParentType, ContextType, RequireFields<CollectionAnnouncementsArgs, 'order' | 'pageDirection'>>;
  applicableRoles?: Resolver<Array<ResolversTypes['Role']>, ParentType, ContextType>;
  assets?: Resolver<ResolversTypes['AnyAssetConnection'], ParentType, ContextType, RequireFields<CollectionAssetsArgs, 'order' | 'kind' | 'pageDirection'>>;
  assignableRoles?: Resolver<Array<ResolversTypes['Role']>, ParentType, ContextType>;
  assignedUsers?: Resolver<ResolversTypes['ContextualPermissionConnection'], ParentType, ContextType, RequireFields<CollectionAssignedUsersArgs, 'order' | 'pageDirection'>>;
  availableEntitiesFor?: Resolver<Array<ResolversTypes['EntitySelectOption']>, ParentType, ContextType, RequireFields<CollectionAvailableEntitiesForArgs, 'fullPath'>>;
  breadcrumbs?: Resolver<Array<ResolversTypes['EntityBreadcrumb']>, ParentType, ContextType>;
  children?: Resolver<ResolversTypes['CollectionConnection'], ParentType, ContextType, RequireFields<CollectionChildrenArgs, never>>;
  collections?: Resolver<ResolversTypes['CollectionConnection'], ParentType, ContextType, RequireFields<CollectionCollectionsArgs, 'order' | 'nodeFilter' | 'pageDirection'>>;
  community?: Resolver<ResolversTypes['Community'], ParentType, ContextType>;
  contributions?: Resolver<ResolversTypes['CollectionContributionConnection'], ParentType, ContextType, RequireFields<CollectionContributionsArgs, 'order' | 'pageDirection'>>;
  contributors?: Resolver<ResolversTypes['AnyContributorConnection'], ParentType, ContextType, RequireFields<CollectionContributorsArgs, 'order' | 'kind' | 'pageDirection'>>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  currentlyHidden?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  currentlyVisible?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  descendants?: Resolver<ResolversTypes['EntityDescendantConnection'], ParentType, ContextType, RequireFields<CollectionDescendantsArgs, 'scope' | 'order' | 'pageDirection'>>;
  doi?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstCollection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType, RequireFields<CollectionFirstCollectionArgs, 'order' | 'nodeFilter'>>;
  firstItem?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType, RequireFields<CollectionFirstItemArgs, 'order' | 'nodeFilter'>>;
  hasCollections?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasItems?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  heroImage?: Resolver<ResolversTypes['ImageAttachment'], ParentType, ContextType>;
  heroImageMetadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  hidden?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hiddenAsOf?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<CollectionHiddenAsOfArgs, never>>;
  hiddenAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  hierarchicalDepth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  inCommunityOrdering?: Resolver<Maybe<ResolversTypes['OrderingEntry']>, ParentType, ContextType, RequireFields<CollectionInCommunityOrderingArgs, 'identifier'>>;
  initialOrdering?: Resolver<Maybe<ResolversTypes['Ordering']>, ParentType, ContextType>;
  issn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  items?: Resolver<ResolversTypes['ItemConnection'], ParentType, ContextType, RequireFields<CollectionItemsArgs, 'order' | 'nodeFilter' | 'pageDirection'>>;
  leaf?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  linkTargetCandidates?: Resolver<ResolversTypes['LinkTargetCandidateConnection'], ParentType, ContextType, RequireFields<CollectionLinkTargetCandidatesArgs, 'kind' | 'title' | 'pageDirection'>>;
  links?: Resolver<ResolversTypes['EntityLinkConnection'], ParentType, ContextType, RequireFields<CollectionLinksArgs, 'order' | 'pageDirection'>>;
  namedAncestors?: Resolver<Array<ResolversTypes['NamedAncestor']>, ParentType, ContextType>;
  ordering?: Resolver<Maybe<ResolversTypes['Ordering']>, ParentType, ContextType, RequireFields<CollectionOrderingArgs, 'identifier'>>;
  orderingForSchema?: Resolver<Maybe<ResolversTypes['Ordering']>, ParentType, ContextType, RequireFields<CollectionOrderingForSchemaArgs, 'slug'>>;
  orderings?: Resolver<ResolversTypes['OrderingConnection'], ParentType, ContextType, RequireFields<CollectionOrderingsArgs, 'order' | 'availability' | 'visibility' | 'pageDirection'>>;
  page?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType, RequireFields<CollectionPageArgs, 'slug'>>;
  pages?: Resolver<ResolversTypes['PageConnection'], ParentType, ContextType, RequireFields<CollectionPagesArgs, 'pageDirection'>>;
  parent?: Resolver<Maybe<ResolversTypes['CollectionParent']>, ParentType, ContextType>;
  permissions?: Resolver<Array<ResolversTypes['PermissionGrant']>, ParentType, ContextType>;
  published?: Resolver<ResolversTypes['VariablePrecisionDate'], ParentType, ContextType>;
  relatedCollections?: Resolver<ResolversTypes['CollectionConnection'], ParentType, ContextType, RequireFields<CollectionRelatedCollectionsArgs, 'order' | 'pageDirection'>>;
  root?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  schemaDefinition?: Resolver<ResolversTypes['SchemaDefinition'], ParentType, ContextType>;
  schemaInstanceContext?: Resolver<ResolversTypes['SchemaInstanceContext'], ParentType, ContextType>;
  schemaProperties?: Resolver<Array<ResolversTypes['AnySchemaProperty']>, ParentType, ContextType>;
  schemaProperty?: Resolver<Maybe<ResolversTypes['AnySchemaProperty']>, ParentType, ContextType, RequireFields<CollectionSchemaPropertyArgs, 'fullPath'>>;
  schemaRanks?: Resolver<Array<ResolversTypes['HierarchicalSchemaRank']>, ParentType, ContextType>;
  schemaVersion?: Resolver<ResolversTypes['SchemaVersion'], ParentType, ContextType>;
  search?: Resolver<ResolversTypes['SearchScope'], ParentType, ContextType, RequireFields<CollectionSearchArgs, 'visibility'>>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  subtitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<ResolversTypes['ImageAttachment'], ParentType, ContextType>;
  thumbnailMetadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  userAccessGrants?: Resolver<ResolversTypes['UserCollectionAccessGrantConnection'], ParentType, ContextType, RequireFields<CollectionUserAccessGrantsArgs, 'order' | 'pageDirection'>>;
  userGroupAccessGrants?: Resolver<ResolversTypes['UserGroupCollectionAccessGrantConnection'], ParentType, ContextType, RequireFields<CollectionUserGroupAccessGrantsArgs, 'order' | 'pageDirection'>>;
  visibility?: Resolver<ResolversTypes['EntityVisibility'], ParentType, ContextType>;
  visible?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  visibleAfterAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  visibleAsOf?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<CollectionVisibleAsOfArgs, never>>;
  visibleUntilAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionConnection'] = ResolversParentTypes['CollectionConnection']> = {
  edges?: Resolver<Array<ResolversTypes['CollectionEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Collection']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionContributionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionContribution'] = ResolversParentTypes['CollectionContribution']> = {
  affiliation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  collection?: Resolver<ResolversTypes['Collection'], ParentType, ContextType>;
  contributor?: Resolver<ResolversTypes['AnyContributor'], ParentType, ContextType>;
  contributorKind?: Resolver<ResolversTypes['ContributorKind'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<ResolversTypes['ContributionMetadata'], ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionContributionConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionContributionConnection'] = ResolversParentTypes['CollectionContributionConnection']> = {
  edges?: Resolver<Array<ResolversTypes['CollectionContributionEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['CollectionContribution']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionContributionEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionContributionEdge'] = ResolversParentTypes['CollectionContributionEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['CollectionContribution'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionEdge'] = ResolversParentTypes['CollectionEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Collection'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionParentResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionParent'] = ResolversParentTypes['CollectionParent']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Community', ParentType, ContextType>;
};

export type CommunityResolvers<ContextType = any, ParentType extends ResolversParentTypes['Community'] = ResolversParentTypes['Community']> = {
  accessControlList?: Resolver<Maybe<ResolversTypes['AccessControlList']>, ParentType, ContextType>;
  accessGrants?: Resolver<ResolversTypes['AnyCommunityAccessGrantConnection'], ParentType, ContextType, RequireFields<CommunityAccessGrantsArgs, 'subject' | 'order' | 'pageDirection'>>;
  allAccessGrants?: Resolver<ResolversTypes['AnyAccessGrantConnection'], ParentType, ContextType, RequireFields<CommunityAllAccessGrantsArgs, 'subject' | 'order' | 'pageDirection'>>;
  allowedActions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  announcement?: Resolver<Maybe<ResolversTypes['Announcement']>, ParentType, ContextType, RequireFields<CommunityAnnouncementArgs, 'slug'>>;
  announcements?: Resolver<ResolversTypes['AnnouncementConnection'], ParentType, ContextType, RequireFields<CommunityAnnouncementsArgs, 'order' | 'pageDirection'>>;
  applicableRoles?: Resolver<Array<ResolversTypes['Role']>, ParentType, ContextType>;
  assets?: Resolver<ResolversTypes['AnyAssetConnection'], ParentType, ContextType, RequireFields<CommunityAssetsArgs, 'order' | 'kind' | 'pageDirection'>>;
  assignableRoles?: Resolver<Array<ResolversTypes['Role']>, ParentType, ContextType>;
  assignedUsers?: Resolver<ResolversTypes['ContextualPermissionConnection'], ParentType, ContextType, RequireFields<CommunityAssignedUsersArgs, 'order' | 'pageDirection'>>;
  availableEntitiesFor?: Resolver<Array<ResolversTypes['EntitySelectOption']>, ParentType, ContextType, RequireFields<CommunityAvailableEntitiesForArgs, 'fullPath'>>;
  breadcrumbs?: Resolver<Array<ResolversTypes['EntityBreadcrumb']>, ParentType, ContextType>;
  collections?: Resolver<ResolversTypes['CollectionConnection'], ParentType, ContextType, RequireFields<CommunityCollectionsArgs, 'order' | 'nodeFilter' | 'pageDirection'>>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  descendants?: Resolver<ResolversTypes['EntityDescendantConnection'], ParentType, ContextType, RequireFields<CommunityDescendantsArgs, 'scope' | 'order' | 'pageDirection'>>;
  firstCollection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType, RequireFields<CommunityFirstCollectionArgs, 'order' | 'nodeFilter'>>;
  firstItem?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType, RequireFields<CommunityFirstItemArgs, 'order' | 'nodeFilter'>>;
  heroImage?: Resolver<ResolversTypes['ImageAttachment'], ParentType, ContextType>;
  heroImageLayout?: Resolver<ResolversTypes['HeroImageLayout'], ParentType, ContextType>;
  heroImageMetadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  hierarchicalDepth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  initialOrdering?: Resolver<Maybe<ResolversTypes['Ordering']>, ParentType, ContextType>;
  linkTargetCandidates?: Resolver<ResolversTypes['LinkTargetCandidateConnection'], ParentType, ContextType, RequireFields<CommunityLinkTargetCandidatesArgs, 'kind' | 'title' | 'pageDirection'>>;
  links?: Resolver<ResolversTypes['EntityLinkConnection'], ParentType, ContextType, RequireFields<CommunityLinksArgs, 'order' | 'pageDirection'>>;
  logo?: Resolver<ResolversTypes['ImageAttachment'], ParentType, ContextType>;
  logoMetadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ordering?: Resolver<Maybe<ResolversTypes['Ordering']>, ParentType, ContextType, RequireFields<CommunityOrderingArgs, 'identifier'>>;
  orderingForSchema?: Resolver<Maybe<ResolversTypes['Ordering']>, ParentType, ContextType, RequireFields<CommunityOrderingForSchemaArgs, 'slug'>>;
  orderings?: Resolver<ResolversTypes['OrderingConnection'], ParentType, ContextType, RequireFields<CommunityOrderingsArgs, 'order' | 'availability' | 'visibility' | 'pageDirection'>>;
  page?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType, RequireFields<CommunityPageArgs, 'slug'>>;
  pages?: Resolver<ResolversTypes['PageConnection'], ParentType, ContextType, RequireFields<CommunityPagesArgs, 'pageDirection'>>;
  permissions?: Resolver<Array<ResolversTypes['PermissionGrant']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  schemaDefinition?: Resolver<ResolversTypes['SchemaDefinition'], ParentType, ContextType>;
  schemaInstanceContext?: Resolver<ResolversTypes['SchemaInstanceContext'], ParentType, ContextType>;
  schemaProperties?: Resolver<Array<ResolversTypes['AnySchemaProperty']>, ParentType, ContextType>;
  schemaProperty?: Resolver<Maybe<ResolversTypes['AnySchemaProperty']>, ParentType, ContextType, RequireFields<CommunitySchemaPropertyArgs, 'fullPath'>>;
  schemaRanks?: Resolver<Array<ResolversTypes['HierarchicalSchemaRank']>, ParentType, ContextType>;
  schemaVersion?: Resolver<ResolversTypes['SchemaVersion'], ParentType, ContextType>;
  search?: Resolver<ResolversTypes['SearchScope'], ParentType, ContextType, RequireFields<CommunitySearchArgs, 'visibility'>>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  subtitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tagline?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<ResolversTypes['ImageAttachment'], ParentType, ContextType>;
  thumbnailMetadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  userAccessGrants?: Resolver<ResolversTypes['UserCommunityAccessGrantConnection'], ParentType, ContextType, RequireFields<CommunityUserAccessGrantsArgs, 'order' | 'pageDirection'>>;
  userGroupAccessGrants?: Resolver<ResolversTypes['UserGroupCommunityAccessGrantConnection'], ParentType, ContextType, RequireFields<CommunityUserGroupAccessGrantsArgs, 'order' | 'pageDirection'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommunityConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommunityConnection'] = ResolversParentTypes['CommunityConnection']> = {
  edges?: Resolver<Array<ResolversTypes['CommunityEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Community']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommunityEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommunityEdge'] = ResolversParentTypes['CommunityEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Community'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContextualPermissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContextualPermission'] = ResolversParentTypes['ContextualPermission']> = {
  accessControlList?: Resolver<Maybe<ResolversTypes['AccessControlList']>, ParentType, ContextType>;
  accessGrants?: Resolver<Array<ResolversTypes['AnyUserAccessGrant']>, ParentType, ContextType>;
  allowedActions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  permissions?: Resolver<Array<ResolversTypes['PermissionGrant']>, ParentType, ContextType>;
  roles?: Resolver<Array<ResolversTypes['Role']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContextualPermissionConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContextualPermissionConnection'] = ResolversParentTypes['ContextualPermissionConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ContextualPermissionEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['ContextualPermission']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContextualPermissionEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContextualPermissionEdge'] = ResolversParentTypes['ContextualPermissionEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ContextualPermission'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContributableResolvers<ContextType = any, ParentType extends ResolversParentTypes['Contributable'] = ResolversParentTypes['Contributable']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Item', ParentType, ContextType>;
  contributors?: Resolver<ResolversTypes['AnyContributorConnection'], ParentType, ContextType, RequireFields<ContributableContributorsArgs, 'order' | 'kind' | 'pageDirection'>>;
};

export type ContributionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Contribution'] = ResolversParentTypes['Contribution']> = {
  __resolveType: TypeResolveFn<'CollectionContribution' | 'ItemContribution', ParentType, ContextType>;
  affiliation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contributor?: Resolver<ResolversTypes['AnyContributor'], ParentType, ContextType>;
  contributorKind?: Resolver<ResolversTypes['ContributorKind'], ParentType, ContextType>;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<ResolversTypes['ContributionMetadata'], ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type ContributionMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContributionMetadata'] = ResolversParentTypes['ContributionMetadata']> = {
  affiliation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  displayName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContributorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Contributor'] = ResolversParentTypes['Contributor']> = {
  __resolveType: TypeResolveFn<'OrganizationContributor' | 'PersonContributor', ParentType, ContextType>;
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  collectionContributionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  collectionContributions?: Resolver<ResolversTypes['CollectionContributionConnection'], ParentType, ContextType, RequireFields<ContributorCollectionContributionsArgs, 'order' | 'pageDirection'>>;
  contributionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['ImageAttachment'], ParentType, ContextType>;
  imageMetadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  itemContributionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  itemContributions?: Resolver<ResolversTypes['ItemContributionConnection'], ParentType, ContextType, RequireFields<ContributorItemContributionsArgs, 'order' | 'pageDirection'>>;
  kind?: Resolver<ResolversTypes['ContributorKind'], ParentType, ContextType>;
  links?: Resolver<Array<ResolversTypes['ContributorLink']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orcid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  prefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type ContributorLinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContributorLink'] = ResolversParentTypes['ContributorLink']> = {
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContributorPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContributorProperty'] = ResolversParentTypes['ContributorProperty']> = {
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  contributor?: Resolver<Maybe<ResolversTypes['AnyContributor']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  function?: Resolver<ResolversTypes['SchemaPropertyFunction'], ParentType, ContextType>;
  isWide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContributorSelectOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContributorSelectOption'] = ResolversParentTypes['ContributorSelectOption']> = {
  kind?: Resolver<ResolversTypes['ContributorKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContributorsPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContributorsProperty'] = ResolversParentTypes['ContributorsProperty']> = {
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  contributors?: Resolver<Array<ResolversTypes['AnyContributor']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  function?: Resolver<ResolversTypes['SchemaPropertyFunction'], ParentType, ContextType>;
  isWide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateAnnouncementPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateAnnouncementPayload'] = ResolversParentTypes['CreateAnnouncementPayload']> = {
  announcement?: Resolver<Maybe<ResolversTypes['Announcement']>, ParentType, ContextType>;
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateAssetPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateAssetPayload'] = ResolversParentTypes['CreateAssetPayload']> = {
  asset?: Resolver<Maybe<ResolversTypes['AnyAsset']>, ParentType, ContextType>;
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCollectionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateCollectionPayload'] = ResolversParentTypes['CreateCollectionPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  collection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCommunityPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateCommunityPayload'] = ResolversParentTypes['CreateCommunityPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  community?: Resolver<Maybe<ResolversTypes['Community']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateItemPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateItemPayload'] = ResolversParentTypes['CreateItemPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  item?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateOrderingPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateOrderingPayload'] = ResolversParentTypes['CreateOrderingPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ordering?: Resolver<Maybe<ResolversTypes['Ordering']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateOrganizationContributorPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateOrganizationContributorPayload'] = ResolversParentTypes['CreateOrganizationContributorPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contributor?: Resolver<Maybe<ResolversTypes['OrganizationContributor']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreatePagePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreatePagePayload'] = ResolversParentTypes['CreatePagePayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  page?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreatePersonContributorPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreatePersonContributorPayload'] = ResolversParentTypes['CreatePersonContributorPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contributor?: Resolver<Maybe<ResolversTypes['PersonContributor']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateRolePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateRolePayload'] = ResolversParentTypes['CreateRolePayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DatePropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['DateProperty'] = ResolversParentTypes['DateProperty']> = {
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['ISO8601Date']>, ParentType, ContextType>;
  default?: Resolver<Maybe<ResolversTypes['ISO8601Date']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  function?: Resolver<ResolversTypes['SchemaPropertyFunction'], ParentType, ContextType>;
  isWide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  searchOperators?: Resolver<Array<ResolversTypes['SearchOperator']>, ParentType, ContextType>;
  searchPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DescribesSchemaResolvers<ContextType = any, ParentType extends ResolversParentTypes['DescribesSchema'] = ResolversParentTypes['DescribesSchema']> = {
  __resolveType: TypeResolveFn<'HierarchicalSchemaRank' | 'HierarchicalSchemaVersionRank' | 'SchemaDefinition' | 'SchemaVersion', ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaKind'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  namespace?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type DestroyAnnouncementPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DestroyAnnouncementPayload'] = ResolversParentTypes['DestroyAnnouncementPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  destroyed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  destroyedId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DestroyAssetPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DestroyAssetPayload'] = ResolversParentTypes['DestroyAssetPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  destroyed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  destroyedId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DestroyCollectionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DestroyCollectionPayload'] = ResolversParentTypes['DestroyCollectionPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  destroyed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  destroyedId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DestroyCommunityPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DestroyCommunityPayload'] = ResolversParentTypes['DestroyCommunityPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  destroyed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  destroyedId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DestroyContributionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DestroyContributionPayload'] = ResolversParentTypes['DestroyContributionPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  destroyed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  destroyedId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DestroyContributorPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DestroyContributorPayload'] = ResolversParentTypes['DestroyContributorPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  destroyed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  destroyedId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DestroyEntityLinkPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DestroyEntityLinkPayload'] = ResolversParentTypes['DestroyEntityLinkPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  destroyed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  destroyedId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DestroyItemPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DestroyItemPayload'] = ResolversParentTypes['DestroyItemPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  destroyed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  destroyedId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DestroyMutationPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DestroyMutationPayload'] = ResolversParentTypes['DestroyMutationPayload']> = {
  __resolveType: TypeResolveFn<'DestroyAnnouncementPayload' | 'DestroyAssetPayload' | 'DestroyCollectionPayload' | 'DestroyCommunityPayload' | 'DestroyContributionPayload' | 'DestroyContributorPayload' | 'DestroyEntityLinkPayload' | 'DestroyItemPayload' | 'DestroyOrderingPayload' | 'DestroyPagePayload', ParentType, ContextType>;
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  destroyed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  destroyedId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type DestroyOrderingPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DestroyOrderingPayload'] = ResolversParentTypes['DestroyOrderingPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  destroyed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  destroyedId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  disabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DestroyPagePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DestroyPagePayload'] = ResolversParentTypes['DestroyPagePayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  destroyed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  destroyedId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EffectiveAccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['EffectiveAccess'] = ResolversParentTypes['EffectiveAccess']> = {
  allowedActions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  availableActions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  permissions?: Resolver<Array<ResolversTypes['PermissionGrant']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmailPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['EmailProperty'] = ResolversParentTypes['EmailProperty']> = {
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  defaultAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  function?: Resolver<ResolversTypes['SchemaPropertyFunction'], ParentType, ContextType>;
  isWide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntitiesPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntitiesProperty'] = ResolversParentTypes['EntitiesProperty']> = {
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  availableEntities?: Resolver<Array<ResolversTypes['EntitySelectOption']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entities?: Resolver<Array<ResolversTypes['AnyEntity']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  function?: Resolver<ResolversTypes['SchemaPropertyFunction'], ParentType, ContextType>;
  isWide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['Entity'] = ResolversParentTypes['Entity']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Community' | 'Item', ParentType, ContextType>;
  accessControlList?: Resolver<Maybe<ResolversTypes['AccessControlList']>, ParentType, ContextType>;
  allAccessGrants?: Resolver<ResolversTypes['AnyAccessGrantConnection'], ParentType, ContextType, RequireFields<EntityAllAccessGrantsArgs, 'subject' | 'order' | 'pageDirection'>>;
  allowedActions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  announcement?: Resolver<Maybe<ResolversTypes['Announcement']>, ParentType, ContextType, RequireFields<EntityAnnouncementArgs, 'slug'>>;
  announcements?: Resolver<ResolversTypes['AnnouncementConnection'], ParentType, ContextType, RequireFields<EntityAnnouncementsArgs, 'order' | 'pageDirection'>>;
  applicableRoles?: Resolver<Array<ResolversTypes['Role']>, ParentType, ContextType>;
  assignableRoles?: Resolver<Array<ResolversTypes['Role']>, ParentType, ContextType>;
  assignedUsers?: Resolver<ResolversTypes['ContextualPermissionConnection'], ParentType, ContextType, RequireFields<EntityAssignedUsersArgs, 'order' | 'pageDirection'>>;
  breadcrumbs?: Resolver<Array<ResolversTypes['EntityBreadcrumb']>, ParentType, ContextType>;
  descendants?: Resolver<ResolversTypes['EntityDescendantConnection'], ParentType, ContextType, RequireFields<EntityDescendantsArgs, 'scope' | 'order' | 'pageDirection'>>;
  heroImage?: Resolver<ResolversTypes['ImageAttachment'], ParentType, ContextType>;
  heroImageMetadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  hierarchicalDepth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  initialOrdering?: Resolver<Maybe<ResolversTypes['Ordering']>, ParentType, ContextType>;
  linkTargetCandidates?: Resolver<ResolversTypes['LinkTargetCandidateConnection'], ParentType, ContextType, RequireFields<EntityLinkTargetCandidatesArgs, 'kind' | 'title' | 'pageDirection'>>;
  links?: Resolver<ResolversTypes['EntityLinkConnection'], ParentType, ContextType, RequireFields<EntityLinksArgs, 'order' | 'pageDirection'>>;
  ordering?: Resolver<Maybe<ResolversTypes['Ordering']>, ParentType, ContextType, RequireFields<EntityOrderingArgs, 'identifier'>>;
  orderingForSchema?: Resolver<Maybe<ResolversTypes['Ordering']>, ParentType, ContextType, RequireFields<EntityOrderingForSchemaArgs, 'slug'>>;
  orderings?: Resolver<ResolversTypes['OrderingConnection'], ParentType, ContextType, RequireFields<EntityOrderingsArgs, 'order' | 'availability' | 'visibility' | 'pageDirection'>>;
  page?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType, RequireFields<EntityPageArgs, 'slug'>>;
  pages?: Resolver<ResolversTypes['PageConnection'], ParentType, ContextType, RequireFields<EntityPagesArgs, 'pageDirection'>>;
  permissions?: Resolver<Array<ResolversTypes['PermissionGrant']>, ParentType, ContextType>;
  schemaDefinition?: Resolver<ResolversTypes['SchemaDefinition'], ParentType, ContextType>;
  schemaProperties?: Resolver<Array<ResolversTypes['AnySchemaProperty']>, ParentType, ContextType>;
  schemaRanks?: Resolver<Array<ResolversTypes['HierarchicalSchemaRank']>, ParentType, ContextType>;
  schemaVersion?: Resolver<ResolversTypes['SchemaVersion'], ParentType, ContextType>;
  search?: Resolver<ResolversTypes['SearchScope'], ParentType, ContextType, RequireFields<EntitySearchArgs, 'visibility'>>;
  subtitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<ResolversTypes['ImageAttachment'], ParentType, ContextType>;
  thumbnailMetadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type EntityBreadcrumbResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntityBreadcrumb'] = ResolversParentTypes['EntityBreadcrumb']> = {
  crumb?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  depth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['EntityKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntityDescendantResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntityDescendant'] = ResolversParentTypes['EntityDescendant']> = {
  descendant?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  relativeDepth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  scope?: Resolver<ResolversTypes['EntityScope'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntityDescendantConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntityDescendantConnection'] = ResolversParentTypes['EntityDescendantConnection']> = {
  edges?: Resolver<Array<ResolversTypes['EntityDescendantEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['EntityDescendant']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntityDescendantEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntityDescendantEdge'] = ResolversParentTypes['EntityDescendantEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['EntityDescendant'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntityLinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntityLink'] = ResolversParentTypes['EntityLink']> = {
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  operator?: Resolver<ResolversTypes['EntityLinkOperator'], ParentType, ContextType>;
  scope?: Resolver<ResolversTypes['EntityLinkScope'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  source?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  sourceCollection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType>;
  sourceCommunity?: Resolver<Maybe<ResolversTypes['Community']>, ParentType, ContextType>;
  sourceItem?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType>;
  target?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  targetCollection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType>;
  targetCommunity?: Resolver<Maybe<ResolversTypes['Community']>, ParentType, ContextType>;
  targetItem?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntityLinkConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntityLinkConnection'] = ResolversParentTypes['EntityLinkConnection']> = {
  edges?: Resolver<Array<ResolversTypes['EntityLinkEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['EntityLink']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntityLinkEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntityLinkEdge'] = ResolversParentTypes['EntityLinkEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['EntityLink'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntityPermissionGridResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntityPermissionGrid'] = ResolversParentTypes['EntityPermissionGrid']> = {
  allowedActions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  assets?: Resolver<ResolversTypes['AssetPermissionGrid'], ParentType, ContextType>;
  create?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  delete?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  manageAccess?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  permissions?: Resolver<Array<ResolversTypes['PermissionGrant']>, ParentType, ContextType>;
  read?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  update?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntityPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntityProperty'] = ResolversParentTypes['EntityProperty']> = {
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  availableEntities?: Resolver<Array<ResolversTypes['EntitySelectOption']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entity?: Resolver<Maybe<ResolversTypes['AnyEntity']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  function?: Resolver<ResolversTypes['SchemaPropertyFunction'], ParentType, ContextType>;
  isWide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntitySelectOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntitySelectOption'] = ResolversParentTypes['EntitySelectOption']> = {
  breadcrumbs?: Resolver<Array<ResolversTypes['EntityBreadcrumb']>, ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['EntityKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  schemaVersion?: Resolver<ResolversTypes['SchemaVersion'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExposesEffectiveAccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExposesEffectiveAccess'] = ResolversParentTypes['ExposesEffectiveAccess']> = {
  __resolveType: TypeResolveFn<'Role', ParentType, ContextType>;
  effectiveAccess?: Resolver<ResolversTypes['EffectiveAccess'], ParentType, ContextType>;
};

export type ExposesPermissionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExposesPermissions'] = ResolversParentTypes['ExposesPermissions']> = {
  __resolveType: TypeResolveFn<'AccessControlList' | 'AssetPermissionGrid' | 'ContextualPermission' | 'EffectiveAccess' | 'EntityPermissionGrid' | 'GlobalAccessControlList' | 'User', ParentType, ContextType>;
  allowedActions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  permissions?: Resolver<Array<ResolversTypes['PermissionGrant']>, ParentType, ContextType>;
};

export type FloatPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['FloatProperty'] = ResolversParentTypes['FloatProperty']> = {
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  defaultFloat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  floatValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  function?: Resolver<ResolversTypes['SchemaPropertyFunction'], ParentType, ContextType>;
  isWide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  searchOperators?: Resolver<Array<ResolversTypes['SearchOperator']>, ParentType, ContextType>;
  searchPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FullTextResolvers<ContextType = any, ParentType extends ResolversParentTypes['FullText'] = ResolversParentTypes['FullText']> = {
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  kind?: Resolver<Maybe<ResolversTypes['FullTextKind']>, ParentType, ContextType>;
  lang?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FullTextPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['FullTextProperty'] = ResolversParentTypes['FullTextProperty']> = {
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fullText?: Resolver<Maybe<ResolversTypes['FullText']>, ParentType, ContextType>;
  function?: Resolver<ResolversTypes['SchemaPropertyFunction'], ParentType, ContextType>;
  isWide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  searchOperators?: Resolver<Array<ResolversTypes['SearchOperator']>, ParentType, ContextType>;
  searchPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GlobalAccessControlListResolvers<ContextType = any, ParentType extends ResolversParentTypes['GlobalAccessControlList'] = ResolversParentTypes['GlobalAccessControlList']> = {
  allowedActions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  permissions?: Resolver<Array<ResolversTypes['PermissionGrant']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GlobalConfigurationResolvers<ContextType = any, ParentType extends ResolversParentTypes['GlobalConfiguration'] = ResolversParentTypes['GlobalConfiguration']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  institution?: Resolver<ResolversTypes['InstitutionSettings'], ParentType, ContextType>;
  logo?: Resolver<ResolversTypes['SiteLogoAttachment'], ParentType, ContextType>;
  logoMetadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  site?: Resolver<ResolversTypes['SiteSettings'], ParentType, ContextType>;
  theme?: Resolver<ResolversTypes['ThemeSettings'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GrantAccessPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['GrantAccessPayload'] = ResolversParentTypes['GrantAccessPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entity?: Resolver<Maybe<ResolversTypes['AnyEntity']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  granted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GroupPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['GroupProperty'] = ResolversParentTypes['GroupProperty']> = {
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  legend?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  properties?: Resolver<Array<ResolversTypes['AnyScalarProperty']>, ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HasAttachmentStorageResolvers<ContextType = any, ParentType extends ResolversParentTypes['HasAttachmentStorage'] = ResolversParentTypes['HasAttachmentStorage']> = {
  __resolveType: TypeResolveFn<'ImageAttachment' | 'ImageOriginal' | 'SiteLogoAttachment', ParentType, ContextType>;
  storage?: Resolver<Maybe<ResolversTypes['AttachmentStorage']>, ParentType, ContextType>;
};

export type HasAvailableEntitiesResolvers<ContextType = any, ParentType extends ResolversParentTypes['HasAvailableEntities'] = ResolversParentTypes['HasAvailableEntities']> = {
  __resolveType: TypeResolveFn<'EntitiesProperty' | 'EntityProperty', ParentType, ContextType>;
  availableEntities?: Resolver<Array<ResolversTypes['EntitySelectOption']>, ParentType, ContextType>;
};

export type HasDoiResolvers<ContextType = any, ParentType extends ResolversParentTypes['HasDOI'] = ResolversParentTypes['HasDOI']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Item', ParentType, ContextType>;
  doi?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type HasEntityBreadcrumbsResolvers<ContextType = any, ParentType extends ResolversParentTypes['HasEntityBreadcrumbs'] = ResolversParentTypes['HasEntityBreadcrumbs']> = {
  __resolveType: TypeResolveFn<'Collection' | 'EntitySelectOption' | 'Item', ParentType, ContextType>;
  breadcrumbs?: Resolver<Array<ResolversTypes['EntityBreadcrumb']>, ParentType, ContextType>;
};

export type HasIssnResolvers<ContextType = any, ParentType extends ResolversParentTypes['HasISSN'] = ResolversParentTypes['HasISSN']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Item', ParentType, ContextType>;
  issn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type HasSchemaPropertiesResolvers<ContextType = any, ParentType extends ResolversParentTypes['HasSchemaProperties'] = ResolversParentTypes['HasSchemaProperties']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Community' | 'Item' | 'SchemaVersion', ParentType, ContextType>;
  schemaProperties?: Resolver<Array<ResolversTypes['AnySchemaProperty']>, ParentType, ContextType>;
};

export type HierarchicalSchemaRankResolvers<ContextType = any, ParentType extends ResolversParentTypes['HierarchicalSchemaRank'] = ResolversParentTypes['HierarchicalSchemaRank']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  distinctVersionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaKind'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  namespace?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rank?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  schemaDefinition?: Resolver<ResolversTypes['SchemaDefinition'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  versionRanks?: Resolver<Array<ResolversTypes['HierarchicalSchemaVersionRank']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HierarchicalSchemaVersionRankResolvers<ContextType = any, ParentType extends ResolversParentTypes['HierarchicalSchemaVersionRank'] = ResolversParentTypes['HierarchicalSchemaVersionRank']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaKind'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  namespace?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rank?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  schemaDefinition?: Resolver<ResolversTypes['SchemaDefinition'], ParentType, ContextType>;
  schemaVersion?: Resolver<ResolversTypes['SchemaVersion'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  versionNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface Iso8601DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ISO8601Date'], any> {
  name: 'ISO8601Date';
}

export interface Iso8601DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ISO8601DateTime'], any> {
  name: 'ISO8601DateTime';
}

export type ImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Image'] = ResolversParentTypes['Image']> = {
  __resolveType: TypeResolveFn<'ImageDerivative' | 'ImageOriginal', ParentType, ContextType>;
  alt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dimensions?: Resolver<Maybe<Array<ResolversTypes['Int']>>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  originalFilename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  purpose?: Resolver<ResolversTypes['ImagePurpose'], ParentType, ContextType>;
  storage?: Resolver<Maybe<ResolversTypes['AttachmentStorage']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type ImageAttachmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageAttachment'] = ResolversParentTypes['ImageAttachment']> = {
  alt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hero?: Resolver<ResolversTypes['ImageSize'], ParentType, ContextType>;
  large?: Resolver<ResolversTypes['ImageSize'], ParentType, ContextType>;
  medium?: Resolver<ResolversTypes['ImageSize'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  original?: Resolver<ResolversTypes['ImageOriginal'], ParentType, ContextType>;
  originalFilename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  purpose?: Resolver<ResolversTypes['ImagePurpose'], ParentType, ContextType>;
  small?: Resolver<ResolversTypes['ImageSize'], ParentType, ContextType>;
  storage?: Resolver<Maybe<ResolversTypes['AttachmentStorage']>, ParentType, ContextType>;
  thumb?: Resolver<ResolversTypes['ImageSize'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageDerivativeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageDerivative'] = ResolversParentTypes['ImageDerivative']> = {
  alt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dimensions?: Resolver<Maybe<Array<ResolversTypes['Int']>>, ParentType, ContextType>;
  format?: Resolver<ResolversTypes['ImageDerivativeFormat'], ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  maxHeight?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  maxWidth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  originalFilename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  purpose?: Resolver<ResolversTypes['ImagePurpose'], ParentType, ContextType>;
  size?: Resolver<ResolversTypes['ImageDerivativeSize'], ParentType, ContextType>;
  storage?: Resolver<Maybe<ResolversTypes['AttachmentStorage']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageIdentificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageIdentification'] = ResolversParentTypes['ImageIdentification']> = {
  __resolveType: TypeResolveFn<'ImageAttachment' | 'ImageDerivative' | 'ImageOriginal' | 'ImageSize' | 'SiteLogoAttachment', ParentType, ContextType>;
  originalFilename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  purpose?: Resolver<ResolversTypes['ImagePurpose'], ParentType, ContextType>;
};

export type ImageMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageMetadata'] = ResolversParentTypes['ImageMetadata']> = {
  alt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageOriginalResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageOriginal'] = ResolversParentTypes['ImageOriginal']> = {
  alt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dimensions?: Resolver<Maybe<Array<ResolversTypes['Int']>>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  originalFilename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  purpose?: Resolver<ResolversTypes['ImagePurpose'], ParentType, ContextType>;
  storage?: Resolver<Maybe<ResolversTypes['AttachmentStorage']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageSizeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageSize'] = ResolversParentTypes['ImageSize']> = {
  alt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  originalFilename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  png?: Resolver<ResolversTypes['ImageDerivative'], ParentType, ContextType>;
  purpose?: Resolver<ResolversTypes['ImagePurpose'], ParentType, ContextType>;
  size?: Resolver<ResolversTypes['ImageDerivativeSize'], ParentType, ContextType>;
  webp?: Resolver<ResolversTypes['ImageDerivative'], ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InstitutionSettingsResolvers<ContextType = any, ParentType extends ResolversParentTypes['InstitutionSettings'] = ResolversParentTypes['InstitutionSettings']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IntegerPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['IntegerProperty'] = ResolversParentTypes['IntegerProperty']> = {
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  defaultInteger?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  function?: Resolver<ResolversTypes['SchemaPropertyFunction'], ParentType, ContextType>;
  integerValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isWide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  searchOperators?: Resolver<Array<ResolversTypes['SearchOperator']>, ParentType, ContextType>;
  searchPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['Item'] = ResolversParentTypes['Item']> = {
  accessControlList?: Resolver<Maybe<ResolversTypes['AccessControlList']>, ParentType, ContextType>;
  accessGrants?: Resolver<ResolversTypes['AnyCollectionAccessGrantConnection'], ParentType, ContextType, RequireFields<ItemAccessGrantsArgs, 'subject' | 'order' | 'pageDirection'>>;
  allAccessGrants?: Resolver<ResolversTypes['AnyAccessGrantConnection'], ParentType, ContextType, RequireFields<ItemAllAccessGrantsArgs, 'subject' | 'order' | 'pageDirection'>>;
  allowedActions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  ancestorByName?: Resolver<Maybe<ResolversTypes['AnyEntity']>, ParentType, ContextType, RequireFields<ItemAncestorByNameArgs, 'name'>>;
  ancestorOfType?: Resolver<Maybe<ResolversTypes['AnyEntity']>, ParentType, ContextType, RequireFields<ItemAncestorOfTypeArgs, 'schema'>>;
  announcement?: Resolver<Maybe<ResolversTypes['Announcement']>, ParentType, ContextType, RequireFields<ItemAnnouncementArgs, 'slug'>>;
  announcements?: Resolver<ResolversTypes['AnnouncementConnection'], ParentType, ContextType, RequireFields<ItemAnnouncementsArgs, 'order' | 'pageDirection'>>;
  applicableRoles?: Resolver<Array<ResolversTypes['Role']>, ParentType, ContextType>;
  assets?: Resolver<ResolversTypes['AnyAssetConnection'], ParentType, ContextType, RequireFields<ItemAssetsArgs, 'order' | 'kind' | 'pageDirection'>>;
  assignableRoles?: Resolver<Array<ResolversTypes['Role']>, ParentType, ContextType>;
  assignedUsers?: Resolver<ResolversTypes['ContextualPermissionConnection'], ParentType, ContextType, RequireFields<ItemAssignedUsersArgs, 'order' | 'pageDirection'>>;
  availableEntitiesFor?: Resolver<Array<ResolversTypes['EntitySelectOption']>, ParentType, ContextType, RequireFields<ItemAvailableEntitiesForArgs, 'fullPath'>>;
  breadcrumbs?: Resolver<Array<ResolversTypes['EntityBreadcrumb']>, ParentType, ContextType>;
  children?: Resolver<ResolversTypes['ItemConnection'], ParentType, ContextType, RequireFields<ItemChildrenArgs, never>>;
  collection?: Resolver<ResolversTypes['Collection'], ParentType, ContextType>;
  community?: Resolver<ResolversTypes['Community'], ParentType, ContextType>;
  contributions?: Resolver<ResolversTypes['ItemContributionConnection'], ParentType, ContextType, RequireFields<ItemContributionsArgs, 'order' | 'pageDirection'>>;
  contributors?: Resolver<ResolversTypes['AnyContributorConnection'], ParentType, ContextType, RequireFields<ItemContributorsArgs, 'order' | 'kind' | 'pageDirection'>>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  currentlyHidden?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  currentlyVisible?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  descendants?: Resolver<ResolversTypes['EntityDescendantConnection'], ParentType, ContextType, RequireFields<ItemDescendantsArgs, 'scope' | 'order' | 'pageDirection'>>;
  doi?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstItem?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType, RequireFields<ItemFirstItemArgs, 'order' | 'nodeFilter'>>;
  hasItems?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  heroImage?: Resolver<ResolversTypes['ImageAttachment'], ParentType, ContextType>;
  heroImageMetadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  hidden?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hiddenAsOf?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<ItemHiddenAsOfArgs, never>>;
  hiddenAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  hierarchicalDepth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  inCommunityOrdering?: Resolver<Maybe<ResolversTypes['OrderingEntry']>, ParentType, ContextType, RequireFields<ItemInCommunityOrderingArgs, 'identifier'>>;
  initialOrdering?: Resolver<Maybe<ResolversTypes['Ordering']>, ParentType, ContextType>;
  issn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  items?: Resolver<ResolversTypes['ItemConnection'], ParentType, ContextType, RequireFields<ItemItemsArgs, 'order' | 'nodeFilter' | 'pageDirection'>>;
  leaf?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  linkTargetCandidates?: Resolver<ResolversTypes['LinkTargetCandidateConnection'], ParentType, ContextType, RequireFields<ItemLinkTargetCandidatesArgs, 'kind' | 'title' | 'pageDirection'>>;
  links?: Resolver<ResolversTypes['EntityLinkConnection'], ParentType, ContextType, RequireFields<ItemLinksArgs, 'order' | 'pageDirection'>>;
  namedAncestors?: Resolver<Array<ResolversTypes['NamedAncestor']>, ParentType, ContextType>;
  ordering?: Resolver<Maybe<ResolversTypes['Ordering']>, ParentType, ContextType, RequireFields<ItemOrderingArgs, 'identifier'>>;
  orderingForSchema?: Resolver<Maybe<ResolversTypes['Ordering']>, ParentType, ContextType, RequireFields<ItemOrderingForSchemaArgs, 'slug'>>;
  orderings?: Resolver<ResolversTypes['OrderingConnection'], ParentType, ContextType, RequireFields<ItemOrderingsArgs, 'order' | 'availability' | 'visibility' | 'pageDirection'>>;
  page?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType, RequireFields<ItemPageArgs, 'slug'>>;
  pages?: Resolver<ResolversTypes['PageConnection'], ParentType, ContextType, RequireFields<ItemPagesArgs, 'pageDirection'>>;
  parent?: Resolver<Maybe<ResolversTypes['ItemParent']>, ParentType, ContextType>;
  permissions?: Resolver<Array<ResolversTypes['PermissionGrant']>, ParentType, ContextType>;
  published?: Resolver<ResolversTypes['VariablePrecisionDate'], ParentType, ContextType>;
  relatedItems?: Resolver<ResolversTypes['ItemConnection'], ParentType, ContextType, RequireFields<ItemRelatedItemsArgs, 'order' | 'pageDirection'>>;
  root?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  schemaDefinition?: Resolver<ResolversTypes['SchemaDefinition'], ParentType, ContextType>;
  schemaInstanceContext?: Resolver<ResolversTypes['SchemaInstanceContext'], ParentType, ContextType>;
  schemaProperties?: Resolver<Array<ResolversTypes['AnySchemaProperty']>, ParentType, ContextType>;
  schemaProperty?: Resolver<Maybe<ResolversTypes['AnySchemaProperty']>, ParentType, ContextType, RequireFields<ItemSchemaPropertyArgs, 'fullPath'>>;
  schemaRanks?: Resolver<Array<ResolversTypes['HierarchicalSchemaRank']>, ParentType, ContextType>;
  schemaVersion?: Resolver<ResolversTypes['SchemaVersion'], ParentType, ContextType>;
  search?: Resolver<ResolversTypes['SearchScope'], ParentType, ContextType, RequireFields<ItemSearchArgs, 'visibility'>>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  subtitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<ResolversTypes['ImageAttachment'], ParentType, ContextType>;
  thumbnailMetadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  userAccessGrants?: Resolver<ResolversTypes['UserCollectionAccessGrantConnection'], ParentType, ContextType, RequireFields<ItemUserAccessGrantsArgs, 'order' | 'pageDirection'>>;
  userGroupAccessGrants?: Resolver<ResolversTypes['UserGroupCollectionAccessGrantConnection'], ParentType, ContextType, RequireFields<ItemUserGroupAccessGrantsArgs, 'order' | 'pageDirection'>>;
  visibility?: Resolver<ResolversTypes['EntityVisibility'], ParentType, ContextType>;
  visible?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  visibleAfterAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  visibleAsOf?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<ItemVisibleAsOfArgs, never>>;
  visibleUntilAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemConnection'] = ResolversParentTypes['ItemConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ItemEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Item']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemContributionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemContribution'] = ResolversParentTypes['ItemContribution']> = {
  affiliation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contributor?: Resolver<ResolversTypes['AnyContributor'], ParentType, ContextType>;
  contributorKind?: Resolver<ResolversTypes['ContributorKind'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  item?: Resolver<ResolversTypes['Item'], ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<ResolversTypes['ContributionMetadata'], ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemContributionConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemContributionConnection'] = ResolversParentTypes['ItemContributionConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ItemContributionEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['ItemContribution']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemContributionEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemContributionEdge'] = ResolversParentTypes['ItemContributionEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ItemContribution'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemEdge'] = ResolversParentTypes['ItemEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Item'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemParentResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemParent'] = ResolversParentTypes['ItemParent']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Item', ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type LinkEntityPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['LinkEntityPayload'] = ResolversParentTypes['LinkEntityPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  link?: Resolver<Maybe<ResolversTypes['EntityLink']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LinkTargetCandidateResolvers<ContextType = any, ParentType extends ResolversParentTypes['LinkTargetCandidate'] = ResolversParentTypes['LinkTargetCandidate']> = {
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  depth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['LinkTargetCandidateKind'], ParentType, ContextType>;
  target?: Resolver<ResolversTypes['AnyLinkTarget'], ParentType, ContextType>;
  targetId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LinkTargetCandidateConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['LinkTargetCandidateConnection'] = ResolversParentTypes['LinkTargetCandidateConnection']> = {
  edges?: Resolver<Array<ResolversTypes['LinkTargetCandidateEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['LinkTargetCandidate']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LinkTargetCandidateEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LinkTargetCandidateEdge'] = ResolversParentTypes['LinkTargetCandidateEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['LinkTargetCandidate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MarkdownPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['MarkdownProperty'] = ResolversParentTypes['MarkdownProperty']> = {
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  function?: Resolver<ResolversTypes['SchemaPropertyFunction'], ParentType, ContextType>;
  isWide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  searchOperators?: Resolver<Array<ResolversTypes['SearchOperator']>, ParentType, ContextType>;
  searchPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MultiselectPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['MultiselectProperty'] = ResolversParentTypes['MultiselectProperty']> = {
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  defaultSelections?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  function?: Resolver<ResolversTypes['SchemaPropertyFunction'], ParentType, ContextType>;
  isWide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  options?: Resolver<Array<ResolversTypes['SelectOption']>, ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  searchOperators?: Resolver<Array<ResolversTypes['SearchOperator']>, ParentType, ContextType>;
  searchPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  selections?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  alterSchemaVersion?: Resolver<Maybe<ResolversTypes['AlterSchemaVersionPayload']>, ParentType, ContextType, RequireFields<MutationAlterSchemaVersionArgs, 'input'>>;
  applySchemaProperties?: Resolver<Maybe<ResolversTypes['ApplySchemaPropertiesPayload']>, ParentType, ContextType, RequireFields<MutationApplySchemaPropertiesArgs, 'input'>>;
  clearInitialOrdering?: Resolver<Maybe<ResolversTypes['ClearInitialOrderingPayload']>, ParentType, ContextType, RequireFields<MutationClearInitialOrderingArgs, 'input'>>;
  createAnnouncement?: Resolver<Maybe<ResolversTypes['CreateAnnouncementPayload']>, ParentType, ContextType, RequireFields<MutationCreateAnnouncementArgs, 'input'>>;
  createAsset?: Resolver<Maybe<ResolversTypes['CreateAssetPayload']>, ParentType, ContextType, RequireFields<MutationCreateAssetArgs, 'input'>>;
  createCollection?: Resolver<Maybe<ResolversTypes['CreateCollectionPayload']>, ParentType, ContextType, RequireFields<MutationCreateCollectionArgs, 'input'>>;
  createCommunity?: Resolver<Maybe<ResolversTypes['CreateCommunityPayload']>, ParentType, ContextType, RequireFields<MutationCreateCommunityArgs, 'input'>>;
  createItem?: Resolver<Maybe<ResolversTypes['CreateItemPayload']>, ParentType, ContextType, RequireFields<MutationCreateItemArgs, 'input'>>;
  createOrdering?: Resolver<Maybe<ResolversTypes['CreateOrderingPayload']>, ParentType, ContextType, RequireFields<MutationCreateOrderingArgs, 'input'>>;
  createOrganizationContributor?: Resolver<Maybe<ResolversTypes['CreateOrganizationContributorPayload']>, ParentType, ContextType, RequireFields<MutationCreateOrganizationContributorArgs, 'input'>>;
  createPage?: Resolver<Maybe<ResolversTypes['CreatePagePayload']>, ParentType, ContextType, RequireFields<MutationCreatePageArgs, 'input'>>;
  createPersonContributor?: Resolver<Maybe<ResolversTypes['CreatePersonContributorPayload']>, ParentType, ContextType, RequireFields<MutationCreatePersonContributorArgs, 'input'>>;
  createRole?: Resolver<Maybe<ResolversTypes['CreateRolePayload']>, ParentType, ContextType, RequireFields<MutationCreateRoleArgs, 'input'>>;
  destroyAnnouncement?: Resolver<Maybe<ResolversTypes['DestroyAnnouncementPayload']>, ParentType, ContextType, RequireFields<MutationDestroyAnnouncementArgs, 'input'>>;
  destroyAsset?: Resolver<Maybe<ResolversTypes['DestroyAssetPayload']>, ParentType, ContextType, RequireFields<MutationDestroyAssetArgs, 'input'>>;
  destroyCollection?: Resolver<Maybe<ResolversTypes['DestroyCollectionPayload']>, ParentType, ContextType, RequireFields<MutationDestroyCollectionArgs, 'input'>>;
  destroyCommunity?: Resolver<Maybe<ResolversTypes['DestroyCommunityPayload']>, ParentType, ContextType, RequireFields<MutationDestroyCommunityArgs, 'input'>>;
  destroyContribution?: Resolver<Maybe<ResolversTypes['DestroyContributionPayload']>, ParentType, ContextType, RequireFields<MutationDestroyContributionArgs, 'input'>>;
  destroyContributor?: Resolver<Maybe<ResolversTypes['DestroyContributorPayload']>, ParentType, ContextType, RequireFields<MutationDestroyContributorArgs, 'input'>>;
  destroyEntityLink?: Resolver<Maybe<ResolversTypes['DestroyEntityLinkPayload']>, ParentType, ContextType, RequireFields<MutationDestroyEntityLinkArgs, 'input'>>;
  destroyItem?: Resolver<Maybe<ResolversTypes['DestroyItemPayload']>, ParentType, ContextType, RequireFields<MutationDestroyItemArgs, 'input'>>;
  destroyOrdering?: Resolver<Maybe<ResolversTypes['DestroyOrderingPayload']>, ParentType, ContextType, RequireFields<MutationDestroyOrderingArgs, 'input'>>;
  destroyPage?: Resolver<Maybe<ResolversTypes['DestroyPagePayload']>, ParentType, ContextType, RequireFields<MutationDestroyPageArgs, 'input'>>;
  grantAccess?: Resolver<Maybe<ResolversTypes['GrantAccessPayload']>, ParentType, ContextType, RequireFields<MutationGrantAccessArgs, 'input'>>;
  linkEntity?: Resolver<Maybe<ResolversTypes['LinkEntityPayload']>, ParentType, ContextType, RequireFields<MutationLinkEntityArgs, 'input'>>;
  reparentEntity?: Resolver<Maybe<ResolversTypes['ReparentEntityPayload']>, ParentType, ContextType, RequireFields<MutationReparentEntityArgs, 'input'>>;
  resetOrdering?: Resolver<Maybe<ResolversTypes['ResetOrderingPayload']>, ParentType, ContextType, RequireFields<MutationResetOrderingArgs, 'input'>>;
  revokeAccess?: Resolver<Maybe<ResolversTypes['RevokeAccessPayload']>, ParentType, ContextType, RequireFields<MutationRevokeAccessArgs, 'input'>>;
  selectInitialOrdering?: Resolver<Maybe<ResolversTypes['SelectInitialOrderingPayload']>, ParentType, ContextType, RequireFields<MutationSelectInitialOrderingArgs, 'input'>>;
  updateAnnouncement?: Resolver<Maybe<ResolversTypes['UpdateAnnouncementPayload']>, ParentType, ContextType, RequireFields<MutationUpdateAnnouncementArgs, 'input'>>;
  updateAsset?: Resolver<Maybe<ResolversTypes['UpdateAssetPayload']>, ParentType, ContextType, RequireFields<MutationUpdateAssetArgs, 'input'>>;
  updateAssetAttachment?: Resolver<Maybe<ResolversTypes['UpdateAssetAttachmentPayload']>, ParentType, ContextType, RequireFields<MutationUpdateAssetAttachmentArgs, 'input'>>;
  updateCollection?: Resolver<Maybe<ResolversTypes['UpdateCollectionPayload']>, ParentType, ContextType, RequireFields<MutationUpdateCollectionArgs, 'input'>>;
  updateCommunity?: Resolver<Maybe<ResolversTypes['UpdateCommunityPayload']>, ParentType, ContextType, RequireFields<MutationUpdateCommunityArgs, 'input'>>;
  updateContribution?: Resolver<Maybe<ResolversTypes['UpdateContributionPayload']>, ParentType, ContextType, RequireFields<MutationUpdateContributionArgs, 'input'>>;
  updateGlobalConfiguration?: Resolver<Maybe<ResolversTypes['UpdateGlobalConfigurationPayload']>, ParentType, ContextType, RequireFields<MutationUpdateGlobalConfigurationArgs, 'input'>>;
  updateItem?: Resolver<Maybe<ResolversTypes['UpdateItemPayload']>, ParentType, ContextType, RequireFields<MutationUpdateItemArgs, 'input'>>;
  updateOrdering?: Resolver<Maybe<ResolversTypes['UpdateOrderingPayload']>, ParentType, ContextType, RequireFields<MutationUpdateOrderingArgs, 'input'>>;
  updateOrganizationContributor?: Resolver<Maybe<ResolversTypes['UpdateOrganizationContributorPayload']>, ParentType, ContextType, RequireFields<MutationUpdateOrganizationContributorArgs, 'input'>>;
  updatePage?: Resolver<Maybe<ResolversTypes['UpdatePagePayload']>, ParentType, ContextType, RequireFields<MutationUpdatePageArgs, 'input'>>;
  updatePersonContributor?: Resolver<Maybe<ResolversTypes['UpdatePersonContributorPayload']>, ParentType, ContextType, RequireFields<MutationUpdatePersonContributorArgs, 'input'>>;
  updateRole?: Resolver<Maybe<ResolversTypes['UpdateRolePayload']>, ParentType, ContextType, RequireFields<MutationUpdateRoleArgs, 'input'>>;
  updateUser?: Resolver<Maybe<ResolversTypes['UpdateUserPayload']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'input'>>;
  updateViewerSettings?: Resolver<Maybe<ResolversTypes['UpdateViewerSettingsPayload']>, ParentType, ContextType, RequireFields<MutationUpdateViewerSettingsArgs, 'input'>>;
  upsertContribution?: Resolver<Maybe<ResolversTypes['UpsertContributionPayload']>, ParentType, ContextType, RequireFields<MutationUpsertContributionArgs, 'input'>>;
};

export type MutationAttributeErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['MutationAttributeError'] = ResolversParentTypes['MutationAttributeError']> = {
  messages?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationGlobalErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['MutationGlobalError'] = ResolversParentTypes['MutationGlobalError']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NamedAncestorResolvers<ContextType = any, ParentType extends ResolversParentTypes['NamedAncestor'] = ResolversParentTypes['NamedAncestor']> = {
  ancestor?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  ancestorDepth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  originDepth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  relativeDepth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'Announcement' | 'AssetAudio' | 'AssetDocument' | 'AssetImage' | 'AssetPDF' | 'AssetUnknown' | 'AssetVideo' | 'Collection' | 'CollectionContribution' | 'Community' | 'ContextualPermission' | 'EntityBreadcrumb' | 'EntityLink' | 'GlobalConfiguration' | 'HierarchicalSchemaRank' | 'HierarchicalSchemaVersionRank' | 'Item' | 'ItemContribution' | 'LinkTargetCandidate' | 'Ordering' | 'OrderingEntry' | 'OrganizationContributor' | 'Page' | 'PersonContributor' | 'Role' | 'SchemaDefinition' | 'SchemaVersion' | 'User' | 'UserCollectionAccessGrant' | 'UserCommunityAccessGrant' | 'UserGroup' | 'UserGroupCollectionAccessGrant' | 'UserGroupCommunityAccessGrant' | 'UserGroupItemAccessGrant' | 'UserItemAccessGrant', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type OptionablePropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['OptionableProperty'] = ResolversParentTypes['OptionableProperty']> = {
  __resolveType: TypeResolveFn<'MultiselectProperty' | 'SelectProperty', ParentType, ContextType>;
  options?: Resolver<Array<ResolversTypes['SelectOption']>, ParentType, ContextType>;
};

export type OrderDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderDefinition'] = ResolversParentTypes['OrderDefinition']> = {
  direction?: Resolver<ResolversTypes['Direction'], ParentType, ContextType>;
  nulls?: Resolver<ResolversTypes['NullOrderPriority'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderingResolvers<ContextType = any, ParentType extends ResolversParentTypes['Ordering'] = ResolversParentTypes['Ordering']> = {
  children?: Resolver<ResolversTypes['OrderingEntryConnection'], ParentType, ContextType, RequireFields<OrderingChildrenArgs, 'order' | 'pageDirection'>>;
  constant?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  disabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  disabledAt?: Resolver<Maybe<ResolversTypes['ISO8601Date']>, ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  filter?: Resolver<ResolversTypes['OrderingFilterDefinition'], ParentType, ContextType>;
  footer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  header?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hidden?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  inheritedFromSchema?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  initial?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  order?: Resolver<Array<ResolversTypes['OrderDefinition']>, ParentType, ContextType>;
  pristine?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  render?: Resolver<ResolversTypes['OrderingRenderDefinition'], ParentType, ContextType>;
  select?: Resolver<ResolversTypes['OrderingSelectDefinition'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  tree?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderingConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderingConnection'] = ResolversParentTypes['OrderingConnection']> = {
  edges?: Resolver<Array<ResolversTypes['OrderingEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Ordering']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderingEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderingEdge'] = ResolversParentTypes['OrderingEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Ordering'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderingEntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderingEntry'] = ResolversParentTypes['OrderingEntry']> = {
  ancestors?: Resolver<Array<ResolversTypes['OrderingEntry']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  entry?: Resolver<ResolversTypes['AnyOrderingEntry'], ParentType, ContextType>;
  entrySlug?: Resolver<Maybe<ResolversTypes['Slug']>, ParentType, ContextType>;
  entryTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  nextSibling?: Resolver<Maybe<ResolversTypes['OrderingEntry']>, ParentType, ContextType>;
  ordering?: Resolver<ResolversTypes['Ordering'], ParentType, ContextType>;
  prevSibling?: Resolver<Maybe<ResolversTypes['OrderingEntry']>, ParentType, ContextType>;
  relativeDepth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  treeDepth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderingEntryConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderingEntryConnection'] = ResolversParentTypes['OrderingEntryConnection']> = {
  edges?: Resolver<Array<ResolversTypes['OrderingEntryEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['OrderingEntry']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderingEntryEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderingEntryEdge'] = ResolversParentTypes['OrderingEntryEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['OrderingEntry'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderingFilterDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderingFilterDefinition'] = ResolversParentTypes['OrderingFilterDefinition']> = {
  schemas?: Resolver<Array<ResolversTypes['OrderingSchemaFilter']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderingPathResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderingPath'] = ResolversParentTypes['OrderingPath']> = {
  __resolveType: TypeResolveFn<'SchemaOrderingPath' | 'StaticOrderingPath', ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  grouping?: Resolver<ResolversTypes['OrderingPathGrouping'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labelPrefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
};

export type OrderingRenderDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderingRenderDefinition'] = ResolversParentTypes['OrderingRenderDefinition']> = {
  mode?: Resolver<ResolversTypes['OrderingRenderMode'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderingSchemaFilterResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderingSchemaFilter'] = ResolversParentTypes['OrderingSchemaFilter']> = {
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  namespace?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['VersionRequirement']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderingSelectDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderingSelectDefinition'] = ResolversParentTypes['OrderingSelectDefinition']> = {
  direct?: Resolver<ResolversTypes['OrderingDirectSelection'], ParentType, ContextType>;
  links?: Resolver<ResolversTypes['OrderingSelectLinkDefinition'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderingSelectLinkDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderingSelectLinkDefinition'] = ResolversParentTypes['OrderingSelectLinkDefinition']> = {
  contains?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  references?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationContributorResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationContributor'] = ResolversParentTypes['OrganizationContributor']> = {
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  collectionContributionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  collectionContributions?: Resolver<ResolversTypes['CollectionContributionConnection'], ParentType, ContextType, RequireFields<OrganizationContributorCollectionContributionsArgs, 'order' | 'pageDirection'>>;
  contributionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['ImageAttachment'], ParentType, ContextType>;
  imageMetadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  itemContributionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  itemContributions?: Resolver<ResolversTypes['ItemContributionConnection'], ParentType, ContextType, RequireFields<OrganizationContributorItemContributionsArgs, 'order' | 'pageDirection'>>;
  kind?: Resolver<ResolversTypes['ContributorKind'], ParentType, ContextType>;
  legalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  links?: Resolver<Array<ResolversTypes['ContributorLink']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orcid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  prefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Page'] = ResolversParentTypes['Page']> = {
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  heroImage?: Resolver<ResolversTypes['ImageAttachment'], ParentType, ContextType>;
  heroImageMetadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageConnection'] = ResolversParentTypes['PageConnection']> = {
  edges?: Resolver<Array<ResolversTypes['PageEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Page']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageEdge'] = ResolversParentTypes['PageEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Page'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pageCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  perPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalUnfilteredCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['Paginated'] = ResolversParentTypes['Paginated']> = {
  __resolveType: TypeResolveFn<'AnnouncementConnection' | 'AnyAccessGrantConnection' | 'AnyAssetConnection' | 'AnyCollectionAccessGrantConnection' | 'AnyCommunityAccessGrantConnection' | 'AnyContributorConnection' | 'AnyUserAccessGrantConnection' | 'AnyUserGroupAccessGrantConnection' | 'CollectionConnection' | 'CollectionContributionConnection' | 'CommunityConnection' | 'ContextualPermissionConnection' | 'EntityDescendantConnection' | 'EntityLinkConnection' | 'ItemConnection' | 'ItemContributionConnection' | 'LinkTargetCandidateConnection' | 'OrderingConnection' | 'OrderingEntryConnection' | 'PageConnection' | 'RoleConnection' | 'SchemaDefinitionConnection' | 'SchemaVersionConnection' | 'SearchResultConnection' | 'UserCollectionAccessGrantConnection' | 'UserCommunityAccessGrantConnection' | 'UserConnection' | 'UserGroupCollectionAccessGrantConnection' | 'UserGroupCommunityAccessGrantConnection' | 'UserGroupItemAccessGrantConnection' | 'UserItemAccessGrantConnection', ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type PermissionGrantResolvers<ContextType = any, ParentType extends ResolversParentTypes['PermissionGrant'] = ResolversParentTypes['PermissionGrant']> = {
  allowed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  scope?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PermissionGridResolvers<ContextType = any, ParentType extends ResolversParentTypes['PermissionGrid'] = ResolversParentTypes['PermissionGrid']> = {
  __resolveType: TypeResolveFn<'AssetPermissionGrid' | 'EntityPermissionGrid', ParentType, ContextType>;
  allowedActions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  permissions?: Resolver<Array<ResolversTypes['PermissionGrant']>, ParentType, ContextType>;
};

export type PersonContributorResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonContributor'] = ResolversParentTypes['PersonContributor']> = {
  affiliation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  collectionContributionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  collectionContributions?: Resolver<ResolversTypes['CollectionContributionConnection'], ParentType, ContextType, RequireFields<PersonContributorCollectionContributionsArgs, 'order' | 'pageDirection'>>;
  contributionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  familyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  givenName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['ImageAttachment'], ParentType, ContextType>;
  imageMetadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  itemContributionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  itemContributions?: Resolver<ResolversTypes['ItemContributionConnection'], ParentType, ContextType, RequireFields<PersonContributorItemContributionsArgs, 'order' | 'pageDirection'>>;
  kind?: Resolver<ResolversTypes['ContributorKind'], ParentType, ContextType>;
  links?: Resolver<Array<ResolversTypes['ContributorLink']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orcid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  prefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  accessGrants?: Resolver<ResolversTypes['AnyAccessGrantConnection'], ParentType, ContextType, RequireFields<QueryAccessGrantsArgs, 'entity' | 'subject' | 'order' | 'pageDirection'>>;
  asset?: Resolver<Maybe<ResolversTypes['AnyAsset']>, ParentType, ContextType, RequireFields<QueryAssetArgs, 'slug'>>;
  collection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType, RequireFields<QueryCollectionArgs, 'slug'>>;
  collectionContribution?: Resolver<Maybe<ResolversTypes['CollectionContribution']>, ParentType, ContextType, RequireFields<QueryCollectionContributionArgs, 'slug'>>;
  communities?: Resolver<ResolversTypes['CommunityConnection'], ParentType, ContextType, RequireFields<QueryCommunitiesArgs, 'order' | 'pageDirection'>>;
  community?: Resolver<Maybe<ResolversTypes['Community']>, ParentType, ContextType, RequireFields<QueryCommunityArgs, 'slug'>>;
  communityByTitle?: Resolver<Maybe<ResolversTypes['Community']>, ParentType, ContextType, RequireFields<QueryCommunityByTitleArgs, 'title'>>;
  contributor?: Resolver<Maybe<ResolversTypes['AnyContributor']>, ParentType, ContextType, RequireFields<QueryContributorArgs, 'slug'>>;
  contributorLookup?: Resolver<Maybe<ResolversTypes['AnyContributor']>, ParentType, ContextType, RequireFields<QueryContributorLookupArgs, 'by' | 'value' | 'order'>>;
  contributors?: Resolver<ResolversTypes['AnyContributorConnection'], ParentType, ContextType, RequireFields<QueryContributorsArgs, 'order' | 'kind' | 'pageDirection'>>;
  globalConfiguration?: Resolver<ResolversTypes['GlobalConfiguration'], ParentType, ContextType>;
  item?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType, RequireFields<QueryItemArgs, 'slug'>>;
  itemContribution?: Resolver<Maybe<ResolversTypes['ItemContribution']>, ParentType, ContextType, RequireFields<QueryItemContributionArgs, 'slug'>>;
  node?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType, RequireFields<QueryNodeArgs, 'id'>>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Node']>>, ParentType, ContextType, RequireFields<QueryNodesArgs, 'ids'>>;
  orderingPaths?: Resolver<Array<ResolversTypes['AnyOrderingPath']>, ParentType, ContextType, RequireFields<QueryOrderingPathsArgs, never>>;
  roles?: Resolver<ResolversTypes['RoleConnection'], ParentType, ContextType, RequireFields<QueryRolesArgs, 'order'>>;
  schemaDefinition?: Resolver<Maybe<ResolversTypes['SchemaDefinition']>, ParentType, ContextType, RequireFields<QuerySchemaDefinitionArgs, 'slug'>>;
  schemaDefinitions?: Resolver<ResolversTypes['SchemaDefinitionConnection'], ParentType, ContextType, RequireFields<QuerySchemaDefinitionsArgs, 'order' | 'pageDirection'>>;
  schemaVersion?: Resolver<Maybe<ResolversTypes['SchemaVersion']>, ParentType, ContextType, RequireFields<QuerySchemaVersionArgs, 'slug'>>;
  schemaVersionOptions?: Resolver<Array<ResolversTypes['SchemaVersionOption']>, ParentType, ContextType, RequireFields<QuerySchemaVersionOptionsArgs, 'kind'>>;
  schemaVersions?: Resolver<ResolversTypes['SchemaVersionConnection'], ParentType, ContextType, RequireFields<QuerySchemaVersionsArgs, 'order' | 'pageDirection'>>;
  search?: Resolver<ResolversTypes['SearchScope'], ParentType, ContextType, RequireFields<QuerySearchArgs, 'visibility'>>;
  systemInfo?: Resolver<ResolversTypes['SystemInfo'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'slug'>>;
  users?: Resolver<ResolversTypes['UserConnection'], ParentType, ContextType, RequireFields<QueryUsersArgs, 'order' | 'pageDirection'>>;
  viewer?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
};

export type ReferencesGlobalEntityDatesResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReferencesGlobalEntityDates'] = ResolversParentTypes['ReferencesGlobalEntityDates']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Item', ParentType, ContextType>;
  published?: Resolver<ResolversTypes['VariablePrecisionDate'], ParentType, ContextType>;
};

export type ReparentEntityPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReparentEntityPayload'] = ResolversParentTypes['ReparentEntityPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  child?: Resolver<Maybe<ResolversTypes['AnyChildEntity']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResetOrderingPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResetOrderingPayload'] = ResolversParentTypes['ResetOrderingPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ordering?: Resolver<Maybe<ResolversTypes['Ordering']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RevokeAccessPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['RevokeAccessPayload'] = ResolversParentTypes['RevokeAccessPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entity?: Resolver<Maybe<ResolversTypes['AnyEntity']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  revoked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Role'] = ResolversParentTypes['Role']> = {
  accessControlList?: Resolver<ResolversTypes['AccessControlList'], ParentType, ContextType>;
  allowedActions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  customPriority?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  effectiveAccess?: Resolver<ResolversTypes['EffectiveAccess'], ParentType, ContextType>;
  globalAccessControlList?: Resolver<ResolversTypes['GlobalAccessControlList'], ParentType, ContextType>;
  globalAllowedActions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identifier?: Resolver<Maybe<ResolversTypes['RoleSystemIdentifier']>, ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['RoleKind'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  permissions?: Resolver<Array<ResolversTypes['PermissionGrant']>, ParentType, ContextType>;
  primacy?: Resolver<ResolversTypes['RolePrimacy'], ParentType, ContextType>;
  priority?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoleConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['RoleConnection'] = ResolversParentTypes['RoleConnection']> = {
  edges?: Resolver<Array<ResolversTypes['RoleEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Role']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoleEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['RoleEdge'] = ResolversParentTypes['RoleEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ScalarPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScalarProperty'] = ResolversParentTypes['ScalarProperty']> = {
  __resolveType: TypeResolveFn<'AssetProperty' | 'AssetsProperty' | 'BooleanProperty' | 'ContributorProperty' | 'ContributorsProperty' | 'DateProperty' | 'EmailProperty' | 'EntitiesProperty' | 'EntityProperty' | 'FloatProperty' | 'FullTextProperty' | 'IntegerProperty' | 'MarkdownProperty' | 'MultiselectProperty' | 'SelectProperty' | 'StringProperty' | 'TagsProperty' | 'TimestampProperty' | 'URLProperty' | 'UnknownProperty' | 'VariableDateProperty', ParentType, ContextType>;
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  function?: Resolver<ResolversTypes['SchemaPropertyFunction'], ParentType, ContextType>;
  isWide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
};

export type SchemaCoreDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SchemaCoreDefinition'] = ResolversParentTypes['SchemaCoreDefinition']> = {
  doi?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  issn?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  subtitle?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SchemaDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SchemaDefinition'] = ResolversParentTypes['SchemaDefinition']> = {
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaKind'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  namespace?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SchemaDefinitionConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SchemaDefinitionConnection'] = ResolversParentTypes['SchemaDefinitionConnection']> = {
  edges?: Resolver<Array<ResolversTypes['SchemaDefinitionEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['SchemaDefinition']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SchemaDefinitionEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SchemaDefinitionEdge'] = ResolversParentTypes['SchemaDefinitionEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['SchemaDefinition'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SchemaInstanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['SchemaInstance'] = ResolversParentTypes['SchemaInstance']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Community' | 'Item', ParentType, ContextType>;
  availableEntitiesFor?: Resolver<Array<ResolversTypes['EntitySelectOption']>, ParentType, ContextType, RequireFields<SchemaInstanceAvailableEntitiesForArgs, 'fullPath'>>;
  schemaInstanceContext?: Resolver<ResolversTypes['SchemaInstanceContext'], ParentType, ContextType>;
  schemaProperties?: Resolver<Array<ResolversTypes['AnySchemaProperty']>, ParentType, ContextType>;
  schemaProperty?: Resolver<Maybe<ResolversTypes['AnySchemaProperty']>, ParentType, ContextType, RequireFields<SchemaInstanceSchemaPropertyArgs, 'fullPath'>>;
};

export type SchemaInstanceContextResolvers<ContextType = any, ParentType extends ResolversParentTypes['SchemaInstanceContext'] = ResolversParentTypes['SchemaInstanceContext']> = {
  assets?: Resolver<Array<ResolversTypes['AssetSelectOption']>, ParentType, ContextType>;
  contributors?: Resolver<Array<ResolversTypes['ContributorSelectOption']>, ParentType, ContextType>;
  defaultValues?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  entityId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  fieldValues?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  schemaVersionSlug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  validity?: Resolver<Maybe<ResolversTypes['SchemaInstanceValidation']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SchemaInstanceValidationResolvers<ContextType = any, ParentType extends ResolversParentTypes['SchemaInstanceValidation'] = ResolversParentTypes['SchemaInstanceValidation']> = {
  errors?: Resolver<Array<ResolversTypes['SchemaValueError']>, ParentType, ContextType>;
  valid?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  validatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SchemaOrderingPathResolvers<ContextType = any, ParentType extends ResolversParentTypes['SchemaOrderingPath'] = ResolversParentTypes['SchemaOrderingPath']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  grouping?: Resolver<ResolversTypes['OrderingPathGrouping'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labelPrefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  schemaVersion?: Resolver<ResolversTypes['SchemaVersion'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SchemaPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['SchemaProperty'] = ResolversParentTypes['SchemaProperty']> = {
  __resolveType: TypeResolveFn<'AssetProperty' | 'AssetsProperty' | 'BooleanProperty' | 'ContributorProperty' | 'ContributorsProperty' | 'DateProperty' | 'EmailProperty' | 'EntitiesProperty' | 'EntityProperty' | 'FloatProperty' | 'FullTextProperty' | 'GroupProperty' | 'IntegerProperty' | 'MarkdownProperty' | 'MultiselectProperty' | 'SelectProperty' | 'StringProperty' | 'TagsProperty' | 'TimestampProperty' | 'URLProperty' | 'UnknownProperty' | 'VariableDateProperty', ParentType, ContextType>;
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
};

export type SchemaRenderDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SchemaRenderDefinition'] = ResolversParentTypes['SchemaRenderDefinition']> = {
  listMode?: Resolver<ResolversTypes['SchemaRenderListMode'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SchemaValueErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['SchemaValueError'] = ResolversParentTypes['SchemaValueError']> = {
  base?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hint?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SchemaVersionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SchemaVersion'] = ResolversParentTypes['SchemaVersion']> = {
  core?: Resolver<ResolversTypes['SchemaCoreDefinition'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  enforcedChildDeclarations?: Resolver<Array<ResolversTypes['Slug']>, ParentType, ContextType>;
  enforcedChildVersions?: Resolver<Array<ResolversTypes['SchemaVersion']>, ParentType, ContextType>;
  enforcedParentDeclarations?: Resolver<Array<ResolversTypes['Slug']>, ParentType, ContextType>;
  enforcedParentVersions?: Resolver<Array<ResolversTypes['SchemaVersion']>, ParentType, ContextType>;
  enforcesChildren?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  enforcesParent?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaKind'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  namespace?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  render?: Resolver<ResolversTypes['SchemaRenderDefinition'], ParentType, ContextType>;
  schemaDefinition?: Resolver<ResolversTypes['SchemaDefinition'], ParentType, ContextType>;
  schemaProperties?: Resolver<Array<ResolversTypes['AnySchemaProperty']>, ParentType, ContextType>;
  search?: Resolver<ResolversTypes['SearchScope'], ParentType, ContextType, RequireFields<SchemaVersionSearchArgs, 'visibility'>>;
  searchableProperties?: Resolver<Array<ResolversTypes['AnySearchableProperty']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SchemaVersionConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SchemaVersionConnection'] = ResolversParentTypes['SchemaVersionConnection']> = {
  edges?: Resolver<Array<ResolversTypes['SchemaVersionEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['SchemaVersion']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SchemaVersionEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SchemaVersionEdge'] = ResolversParentTypes['SchemaVersionEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['SchemaVersion'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SchemaVersionOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SchemaVersionOption'] = ResolversParentTypes['SchemaVersionOption']> = {
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  namespace?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  schemaDefinition?: Resolver<ResolversTypes['SchemaDefinition'], ParentType, ContextType>;
  schemaVersion?: Resolver<ResolversTypes['SchemaVersion'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchResult'] = ResolversParentTypes['SearchResult']> = {
  entity?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['EntityKind'], ParentType, ContextType>;
  schemaVersion?: Resolver<ResolversTypes['SchemaVersion'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchResultConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchResultConnection'] = ResolversParentTypes['SearchResultConnection']> = {
  edges?: Resolver<Array<ResolversTypes['SearchResultEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['SearchResult']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchResultEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchResultEdge'] = ResolversParentTypes['SearchResultEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['SearchResult'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchScopeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchScope'] = ResolversParentTypes['SearchScope']> = {
  availableSchemaVersions?: Resolver<Array<ResolversTypes['SchemaVersion']>, ParentType, ContextType>;
  coreProperties?: Resolver<Array<ResolversTypes['SearchableCoreProperty']>, ParentType, ContextType>;
  originType?: Resolver<ResolversTypes['SearchOriginType'], ParentType, ContextType>;
  results?: Resolver<ResolversTypes['SearchResultConnection'], ParentType, ContextType, RequireFields<SearchScopeResultsArgs, 'scope' | 'order' | 'predicates' | 'pageDirection'>>;
  visibility?: Resolver<ResolversTypes['EntityVisibilityFilter'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchableResolvers<ContextType = any, ParentType extends ResolversParentTypes['Searchable'] = ResolversParentTypes['Searchable']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Community' | 'Item' | 'Query' | 'SchemaVersion', ParentType, ContextType>;
  search?: Resolver<ResolversTypes['SearchScope'], ParentType, ContextType, RequireFields<SearchableSearchArgs, 'visibility'>>;
};

export type SearchableCorePropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchableCoreProperty'] = ResolversParentTypes['SearchableCoreProperty']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  searchOperators?: Resolver<Array<ResolversTypes['SearchOperator']>, ParentType, ContextType>;
  searchPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchablePropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchableProperty'] = ResolversParentTypes['SearchableProperty']> = {
  __resolveType: TypeResolveFn<'BooleanProperty' | 'DateProperty' | 'FloatProperty' | 'FullTextProperty' | 'IntegerProperty' | 'MarkdownProperty' | 'MultiselectProperty' | 'SearchableCoreProperty' | 'SelectProperty' | 'StringProperty' | 'TimestampProperty' | 'VariableDateProperty', ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  searchOperators?: Resolver<Array<ResolversTypes['SearchOperator']>, ParentType, ContextType>;
  searchPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type SelectInitialOrderingPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['SelectInitialOrderingPayload'] = ResolversParentTypes['SelectInitialOrderingPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entity?: Resolver<Maybe<ResolversTypes['AnyEntity']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ordering?: Resolver<Maybe<ResolversTypes['Ordering']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SelectOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SelectOption'] = ResolversParentTypes['SelectOption']> = {
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SelectPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['SelectProperty'] = ResolversParentTypes['SelectProperty']> = {
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  defaultSelection?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  function?: Resolver<ResolversTypes['SchemaPropertyFunction'], ParentType, ContextType>;
  isWide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  options?: Resolver<Array<ResolversTypes['SelectOption']>, ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  searchOperators?: Resolver<Array<ResolversTypes['SearchOperator']>, ParentType, ContextType>;
  searchPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  selection?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteFooterResolvers<ContextType = any, ParentType extends ResolversParentTypes['SiteFooter'] = ResolversParentTypes['SiteFooter']> = {
  copyrightStatement?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteLogoAttachmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['SiteLogoAttachment'] = ResolversParentTypes['SiteLogoAttachment']> = {
  alt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  original?: Resolver<ResolversTypes['ImageOriginal'], ParentType, ContextType>;
  originalFilename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  purpose?: Resolver<ResolversTypes['ImagePurpose'], ParentType, ContextType>;
  sansText?: Resolver<ResolversTypes['ImageSize'], ParentType, ContextType>;
  storage?: Resolver<Maybe<ResolversTypes['AttachmentStorage']>, ParentType, ContextType>;
  withText?: Resolver<ResolversTypes['ImageSize'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteSettingsResolvers<ContextType = any, ParentType extends ResolversParentTypes['SiteSettings'] = ResolversParentTypes['SiteSettings']> = {
  footer?: Resolver<ResolversTypes['SiteFooter'], ParentType, ContextType>;
  installationHomePageCopy?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  installationName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logoMode?: Resolver<ResolversTypes['SiteLogoMode'], ParentType, ContextType>;
  providerName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface SlugScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Slug'], any> {
  name: 'Slug';
}

export type SluggableResolvers<ContextType = any, ParentType extends ResolversParentTypes['Sluggable'] = ResolversParentTypes['Sluggable']> = {
  __resolveType: TypeResolveFn<'Announcement' | 'AssetAudio' | 'AssetDocument' | 'AssetImage' | 'AssetPDF' | 'AssetUnknown' | 'AssetVideo' | 'Collection' | 'CollectionContribution' | 'Community' | 'ContextualPermission' | 'EntityLink' | 'Item' | 'ItemContribution' | 'Ordering' | 'OrderingEntry' | 'OrganizationContributor' | 'PersonContributor' | 'Role' | 'SchemaDefinition' | 'SchemaVersion' | 'User' | 'UserCollectionAccessGrant' | 'UserCommunityAccessGrant' | 'UserGroup' | 'UserGroupCollectionAccessGrant' | 'UserGroupCommunityAccessGrant' | 'UserGroupItemAccessGrant' | 'UserItemAccessGrant', ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
};

export type StandardMutationPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['StandardMutationPayload'] = ResolversParentTypes['StandardMutationPayload']> = {
  __resolveType: TypeResolveFn<'AlterSchemaVersionPayload' | 'ApplySchemaPropertiesPayload' | 'ClearInitialOrderingPayload' | 'CreateAnnouncementPayload' | 'CreateAssetPayload' | 'CreateCollectionPayload' | 'CreateCommunityPayload' | 'CreateItemPayload' | 'CreateOrderingPayload' | 'CreateOrganizationContributorPayload' | 'CreatePagePayload' | 'CreatePersonContributorPayload' | 'CreateRolePayload' | 'DestroyAnnouncementPayload' | 'DestroyAssetPayload' | 'DestroyCollectionPayload' | 'DestroyCommunityPayload' | 'DestroyContributionPayload' | 'DestroyContributorPayload' | 'DestroyEntityLinkPayload' | 'DestroyItemPayload' | 'DestroyOrderingPayload' | 'DestroyPagePayload' | 'GrantAccessPayload' | 'LinkEntityPayload' | 'ReparentEntityPayload' | 'ResetOrderingPayload' | 'RevokeAccessPayload' | 'SelectInitialOrderingPayload' | 'UpdateAnnouncementPayload' | 'UpdateAssetAttachmentPayload' | 'UpdateAssetPayload' | 'UpdateCollectionPayload' | 'UpdateCommunityPayload' | 'UpdateContributionPayload' | 'UpdateGlobalConfigurationPayload' | 'UpdateItemPayload' | 'UpdateOrderingPayload' | 'UpdateOrganizationContributorPayload' | 'UpdatePagePayload' | 'UpdatePersonContributorPayload' | 'UpdateRolePayload' | 'UpdateUserPayload' | 'UpdateViewerSettingsPayload' | 'UpsertContributionPayload', ParentType, ContextType>;
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type StaticOrderingPathResolvers<ContextType = any, ParentType extends ResolversParentTypes['StaticOrderingPath'] = ResolversParentTypes['StaticOrderingPath']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  grouping?: Resolver<ResolversTypes['OrderingPathGrouping'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labelPrefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StringPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['StringProperty'] = ResolversParentTypes['StringProperty']> = {
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  function?: Resolver<ResolversTypes['SchemaPropertyFunction'], ParentType, ContextType>;
  isWide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  searchOperators?: Resolver<Array<ResolversTypes['SearchOperator']>, ParentType, ContextType>;
  searchPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SystemInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['SystemInfo'] = ResolversParentTypes['SystemInfo']> = {
  entityHierarchyExists?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<SystemInfoEntityHierarchyExistsArgs, 'ancestor' | 'descendant'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagsPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagsProperty'] = ResolversParentTypes['TagsProperty']> = {
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  function?: Resolver<ResolversTypes['SchemaPropertyFunction'], ParentType, ContextType>;
  isWide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ThemeSettingsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ThemeSettings'] = ResolversParentTypes['ThemeSettings']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  font?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TimestampPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['TimestampProperty'] = ResolversParentTypes['TimestampProperty']> = {
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  default?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  function?: Resolver<ResolversTypes['SchemaPropertyFunction'], ParentType, ContextType>;
  isWide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  searchOperators?: Resolver<Array<ResolversTypes['SearchOperator']>, ParentType, ContextType>;
  searchPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UrlPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['URLProperty'] = ResolversParentTypes['URLProperty']> = {
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  function?: Resolver<ResolversTypes['SchemaPropertyFunction'], ParentType, ContextType>;
  isWide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['URLReference']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UrlReferenceResolvers<ContextType = any, ParentType extends ResolversParentTypes['URLReference'] = ResolversParentTypes['URLReference']> = {
  href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UnknownPropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['UnknownProperty'] = ResolversParentTypes['UnknownProperty']> = {
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  default?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  function?: Resolver<ResolversTypes['SchemaPropertyFunction'], ParentType, ContextType>;
  isWide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  unknownValue?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateAnnouncementPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateAnnouncementPayload'] = ResolversParentTypes['UpdateAnnouncementPayload']> = {
  announcement?: Resolver<Maybe<ResolversTypes['Announcement']>, ParentType, ContextType>;
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateAssetAttachmentPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateAssetAttachmentPayload'] = ResolversParentTypes['UpdateAssetAttachmentPayload']> = {
  asset?: Resolver<Maybe<ResolversTypes['AnyAsset']>, ParentType, ContextType>;
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateAssetPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateAssetPayload'] = ResolversParentTypes['UpdateAssetPayload']> = {
  asset?: Resolver<Maybe<ResolversTypes['AnyAsset']>, ParentType, ContextType>;
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateCollectionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateCollectionPayload'] = ResolversParentTypes['UpdateCollectionPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  collection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  schemaErrors?: Resolver<Array<ResolversTypes['SchemaValueError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateCommunityPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateCommunityPayload'] = ResolversParentTypes['UpdateCommunityPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  community?: Resolver<Maybe<ResolversTypes['Community']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  schemaErrors?: Resolver<Array<ResolversTypes['SchemaValueError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateContributionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateContributionPayload'] = ResolversParentTypes['UpdateContributionPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contribution?: Resolver<Maybe<ResolversTypes['AnyContribution']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateGlobalConfigurationPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateGlobalConfigurationPayload'] = ResolversParentTypes['UpdateGlobalConfigurationPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalConfiguration?: Resolver<Maybe<ResolversTypes['GlobalConfiguration']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateItemPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateItemPayload'] = ResolversParentTypes['UpdateItemPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  item?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType>;
  schemaErrors?: Resolver<Array<ResolversTypes['SchemaValueError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateOrderingPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateOrderingPayload'] = ResolversParentTypes['UpdateOrderingPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ordering?: Resolver<Maybe<ResolversTypes['Ordering']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateOrganizationContributorPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateOrganizationContributorPayload'] = ResolversParentTypes['UpdateOrganizationContributorPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contributor?: Resolver<Maybe<ResolversTypes['OrganizationContributor']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdatePagePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdatePagePayload'] = ResolversParentTypes['UpdatePagePayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  page?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdatePersonContributorPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdatePersonContributorPayload'] = ResolversParentTypes['UpdatePersonContributorPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contributor?: Resolver<Maybe<ResolversTypes['PersonContributor']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateRolePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateRolePayload'] = ResolversParentTypes['UpdateRolePayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateUserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateUserPayload'] = ResolversParentTypes['UpdateUserPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateViewerSettingsPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateViewerSettingsPayload'] = ResolversParentTypes['UpdateViewerSettingsPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UploadID'], any> {
  name: 'UploadID';
}

export type UpsertContributionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpsertContributionPayload'] = ResolversParentTypes['UpsertContributionPayload']> = {
  attributeErrors?: Resolver<Array<ResolversTypes['MutationAttributeError']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contribution?: Resolver<Maybe<ResolversTypes['AnyContribution']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  globalErrors?: Resolver<Array<ResolversTypes['MutationGlobalError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  accessGrants?: Resolver<ResolversTypes['AnyUserAccessGrantConnection'], ParentType, ContextType, RequireFields<UserAccessGrantsArgs, 'entity' | 'order' | 'pageDirection'>>;
  allAccessGrants?: Resolver<ResolversTypes['AnyAccessGrantConnection'], ParentType, ContextType, RequireFields<UserAllAccessGrantsArgs, 'entity' | 'order' | 'pageDirection'>>;
  allowedActions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  anonymous?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  assignableRoles?: Resolver<Array<ResolversTypes['Role']>, ParentType, ContextType>;
  avatar?: Resolver<ResolversTypes['ImageAttachment'], ParentType, ContextType>;
  avatarMetadata?: Resolver<Maybe<ResolversTypes['ImageMetadata']>, ParentType, ContextType>;
  collectionAccessGrants?: Resolver<ResolversTypes['UserCollectionAccessGrantConnection'], ParentType, ContextType, RequireFields<UserCollectionAccessGrantsArgs, 'order' | 'pageDirection'>>;
  collections?: Resolver<ResolversTypes['CollectionConnection'], ParentType, ContextType, RequireFields<UserCollectionsArgs, 'access' | 'order' | 'nodeFilter' | 'pageDirection'>>;
  communities?: Resolver<ResolversTypes['CommunityConnection'], ParentType, ContextType, RequireFields<UserCommunitiesArgs, 'access' | 'order' | 'nodeFilter' | 'pageDirection'>>;
  communityAccessGrants?: Resolver<ResolversTypes['UserCommunityAccessGrantConnection'], ParentType, ContextType, RequireFields<UserCommunityAccessGrantsArgs, 'order' | 'pageDirection'>>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emailVerified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  familyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  givenName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  globalAdmin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  itemAccessGrants?: Resolver<ResolversTypes['UserItemAccessGrantConnection'], ParentType, ContextType, RequireFields<UserItemAccessGrantsArgs, 'order' | 'pageDirection'>>;
  items?: Resolver<ResolversTypes['ItemConnection'], ParentType, ContextType, RequireFields<UserItemsArgs, 'access' | 'order' | 'nodeFilter' | 'pageDirection'>>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  permissions?: Resolver<Array<ResolversTypes['PermissionGrant']>, ParentType, ContextType>;
  primaryRole?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  uploadAccess?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  uploadToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAccessGrantResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserAccessGrant'] = ResolversParentTypes['UserAccessGrant']> = {
  __resolveType: TypeResolveFn<'UserCollectionAccessGrant' | 'UserCommunityAccessGrant' | 'UserItemAccessGrant', ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['AccessGrantSubject'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
};

export type UserCollectionAccessGrantResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserCollectionAccessGrant'] = ResolversParentTypes['UserCollectionAccessGrant']> = {
  collection?: Resolver<ResolversTypes['Collection'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['AccessGrantSubject'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserCollectionAccessGrantConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserCollectionAccessGrantConnection'] = ResolversParentTypes['UserCollectionAccessGrantConnection']> = {
  edges?: Resolver<Array<ResolversTypes['UserCollectionAccessGrantEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['UserCollectionAccessGrant']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserCollectionAccessGrantEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserCollectionAccessGrantEdge'] = ResolversParentTypes['UserCollectionAccessGrantEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['UserCollectionAccessGrant'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserCommunityAccessGrantResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserCommunityAccessGrant'] = ResolversParentTypes['UserCommunityAccessGrant']> = {
  community?: Resolver<ResolversTypes['Community'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['AccessGrantSubject'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserCommunityAccessGrantConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserCommunityAccessGrantConnection'] = ResolversParentTypes['UserCommunityAccessGrantConnection']> = {
  edges?: Resolver<Array<ResolversTypes['UserCommunityAccessGrantEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['UserCommunityAccessGrant']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserCommunityAccessGrantEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserCommunityAccessGrantEdge'] = ResolversParentTypes['UserCommunityAccessGrantEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['UserCommunityAccessGrant'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserConnection'] = ResolversParentTypes['UserConnection']> = {
  edges?: Resolver<Array<ResolversTypes['UserEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserEdge'] = ResolversParentTypes['UserEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserError'] = ResolversParentTypes['UserError']> = {
  attributePath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  path?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  scope?: Resolver<ResolversTypes['MutationErrorScope'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserGroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserGroup'] = ResolversParentTypes['UserGroup']> = {
  accessGrants?: Resolver<ResolversTypes['AnyUserGroupAccessGrantConnection'], ParentType, ContextType, RequireFields<UserGroupAccessGrantsArgs, 'entity' | 'order' | 'pageDirection'>>;
  allAccessGrants?: Resolver<ResolversTypes['AnyAccessGrantConnection'], ParentType, ContextType, RequireFields<UserGroupAllAccessGrantsArgs, 'entity' | 'order' | 'pageDirection'>>;
  assignableRoles?: Resolver<Array<ResolversTypes['Role']>, ParentType, ContextType>;
  collectionAccessGrants?: Resolver<ResolversTypes['UserGroupCollectionAccessGrantConnection'], ParentType, ContextType, RequireFields<UserGroupCollectionAccessGrantsArgs, 'order' | 'pageDirection'>>;
  communityAccessGrants?: Resolver<ResolversTypes['UserGroupCommunityAccessGrantConnection'], ParentType, ContextType, RequireFields<UserGroupCommunityAccessGrantsArgs, 'order' | 'pageDirection'>>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  itemAccessGrants?: Resolver<ResolversTypes['UserGroupItemAccessGrantConnection'], ParentType, ContextType, RequireFields<UserGroupItemAccessGrantsArgs, 'order' | 'pageDirection'>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  primaryRole?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  users?: Resolver<ResolversTypes['UserConnection'], ParentType, ContextType, RequireFields<UserGroupUsersArgs, 'order' | 'pageDirection'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserGroupAccessGrantResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserGroupAccessGrant'] = ResolversParentTypes['UserGroupAccessGrant']> = {
  __resolveType: TypeResolveFn<'UserGroupCollectionAccessGrant' | 'UserGroupCommunityAccessGrant' | 'UserGroupItemAccessGrant', ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['AccessGrantSubject'], ParentType, ContextType>;
  userGroup?: Resolver<ResolversTypes['UserGroup'], ParentType, ContextType>;
};

export type UserGroupCollectionAccessGrantResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserGroupCollectionAccessGrant'] = ResolversParentTypes['UserGroupCollectionAccessGrant']> = {
  collection?: Resolver<ResolversTypes['Collection'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['AccessGrantSubject'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  userGroup?: Resolver<ResolversTypes['UserGroup'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserGroupCollectionAccessGrantConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserGroupCollectionAccessGrantConnection'] = ResolversParentTypes['UserGroupCollectionAccessGrantConnection']> = {
  edges?: Resolver<Array<ResolversTypes['UserGroupCollectionAccessGrantEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['UserGroupCollectionAccessGrant']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserGroupCollectionAccessGrantEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserGroupCollectionAccessGrantEdge'] = ResolversParentTypes['UserGroupCollectionAccessGrantEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['UserGroupCollectionAccessGrant'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserGroupCommunityAccessGrantResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserGroupCommunityAccessGrant'] = ResolversParentTypes['UserGroupCommunityAccessGrant']> = {
  community?: Resolver<ResolversTypes['Community'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['AccessGrantSubject'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  userGroup?: Resolver<ResolversTypes['UserGroup'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserGroupCommunityAccessGrantConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserGroupCommunityAccessGrantConnection'] = ResolversParentTypes['UserGroupCommunityAccessGrantConnection']> = {
  edges?: Resolver<Array<ResolversTypes['UserGroupCommunityAccessGrantEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['UserGroupCommunityAccessGrant']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserGroupCommunityAccessGrantEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserGroupCommunityAccessGrantEdge'] = ResolversParentTypes['UserGroupCommunityAccessGrantEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['UserGroupCommunityAccessGrant'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserGroupItemAccessGrantResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserGroupItemAccessGrant'] = ResolversParentTypes['UserGroupItemAccessGrant']> = {
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  item?: Resolver<ResolversTypes['Item'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['AccessGrantSubject'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  userGroup?: Resolver<ResolversTypes['UserGroup'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserGroupItemAccessGrantConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserGroupItemAccessGrantConnection'] = ResolversParentTypes['UserGroupItemAccessGrantConnection']> = {
  edges?: Resolver<Array<ResolversTypes['UserGroupItemAccessGrantEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['UserGroupItemAccessGrant']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserGroupItemAccessGrantEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserGroupItemAccessGrantEdge'] = ResolversParentTypes['UserGroupItemAccessGrantEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['UserGroupItemAccessGrant'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserItemAccessGrantResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserItemAccessGrant'] = ResolversParentTypes['UserItemAccessGrant']> = {
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  item?: Resolver<ResolversTypes['Item'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['AccessGrantSubject'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserItemAccessGrantConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserItemAccessGrantConnection'] = ResolversParentTypes['UserItemAccessGrantConnection']> = {
  edges?: Resolver<Array<ResolversTypes['UserItemAccessGrantEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['UserItemAccessGrant']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserItemAccessGrantEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserItemAccessGrantEdge'] = ResolversParentTypes['UserItemAccessGrantEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['UserItemAccessGrant'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VariableDatePropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['VariableDateProperty'] = ResolversParentTypes['VariableDateProperty']> = {
  array?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  dateWithPrecision?: Resolver<Maybe<ResolversTypes['VariablePrecisionDate']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  function?: Resolver<ResolversTypes['SchemaPropertyFunction'], ParentType, ContextType>;
  isWide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['SchemaPropertyKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  searchOperators?: Resolver<Array<ResolversTypes['SearchOperator']>, ParentType, ContextType>;
  searchPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SchemaPropertyType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VariablePrecisionDateResolvers<ContextType = any, ParentType extends ResolversParentTypes['VariablePrecisionDate'] = ResolversParentTypes['VariablePrecisionDate']> = {
  precision?: Resolver<ResolversTypes['DatePrecision'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['ISO8601Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface VersionRequirementScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['VersionRequirement'], any> {
  name: 'VersionRequirement';
}

export type Resolvers<ContextType = any> = {
  AccessControlList?: AccessControlListResolvers<ContextType>;
  AccessGrant?: AccessGrantResolvers<ContextType>;
  AccessGrantSubject?: AccessGrantSubjectResolvers<ContextType>;
  Accessible?: AccessibleResolvers<ContextType>;
  AlterSchemaVersionPayload?: AlterSchemaVersionPayloadResolvers<ContextType>;
  Announcement?: AnnouncementResolvers<ContextType>;
  AnnouncementConnection?: AnnouncementConnectionResolvers<ContextType>;
  AnnouncementEdge?: AnnouncementEdgeResolvers<ContextType>;
  AnyAccessGrant?: AnyAccessGrantResolvers<ContextType>;
  AnyAccessGrantConnection?: AnyAccessGrantConnectionResolvers<ContextType>;
  AnyAccessGrantEdge?: AnyAccessGrantEdgeResolvers<ContextType>;
  AnyAsset?: AnyAssetResolvers<ContextType>;
  AnyAssetConnection?: AnyAssetConnectionResolvers<ContextType>;
  AnyAssetEdge?: AnyAssetEdgeResolvers<ContextType>;
  AnyAttachable?: AnyAttachableResolvers<ContextType>;
  AnyChildEntity?: AnyChildEntityResolvers<ContextType>;
  AnyCollectionAccessGrant?: AnyCollectionAccessGrantResolvers<ContextType>;
  AnyCollectionAccessGrantConnection?: AnyCollectionAccessGrantConnectionResolvers<ContextType>;
  AnyCollectionAccessGrantEdge?: AnyCollectionAccessGrantEdgeResolvers<ContextType>;
  AnyCommunityAccessGrant?: AnyCommunityAccessGrantResolvers<ContextType>;
  AnyCommunityAccessGrantConnection?: AnyCommunityAccessGrantConnectionResolvers<ContextType>;
  AnyCommunityAccessGrantEdge?: AnyCommunityAccessGrantEdgeResolvers<ContextType>;
  AnyContribution?: AnyContributionResolvers<ContextType>;
  AnyContributor?: AnyContributorResolvers<ContextType>;
  AnyContributorConnection?: AnyContributorConnectionResolvers<ContextType>;
  AnyContributorEdge?: AnyContributorEdgeResolvers<ContextType>;
  AnyEntity?: AnyEntityResolvers<ContextType>;
  AnyLinkTarget?: AnyLinkTargetResolvers<ContextType>;
  AnyOrderingEntry?: AnyOrderingEntryResolvers<ContextType>;
  AnyOrderingPath?: AnyOrderingPathResolvers<ContextType>;
  AnyScalarProperty?: AnyScalarPropertyResolvers<ContextType>;
  AnySchemaProperty?: AnySchemaPropertyResolvers<ContextType>;
  AnySearchableProperty?: AnySearchablePropertyResolvers<ContextType>;
  AnyUserAccessGrant?: AnyUserAccessGrantResolvers<ContextType>;
  AnyUserAccessGrantConnection?: AnyUserAccessGrantConnectionResolvers<ContextType>;
  AnyUserAccessGrantEdge?: AnyUserAccessGrantEdgeResolvers<ContextType>;
  AnyUserGroupAccessGrant?: AnyUserGroupAccessGrantResolvers<ContextType>;
  AnyUserGroupAccessGrantConnection?: AnyUserGroupAccessGrantConnectionResolvers<ContextType>;
  AnyUserGroupAccessGrantEdge?: AnyUserGroupAccessGrantEdgeResolvers<ContextType>;
  ApplySchemaPropertiesPayload?: ApplySchemaPropertiesPayloadResolvers<ContextType>;
  Asset?: AssetResolvers<ContextType>;
  AssetAudio?: AssetAudioResolvers<ContextType>;
  AssetDocument?: AssetDocumentResolvers<ContextType>;
  AssetImage?: AssetImageResolvers<ContextType>;
  AssetPDF?: AssetPdfResolvers<ContextType>;
  AssetPermissionGrid?: AssetPermissionGridResolvers<ContextType>;
  AssetProperty?: AssetPropertyResolvers<ContextType>;
  AssetSelectOption?: AssetSelectOptionResolvers<ContextType>;
  AssetUnknown?: AssetUnknownResolvers<ContextType>;
  AssetVideo?: AssetVideoResolvers<ContextType>;
  AssetsProperty?: AssetsPropertyResolvers<ContextType>;
  Attachable?: AttachableResolvers<ContextType>;
  BooleanProperty?: BooleanPropertyResolvers<ContextType>;
  CRUDPermissionGrid?: CrudPermissionGridResolvers<ContextType>;
  ChildEntity?: ChildEntityResolvers<ContextType>;
  ClearInitialOrderingPayload?: ClearInitialOrderingPayloadResolvers<ContextType>;
  Collection?: CollectionResolvers<ContextType>;
  CollectionConnection?: CollectionConnectionResolvers<ContextType>;
  CollectionContribution?: CollectionContributionResolvers<ContextType>;
  CollectionContributionConnection?: CollectionContributionConnectionResolvers<ContextType>;
  CollectionContributionEdge?: CollectionContributionEdgeResolvers<ContextType>;
  CollectionEdge?: CollectionEdgeResolvers<ContextType>;
  CollectionParent?: CollectionParentResolvers<ContextType>;
  Community?: CommunityResolvers<ContextType>;
  CommunityConnection?: CommunityConnectionResolvers<ContextType>;
  CommunityEdge?: CommunityEdgeResolvers<ContextType>;
  ContextualPermission?: ContextualPermissionResolvers<ContextType>;
  ContextualPermissionConnection?: ContextualPermissionConnectionResolvers<ContextType>;
  ContextualPermissionEdge?: ContextualPermissionEdgeResolvers<ContextType>;
  Contributable?: ContributableResolvers<ContextType>;
  Contribution?: ContributionResolvers<ContextType>;
  ContributionMetadata?: ContributionMetadataResolvers<ContextType>;
  Contributor?: ContributorResolvers<ContextType>;
  ContributorLink?: ContributorLinkResolvers<ContextType>;
  ContributorProperty?: ContributorPropertyResolvers<ContextType>;
  ContributorSelectOption?: ContributorSelectOptionResolvers<ContextType>;
  ContributorsProperty?: ContributorsPropertyResolvers<ContextType>;
  CreateAnnouncementPayload?: CreateAnnouncementPayloadResolvers<ContextType>;
  CreateAssetPayload?: CreateAssetPayloadResolvers<ContextType>;
  CreateCollectionPayload?: CreateCollectionPayloadResolvers<ContextType>;
  CreateCommunityPayload?: CreateCommunityPayloadResolvers<ContextType>;
  CreateItemPayload?: CreateItemPayloadResolvers<ContextType>;
  CreateOrderingPayload?: CreateOrderingPayloadResolvers<ContextType>;
  CreateOrganizationContributorPayload?: CreateOrganizationContributorPayloadResolvers<ContextType>;
  CreatePagePayload?: CreatePagePayloadResolvers<ContextType>;
  CreatePersonContributorPayload?: CreatePersonContributorPayloadResolvers<ContextType>;
  CreateRolePayload?: CreateRolePayloadResolvers<ContextType>;
  DateProperty?: DatePropertyResolvers<ContextType>;
  DescribesSchema?: DescribesSchemaResolvers<ContextType>;
  DestroyAnnouncementPayload?: DestroyAnnouncementPayloadResolvers<ContextType>;
  DestroyAssetPayload?: DestroyAssetPayloadResolvers<ContextType>;
  DestroyCollectionPayload?: DestroyCollectionPayloadResolvers<ContextType>;
  DestroyCommunityPayload?: DestroyCommunityPayloadResolvers<ContextType>;
  DestroyContributionPayload?: DestroyContributionPayloadResolvers<ContextType>;
  DestroyContributorPayload?: DestroyContributorPayloadResolvers<ContextType>;
  DestroyEntityLinkPayload?: DestroyEntityLinkPayloadResolvers<ContextType>;
  DestroyItemPayload?: DestroyItemPayloadResolvers<ContextType>;
  DestroyMutationPayload?: DestroyMutationPayloadResolvers<ContextType>;
  DestroyOrderingPayload?: DestroyOrderingPayloadResolvers<ContextType>;
  DestroyPagePayload?: DestroyPagePayloadResolvers<ContextType>;
  EffectiveAccess?: EffectiveAccessResolvers<ContextType>;
  EmailProperty?: EmailPropertyResolvers<ContextType>;
  EntitiesProperty?: EntitiesPropertyResolvers<ContextType>;
  Entity?: EntityResolvers<ContextType>;
  EntityBreadcrumb?: EntityBreadcrumbResolvers<ContextType>;
  EntityDescendant?: EntityDescendantResolvers<ContextType>;
  EntityDescendantConnection?: EntityDescendantConnectionResolvers<ContextType>;
  EntityDescendantEdge?: EntityDescendantEdgeResolvers<ContextType>;
  EntityLink?: EntityLinkResolvers<ContextType>;
  EntityLinkConnection?: EntityLinkConnectionResolvers<ContextType>;
  EntityLinkEdge?: EntityLinkEdgeResolvers<ContextType>;
  EntityPermissionGrid?: EntityPermissionGridResolvers<ContextType>;
  EntityProperty?: EntityPropertyResolvers<ContextType>;
  EntitySelectOption?: EntitySelectOptionResolvers<ContextType>;
  ExposesEffectiveAccess?: ExposesEffectiveAccessResolvers<ContextType>;
  ExposesPermissions?: ExposesPermissionsResolvers<ContextType>;
  FloatProperty?: FloatPropertyResolvers<ContextType>;
  FullText?: FullTextResolvers<ContextType>;
  FullTextProperty?: FullTextPropertyResolvers<ContextType>;
  GlobalAccessControlList?: GlobalAccessControlListResolvers<ContextType>;
  GlobalConfiguration?: GlobalConfigurationResolvers<ContextType>;
  GrantAccessPayload?: GrantAccessPayloadResolvers<ContextType>;
  GroupProperty?: GroupPropertyResolvers<ContextType>;
  HasAttachmentStorage?: HasAttachmentStorageResolvers<ContextType>;
  HasAvailableEntities?: HasAvailableEntitiesResolvers<ContextType>;
  HasDOI?: HasDoiResolvers<ContextType>;
  HasEntityBreadcrumbs?: HasEntityBreadcrumbsResolvers<ContextType>;
  HasISSN?: HasIssnResolvers<ContextType>;
  HasSchemaProperties?: HasSchemaPropertiesResolvers<ContextType>;
  HierarchicalSchemaRank?: HierarchicalSchemaRankResolvers<ContextType>;
  HierarchicalSchemaVersionRank?: HierarchicalSchemaVersionRankResolvers<ContextType>;
  ISO8601Date?: GraphQLScalarType;
  ISO8601DateTime?: GraphQLScalarType;
  Image?: ImageResolvers<ContextType>;
  ImageAttachment?: ImageAttachmentResolvers<ContextType>;
  ImageDerivative?: ImageDerivativeResolvers<ContextType>;
  ImageIdentification?: ImageIdentificationResolvers<ContextType>;
  ImageMetadata?: ImageMetadataResolvers<ContextType>;
  ImageOriginal?: ImageOriginalResolvers<ContextType>;
  ImageSize?: ImageSizeResolvers<ContextType>;
  InstitutionSettings?: InstitutionSettingsResolvers<ContextType>;
  IntegerProperty?: IntegerPropertyResolvers<ContextType>;
  Item?: ItemResolvers<ContextType>;
  ItemConnection?: ItemConnectionResolvers<ContextType>;
  ItemContribution?: ItemContributionResolvers<ContextType>;
  ItemContributionConnection?: ItemContributionConnectionResolvers<ContextType>;
  ItemContributionEdge?: ItemContributionEdgeResolvers<ContextType>;
  ItemEdge?: ItemEdgeResolvers<ContextType>;
  ItemParent?: ItemParentResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  LinkEntityPayload?: LinkEntityPayloadResolvers<ContextType>;
  LinkTargetCandidate?: LinkTargetCandidateResolvers<ContextType>;
  LinkTargetCandidateConnection?: LinkTargetCandidateConnectionResolvers<ContextType>;
  LinkTargetCandidateEdge?: LinkTargetCandidateEdgeResolvers<ContextType>;
  MarkdownProperty?: MarkdownPropertyResolvers<ContextType>;
  MultiselectProperty?: MultiselectPropertyResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  MutationAttributeError?: MutationAttributeErrorResolvers<ContextType>;
  MutationGlobalError?: MutationGlobalErrorResolvers<ContextType>;
  NamedAncestor?: NamedAncestorResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  OptionableProperty?: OptionablePropertyResolvers<ContextType>;
  OrderDefinition?: OrderDefinitionResolvers<ContextType>;
  Ordering?: OrderingResolvers<ContextType>;
  OrderingConnection?: OrderingConnectionResolvers<ContextType>;
  OrderingEdge?: OrderingEdgeResolvers<ContextType>;
  OrderingEntry?: OrderingEntryResolvers<ContextType>;
  OrderingEntryConnection?: OrderingEntryConnectionResolvers<ContextType>;
  OrderingEntryEdge?: OrderingEntryEdgeResolvers<ContextType>;
  OrderingFilterDefinition?: OrderingFilterDefinitionResolvers<ContextType>;
  OrderingPath?: OrderingPathResolvers<ContextType>;
  OrderingRenderDefinition?: OrderingRenderDefinitionResolvers<ContextType>;
  OrderingSchemaFilter?: OrderingSchemaFilterResolvers<ContextType>;
  OrderingSelectDefinition?: OrderingSelectDefinitionResolvers<ContextType>;
  OrderingSelectLinkDefinition?: OrderingSelectLinkDefinitionResolvers<ContextType>;
  OrganizationContributor?: OrganizationContributorResolvers<ContextType>;
  Page?: PageResolvers<ContextType>;
  PageConnection?: PageConnectionResolvers<ContextType>;
  PageEdge?: PageEdgeResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Paginated?: PaginatedResolvers<ContextType>;
  PermissionGrant?: PermissionGrantResolvers<ContextType>;
  PermissionGrid?: PermissionGridResolvers<ContextType>;
  PersonContributor?: PersonContributorResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  ReferencesGlobalEntityDates?: ReferencesGlobalEntityDatesResolvers<ContextType>;
  ReparentEntityPayload?: ReparentEntityPayloadResolvers<ContextType>;
  ResetOrderingPayload?: ResetOrderingPayloadResolvers<ContextType>;
  RevokeAccessPayload?: RevokeAccessPayloadResolvers<ContextType>;
  Role?: RoleResolvers<ContextType>;
  RoleConnection?: RoleConnectionResolvers<ContextType>;
  RoleEdge?: RoleEdgeResolvers<ContextType>;
  ScalarProperty?: ScalarPropertyResolvers<ContextType>;
  SchemaCoreDefinition?: SchemaCoreDefinitionResolvers<ContextType>;
  SchemaDefinition?: SchemaDefinitionResolvers<ContextType>;
  SchemaDefinitionConnection?: SchemaDefinitionConnectionResolvers<ContextType>;
  SchemaDefinitionEdge?: SchemaDefinitionEdgeResolvers<ContextType>;
  SchemaInstance?: SchemaInstanceResolvers<ContextType>;
  SchemaInstanceContext?: SchemaInstanceContextResolvers<ContextType>;
  SchemaInstanceValidation?: SchemaInstanceValidationResolvers<ContextType>;
  SchemaOrderingPath?: SchemaOrderingPathResolvers<ContextType>;
  SchemaProperty?: SchemaPropertyResolvers<ContextType>;
  SchemaRenderDefinition?: SchemaRenderDefinitionResolvers<ContextType>;
  SchemaValueError?: SchemaValueErrorResolvers<ContextType>;
  SchemaVersion?: SchemaVersionResolvers<ContextType>;
  SchemaVersionConnection?: SchemaVersionConnectionResolvers<ContextType>;
  SchemaVersionEdge?: SchemaVersionEdgeResolvers<ContextType>;
  SchemaVersionOption?: SchemaVersionOptionResolvers<ContextType>;
  SearchResult?: SearchResultResolvers<ContextType>;
  SearchResultConnection?: SearchResultConnectionResolvers<ContextType>;
  SearchResultEdge?: SearchResultEdgeResolvers<ContextType>;
  SearchScope?: SearchScopeResolvers<ContextType>;
  Searchable?: SearchableResolvers<ContextType>;
  SearchableCoreProperty?: SearchableCorePropertyResolvers<ContextType>;
  SearchableProperty?: SearchablePropertyResolvers<ContextType>;
  SelectInitialOrderingPayload?: SelectInitialOrderingPayloadResolvers<ContextType>;
  SelectOption?: SelectOptionResolvers<ContextType>;
  SelectProperty?: SelectPropertyResolvers<ContextType>;
  SiteFooter?: SiteFooterResolvers<ContextType>;
  SiteLogoAttachment?: SiteLogoAttachmentResolvers<ContextType>;
  SiteSettings?: SiteSettingsResolvers<ContextType>;
  Slug?: GraphQLScalarType;
  Sluggable?: SluggableResolvers<ContextType>;
  StandardMutationPayload?: StandardMutationPayloadResolvers<ContextType>;
  StaticOrderingPath?: StaticOrderingPathResolvers<ContextType>;
  StringProperty?: StringPropertyResolvers<ContextType>;
  SystemInfo?: SystemInfoResolvers<ContextType>;
  TagsProperty?: TagsPropertyResolvers<ContextType>;
  ThemeSettings?: ThemeSettingsResolvers<ContextType>;
  TimestampProperty?: TimestampPropertyResolvers<ContextType>;
  URLProperty?: UrlPropertyResolvers<ContextType>;
  URLReference?: UrlReferenceResolvers<ContextType>;
  UnknownProperty?: UnknownPropertyResolvers<ContextType>;
  UpdateAnnouncementPayload?: UpdateAnnouncementPayloadResolvers<ContextType>;
  UpdateAssetAttachmentPayload?: UpdateAssetAttachmentPayloadResolvers<ContextType>;
  UpdateAssetPayload?: UpdateAssetPayloadResolvers<ContextType>;
  UpdateCollectionPayload?: UpdateCollectionPayloadResolvers<ContextType>;
  UpdateCommunityPayload?: UpdateCommunityPayloadResolvers<ContextType>;
  UpdateContributionPayload?: UpdateContributionPayloadResolvers<ContextType>;
  UpdateGlobalConfigurationPayload?: UpdateGlobalConfigurationPayloadResolvers<ContextType>;
  UpdateItemPayload?: UpdateItemPayloadResolvers<ContextType>;
  UpdateOrderingPayload?: UpdateOrderingPayloadResolvers<ContextType>;
  UpdateOrganizationContributorPayload?: UpdateOrganizationContributorPayloadResolvers<ContextType>;
  UpdatePagePayload?: UpdatePagePayloadResolvers<ContextType>;
  UpdatePersonContributorPayload?: UpdatePersonContributorPayloadResolvers<ContextType>;
  UpdateRolePayload?: UpdateRolePayloadResolvers<ContextType>;
  UpdateUserPayload?: UpdateUserPayloadResolvers<ContextType>;
  UpdateViewerSettingsPayload?: UpdateViewerSettingsPayloadResolvers<ContextType>;
  UploadID?: GraphQLScalarType;
  UpsertContributionPayload?: UpsertContributionPayloadResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserAccessGrant?: UserAccessGrantResolvers<ContextType>;
  UserCollectionAccessGrant?: UserCollectionAccessGrantResolvers<ContextType>;
  UserCollectionAccessGrantConnection?: UserCollectionAccessGrantConnectionResolvers<ContextType>;
  UserCollectionAccessGrantEdge?: UserCollectionAccessGrantEdgeResolvers<ContextType>;
  UserCommunityAccessGrant?: UserCommunityAccessGrantResolvers<ContextType>;
  UserCommunityAccessGrantConnection?: UserCommunityAccessGrantConnectionResolvers<ContextType>;
  UserCommunityAccessGrantEdge?: UserCommunityAccessGrantEdgeResolvers<ContextType>;
  UserConnection?: UserConnectionResolvers<ContextType>;
  UserEdge?: UserEdgeResolvers<ContextType>;
  UserError?: UserErrorResolvers<ContextType>;
  UserGroup?: UserGroupResolvers<ContextType>;
  UserGroupAccessGrant?: UserGroupAccessGrantResolvers<ContextType>;
  UserGroupCollectionAccessGrant?: UserGroupCollectionAccessGrantResolvers<ContextType>;
  UserGroupCollectionAccessGrantConnection?: UserGroupCollectionAccessGrantConnectionResolvers<ContextType>;
  UserGroupCollectionAccessGrantEdge?: UserGroupCollectionAccessGrantEdgeResolvers<ContextType>;
  UserGroupCommunityAccessGrant?: UserGroupCommunityAccessGrantResolvers<ContextType>;
  UserGroupCommunityAccessGrantConnection?: UserGroupCommunityAccessGrantConnectionResolvers<ContextType>;
  UserGroupCommunityAccessGrantEdge?: UserGroupCommunityAccessGrantEdgeResolvers<ContextType>;
  UserGroupItemAccessGrant?: UserGroupItemAccessGrantResolvers<ContextType>;
  UserGroupItemAccessGrantConnection?: UserGroupItemAccessGrantConnectionResolvers<ContextType>;
  UserGroupItemAccessGrantEdge?: UserGroupItemAccessGrantEdgeResolvers<ContextType>;
  UserItemAccessGrant?: UserItemAccessGrantResolvers<ContextType>;
  UserItemAccessGrantConnection?: UserItemAccessGrantConnectionResolvers<ContextType>;
  UserItemAccessGrantEdge?: UserItemAccessGrantEdgeResolvers<ContextType>;
  VariableDateProperty?: VariableDatePropertyResolvers<ContextType>;
  VariablePrecisionDate?: VariablePrecisionDateResolvers<ContextType>;
  VersionRequirement?: GraphQLScalarType;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
