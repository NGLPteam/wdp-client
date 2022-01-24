import React, { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import { MaybeLinkRef } from "@wdp/lib/types/ref";
import ArrowLink from "./ArrowLink";

function ReadMoreLink({ ...props }, ref: MaybeLinkRef) {
  const { t } = useTranslation();

  return (
    <ArrowLink ref={ref} {...props}>
      {t("common.read_more")}
    </ArrowLink>
  );
}

export default forwardRef(ReadMoreLink);
