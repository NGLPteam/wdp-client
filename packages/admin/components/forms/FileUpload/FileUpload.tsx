import React from "react";
import { graphql } from "react-relay";
import BaseFileUpload from "./BaseFileUpload";
import { FileUploadFragment$key } from "@/relay/FileUploadFragment.graphql";
import { useMaybeFragment } from "hooks";
type UploadProps = React.ComponentProps<typeof BaseFileUpload>;

export default function FileUpload({ data, ...inputProps }: Props) {
  const imageData = useMaybeFragment(fragment, data);

  return (
    <BaseFileUpload
      image={imageData?.thumb}
      originalFilename={imageData?.originalFilename}
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
    originalFilename
    storage
    thumb {
      png {
        alt
        url
      }
    }
  }
`;
