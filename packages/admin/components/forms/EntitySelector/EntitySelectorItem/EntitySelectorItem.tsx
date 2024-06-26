import { forwardRef } from "react";
import { MaybeInputRef } from "@castiron/common-types";
import { useId } from "react";
import { IconFactory } from "components/factories";
import * as Styled from "./EntitySelectorItem.styles";
import type { EntityOption } from "../EntitySelectorController";

interface Props extends React.HTMLProps<HTMLInputElement> {
  entity: EntityOption;
  hasDescendants?: boolean;
  onShowDescendants: () => void;
  checked: boolean;
  onSelectEntity: () => void;
  onPageChange: (() => void) | null;
  isSelectable: boolean;
}

const EntitySelectorItem = forwardRef(
  (
    {
      entity,
      hasDescendants,
      checked,
      onSelectEntity,
      onPageChange,
      onShowDescendants,
      isSelectable,
      ...props
    }: Props,
    ref: MaybeInputRef,
  ) => {
    const id = useId();

    /* preventDefault is required to not trigger form submit events. -LD */
    const handleSelect = (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.MouseEvent<HTMLLabelElement>,
    ) => {
      e.preventDefault();
      if (!isSelectable) return;
      onSelectEntity();
    };
    const handleExpand = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (onPageChange) onPageChange();
      onShowDescendants();
    };

    return (
      <Styled.Wrapper $checked={checked} $isSelectable={isSelectable}>
        <Styled.Item
          aria-label={props["aria-label"] ?? undefined}
          onClick={handleSelect}
          $checked={checked}
          $isSelectable={isSelectable}
        >
          <input
            id={id}
            className="a-hidden"
            type="radio"
            ref={ref}
            {...props}
            onChange={handleSelect}
            onClick={(e) => {
              e.preventDefault();
            }}
            disabled={!isSelectable}
          />
          <div>
            <Styled.Label>{entity.title}</Styled.Label>
            {entity.schemaVersion && (
              <Styled.Metadata className="t-copy-sm">
                {entity.schemaVersion.name}
              </Styled.Metadata>
            )}
          </div>
        </Styled.Item>
        {hasDescendants && (
          <Styled.ExpandButton onClick={handleExpand} $checked={checked}>
            <Styled.IconWrapper>
              <IconFactory icon="arrow" rotate={90} />
            </Styled.IconWrapper>
          </Styled.ExpandButton>
        )}
      </Styled.Wrapper>
    );
  },
);

export default EntitySelectorItem;
