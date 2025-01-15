import { default as SidebarItem } from "./HeroSidebarItem";
import { default as VariablePrecisionDate } from "./VariablePrecisionDate";
import { default as EntityLink } from "./EntityLink";
import { default as MetadataLabel } from "./MetadataLabel";
import { default as MetadataValue } from "./MetadataValue";
import { default as MetadataItem } from "./MetadataItem";
import { default as PDFViewer } from "./PDFViewer";
import { default as CopyLink } from "./CopyLink";
import { default as DotList } from "./DotList";
import { default as DotItem } from "./DotItem";
import { default as Asset } from "./Asset";

export const inlineSlotComponents = {
  VariablePrecisionDate,
  EntityLink,
  DotList,
  DotItem,
};

export const blockSlotComponents = {
  VariablePrecisionDate,
  EntityLink,
  SidebarItem,
  MetadataLabel,
  MetadataValue,
  MetadataItem,
  PDFViewer,
  CopyLink,
  DotList,
  DotItem,
  Asset,
};
