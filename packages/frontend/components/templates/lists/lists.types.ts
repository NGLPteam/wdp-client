import type { ImageAttachment } from "@/types/graphql-schema";
import type { Slot } from "../templates.types";

/*
  Question: Will the item thumbs be attachments or liquid templates?
*/

export type ListItem = {
  slots: {
    thumbnail: ImageAttachment | null;
    contributors: Slot | null;
    header: Slot | null;
    subheader: Slot | null;
    metaOne: Slot | null;
    metaTwo: Slot | null;
    contextOne: Slot | null;
    contextTwo: Slot | null;
    contextThree: Slot | null;
    summary: Slot | null;
  };
};
