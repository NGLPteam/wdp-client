import * as React from "react";
import { useUID } from "react-uid";
import { useTranslation } from "react-i18next";
import startCase from "lodash/startCase";
import Modal from "../BaseModal";
import * as Styled from "./SearchModal.styles";
import { IconFactory } from "components/factories";
import { Select } from "components/forms";

type ModalProps = React.ComponentProps<typeof Modal>;

export default function SearchModal({ dialog }: Pick<ModalProps, "dialog">) {
  const selectId = useUID();
  const searchId = useUID();
  const { t } = useTranslation();

  return (
    <Modal dialog={dialog}>
      <Styled.Form>
        <Styled.SearchWrapper>
          <Styled.SearchIconLabel htmlFor={searchId}>
            <IconFactory icon="search" role="presentation" />
            <span className="a-hidden">{t("search.label")}</span>
          </Styled.SearchIconLabel>
          <Styled.SearchInput
            type="search"
            id={searchId}
            placeholder={t("search.placeholder")}
          />
          <Styled.SearchButton type="submit">
            <IconFactory icon="arrowRight" role="presentation" />
            <span className="a-hidden">{t("search.submit")}</span>
          </Styled.SearchButton>
        </Styled.SearchWrapper>
        <div className="l-flex l-flex--align-center l-flex--gap-sm">
          <Styled.SelectLabel
            htmlFor={selectId}
            className="t-label-mix a-color-lighter"
          >
            {t("search.search_area_label")}
          </Styled.SelectLabel>
          <Select id={selectId}>
            <option>{startCase(t("search.community_option"))}</option>
          </Select>
        </div>
      </Styled.Form>
    </Modal>
  );
}
