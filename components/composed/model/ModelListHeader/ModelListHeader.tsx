import React from "react";
import type { ModelNames } from "helpers/models";
import { PageHeader } from "components/layout";
import { useTranslation } from "react-i18next";
import startCase from "lodash/startCase";
import ModelAddButton from "components/composed/model/ModelAddButton";

interface ModelHeaderProps {
  modelName?: Lowercase<ModelNames>;
  buttons?: React.ReactNode;
}

function ModelListHeader({ modelName, buttons }: ModelHeaderProps) {
  const { t } = useTranslation();
  const title = modelName ? t(`glossary.${modelName}`, { count: 2 }) : "";

  let renderButtons;
  if (buttons) {
    renderButtons = buttons;
  } else if (modelName) {
    renderButtons = <ModelAddButton modelName={modelName} />;
  }

  return <PageHeader title={startCase(title)} buttons={renderButtons} />;
}

export default ModelListHeader;
