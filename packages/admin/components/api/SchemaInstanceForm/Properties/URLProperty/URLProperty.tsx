import React from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import ScalarProperty from "../ScalarProperty";
import Fieldset from "components/forms/Fieldset";
import FormGrid from "components/forms/FormGrid";
import Input from "components/forms/Input";
import type { URLPropertyFragment$key } from "@/relay/URLPropertyFragment.graphql";

export default function URLProperty(props: Props) {
  const field = useFragment<URLPropertyFragment$key>(fragment, props.field);
  const { register } = useFormContext();
  const { t } = useTranslation();

  /**
   * ScalarProperty registers the name that's returned from the API,
   * but we need to register two sub fields.
   * That's why we're getting the form context here instead of using the
   * property passed from ScalarProperty.
   * TODO: Remove registration from ScalarProperty,
   * update Properties to do their own registration.
   */
  return (
    <ScalarProperty field={field} registerName={false}>
      {({ label, name, required }) => {
        return (
          <Fieldset label={label}>
            <FormGrid>
              <Input
                label={t("forms.fields.title")}
                required={required}
                isWide
                {...register(`${name}.label`, { required })}
              />
              <Input
                type="url"
                label={t("forms.fields.url")}
                required={required}
                isWide
                {...register(`${name}.href`, { required })}
              />
            </FormGrid>
          </Fieldset>
        );
      }}
    </ScalarProperty>
  );
}

interface Props {
  field: URLPropertyFragment$key;
}

const fragment = graphql`
  fragment URLPropertyFragment on URLProperty {
    ...ScalarPropertyFragment

    url {
      href
      label
      title
    }
  }
`;
