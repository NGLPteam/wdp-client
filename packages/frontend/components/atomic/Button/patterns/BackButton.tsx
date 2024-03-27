import React, { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import Button from "..";
import type { MaybeButtonRef } from "@castiron/common-types";

type Props = React.ComponentProps<typeof Button> & {
  as: "a" | "div" | "button";
};

function BackButton(
  { children, as = "a", ...props }: Props,
  ref: MaybeButtonRef,
) {
  const { t } = useTranslation();

  return (
    <Button
      ref={ref}
      as={as}
      size="sm"
      secondary
      {...props}
      icon="arrowLeft"
      iconLeft
    >
      {children || t("common.back")}
    </Button>
  );
}

export default forwardRef(BackButton);
