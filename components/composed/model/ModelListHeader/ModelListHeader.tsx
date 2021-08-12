import React from "react";
import type { ModelNames } from "helpers/models";
import { PageHeader } from "components/layout";
import { useTranslation } from "react-i18next";
import startCase from "lodash/startCase";
import ModelAddButton from "components/composed/model/ModelAddButton";

interface ModelHeaderProps {
  modelName?: Lowercase<ModelNames>;
}

function ModelListHeader({ modelName }: ModelHeaderProps) {
  const { t } = useTranslation("glossary");
  const title = modelName ? t(modelName, { count: 2 }) : "";

  return (
    <PageHeader
      title={startCase(title)}
      buttons={modelName && <ModelAddButton modelName={modelName} />}
    />
  );
}

export default ModelListHeader;
