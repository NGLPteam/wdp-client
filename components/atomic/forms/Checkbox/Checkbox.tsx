import React, {
  forwardRef,
  Ref,
  useRef,
  useEffect,
  MutableRefObject,
} from "react";
import * as Styled from "./Checkbox.styles";

function Checkbox(
  { children, indeterminate, ...props }: Props,
  ref: Ref<HTMLInputElement>
) {
  const defaultRef = useRef<HTMLInputElement>(null);
  const resolvedRef = ref || defaultRef;

  useEffect(() => {
    (resolvedRef as MutableRefObject<HTMLInputElement>).current.indeterminate =
      indeterminate || false;
  }, [resolvedRef, indeterminate]);

  return (
    <Styled.Label aria-label={props["aria-label"] || undefined}>
      <Styled.Checkbox
        className="a-hidden"
        type="checkbox"
        ref={resolvedRef}
        {...props}
      />
      <Styled.Icon icon="checkbox" data-checked="false" role="presentation" />
      {children && (
        <Styled.LabelText className="t-copy-sm">{children}</Styled.LabelText>
      )}
    </Styled.Label>
  );
}

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: JSX.Element | string;
  indeterminate?: boolean;
}

export default forwardRef(Checkbox);
