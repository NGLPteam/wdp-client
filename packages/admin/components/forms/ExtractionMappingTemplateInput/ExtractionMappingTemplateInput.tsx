import {
  useRef,
  useCallback,
  useEffect,
  useState,
  forwardRef,
  type Ref,
} from "react";
import { useTranslation } from "react-i18next";
import { fetchQuery, graphql, useRelayEnvironment } from "react-relay";
import Fieldset from "components/forms/Fieldset";
import FormGrid from "components/forms/FormGrid";
import Textarea from "components/forms/Textarea";
import Select from "components/forms/Select";
import Checkbox from "components/forms/Checkbox";
import Errors from "components/forms/Errors";
import ButtonControl from "components/atomic/buttons/ButtonControl";
import type { ExtractionMappingTemplateInputQuery as Query } from "@/relay/ExtractionMappingTemplateInputQuery.graphql";
import type { ExtractionMappingTemplateInputSourceQuery as SourceQuery } from "@/relay/ExtractionMappingTemplateInputSourceQuery.graphql";
import type InputProps from "components/forms/inputType";

const ExtractionMappingTemplateInput = forwardRef(
  (
    { label, onChange, value, sourceSlug }: Props,
    _ref: Ref<HTMLInputElement>,
  ) => {
    const { t } = useTranslation();
    const selectRef = useRef<HTMLSelectElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const checkboxRef = useRef<HTMLInputElement>(null);

    const [options, setOptions] = useState<Options | undefined>();
    const [customDefault, setCustomDefault] = useState<string | undefined>();
    const [parentDefault, setParentDefault] = useState<string | undefined>();

    const handleChange = useCallback(() => {
      const example = selectRef.current?.value;
      const custom = textareaRef.current?.value;

      if (custom && checkboxRef.current) checkboxRef.current.checked = false;

      if (onChange) {
        const value = custom || example;
        onChange(value);
      }
    }, [selectRef, textareaRef, onChange]);

    const handleReset = useCallback(() => {
      if (textareaRef.current) {
        textareaRef.current.value = "";
        if (checkboxRef.current) checkboxRef.current.checked = true;
        if (onChange) onChange(selectRef?.current?.value ?? parentDefault);
      }
    }, [onChange, textareaRef, selectRef, parentDefault]);

    const handleCheck = useCallback(() => {
      if (checkboxRef.current?.checked) {
        if (onChange) onChange(parentDefault);
      } else {
        if (onChange) onChange("");
      }
    }, [checkboxRef, onChange, parentDefault]);

    const env = useRelayEnvironment();

    useEffect(() => {
      const fetchOptions = async () => {
        try {
          await fetchQuery<Query>(
            env,
            query,
            {},
            {
              networkCacheConfig: { force: false },
            },
          )
            .toPromise()
            .then((result) => {
              const opts = result?.harvestExamples?.map((ex) => ({
                label: ex.name,
                value: ex.extractionMappingTemplate,
              }));
              const match = result?.harvestExamples?.find(
                (ex) => ex.extractionMappingTemplate === value,
              );
              if (!match) setCustomDefault(value);
              setOptions(
                opts
                  ? [
                      {
                        label: t(
                          "forms.extraction_mapping_template.select_placeholder",
                        ),
                        value: "",
                      },
                      ...opts,
                    ]
                  : [],
              );
            });
        } catch (error) {
          /* eslint-disable-next-line no-console */
          console.log(error);
        }
      };

      const fetchDefault = async () => {
        if (sourceSlug) {
          try {
            await fetchQuery<SourceQuery>(
              env,
              sourceQuery,
              { slug: sourceSlug },
              {
                networkCacheConfig: { force: false },
              },
            )
              .toPromise()
              .then((result) => {
                const parentTemplate =
                  result?.harvestSource?.extractionMappingTemplate;
                if (parentTemplate) {
                  setParentDefault(parentTemplate);
                  if (onChange && !value) onChange(parentTemplate);
                  if (value && value !== parentTemplate)
                    setCustomDefault(value);
                }
              });
          } catch (error) {
            /* eslint-disable-next-line no-console */
            console.log(error);
          }
        }
      };

      if (sourceSlug && !parentDefault) fetchDefault();
      if (!sourceSlug && !options) fetchOptions();
    }, [
      value,
      setCustomDefault,
      options,
      t,
      setParentDefault,
      onChange,
      parentDefault,
      sourceSlug,
      env,
    ]);

    const hasCustom = !!textareaRef?.current?.value;

    return (
      <Fieldset
        label={t(label)}
        description={
          sourceSlug
            ? t("forms.extraction_mapping_template.mapping_description")
            : t("forms.extraction_mapping_template.description")
        }
      >
        <FormGrid>
          {!!options && (
            <Select
              name="example"
              label={t("forms.extraction_mapping_template.select_label")}
              options={options}
              onChange={handleChange}
              ref={selectRef}
              disabled={hasCustom}
              defaultValue={value}
            />
          )}
          {!!parentDefault && (
            <Checkbox
              label={t("forms.extraction_mapping_template.checkbox_label")}
              disabled={hasCustom}
              defaultChecked={!value || parentDefault === value}
              onChange={handleCheck}
              ref={checkboxRef}
            />
          )}
          <Textarea
            name="custom"
            label={t("forms.extraction_mapping_template.textarea_label")}
            onChange={handleChange}
            ref={textareaRef}
            defaultValue={customDefault}
            isWide
          />
          {hasCustom && (
            <ButtonControl onClick={handleReset}>
              {t("forms.extraction_mapping_template.reset_label")}
            </ButtonControl>
          )}
        </FormGrid>
        <Errors
          name="extractionMappingTemplate"
          label={label ? t(label) : undefined}
        />
      </Fieldset>
    );
  },
);

interface Props
  extends Omit<InputProps, "placeholder" | "description" | "onChange"> {
  /** Returns the current value */
  onChange?: (value?: string) => void;
  /** Default value */
  value?: string;
  description?: string;
  sourceSlug?: string;
}

type Options = React.ComponentProps<typeof Select>["options"];

export default ExtractionMappingTemplateInput;

const query = graphql`
  query ExtractionMappingTemplateInputQuery {
    harvestExamples {
      name
      extractionMappingTemplate
    }
  }
`;

const sourceQuery = graphql`
  query ExtractionMappingTemplateInputSourceQuery($slug: Slug!) {
    harvestSource(slug: $slug) {
      extractionMappingTemplate
    }
  }
`;
