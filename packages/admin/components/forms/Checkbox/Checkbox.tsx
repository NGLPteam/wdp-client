import React, { forwardRef, Ref } from "react";
import * as Styled from "./Checkbox.styles";

function Checkbox({ children, ...props }: Props, ref: Ref<HTMLInputElement>) {
  // const defaultRef = useRef<HTMLInputElement>(null);
  // const resolvedRef = ref || defaultRef;

  // useEffect(() => {
  //   (resolvedRef as MutableRefObject<HTMLInputElement>).current.indeterminate =
  //     indeterminate || false;
  // }, [resolvedRef, indeterminate]);

  return (
    <Styled.Label aria-label={props["aria-label"] || undefined}>
      <input className="a-hidden" type="checkbox" ref={ref} {...props} />
      <Styled.Icon icon="checkbox" data-checked="false" role="presentation" />
      {children && (
        <Styled.LabelText className="t-copy-sm">{children}</Styled.LabelText>
      )}
    </Styled.Label>
  );
}

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.JSX.Element | string;
  indeterminate?: boolean;
}

export default forwardRef(Checkbox);
