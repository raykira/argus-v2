<template>
  <v-app id="apps">
    <v-container fluid fill-height class="d-flex flex-row align-start" style="padding: 0">
      <v-card height="100%" width="256">
        <v-navigation-drawer permanent>
          <v-list-item style="text-align: center">
            <v-list-item-content class="d-flex">
              <v-list-item-title class="text-h6">
                Argus
              </v-list-item-title>
              <v-list-item-subtitle> By Black Magic  </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list dense nav>
            <v-list-item v-for="item in items" :key="item.title" link :to="item.to" color="purple">
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

      <v-main style="max-width:calc(100% - 256px)">
        <router-view />
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data () {
      return {
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },
          { title: 'Warehouse Balance', icon: 'mdi-warehouse', to: '/warehouse-balance' },
          { title: 'Add New Item', icon: 'mdi-note-plus', to: '/add-new-item' },
          { title: 'Add New Customer', icon: 'mdi-account-plus', to: '/add-new-customer' },
          { title: 'Invoices', icon: 'mdi-note-text-outline', to: '/invoices' },
          { title: 'Customer Orders', icon: 'mdi-cart', to: '/customer-orders' },
          { title: 'Customer Details', icon: 'mdi-account-details', to: '/customer-details' },
          { title: 'View All Bills', icon: 'mdi-currency-usd', to: '/view-all-bills' },
          { title: 'View All Customers', icon: 'mdi-account-group', to: '/view-all-customers' },
          { title: 'View All Buying Orders', icon: 'mdi-clipboard-text-multiple', to: '/view-all-buying-orders' },
        ],
        right: null,
      }
    },
};
</script>

<style scoped>

</style>