const { defineConfig } = require("@vue/cli-service");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { NaiveUiResolver } = require("unplugin-vue-components/resolvers");

module.exports = defineConfig({
  // vue底层利用webpack5底层已经对静态文件做过处理了, gzip也有配置, 不需要再配置
  transpileDependencies: true,
  assetsDir: "./static",
  // publicPath: "./",
  productionSourceMap: process.env.NODE_ENV === "production",
  devServer: {
    proxy: {
      "/api": {
        target: "https://trustwallet.com",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      },
      "/coin": {
        target: "https://api.coingecko.com/api/v3",
        changeOrigin: true,
        secure: true,
        pathRewrite: {
          "^/coin": ""
        }
        // headers: {
        //   "User-Agent": "Mozilla/5.0",
        //   Accept: "application/json"
        // },
        // onProxyReq(proxyReq, req) {
        //   proxyReq.removeHeader("origin");
        //   proxyReq.removeHeader("referer");
        //   proxyReq.removeHeader("sec-fetch-site");
        //   proxyReq.removeHeader("sec-fetch-mode");
        //   proxyReq.removeHeader("sec-fetch-dest");

        //   console.log("代理请求 =>", req.url);
        // }
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        additionalData: `@import "@/assets/css/variables.less";`,
        lessOptions: {
          modifyVars: {
            "primary-color": "#1890ff"
          },
          javascriptEnabled: true
        }
      },
      scss: {
        additionalData: `@use "@/assets/css/variables.scss";`
      }
    }
  },
  configureWebpack: (config) => {
    /** 🔥 Naive UI 自动引入（JS 项目） */
    config.plugins.push(
      AutoImport({
        imports: [
          "vue",
          {
            "naive-ui": ["useDialog", "useMessage", "useNotification", "useLoadingBar"]
          }
        ]
      }),

      Components({
        resolvers: [NaiveUiResolver()]
      })
    );
  },
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      config.optimization.minimizer("terser").tap((args) => {
        args[0].terserOptions.compress = {
          drop_console: true,
          drop_debugger: true
        };
        return args;
      });
    }
  }
});
