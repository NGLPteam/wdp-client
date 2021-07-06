import React, { forwardRef, useRef, useEffect } from "react";

function Checkbox({ children, indeterminate, ...props }: Props, ref) {
  const defaultRef = useRef();
  const resolvedRef = ref || defaultRef;

  useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);

  return (
    <label aria-label={props["aria-label"] || null}>
      <input type="checkbox" ref={resolvedRef} {...props} />
      {children}
    </label>
  );
}

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: JSX.Element;
  indeterminate?: boolean;
}

export default forwardRef(Checkbox);
