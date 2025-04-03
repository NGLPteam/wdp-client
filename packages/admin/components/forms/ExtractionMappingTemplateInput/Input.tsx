import { useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";
import Fieldset from "components/forms/Fieldset";
import FormGrid from "components/forms/FormGrid";
import Select from "components/forms/Select";
import Errors from "components/forms/Errors";
import dynamic from "next/dynamic";
import Dialog from "components/layout/Dialog";
import { FormFieldSkeleton } from "components/atomic/loading";
import Buttons from "./Buttons";
import type { Props as WrapperProps } from "./Wrapper";

const CodeEditor = dynamic(() => import("../CodeEditor"), {
  loading: () => <FormFieldSkeleton />,
  ssr: false,
});

export type Options = React.ComponentProps<typeof Select>["options"];

interface Props extends WrapperProps {
  options?: Options;
  parentDefault?: string;
}

export default function ExtractionMappingTemplateInput({
  label,
  onChange,
  value,
  sourceSlug,
  options,
  parentDefault,
  description,
}: Props) {
  const { t } = useTranslation();

  const selectRef = useRef<HTMLSelectElement>(null);

  const handleChange = useCallback(() => {
    const example = selectRef.current?.value;
    onChange(example);
  }, [selectRef, onChange]);

  const handleEditorChange = useCallback(
    (value: string) => {
      onChange(value);
      if (selectRef.current) selectRef.current.value = "";
    },
    [onChange, selectRef],
  );

  const handleReset = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      onChange("");
      if (selectRef.current) selectRef.current.value = "";
    },
    [onChange],
  );

  const handleRevert = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      if (parentDefault) onChange(parentDefault);
    },
    [onChange, parentDefault],
  );

  const editor = (isDialog: boolean) => (
    <>
      <CodeEditor
        isWide
        required
        label={t("forms.extraction_mapping_template.code_editor_label")}
        value={value ?? ""}
        onChange={handleEditorChange}
        isDialog={isDialog}
      />
      <Buttons
        value={value}
        handleReset={handleReset}
        handleRevert={handleRevert}
        parentDefault={parentDefault}
        isDialog={isDialog}
      />
    </>
  );

  return (
    <Fieldset
      label={t(label)}
      description={
        description ||
        (sourceSlug
          ? t("forms.extraction_mapping_template.child_description")
          : t("forms.extraction_mapping_template.description"))
      }
    >
      <FormGrid>
        {!!options && (
          <Select
            name="example"
            label={t("forms.extraction_mapping_template.select_label")}
            options={options}
            onChange={handleChange}
            ref={selectRef}
            defaultValue={value}
            isWide
          />
        )}
        <Dialog.Provider
          options={{ modal: true, scrollLockClassName: "has-scroll-lock" }}
        >
          {editor(false)}
          <Dialog.Content>{editor(true)}</Dialog.Content>
        </Dialog.Provider>
      </FormGrid>
      <Errors name="extractionMappingTemplate" label={t(label)} />
    </Fieldset>
  );
}
