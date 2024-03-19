import React, { Ref, forwardRef } from "react";
import { Trans } from "react-i18next";
import Input from "components/forms/Input";
import type InputProps from "components/forms/inputType";

type BaseProps = Omit<InputProps, "label" | "description">;

type PartialProps = Partial<Pick<InputProps, "label" | "description">>;

const AltText = forwardRef(
  (
    {
      defaultValue: _defaultValue,
      label,
      description,
      ...props
    }: BaseProps & PartialProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    return (
      <Input
        ref={ref}
        label={label || "forms.fields.alt_text"}
        description={
          description || (
            <Trans
              i18nKey="forms.fields.alt_text_description"
              components={[
                <a
                  key="link"
                  href="https://webaim.org/techniques/alttext/"
                  target="_blank"
                  rel="noreferrer"
                  className="a-link"
                >
                  #
                </a>,
              ]}
            />
          )
        }
        {...props}
      />
    );
  },
);

export default AltText;
