import { forwardRef, useRef } from "react";
import { MaybeInputRef } from "@castiron/common-types";
import * as Styled from "./EntitySelector.styles";

interface Props extends React.HTMLProps<HTMLInputElement> {
  children?: JSX.Element | string;
  hasDescendants?: boolean;
  onShowDescendants: () => void;
  checked: boolean;
  onToggle: () => void;
}

const EntitySelector = forwardRef(
  (
    {
      children,
      hasDescendants,
      checked,
      onToggle,
      onShowDescendants,
      ...props
    }: Props,
    ref: MaybeInputRef
  ) => {
    const textRef = useRef(null);
    const handleCheck = (e: React.MouseEvent<HTMLLabelElement>) => {
      if (e.target === textRef.current) {
        e.preventDefault();
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      onToggle();
    };
    const handleExpand = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      onShowDescendants();
    };
    return (
      <Styled.Wrapper
        onClick={hasDescendants ? handleExpand : undefined}
        $descendants={hasDescendants}
      >
        <Styled.Label
          aria-label={props["aria-label"] || undefined}
          onClick={handleCheck}
        >
          <input
            className="a-hidden"
            type="checkbox"
            ref={ref}
            {...props}
            checked={checked}
            readOnly
          />
          <Styled.Icon
            icon="checkbox"
            data-checked={checked}
            role="presentation"
          />
          {children && (
            <Styled.LabelText ref={textRef} $descendants={hasDescendants}>
              {children}
            </Styled.LabelText>
          )}
        </Styled.Label>
        {hasDescendants && (
          <Styled.Arrow icon="arrow" role="presentpresentation" />
        )}
      </Styled.Wrapper>
    );
  }
);

export default EntitySelector;
