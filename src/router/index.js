import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../views/Layout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "Login",
    hidden: true
  },
  {
    path: "/login",
    name: "Login",
    hidden: true,
    component: () => import("../views/Login/index.vue")
  },
  {
    path: "/home",
    name: "home",
    meta: {
      title: "控制台",
      icon: "console",
      iconClass: "el-icon-s-home"
    },
    component: Layout,
    children: [
      {
        path: "/home",
        name: "home",
        meta: {
          title: "首页",
          iconClass: "el-icon-menu"
        },
        component: () => import("../views/Home/index.vue")
      },
      {
        path: "/order",
        name: "Order",
        type: "list",
        meta: {
          title: "订单管理",
          iconClass: "el-icon-s-goods"
        },
        component: () => import("../views/Order/index.vue"),
        children: [
          {
            path: "/order1",
            name: "Order1",
            meta: {
              title: "生产订单",
              iconClass: "el-icon-menu"
            },
            component: () =>
              import("../views/Order/components/Order1/index.vue")
          },
          {
            path: "/order2",
            name: "Order2",
            meta: {
              title: "订单合同",
              iconClass: "el-icon-menu"
            },
            component: () =>
              import("../views/Order/components/Order2/index.vue")
          }
        ]
      },
      {
        path: "/history",
        name: "History",
        type: "list",
        meta: {
          title: "工厂管理",
          iconClass: "el-icon-s-goods"
        },
        component: () => import("../views/History/index.vue"),
        children: [
          {
            path: "/custom",
            name: "Custom",
            meta: {
              title: "客户管理",
              iconClass: "el-icon-menu"
            },
            component: () =>
              import("../views/History/components/Custom/index.vue")
          },
          {
            path: "/working",
            name: "Working",
            meta: {
              title: "加工厂管理",
              iconClass: "el-icon-menu"
            },
            component: () =>
              import("../views/History/components/Working/index.vue")
          }
        ]
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
