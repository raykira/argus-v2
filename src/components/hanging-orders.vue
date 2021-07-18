<template>
  <v-data-table
    :headers="headers"
    :items="HangingOrders"
    :items-per-page="5"
    class="elevation-1"
  >
    <template v-slot:item.action="{}">
      <v-dialog transition="dialog-bottom-transition" max-width="600">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="#7E57C2" dark v-bind="attrs" v-on="on"
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
  name: "hanging-orders",
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
