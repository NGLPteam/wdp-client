import { default as SidebarItem } from "./HeroSidebarItem";
import { default as VariablePrecisionDate } from "./VariablePrecisionDate";
import { default as EntityLink } from "./EntityLink";
import { default as MetadataLabel } from "./MetadataLabel";
import { default as MetadataValue } from "./MetadataValue";

export const inlineSlotComponents = { VariablePrecisionDate, EntityLink };

export const blockSlotComponents = {
  VariablePrecisionDate,
  EntityLink,
  SidebarItem,
  MetadataLabel,
  MetadataValue,
};