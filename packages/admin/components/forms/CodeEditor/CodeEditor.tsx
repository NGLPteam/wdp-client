import { EditorView } from "@codemirror/view";
import CodeMirror from "@uiw/react-codemirror";
import { xml } from "@codemirror/lang-xml";
import { githubLight } from "@uiw/codemirror-theme-github";
import BaseInputWrapper from "../BaseInputWrapper";
import * as Styled from "./CodeEditor.styles";
import type InputProps from "../inputType";

const CodeEditor = ({
  hideLabel,
  description,
  isWide,
  value,
  onChange,
  isDialog = false,
  required,
  ...props
}: WrappedProps | UnwrappedProps) => {
  const editor = (editable: boolean) => (
    <Styled.Wrapper>
      <CodeMirror
        value={value}
        extensions={[xml(), EditorView.lineWrapping]}
        height={isDialog ? "70dvh" : "25rem"}
        maxWidth="100%"
        theme={githubLight}
        onChange={onChange}
        editable={editable}
      />
    </Styled.Wrapper>
  );

  if ("unwrapped" in props) return editor(false);

  return (
    <BaseInputWrapper
      name="codeEditor"
      label={props.label}
      hideLabel={hideLabel}
      description={description}
      required={required}
      isWide={isWide}
    >
      {editor(true)}
    </BaseInputWrapper>
  );
};

export default CodeEditor;

type BaseProps = Omit<InputProps, "name" | "label"> & {
  value: string;
  isDialog?: boolean;
};

type WrappedProps = BaseProps & {
  label: string;
};

type UnwrappedProps = BaseProps & {
  unwrapped: true;
};
