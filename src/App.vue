<template>
  <v-app id="apps">
    <v-container
      fluid
      fill-height
      class="d-flex flex-row align-start"
      style="padding: 0"
    >
      <v-card height="100%" width="256" :elevation="19">
        <v-navigation-drawer permanent style="background-color: #f8fafc">
          <v-list-item style="text-align: center">
            <v-list-item-content class="d-flex">
              <v-list-item-title class="text-h6"> Argus </v-list-item-title>
              <v-list-item-subtitle>developed by Black Magic </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list dense nav>
            <v-list-item
              v-for="item in items"
              :key="item.title"
              link
              :to="item.to"
              color="#9c27b0"
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-card>

      <v-main style="max-width: calc(100% - 256px); height: 100vh; overflow-y: auto; background-color:#eeeeee;">
        <router-view style="padding: 30px"/>
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard", to: "/" },
        {
          title: "Warehouse Balance",
          icon: "mdi-warehouse",
          to: "/warehouse-balance",
        },
        { title: "Add New Item", icon: "mdi-note-plus", to: "/add-new-item" },
        { title: "Purchase Invoices", icon: "mdi-note-text-outline", to: "/invoices" },
        {
          title: "View All Buying Orders",
          icon: "mdi-clipboard-text-multiple",
          to: "/view-all-buying-orders",
        },
        {
          title: "Add New Customer",
          icon: "mdi-account-plus",
          to: "/add-new-customer",
        },
        {
          title: "View All Customers",
          icon: "mdi-account-group",
          to: "/view-all-customers",
        },
        { title: "Customer Orders", icon: "mdi-cart", to: "/customer-orders" },
        {
          title: "View All Bills",
          icon: "mdi-currency-usd",
          to: "/view-all-bills",
        },
      ],
      right: null,
    };
  },
};
</script>

<style scoped>
</style>
