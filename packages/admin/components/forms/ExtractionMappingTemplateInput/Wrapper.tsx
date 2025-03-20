import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { fetchQuery, graphql, useRelayEnvironment } from "react-relay";
import type { WrapperExtractionMappingTemplateQuery as Query } from "@/relay/WrapperExtractionMappingTemplateQuery.graphql";
import type { WrapperExtractionMappingTemplateSourceQuery as SourceQuery } from "@/relay/WrapperExtractionMappingTemplateSourceQuery.graphql";
import ExtractionMappingTemplateInput, { type Options } from "./Input";

export default function ExtractionMappingTemplateWrapper({
  label,
  onChange,
  value,
  sourceSlug,
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
    />
  );
}

export interface Props {
  label: string;
  onChange: (value?: string) => void;
  value?: string;
  description?: string;
  sourceSlug?: string;
}

const query = graphql`
  query WrapperExtractionMappingTemplateQuery {
    harvestExamples {
      name
      extractionMappingTemplate
    }
  }
`;

const sourceQuery = graphql`
  query WrapperExtractionMappingTemplateSourceQuery($slug: Slug!) {
    harvestSource(slug: $slug) {
      extractionMappingTemplate
    }
  }
`;
