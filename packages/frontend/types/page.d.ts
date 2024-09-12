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

export interface OrderingPageParams {
  params: {
    lang: "en";
    slug?: string;
    ordering?: string;
  } & Record<string, unknown>;
}

export interface SubPageParams {
  params: {
    lang: "en";
    slug?: string;
    page?: string;
  } & Record<string, unknown>;
}
