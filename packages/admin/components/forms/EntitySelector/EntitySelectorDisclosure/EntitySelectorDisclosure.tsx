import { useState, useCallback } from "react";
import BaseInputLabel from "components/forms/BaseInputLabel";
import { ButtonControl } from "components/atomic";
import EntitySelector from "../";
import EntitySelectorController from "../EntitySelectorController";
import EntityTypeahead from "../EntityTypeahead";
import useDisclosureState from "./hooks/useDisclosureState";
import * as Styled from "./EntitySelectorDisclosure.styles";
import type { EntityOption } from "../EntitySelectorController";

type EntitySelectorProps = React.ComponentProps<typeof EntitySelector>;
type ControllerProps = React.ComponentProps<typeof EntitySelectorController>;

interface Props extends Omit<EntitySelectorProps, "onSelect"> {
  onSelect: (val: string) => void;
  selectableTypes: ControllerProps["selectableTypes"];
}

export default function Disclosure(props: Props) {
  const { label, name, onSelect, selectableTypes, startSlug } = props;

  const [selected, setSelected] = useState<EntityOption | undefined>();
  const internalOnSelect = useCallback(
    (entity: EntityOption | undefined) => {
      setSelected(entity);
      onSelect(entity?.id ?? "");
    },
    [setSelected, onSelect],
  );

  const { disclosureProps, contentProps } = useDisclosureState({
    initialVisible: false,
    /* eslint-disable @typescript-eslint/no-empty-function */
    onBlur: () => {},
  });

  return (
    <>
      <Styled.FieldWrapper>
        <BaseInputLabel as="span">{label}</BaseInputLabel>
        <Styled.Field>
          <EntityTypeahead
            name={name}
            selected={selected}
            onSelect={internalOnSelect}
            selectableTypes={selectableTypes}
          />
          <ButtonControl {...disclosureProps} type="button">
            Browse
          </ButtonControl>
        </Styled.Field>
        <Styled.SelectorWrapper
          $visible={contentProps.visible}
          {...contentProps}
        >
          <EntitySelector
            {...props}
            startSlug={selected?.slug ?? startSlug}
            onSelect={(entity) => {
              internalOnSelect(entity);
              disclosureProps.onClick();
            }}
            selected={selected}
            isDisclosure
            visible={contentProps.visible}
            height={"400px"}
          />
        </Styled.SelectorWrapper>
      </Styled.FieldWrapper>
    </>
  );
}
