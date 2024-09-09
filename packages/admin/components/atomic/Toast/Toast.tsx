import { Toaster } from "react-hot-toast";
import { IconFactory } from "components/factories";
import * as Styled from "./Toast.styles";

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
          <Styled.Text>
            {typeof t.message === "string" && t.message}
          </Styled.Text>
        </Styled.BaseToast>
      )}
    </Toaster>
  );
}

interface Props {
  className?: string;
}

export default Toast;
