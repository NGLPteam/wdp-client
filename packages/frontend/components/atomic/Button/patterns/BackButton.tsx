import React, { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import type { MaybeButtonRef } from "@castiron/common-types";
import Button from "..";

type BaseProps = React.ComponentProps<typeof Button>;

/* Simple download text and icon,
 * style can be changed using the className property */
function BackButton({ children, ...props }: BaseProps, ref: MaybeButtonRef) {
  const { t } = useTranslation();

  return (
    <Button
      ref={ref}
      as="a"
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
