import React from "react";
import { useTranslation } from "react-i18next";
import * as Styled from "./ExternalLink.styles";
import { IconFactory } from "components/factories";

type BaseProps = React.ComponentProps<typeof Styled.Link>;

/* Simple download text and icon,
 * style can be changed using the className property */
export default function ExternalLink({
  className = "t-copy",
  children,
  ...props
}: Props & BaseProps) {
  const { t } = useTranslation();

  return (
    <a className={className} target="_blank" {...props}>
      <span>{children || t("common.download")}</span>{" "}
      <IconFactory icon="linkExternal" />
    </a>
  );
}

interface Props {
  className?: string;
}
