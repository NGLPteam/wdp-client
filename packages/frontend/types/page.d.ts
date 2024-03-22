export interface RouteParams {
  params: {
    lang: "en";
  } & Record<string, unknown>;
}

export interface BasePageParams {
  params: {
    lang: "en";
    slug?: string;
  } & Record<string, unknown>;
}
