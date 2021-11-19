import React from "react";
import { pxToRem } from "@wdp/lib/theme/functions";
import { useTranslation } from "react-i18next";
import { useDialogState, DialogDisclosure } from "reakit/Dialog";
import * as Styled from "./SearchButton.styles";
import { IconFactory } from "components/factories";
import SearchModal from "components/layout/SearchModal";

export default function SearchButton({ size = "sm" }: Props) {
  const { t } = useTranslation();
  const imageSize = size === "sm" ? 32 : 72;
  const style = {
    "--search-button-size": `${pxToRem(imageSize)}`,
  } as React.CSSProperties;
  const dialog = useDialogState({ animated: true });

  return (
    <>
      <DialogDisclosure as={Styled.ButtonWrapper} style={style} {...dialog}>
        <IconFactory
          icon={size === "sm" ? "search" : "search32"}
          role="presentation"
        />
        <span className="a-hidden">{t("search.label")}</span>
      </DialogDisclosure>
      <SearchModal dialog={dialog} />
    </>
  );
}

interface Props {
  size?: "sm" | "lg";
}
