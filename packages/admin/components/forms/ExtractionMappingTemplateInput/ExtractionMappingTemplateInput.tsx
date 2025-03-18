import {
  useRef,
  useCallback,
  useEffect,
  useState,
  forwardRef,
  type Ref,
} from "react";
import { useTranslation } from "react-i18next";
import { fetchQuery, graphql } from "relay-runtime";
import Fieldset from "components/forms/Fieldset";
import FormGrid from "components/forms/FormGrid";
import Textarea from "components/forms/Textarea";
import Select from "components/forms/Select";
import Errors from "components/forms/Errors";

import { default as getRelayEnvironment } from "@wdp/lib/app/buildEnvironment";
import type { ExtractionMappingTemplateInputQuery as Query } from "@/relay/ExtractionMappingTemplateInputQuery.graphql";
import * as Styled from "./styles";
import type InputProps from "components/forms/inputType";

const ExtractionMappingTemplateInput = forwardRef(
  ({ label, onChange, value }: Props, _ref: Ref<HTMLInputElement>) => {
    const { t } = useTranslation();
    const selectRef = useRef<HTMLSelectElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const [options, setOptions] = useState<Options | undefined>();
    const [customDefault, setCustomDefault] = useState<string | undefined>();

    const handleChange = useCallback(() => {
      const example = selectRef?.current?.value;
      const custom = textareaRef?.current?.value;

      if (onChange) {
        const value = custom || example;
        onChange(value);
      }
    }, [selectRef, textareaRef, onChange]);

    const handleReset = useCallback(() => {
      if (textareaRef.current) {
        textareaRef.current.value = "";
        if (onChange) onChange(selectRef?.current?.value);
      }
    }, [onChange, textareaRef, selectRef]);

    useEffect(() => {
      const fetchOptions = async () => {
        const env = getRelayEnvironment();

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

      if (!options) fetchOptions();
    }, [value, setCustomDefault, options, t]);

    const hasCustom = !!textareaRef?.current?.value;

    return (
      <Fieldset
        label={t(label)}
        description={t("forms.extraction_mapping_template.description")}
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
        </FormGrid>
        <div>
          <Textarea
            name="custom"
            label={t("forms.extraction_mapping_template.textarea_label")}
            onChange={handleChange}
            ref={textareaRef}
            defaultValue={customDefault}
          />
          {hasCustom && (
            <Styled.Reset onClick={handleReset}>
              {t("forms.extraction_mapping_template.reset_label")}
            </Styled.Reset>
          )}
        </div>
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
