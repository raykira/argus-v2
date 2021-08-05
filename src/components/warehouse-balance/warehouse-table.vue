<template>
  <v-card style="margin: 24px 0 0 0" class="elevation-0">
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
        class="elevation-0"
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
      class="elevation-0"
    ></v-data-table>
  </v-card>
</template>

<script>
export default {
  name: "warehouse-table",
  data() {
    return {
      myloadingvariable: false, //note::: this should be true when loading data, after that it should be false
      search: "",
      headers: [
        {
          text: "Item Id",
          align: "start",
          filterable: false,
          value: "id",
        },
        { text: "Item Name", value: "name" },
        { text: "Description", value: "desctiption" },
        { text: "Line Number", value: "line" },
        { text: "Amount", value: "amount" },
        { text: "Price", value: "price" },
      ],
      desserts: [
        {
          id: "432",
          name: "name",
          desctiption: "description here",
          line: 24,
          amount: 4.0,
          price: "1$",
        },
        {
          id: "734",
          name: "name",
          desctiption: "description here",
          line: 37,
          amount: 4.3,
          price: "1$",
        },
        {
          id: "546",
          name: "name",
          desctiption: "description here",
          line: 23,
          amount: 6.0,
          price: "7$",
        },
        {
          id: "7",
          name: "name",
          desctiption: "description here",
          line: 67,
          amount: 4.3,
          price: "8$",
        },
        {
          id: "584",
          name: "name",
          desctiption: "description here",
          line: 49,
          amount: 3.9,
          price: "16$",
        },
        {
          id: "56",
          name: "name",
          desctiption: "description here",
          line: 94,
          amount: 0.0,
          price: "0$",
        },
        {
          id: "93",
          name: "name",
          desctiption: "description here",
          line: 98,
          amount: 0,
          price: "2$",
        },
        {
          id: "2546",
          name: "name",
          desctiption: "description here",
          line: 87,
          amount: 6.5,
          price: "45$",
        },
        {
          id: "84",
          name: "name",
          desctiption: "description here",
          line: 51,
          amount: 4.9,
          price: "22$",
        },
        {
          id: "43",
          name: "name",
          desctiption: "description here",
          line: 65,
          amount: 7,
          price: "6$",
        },
        {
          id: "432",
          name: "name",
          desctiption: "description here",
          line: 24,
          amount: 4.0,
          price: "1$",
        },
        {
          id: "734",
          name: "name",
          desctiption: "description here",
          line: 37,
          amount: 4.3,
          price: "1$",
        },
        {
          id: "546",
          name: "name",
          desctiption: "description here",
          line: 23,
          amount: 6.0,
          price: "7$",
        },
        {
          id: "7",
          name: "name",
          desctiption: "description here",
          line: 67,
          amount: 4.3,
          price: "8$",
        },
        {
          id: "584",
          name: "name",
          desctiption: "description here",
          line: 49,
          amount: 3.9,
          price: "16$",
        },
        {
          id: "56",
          name: "name",
          desctiption: "description here",
          line: 94,
          amount: 0.0,
          price: "0$",
        },
        {
          id: "93",
          name: "name",
          desctiption: "description here",
          line: 98,
          amount: 0,
          price: "2$",
        },
        {
          id: "2546",
          name: "name",
          desctiption: "description here",
          line: 87,
          amount: 6.5,
          price: "45$",
        },
        {
          id: "84",
          name: "name",
          desctiption: "description here",
          line: 51,
          amount: 4.9,
          price: "22$",
        },
        {
          id: "43",
          name: "name",
          desctiption: "description here",
          line: 65,
          amount: 7,
          price: "6$",
        },
      ],
    };
  },
};
</script>
