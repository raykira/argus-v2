<template>
  <!-- <hello-world /> -->
  <v-container>
    <v-row class="above-section">
      <v-col cols="4">
        <v-card class="mx-auto d-flex flex-row" max-width="344">
          <div class="square" style="background-color: #ff9800">
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
        <v-card class="mx-auto d-flex flex-row" max-width="344">
          <div class="square" style="background-color: #e53935">
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
        <v-card class="mx-auto d-flex flex-row" max-width="344">
          <div class="square" style="background-color: #4caf50">
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
    <v-row style="background-color: #f3e5f5; padding: 20px 0">
      <v-col cols="6">
        <v-card class="mt-4 mx-auto" max-width="400">
          <v-sheet
            class="v-sheet--offset mx-auto"
            color="purple"
            elevation="12"
            max-width="calc(100% - 32px)"
          >
            <v-sparkline
              :labels="labels"
              :value="value"
              color="white"
              line-width="2"
              padding="16"
            ></v-sparkline>
          </v-sheet>

          <v-card-text class="pt-0">
            <div class="text-h6 font-weight-light mb-2">Orders</div>
            <div class="subheading font-weight-light grey--text">
              Last Campaign Performance
            </div>
            <v-divider class="my-2"></v-divider>
            <v-icon class="mr-2" small> mdi-clock </v-icon>
            <span class="text-caption grey--text font-weight-light"
              >last order 26 minutes ago</span
            >
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6">
        <div class="select-parent">
          <v-select
            v-model="select"
            :items="items"
            item-text="state"
            item-value="abbr"
            label="Select"
            persistent-hint
            return-object
            single-line
          >
          </v-select>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h4 style="margin-bottom: 10px">Hanging Buying Orders</h4>
        <normal-table />
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
import NormalTable from "../components/normal-table.vue";
// import HelloWorld from "../components/HelloWorld";

export default {
  name: "Home",

  components: {
    NormalTable,
    CompanyOrders,
    // HelloWorld,
  },

  data: () => ({
    labels: ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm"],
    value: [200, 675, 410, 390, 310, 460, 250, 240],
    items: [
      "Daily Sales Value",
      "Daily Sales Number",
      "Weekly Sales Value",
      "Weekly Sales Nnumber",
    ],
  }),
};
</script>

<style scoped>
.above-section {
  /* margin-bottom: 100px; */
  margin: 10px;
}
.square {
  padding: 20px;
  width: 80px;
  margin: 20px;
  text-align: center;
}
.v-sheet--offset {
  top: -24px;
  position: relative;
}
.select-parent {
  width: 300px;
  margin: auto;
}
</style>
