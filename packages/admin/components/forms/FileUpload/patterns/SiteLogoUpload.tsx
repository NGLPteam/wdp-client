import React from "react";
import { graphql } from "react-relay";
import BaseFileUpload from "../BaseFileUpload";
import { SiteLogoUploadFragment$key } from "@/relay/SiteLogoUploadFragment.graphql";
import { useMaybeFragment } from "hooks";
type UploadProps = React.ComponentProps<typeof BaseFileUpload>;

export default function SiteLogoUpload({ data, ...inputProps }: Props) {
  const imageData = useMaybeFragment(fragment, data);
  // Base file upload has a strict image object
  const image = {
    png: { url: imageData?.original.url, alt: imageData?.original?.alt },
  };

  return (
    <BaseFileUpload
      image={image}
      originalFilename={imageData?.originalFilename}
      storage={imageData?.storage ? imageData.storage.toString() : undefined}
      {...inputProps}
    />
  );
}

interface Props extends Omit<UploadProps, "image" | "storage"> {
  data?: SiteLogoUploadFragment$key | null;
}

const fragment = graphql`
  fragment SiteLogoUploadFragment on SiteLogoAttachment {
    originalFilename
    storage
    original {
      url
      alt
    }
  }
`;
