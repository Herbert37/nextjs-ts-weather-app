interface LoginOptions {
  onSuccess: () => void | Promise<void>;
  onError: (error: unknown) => void;
}

export {};
declare global {
  interface Window {
    lmLogin?: (options: LoginOptions) => void;
    lmCompleteLogin?: () => void;
    lmLogout?: () => void;
    lmFetchWrapper?: (wrapperID: string) => Promise<Response>;
  }
}