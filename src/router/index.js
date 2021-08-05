import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import WarehouseBalance from "../views/sidebar/warehouse-balance.vue"
import Items from "../views/sidebar/items.vue"
import Invoices from "../views/sidebar/invoices"
import EntryVouchers from "../views/sidebar/entry-vouchers"
import PurchaseOrders from "../views/sidebar/purchase-orders"
import Customers from "../views/sidebar/customers"

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
    path: "/items",
    name: "items",
    component: Items
  },
  {
    path: "/invoices",
    name: "invoices",
    component: Invoices
  },
  {
    path: "/entry-vouchers",
    name: "entry-vouchers",
    component: EntryVouchers
  },
  {
    path: "/purchase-orders",
    name: "purchase-orders",
    component: PurchaseOrders
  },
  {
    path: "/customers",
    name: "customers",
    component: Customers
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
