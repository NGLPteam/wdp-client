import type { FieldValues } from "react-hook-form";
import type { AssetKind, ContributorKind } from "types/graphql-schema";

interface SelectOption {
  readonly label: string;
  readonly value: string;
}

export interface AssetSelectOption extends SelectOption {
  readonly kind: AssetKind;
}

export interface ContributorSelectOption extends SelectOption {
  readonly kind: ContributorKind;
}

export interface State<T extends FieldValues = FieldValues> {
  /**
   * All available assets, specific to the schema instance.
   */
  readonly assets: AssetSelectOption[];
  /**
   * All available contributors.
   */
  readonly contributors: ContributorSelectOption[];
  /**
   * Future-proofing for possible later use with create forms
   */
  readonly defaultValues: T;

  /**
   * The entity ID for the schema instance.
   */
  readonly entityId?: string;

  /**
   * The current state of the form, provided by the API.
   */
  readonly fieldValues: T;

  /**
   * The slug for the current schema version
   */
  readonly schemaVersionSlug?: string;
}
