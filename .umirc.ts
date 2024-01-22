import path from "path";
import { defineConfig } from "umi";

import routes from './src/routes';

export default defineConfig({
  routes,
  npmClient: 'yarn',
  chainWebpack: config => {
    config.module
      .rule('less-loader')
      .test(/\.less$/)
      .exclude.add([path.resolve('node_modules')])
      .end()
      .use('styles-resources-loader')
      .loader('style-resources-loader')
      .options({
        patterns: [
          path.resolve(__dirname, 'src/assets/styles/variable.less'),
        ],
      });
  },
});
