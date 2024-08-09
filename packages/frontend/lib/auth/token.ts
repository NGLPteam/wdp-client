const IS_SERVER = typeof window === typeof undefined;

export const ACCESS_TOKEN_KEY = "session";

export function setToken(sessionToken?: string) {
  if (!IS_SERVER && sessionToken) {
    sessionStorage.setItem(ACCESS_TOKEN_KEY, sessionToken);
  }
}

export function getToken() {
  if (!IS_SERVER) {
    return sessionStorage.getItem(ACCESS_TOKEN_KEY) ?? "";
  }

  return "";
}

export function removeToken() {
  if (!IS_SERVER) {
    sessionStorage.removeItem(ACCESS_TOKEN_KEY);
  }
}
