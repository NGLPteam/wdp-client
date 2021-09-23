import { useSignInOut } from "hooks/useIsAuthenticated";
import { useTranslation } from "react-i18next";
import * as Styled from "./SignInOut.styles";

const SignInOut = () => {
  const { isAuthenticated, handleSignInOut } = useSignInOut();
  const { t } = useTranslation();

  return (
    <Styled.AuthLink onClick={handleSignInOut}>
      <Styled.Text>
        {isAuthenticated ? t("sign_out") : t("sign_in")}
      </Styled.Text>
    </Styled.AuthLink>
  );
};

export default SignInOut;
