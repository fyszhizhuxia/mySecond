import { createApp } from "vue";
import App from "./App.vue";
import Router from "./router";
import Store from "./store";
import I18n from "./lang/index.js";
import "ant-design-vue/dist/antd.less";
import "@/style/fonts/iconfont.css";
import antd from "ant-design-vue";
import "@/style/common.css";
import "@/style/global.less";
import "amfe-flexible/index.js";
import "./mock"; // 引入Mock数据
const app = createApp(App);
app.use(Router).use(Store).use(I18n).use(antd).mount("#app");
// Router.isReady().then(() => {
//   app.mount("#app");
// });
