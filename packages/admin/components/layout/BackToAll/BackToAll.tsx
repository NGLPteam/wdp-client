import { useTranslation } from "react-i18next";
import startCase from "lodash/startCase";
import { RouteHelper } from "routes";
import { IconFactory } from "components/factories";
import { NamedLink } from "../../atomic";
import * as Styled from "./BackToAll.styles";

interface Props {
  route: string;
  query?: Record<string, string>;
  label?: string;
  secondary?: {
    route: string;
    query?: Record<string, string>;
    label: string;
  };
}

const BackToAll = ({ route, query, label, secondary }: Props) => {
  const { t } = useTranslation();
  if (!route) return null;

  const routeObj = RouteHelper.findRouteByName(route);
  const name = t(routeObj?.label || "");

  return (
    <Styled.NavWrapper>
      <NamedLink route={route} query={query} passHref>
        <Styled.LinkWrapper as="a" className="a-link">
          <IconFactory icon="arrow" rotate={270} size="xs" />
          <span>{label ?? startCase(`${t("all")} ${t(name)}`)}</span>
        </Styled.LinkWrapper>
      </NamedLink>
      {!!secondary && (
        <NamedLink route={secondary.route} query={secondary.query} passHref>
          <Styled.LinkWrapper as="a" className="a-link">
            <span>/</span>
            <span>{secondary.label}</span>
          </Styled.LinkWrapper>
        </NamedLink>
      )}
    </Styled.NavWrapper>
  );
};

export default BackToAll;
