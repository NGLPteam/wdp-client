import React, { forwardRef, useRef, useEffect } from "react";

function IndeterminateCheckbox({ indeterminate, ...rest }: Props, ref) {
  const defaultRef = useRef();
  const resolvedRef = ref || defaultRef;

  useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);

  return (
    <>
      <input type="checkbox" ref={resolvedRef} {...rest} />
    </>
  );
}

interface Props {
  indeterminate?: boolean;
}

export default forwardRef(IndeterminateCheckbox);
