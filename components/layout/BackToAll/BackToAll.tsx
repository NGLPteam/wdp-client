import React from "react";
import { useTranslation } from "react-i18next";
import { IconFactory } from "components/factories";
import { RouteHelper } from "routes";
import { NamedLink } from "../../atomic";
import * as Styled from "./BackToAll.styles";
import { capitalize } from "lodash";

interface Props {
  route: string;
}

const BackToAll = ({ route }: Props) => {
  const { t } = useTranslation();
  if (!route) return null;

  const routeObj = RouteHelper.findRouteByName(route);
  const name = capitalize(t(routeObj?.label || ""));

  return (
    <Styled.NavWrapper>
      <NamedLink route={route} passHref>
        <Styled.LinkWrapper as="a" className="a-link">
          <IconFactory icon="arrow" rotate={270} size="xs" />
          <span>{`${t("all")} ${t(name)}`}</span>
        </Styled.LinkWrapper>
      </NamedLink>
    </Styled.NavWrapper>
  );
};

export default BackToAll;
