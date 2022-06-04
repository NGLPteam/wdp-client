import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import { MaybeInputRef } from "@castiron/common-types";
import { useUID } from "react-uid";
import type { EntityOption } from "../EntitySelectorUI/Controller";
import * as Styled from "./EntitySelector.styles";
import { ButtonControl } from "components/atomic";

interface Props extends React.HTMLProps<HTMLInputElement> {
  entity: EntityOption;
  hasDescendants?: boolean;
  onShowDescendants: () => void;
  checked: boolean;
  onSelectEntity: () => void;
  onPageChange: () => void;
}

const EntitySelector = forwardRef(
  (
    {
      entity,
      hasDescendants,
      checked,
      onSelectEntity,
      onPageChange,
      onShowDescendants,
      ...props
    }: Props,
    ref: MaybeInputRef
  ) => {
    const id = useUID();
    const { t } = useTranslation();
    /* stopPropagation is required for input events to prevent clicking into the entity hierarchy; preventDefault is required to not trigger form submit events. -LD */
    const handleSelect = (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.MouseEvent<HTMLLabelElement>
    ) => {
      e.preventDefault();
      e.stopPropagation();
      onSelectEntity();
    };
    const handleExpand = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      onPageChange();
      onShowDescendants();
    };

    return (
      <Styled.Wrapper $checked={checked}>
        <Styled.Item aria-label={props["aria-label"] ?? undefined}>
          <input
            id={id}
            className="a-hidden"
            type="radio"
            ref={ref}
            {...props}
            onChange={handleSelect}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          />
          <div>
            <Styled.Label htmlFor={id} onClick={handleSelect}>
              {entity.title}
            </Styled.Label>
            {entity.schemaVersion && (
              <Styled.Metadata className="t-copy-sm">
                {t("glossary.schema")}: {entity.schemaVersion.name}
              </Styled.Metadata>
            )}
          </div>
        </Styled.Item>
        {hasDescendants && (
          <ButtonControl onClick={handleExpand} icon="arrow" iconRotate={90} />
        )}
      </Styled.Wrapper>
    );
  }
);

export default EntitySelector;
