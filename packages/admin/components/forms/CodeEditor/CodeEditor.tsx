import { EditorView } from "@codemirror/view";
import CodeMirror from "@uiw/react-codemirror";
import { xml } from "@codemirror/lang-xml";
import { githubLight } from "@uiw/codemirror-theme-github";
import BaseInputWrapper from "../BaseInputWrapper";
import * as Styled from "./CodeEditor.styles";
import type InputProps from "../inputType";

const CodeEditor = ({
  label,
  hideLabel,
  description,
  isWide,
  value,
  onChange,
  isDialog,
  required,
}: Omit<InputProps, "name"> & {
  value: string;
  isDialog: boolean;
}) => {
  return (
    <BaseInputWrapper
      name="codeEditor"
      label={label}
      hideLabel={hideLabel}
      description={description}
      required={required}
      isWide={isWide}
    >
      <Styled.Wrapper>
        <CodeMirror
          value={value}
          extensions={[xml(), EditorView.lineWrapping]}
          height={isDialog ? "70dvh" : "25rem"}
          maxWidth="100%"
          theme={githubLight}
          onChange={onChange}
        />
      </Styled.Wrapper>
    </BaseInputWrapper>
  );
};

export default CodeEditor;
