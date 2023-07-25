export default [
  {
    path: "/",
    redirect: "/user/login",
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/components/layouts/GlobalLayout.vue"),
    redirect: { name: "workplace" },
    meta: {
      icon: "icon-shouye",
      roleCode: ["A", "B", "C", "D"],
    },
    children: [
      {
        path: "workplace",
        name: "workplace",
        component: () => import("@/views/workplace/index.vue"),
        meta: {
          roleCode: ["A", "B", "C", "D"],
        },
      },
    ],
  },
  {
    redirect: "/user/login",
    path: "/user",
    name: "User",
    component: () => import("@/components/layouts/userLayout.vue"),
    meta: {
      icon: "icon-zhanghu",
      roleCode: [""],
    },
    children: [
      {
        path: "login",
        name: "Login",
        component: () => import("@/views/user/login.vue"),
        meta: {
          title: "Login",
          roleCode: [""],
        },
      },
      {
        path: "forget",
        name: "Forget",
        component: () => import("@/views/user/forget.vue"),
        meta: {
          title: "forget",
          roleCode: [""],
        },
      },
    ],
  },
];
