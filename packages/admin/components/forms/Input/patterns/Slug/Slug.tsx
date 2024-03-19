import React, { Ref, forwardRef } from "react";
import { useTranslation } from "react-i18next";
import Input from "components/forms/Input";

import type InputProps from "components/forms/inputType";

const Slug = forwardRef(
  ({ description, ...props }: InputProps, ref: Ref<HTMLInputElement>) => {
    const { t } = useTranslation();
    const pattern = "[^\\s!?\\/.*#|]+";

    return (
      <Input
        type="text"
        ref={ref}
        pattern={pattern}
        description={description || t("forms.fields.slug_description")}
        {...props}
      />
    );
  },
);

export default Slug;
