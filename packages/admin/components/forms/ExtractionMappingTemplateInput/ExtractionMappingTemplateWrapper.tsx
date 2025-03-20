import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { fetchQuery, graphql, useRelayEnvironment } from "react-relay";
import type { ExtractionMappingTemplateWrapperQuery as Query } from "@/relay/ExtractionMappingTemplateWrapperQuery.graphql";
import type { ExtractionMappingTemplateWrapperSourceQuery as SourceQuery } from "@/relay/ExtractionMappingTemplateWrapperSourceQuery.graphql";
import ExtractionMappingTemplateInput, {
  type Options,
} from "./ExtractionMappingTemplateInput";
import type InputProps from "components/forms/inputType";

export default function ExtractionMappingTemplateWrapper({
  label,
  onChange,
  value,
  sourceSlug,
  ...props
}: Props) {
  const { t } = useTranslation();

  const [options, setOptions] = useState<Options | undefined>();
  const [parentDefault, setParentDefault] = useState<string | undefined>();

  const env = useRelayEnvironment();

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        await fetchQuery<Query>(
          env,
          query,
          {},
          { networkCacheConfig: { force: false } },
        )
          .toPromise()
          .then((result) => {
            const opts = result?.harvestExamples?.map((ex) => ({
              label: ex.name,
              value: ex.extractionMappingTemplate,
            }));
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
        console.error(error);
      }
    };

    const fetchDefault = async () => {
      if (sourceSlug) {
        try {
          await fetchQuery<SourceQuery>(
            env,
            sourceQuery,
            { slug: sourceSlug },
            { networkCacheConfig: { force: false } },
          )
            .toPromise()
            .then((result) => {
              const parentTemplate =
                result?.harvestSource?.extractionMappingTemplate;
              if (parentTemplate) {
                setParentDefault(parentTemplate);
                if (onChange && !value) onChange(parentTemplate);
              }
            });
        } catch (error) {
          console.error(error);
        }
      }
    };

    if (sourceSlug && !parentDefault) fetchDefault();
    if (!sourceSlug && !options) fetchOptions();
  }, [value, options, onChange, parentDefault, sourceSlug, env, t]);

  return (
    <ExtractionMappingTemplateInput
      label={label}
      onChange={onChange}
      value={value}
      sourceSlug={sourceSlug}
      options={options}
      parentDefault={parentDefault}
      {...props}
    />
  );
}

export interface Props
  extends Omit<InputProps, "placeholder" | "description" | "onChange"> {
  onChange: (value?: string) => void;
  value?: string;
  description?: string;
  sourceSlug?: string;
}

const query = graphql`
  query ExtractionMappingTemplateWrapperQuery {
    harvestExamples {
      name
      extractionMappingTemplate
    }
  }
`;

const sourceQuery = graphql`
  query ExtractionMappingTemplateWrapperSourceQuery($slug: Slug!) {
    harvestSource(slug: $slug) {
      extractionMappingTemplate
    }
  }
`;
