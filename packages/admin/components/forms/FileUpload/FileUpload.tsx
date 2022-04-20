import React from "react";
import { graphql } from "react-relay";
import { FileUploadFragment$key } from "@/relay/FileUploadFragment.graphql";
import { useMaybeFragment } from "hooks";
import BaseFileUpload from "./BaseFileUpload";
type UploadProps = React.ComponentProps<typeof BaseFileUpload>;

export default function FileUpload({ data, ...inputProps }: Props) {
  const imageData = useMaybeFragment(fragment, data);

  return (
    <BaseFileUpload
      image={imageData?.thumb}
      storage={imageData?.storage ? imageData.storage.toString() : undefined}
      {...inputProps}
    />
  );
}

interface Props extends Omit<UploadProps, "image" | "storage"> {
  data?: FileUploadFragment$key | null;
}

const fragment = graphql`
  fragment FileUploadFragment on ImageAttachment {
    storage
    thumb {
      png {
        alt
        url
      }
    }
  }
`;
