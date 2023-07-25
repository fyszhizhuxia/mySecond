export default [
  {
    // redirect: "/account/asset",
    path: "/account",
    name: "Account",
    component: () => import("@/components/layouts/GlobalLayout.vue"),
    meta: {
      icon: "icon-zhanghu1",
      roleCode: ["A", "B", "C", "D"],
    },

    children: [
      {
        path: "asset",
        name: "Asset",
        component: () => import("@/views/Account/index.vue"),
        meta: {
          title: "index",
          roleCode: ["A", "B", "C", "D"],
        },
      },
      {
        path: "info",
        name: "Info",
        component: () => import("@/views/Account/info/index.vue"),
        meta: {
          title: "info",
          roleCode: ["A", "B", "C", "D"],
        },
        children: [
          {
            path: "1",
            name: "Account_Info1",
            component: () => import("@/views/Account/info/accountInfo.vue"),
            meta: {
              hideNav: true, // 隐藏导航条
              roleCode: ["A", "B", "C", "D"], // 权限控制
            },
          },
          {
            path: "2",
            name: "Account_Info2",
            component: () => import("@/views/Account/info/selfInfo.vue"),
            meta: {
              hide: true, //隐藏菜单
              hideNav: true, // 隐藏导航条
              roleCode: ["A", "B", "C", "D"], // 权限控制
            },
          },
        ],
      },
    ],
  },
];
