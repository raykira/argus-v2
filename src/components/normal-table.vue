<template>
  <v-data-table
    :headers="headers"
    :items="HangingOrders"
    :items-per-page="5"
    class="elevation-1"
  >
    <template v-slot:item.action="{  }">
      <v-btn color="purple" dark>details</v-btn>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: "normal-table",
  data() {
    return {
      headers: [
        {
          text: "Order Id",
          align: "start",
          sortable: false,
          value: "id",
        },
        { text: "Customer Name", value: "name" },
        { text: "Details", value: "action" },
      ],
      HangingOrders: [
        {
          name: "Ahmad",
          id: 159,
        },
        {
          name: "Omar",
          id: 237,
        },
        {
          name: "Nala",
          id: 262,
        },
        {
          name: "Hala",
          id: 305,
        },
        {
          name: "OldManxx",
          id: 356,
        },
        {
          name: "Karen",
          id: 375,
        },
        {
          name: "John",
          id: 392,
        },
        {
          name: "Mohammad",
          id: 408,
        },
        {
          name: "Lily",
          id: 452,
        },
        {
          name: "Fatima",
          id: 518,
        },
      ],
    };
  },
};
</script>
