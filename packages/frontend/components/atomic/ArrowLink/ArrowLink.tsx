import React from "react";
import { useTranslation } from "react-i18next";
import { IconFactory } from "components/factories";

export default function ArrowLink({ label, as = "a", className }: Props) {
  const { t } = useTranslation();
  const Tag = as;

  return (
    <Tag className={`${className} l-flex l-flex--align-center l-flex--gap-sm`}>
      <span className="t-label-sm">{t(label)}</span>
      <IconFactory icon="arrowRight" />
    </Tag>
  );
}

interface Props {
  label: string;
  as?: keyof JSX.IntrinsicElements | React.ElementType;
  className?: string;
}
