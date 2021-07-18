<template>
  <v-card class="mb-5 ml-0" min-width="200" :elevation="0">
    <v-sheet
      class="v-sheet--offset mx-auto"
      color="#11b8cc"
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
</template>

<script>
export default {
  name: "orders-chart",

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
.v-sheet--offset {
  top: -24px;
  position: relative;
}
</style>
