/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_REACT_APP_API_BASE_URL: string;
  readonly TSC_COMPILE_ON_ERROR: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
