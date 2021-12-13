import React from "react";
import { useTranslation } from "react-i18next";
import * as Styled from "./DownloadLink.styles";
import { IconFactory } from "components/factories";

type BaseProps = React.ComponentProps<typeof Styled.DownloadLink>;

/* Simple download text and icon,
 * style can be changed using the className property */
export default function DownloadLink({
  className = "t-label-lg",
  children,
  ...props
}: Props & BaseProps) {
  const { t } = useTranslation();

  return (
    <Styled.DownloadLink
      className={className}
      target="_blank"
      download
      {...props}
    >
      <span>{children || t("common.download")}</span>{" "}
      <IconFactory icon="download" />
    </Styled.DownloadLink>
  );
}

interface Props {
  className?: string;
}
