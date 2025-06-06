interface LoginOptions {
  onSuccess: () => void | Promise<void>;
  onError: (error: unknown) => void;
}

export {};
declare global {
  interface Window {
    lmLogin?: (isPopup: boolean, options: LoginOptions) => void;
    lmCompleteLogin?: () => void;
    lmLogout?: () => void;
    lmFetchWrapper?: (wrapperID: string, params?: { lang?: string }) => Promise<Response>;
  }
}