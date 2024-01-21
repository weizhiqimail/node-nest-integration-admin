import { defineConfig } from "umi";

import routes from './src/routes';

export default defineConfig({
  routes,
  npmClient: 'yarn',
});
