interface LoginOptions {
  onSuccess: () => void | Promise<void>;
  onError: (error: unknown) => void;
}

interface LoginV2Params {
  loginLanguage: string;
  isPopupLogin: boolean;
  customRedirectUri?: string;
}

export {};
declare global {
  interface Window {
    lmLogin?: (
      loginLanguage: string,
      isPopupLogin: boolean,
      options: LoginOptions,
    ) => void;
    lmLoginV2?: (params: LoginV2Params, options: LoginOptions) => void;
    lmSilentLogin?: () => Promise<Response>;
    lmCompleteLogin?: () => void;
    lmLogout?: () => void;
    lmFetchWrapper?: (
      wrapperID: string,
      params?: { lang?: string },
    ) => Promise<Response>;
  }
}
