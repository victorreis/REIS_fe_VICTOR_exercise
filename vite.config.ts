import react from '@vitejs/plugin-react';
import browserslistToEsbuild from 'browserslist-to-esbuild';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  // depending on your application, base can also be "/"
  base: '',
  plugins: [
    react(),
    viteTsconfigPaths(),
    svgr(),
    // basicSsl(),
  ],
  build: {
    target: browserslistToEsbuild([
      'iOS >= 9',
      'Android >= 4.4',
      'last 2 versions',
      '> 0.5%',
      'not dead',
      'not op_mini all',
      'ie >= 11',
      'chrome >= 61',
      'edge >= 16',
      'firefox >= 60',
      'safari >= 11',
      'ios_saf >= 11',
    ]),
  },
  server: {
    // this ensures that the browser opens upon server start
    open: true,
    // this sets a default port to 3000
    port: 3000,
    // https: true,
  },
});
