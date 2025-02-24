import { useState, useId } from "react";
import { useTranslation } from "react-i18next";
import { useFormContext } from "react-hook-form";
import Checkbox from "../Checkbox";
import BaseInputLabel from "../BaseInputLabel";
import * as Styled from "./OrderingLinksSelection.styles";

export default function OrderingInclude({ name }: { name: string }) {
  const { t } = useTranslation();

  const id = useId();

  const { setValue: setFormValue, getValues } = useFormContext();

  const initialState = {
    descendants: false,
    children: false,
    links: false,
    references: true,
    contains: true,
  };

  const [values, setValues] = useState(getValues("include") || initialState);

  const keepLinksInSync = (key: keyof typeof values, change: typeof values) => {
    switch (key) {
      case "references":
      case "contains":
        if (!change.references && !change.contains)
          return { ...change, links: false };
        return change;
      case "links":
        if (change.links && !change.references && !change.contains)
          return { ...change, contains: true, references: true };
        return change;
      default:
        return change;
    }
  };

  const handleChange = (key: keyof typeof values) => () => {
    const change = { ...values, [key]: !values[key] };
    const update = keepLinksInSync(key, change);
    setValues(update);
    setFormValue(name, update);
  };

  return (
    <Styled.Fieldset role="group" aria-describedby={id}>
      <BaseInputLabel as="legend" id={id}>
        {t("forms.ordering_relationships.legend")}
      </BaseInputLabel>
      <Styled.Description>
        {t("forms.ordering_relationships.description")}
      </Styled.Description>
      <Styled.Fields>
        <Checkbox
          checked={values.descendants}
          onChange={handleChange("descendants")}
        >
          {t("forms.ordering_relationships.descendants_label")}
        </Checkbox>
        {values.descendants && (
          <Styled.Nested>
            <Checkbox
              checked={values.children}
              onChange={handleChange("children")}
            >
              {t("forms.ordering_relationships.children_label")}
            </Checkbox>
          </Styled.Nested>
        )}
        <Checkbox checked={values.links} onChange={handleChange("links")}>
          {t("forms.ordering_relationships.links_label")}
        </Checkbox>
        {values.links && (
          <Styled.Nested>
            <Checkbox
              checked={values.contains}
              onChange={handleChange("contains")}
            >
              {t("forms.ordering_relationships.contains_label")}
            </Checkbox>
            <Checkbox
              checked={values.references}
              onChange={handleChange("references")}
            >
              {t("forms.ordering_relationships.references_label")}
            </Checkbox>
          </Styled.Nested>
        )}
      </Styled.Fields>
    </Styled.Fieldset>
  );
}
