<template>
  <v-data-table
    :headers="headers"
    :items="HangingOrders"
    :items-per-page="5"
    class="elevation-0"
  >
    <template v-slot:item.action="{}">
      <v-dialog transition="dialog-bottom-transition" max-width="600">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="#42A5F5" dark v-bind="attrs" v-on="on"
            >details</v-btn
          >
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-card-text>
              <div class="text-h2 pa-12">Hello world!</div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn text @click="dialog.value = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: "company-orders",
  data() {
    return {
      headers: [
        {
          text: "Order Id",
          align: "start",
          sortable: false,
          value: "id",
        },
        { text: "Factory Name", value: "name" },
        { text: "Bill Amount", value: "bill" },
        { text: "Delivery Date", value: "date" },
        { text: "Details", value: "action" },
      ],
      HangingOrders: [
        {
          name: "Ahmad",
          id: 159,
          bill: 13,
          date: "01 - 01 - 2022",
        },
        {
          name: "Omar",
          id: 237,
          bill: 14,
          date: "01 - 01 - 2022",
        },
        {
          name: "Nala",
          id: 262,
          bill: 19,
          date: "01 - 01 - 2022",
        },
        {
          name: "Hala",
          id: 305,
          bill: 12,
          date: "01 - 01 - 2022",
        },
        {
          name: "OldManxx",
          id: 356,
          bill: 16,
          date: "01 - 01 - 2022",
        },
        {
          name: "Karen",
          id: 375,
          bill: 12,
          date: "01 - 01 - 2022",
        },
        {
          name: "John",
          id: 392,
          bill: 11,
          date: "01 - 01 - 2022",
        },
        {
          name: "Mohammad",
          id: 408,
          bill: 12,
          date: "01 - 01 - 2022",
        },
        {
          name: "Lily",
          id: 452,
          bill: 15,
          date: "01 - 01 - 2022",
        },
        {
          name: "Fatima",
          id: 518,
          bill: 13,
          date: "01 - 01 - 2022",
        },
      ],
    };
  },
};
</script>
