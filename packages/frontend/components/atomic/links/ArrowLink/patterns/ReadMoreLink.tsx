import React, { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import ArrowLink from "..";
import { MaybeLinkRef } from "types/ref";

function ReadMoreLink({ ...props }, ref: MaybeLinkRef) {
  const { t } = useTranslation();

  return (
    <ArrowLink ref={ref} {...props}>
      {t("common.read_more")}
    </ArrowLink>
  );
}

export default forwardRef(ReadMoreLink);
