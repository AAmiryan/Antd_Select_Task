declare module '*.svg' {
  import * as React from 'react';

  const ReactComponent: React.FunctionComponent<React.ComponentProps<'svg'> & { title?: string }>;

  export default ReactComponent;
}
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  readonly VITE_BASE_URL_HOST: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
