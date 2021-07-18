<template>
  <!-- <hello-world /> -->
  <v-container style="height: 100vh; overflow-x: hidden">
    <v-row>
      <v-toolbar flat style="background: none;">
        <v-toolbar-title class="grey--text"> Dashboard </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-apps</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
    </v-row>
    <v-row class="above-section">
      <v-col cols="4">
        <v-card class="ml-0 d-flex flex-row" max-width="344" :elevation="0">
          <div class="square" style="background-color: #fc9107">
            <v-icon large color="white"> mdi-note-multiple-outline </v-icon>
          </div>
          <div>
            <v-card-text>
              <p>daily orders / completed orders</p>
              <div class="text--primary"><b>#</b> / <b>#</b></div>
            </v-card-text>
          </div>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card class="d-flex flex-row" max-width="344" :elevation="0">
          <div class="square" style="background-color: #60b664">
            <v-icon large color="white">
              mdi-newspaper-variant-multiple-outline
            </v-icon>
          </div>
          <div>
            <v-card-text>
              <p>all bills</p>
              <div class="text--primary"><b>#</b></div>
            </v-card-text>
          </div>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card class="d-flex flex-row" max-width="344" :elevation="0">
          <div class="square" style="background-color: #ea4642">
            <v-icon large color="white"> mdi-check-network-outline </v-icon>
          </div>
          <div>
            <v-card-text>
              <p>proess efficiency</p>
              <div class="text--primary"><b>#</b></div>
            </v-card-text>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row style="padding: 50px 0 20px">
      <v-col cols="4">
        <orders-chart />
      </v-col>
      <v-col cols="4">
        <orders-chart />
      </v-col>
      <v-col cols="4">
        <orders-chart />
      </v-col>
    </v-row>
    <v-row style="padding: 14px">
      <v-col
        cols="12"
        style="
          text-align: center;
          background-color: #e73e3a;
          color: white;
          line-height: 3;
        "
      >
        <h2>ORDERS TABLES</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h4 style="margin-bottom: 10px">Hanging Buying Orders</h4>
        <hanging-orders />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h4 style="margin-bottom: 10px">Company Orders</h4>
        <company-orders />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CompanyOrders from "../components/company-orders.vue";
import HangingOrders from "../components/hanging-orders.vue";
import OrdersChart from "../components/home/orders-chart.vue";
// import HelloWorld from "../components/HelloWorld";

export default {
  name: "Home",

  components: {
    CompanyOrders,
    HangingOrders,
    OrdersChart,
    // HelloWorld,
  },
};
</script>

<style scoped>
.square {
  padding: 20px;
  width: 80px;
  margin: 20px;
  text-align: center;
}
</style>
