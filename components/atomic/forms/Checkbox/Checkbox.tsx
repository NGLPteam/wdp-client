import React, { forwardRef, useRef, useEffect } from "react";
import * as Styled from "./Checkbox.styles";

function Checkbox({ children, indeterminate, ...props }: Props, ref) {
  const defaultRef = useRef();
  const resolvedRef = ref || defaultRef;

  useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);

  return (
    <Styled.Label aria-label={props["aria-label"] || null}>
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
  children?: JSX.Element;
  indeterminate?: boolean;
}

export default forwardRef(Checkbox);
