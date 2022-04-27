import React from "react";
import { Trans, useTranslation } from "react-i18next";
import * as Styled from "./NoContent.styles";

type TProps = React.ComponentProps<typeof Trans>;

const NoContent = ({ message, values, components }: Props) => {
  const { t } = useTranslation();

  return (
    <Styled.Wrapper>
      <p className="h4 t-rte">
        <Trans i18nKey={message} values={values} components={components} />
      </p>
    </Styled.Wrapper>
  );
};

interface Props {
  /** Override the default message */
  message?: string;
  values?: TProps["values"];
  components?: TProps["components"];
}

export default NoContent;
