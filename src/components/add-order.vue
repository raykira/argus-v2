<template>
  <div class="addnewitem">
    <div
      class="ml-auto d-flex"
      width="800px"
      style="justify-content: center; padding: 0"
    >
      <v-card class="" max-width="" width="" style="maring: 0">
        <!-- <v-card-subtitle
          class="pb-0"
          style="background-color: #7e57c2; color: white"
        >
          Item
        </v-card-subtitle> -->
        <v-container style="padding: 30px">
          <v-row>
            <h3 style="margin: 10px auto">Purchase Order</h3>
          </v-row>
          <v-row>
            <v-text-field label="serial number"></v-text-field>
          </v-row>
          <v-row>
            <div class="d-flex">
              <v-text-field
                label="supplier name"
                style="margin: 0 10px"
              ></v-text-field>
              <v-text-field
                label="invoice date"
                style="margin: 0 10px"
              ></v-text-field>
              <v-text-field
                label="delivery date"
                style="margin: 0 10px"
              ></v-text-field>
            </div>
          </v-row>
          <v-row>
            <div class="d-flex">
              <v-text-field
                label="delivery warehouse"
                style="margin: 0 10px"
              ></v-text-field>
            </div>
          </v-row>
          <v-row>
            <v-text-field
              label="notes"
            ></v-text-field>
          </v-row>
          <div style="background-color: black; height: 10px; width: 100%; margin: 20px 0 40px"></div>
          <v-row>
            <template>
              <v-data-table
                dense
                :headers="headers"
                :items="products"
                item-key="name"
                class="elevation-1"
                style="margin-left: auto; margin-right: auto"
              ></v-data-table>
            </template>
          </v-row>
        </v-container>

        <v-card-actions>
          <v-btn color="#ea4642" text class="ml-auto"> Decline Order </v-btn>
          <v-btn color="#7e57c2" text class="ml-auto"> Generate Entry Copy </v-btn>
          <v-btn color="#7e57c2" text class="ml-auto"> Print </v-btn>
          <v-btn color="#ea4642" text class="ml-auto"> Edit </v-btn>
          <v-btn color="#fc9107" text class="ml-auto"> Add </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    rules: [
      (value) => !!value || "Required.",
      (value) => (value && value.length >= 3) || "Min 3 characters",
    ],
    products: [
      {
        name: "Frozen Yogurt",
        quantity: 159,
        size: 6.0,
        price: 24,
        protein: 4.0,
        iron: "1%",
      },
      {
        name: "Ice cream sandwich",
        quantity: 237,
        size: 9.0,
        price: 37,
        protein: 4.3,
        iron: "1%",
      },
      {
        name: "Eclair",
        quantity: 262,
        size: 16.0,
        price: 23,
        protein: 6.0,
        iron: "7%",
      },
      {
        name: "Cupcake",
        quantity: 305,
        size: 3.7,
        price: 67,
        protein: 4.3,
        iron: "8%",
      },
      {
        name: "Gingerbread",
        quantity: 356,
        size: 16.0,
        price: 49,
        protein: 3.9,
        iron: "16%",
      },
      {
        name: "Jelly bean",
        quantity: 375,
        size: 0.0,
        price: 94,
        protein: 0.0,
        iron: "0%",
      },
    ],
    headers: [
      {
        text: "Product Name",
        align: "start",
        sortable: true,
        value: "name",
      },
      { text: "Quantity", value: "quantity" },
      { text: "Size", value: "size" },
      { text: "Price", value: "price" },
    ],
  }),
};
</script>

<style></style>
