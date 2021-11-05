import React from "react";
import { Toaster } from "react-hot-toast";
import * as Styled from "./Toast.styles";
import { IconFactory } from "components/factories";

function Toast({ ...toastProps }: Props) {
  function getIcon(type: string) {
    return type === "error" ? "statusAlert" : "statusCheck";
  }

  return (
    <Toaster
      gutter={20}
      toastOptions={{ duration: 4000 }}
      containerStyle={{
        marginBlockStart: "calc(var(--global-header-height) + 20px)",
      }}
      {...toastProps}
    >
      {(t) => (
        <Styled.BaseToast data-visible={t.visible} data-type={t.type}>
          {t.type !== "blank" && (
            <IconFactory size="md" icon={getIcon(t.type)} />
          )}
          <span>{t.message}</span>
        </Styled.BaseToast>
      )}
    </Toaster>
  );
}

interface Props {
  className?: string;
}

export default Toast;
