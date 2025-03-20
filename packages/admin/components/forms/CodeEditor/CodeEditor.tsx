import { EditorView } from "@codemirror/view";
import CodeMirror from "@uiw/react-codemirror";
import { xml } from "@codemirror/lang-xml";
import { githubLight } from "@uiw/codemirror-theme-github";
import { useTranslation } from "react-i18next";
import BaseInputWrapper from "../BaseInputWrapper";
import * as Styled from "./CodeEditor.styles";
import type InputProps from "../inputType";

const CodeEditor = ({
  hideLabel,
  description,
  placeholder,
  isWide,
  value,
  onChange,
  isDialog,
  ...textareaProps
}: Omit<InputProps, "label" | "name"> & {
  value: string;
  isDialog: boolean;
}) => {
  const { t } = useTranslation();

  return (
    <BaseInputWrapper
      name="codeEditor"
      label={t("forms.extraction_mapping_template.template_label")}
      hideLabel={hideLabel}
      description={description}
      required={textareaProps.required}
      isWide={isWide}
    >
      <Styled.TextareaInput>
        <CodeMirror
          value={value}
          extensions={[xml(), EditorView.lineWrapping]}
          height={isDialog ? "70dvh" : "25rem"}
          maxWidth="100%"
          theme={githubLight}
          onChange={onChange}
        />
      </Styled.TextareaInput>
    </BaseInputWrapper>
  );
};

export default CodeEditor;
