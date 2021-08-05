<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="HangingOrders"
      :items-per-page="5"
      class="elevation-0"
    >
      <template v-slot:item.action="{}">
        <v-dialog transition="dialog-bottom-transition" max-width="600">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="#000000" dark v-bind="attrs" v-on="on">details</v-btn>
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
    <template>
        <v-btn
          color="green"
          dark
          @click.stop="dialog = true"
        >
          Add New Customer
        </v-btn>

        <v-dialog
          v-model="dialog"
        >
          <v-card>
            <v-card-title class="text-h5">
            </v-card-title>

            <v-card-text>
              <add-customer />
            </v-card-text>

            <v-card-actions>
             
            </v-card-actions>
          </v-card>
        </v-dialog>
    </template>
  </div>
</template>

<script>
import AddCustomer from '../../components/add-customer.vue';
export default {
  components: { AddCustomer },
  name: "Customers",
  data() {
    return {
      dialog: false,
      headers: [
        {
          text: "Customer Id",
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
          name: "Mohammad",
          id: 237,
        },
        {
          name: "Khaled",
          id: 262,
        },
        {
          name: "Bayrak",
          id: 305,
        },
        {
          name: "Abd",
          id: 356,
        },
        {
          name: "Nala",
          id: 375,
        },
        {
          name: "Hiba",
          id: 392,
        },
        {
          name: "Toleen",
          id: 408,
        },
        {
          name: "Tala",
          id: 452,
        },
        {
          name: "Moustafa",
          id: 518,
        },
      ],
    };
  },
};
</script>
