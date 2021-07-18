import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import WarehouseBalance from "../views/sidebar/warehouse-balance.vue"
import AddNewItem from "../views/sidebar/add-new-item.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/warehouse-balance",
    name: "warehouse-balance",
    component: WarehouseBalance,
  },
  {
    path: "/add-new-item",
    name: "add-new-item",
    component: AddNewItem
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
