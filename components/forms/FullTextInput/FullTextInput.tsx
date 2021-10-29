import React, { Ref, forwardRef, useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";
import Fieldset from "components/forms/Fieldset";
import FormGrid from "components/forms/FormGrid";
import Textarea from "components/forms/Textarea";
import Select from "components/forms/Select";
import Input from "components/forms/Input";
import type InputProps from "components/forms/inputType";

const FullTextInput = forwardRef(
  (
    { label, name, defaultValue, value, onChange, ...props }: Props,
    // The ref is passed in from Control, but isn't needed for this input
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref: Ref<HTMLInputElement>
  ) => {
    const { t } = useTranslation();
    const contentRef = useRef<HTMLTextAreaElement>(null);
    const kindRef = useRef<HTMLSelectElement>(null);
    const langRef = useRef<HTMLInputElement>(null);

    const handleChange = useCallback(() => {
      const content = contentRef?.current?.value;
      const kind = kindRef?.current?.value;
      const lang = langRef?.current?.value;

      if (onChange) {
        onChange({ content, kind, lang });
      }
    }, [contentRef, kindRef, onChange]);

    const options = [
      {
        label: "HTML",
        value: "HTML",
      },
      {
        label: "Markdown",
        value: "MARKDOWN",
      },
      {
        label: "Text",
        value: "TEXT",
      },
    ];

    return (
      <Fieldset label={t(label)}>
        <FormGrid>
          <Select
            name="kind"
            label={t("forms.full_text.kind_label")}
            options={options}
            defaultValue={value?.kind || defaultValue?.kind}
            onChange={handleChange}
            {...props}
            ref={kindRef}
          />
          <Input
            name="lang"
            label={t("forms.full_text.lang_label")}
            onChange={handleChange}
            defaultValue={value?.lang || defaultValue?.lang}
            ref={langRef}
            {...props}
          />
        </FormGrid>
        <Textarea
          name="content"
          label={t("forms.full_text.content_label")}
          onChange={handleChange}
          defaultValue={value?.content || defaultValue?.content}
          ref={contentRef}
          {...props}
        />
      </Fieldset>
    );
  }
);

type Value = {
  content?: string;
  kind?: string;
  lang?: string;
};

interface Props
  extends Omit<InputProps, "placeholder" | "description" | "onChange"> {
  /** Returns the current value */
  onChange?: (value: Value) => void;
  /** Default value */
  value?: Value;
}

export default FullTextInput;
