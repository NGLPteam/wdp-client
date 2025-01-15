import { default as SidebarItem } from "./HeroSidebarItem";
import { default as VariablePrecisionDate } from "./VariablePrecisionDate";
import { default as EntityLink } from "./EntityLink";
import { default as MetadataLabel } from "./MetadataLabel";
import { default as MetadataValue } from "./MetadataValue";
import { default as PDFViewer } from "./PDFViewer";
import { default as CopyLink } from "./CopyLink";
import { default as DotList } from "./DotList";
import { default as DotItem } from "./DotItem";

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
  PDFViewer,
  CopyLink,
  DotList,
  DotItem,
};
