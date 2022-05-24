import { forwardRef } from "react";
import { MaybeInputRef } from "@castiron/common-types";
import { useUID } from "react-uid";
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
    const id = useUID();
    /* stopPropagation is required for input events to prevent clicking into the entity hierarchy; preventDefault is required to not trigger form submit events. -LD */
    const handleCheck = (
      e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<SVGSVGElement>
    ) => {
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
        aria-disabled={!hasDescendants}
        $descendants={hasDescendants}
      >
        <Styled.Item aria-label={props["aria-label"] ?? undefined}>
          <input
            id={id}
            className="a-hidden"
            type="checkbox"
            ref={ref}
            {...props}
            onChange={handleCheck}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          />
          <Styled.Icon
            icon="checkbox"
            role="presentation"
            onClick={handleCheck}
            $checked={checked}
          />
          {children && (
            <Styled.Label htmlFor={id} $descendants={hasDescendants}>
              {children}
            </Styled.Label>
          )}
        </Styled.Item>
        {hasDescendants && <Styled.Arrow icon="arrow" role="presentation" />}
      </Styled.Wrapper>
    );
  }
);

export default EntitySelector;
