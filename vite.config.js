import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import path from "path";
import pxtorem from "postcss-pxtorem";
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      //配置别名
      {
        find: "@",
        replacement: resolve(__dirname, "src"),
      },
      {
        // 解决i18n警告
        find: "vue-i18n",
        replacement: "vue-i18n/dist/vue-i18n.cjs.js",
      },
    ],
    // 情景导出 package.json 配置中的exports字段
    conditions: [],
    // 导入时想要省略的扩展名列表
    // 不建议使用 .vue 影响IDE和类型支持
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `
            @import "@/style/variables.less";
            `,
        modifyVars: {
          //   hack: `true; @import "${resolve('./src/style/common.less')}";`,
          "primary-color": "#1b39e6",
          "link-color": "#1b39e6",
        },
        javascriptEnabled: true,
      },
    },
    postcss: {
      plugins: [
        pxtorem({
          rootValue: 75,
          propList: ["*"],
          unitPrecision: 5,
          selectorBlackList: ["ant"],
          exclude: ["iconfont"],
        }),
      ],
    },
  },
  server: {
    // 是否开启 https
    https: false,
    // 端口号
    port: 666,
    hmr: true, //热更新
    // 监听所有地址
    host: "0.0.0.0",
    // 服务启动时是否自动打开浏览器
    open: true,
    // 允许跨域
    cors: true,
    // 自定义代理规则
    // proxy: {
    //   "/af": {
    //     target: "http://171.27.20.23:666", //请求本地 需要jeecg-boot后台项目
    //     ws: true,
    //     changeOrigin: true,
    //   },
    // },
  },
});
