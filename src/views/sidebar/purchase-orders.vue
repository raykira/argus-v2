<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="HangingOrders"
      :items-per-page="5"
      class="elevation-0"
    >
      <template v-slot:item.action="{}">
        <v-dialog transition="dialog-bottom-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="#11b8cc" dark v-bind="attrs" v-on="on">details</v-btn>
          </template>
          <template>
            <v-card>
              <v-card-text style="padding: 20px 0 0 0">
                <add-order />
              </v-card-text>
              <v-card-actions class="justify-end">
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </template>
    </v-data-table>
    <template>
        <v-btn
          color="green"
          dark
          @click.stop="dialog = true"
        >
          Add New Order
        </v-btn>

        <v-dialog
          v-model="dialog"
        >
          <v-card>
            <v-card-title class="text-h5">
            </v-card-title>

            <v-card-text>
              <add-order />
            </v-card-text>

            <v-card-actions>
             
            </v-card-actions>
          </v-card>
        </v-dialog>
    </template>
  </div>
</template>

<script>
import AddOrder from '../../components/add-order.vue';
export default {
  components: { AddOrder },
  name: "PurchaseOrders",
  data() {
    return {
      dialog: false,
      headers: [
        {
          text: "Order Id",
          align: "start",
          sortable: false,
          value: "id",
        },
        // { text: "Item Name", value: "name" },
        { text: "Details", value: "action" },
      ],
      HangingOrders: [
        {
          name: "Car",
          id: 159,
        },
        {
          name: "Chair",
          id: 237,
        },
        {
          name: "Door",
          id: 262,
        },
        {
          name: "Table",
          id: 305,
        },
        {
          name: "Book",
          id: 356,
        },
        {
          name: "Knife",
          id: 375,
        },
        {
          name: "Fork",
          id: 392,
        },
        {
          name: "Spoon",
          id: 408,
        },
        {
          name: "Plate",
          id: 452,
        },
        {
          name: "House",
          id: 518,
        },
      ],
    };
  },
};
</script>
