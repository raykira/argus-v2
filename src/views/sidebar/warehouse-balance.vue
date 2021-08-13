<template>
  <div class="warehouse">
    <v-row>
      <v-select
        v-model="select"
        :hint="'choose a warehosue'"
        :items="items"
        item-text="warehouse"
        item-value="abbr"
        label="Select"
        persistent-hint
        return-object
        single-line
      ></v-select>
    </v-row>
    <template>
      <v-data-table
        :headers="headers"
        :items="warehouses"
        sort-by="calories"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>My CRUD</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  class="mb-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  New Item
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          disabled
                          v-model="editedItem.id"
                          label="Warehouse name"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.name"
                          label="Item Name"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.address"
                          label="Address"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.phone"
                          label="Phone"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">
                    Cancel
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="text-h5"
                  >Are you sure you want to delete this warehouse?</v-card-title
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeDelete"
                    >Cancel</v-btn
                  >
                  <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                    >OK</v-btn
                  >
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="initialize"> Reset </v-btn>
        </template>
      </v-data-table>
    </template>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      select: { warehouse: "All", abbr: "All" },
      items: [
        { warehouse: "All Warehouses", abbr: "All" },
        { warehouse: "Georgia Warehouse", abbr: "GA" },
        { warehouse: "Nebraska Warehouse", abbr: "NE" },
        { warehouse: "California Warehouse", abbr: "CA" },
        { warehouse: "New York Warehouse", abbr: "NY" },
      ],
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: "Warehouse Id",
          align: "start",
          filterable: false,
          value: "id",
        },
        { text: "Warehouse Name", value: "name" },
        // { text: "Description", value: "description" },
        // { text: "Line Number", value: "line" },
        // { text: "Amount", value: "amount" },
        // { text: "Price", value: "price" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      warehouses: [],
      warehouseCurrent: {
        id: null,
        name: "",
        address: "",
        phone: "",
      },
      editedIndex: -1,
      editedItem: {
        id: null,
        name: "",
        address: "",
        phone: "",
      },
      defaultItem: {
        id: null,
        name: "",
        address: "",
        phone: "",
      },
    };
  },

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edite Warehouse";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
    this.fetch();
  },

  methods: {
    initialize() {
      this.warehouses = [
        {
          // desctiption: "description here",
          // line: 24,
          // amount: 4.0,
          // price: "1$",
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.warehouses.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.warehouses.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.warehouses.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      var warehouse = this.editedItem;
      if (this.editedIndex > -1) {
        // Update

        axios
          .put(`https://backend.argussys.site/api/warehouses/${warehouse.id}`, {
            name: warehouse.name,
            address: warehouse.address,
            phone: warehouse.phone,
          })
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log("Error: ", error);
          });
        Object.assign(this.warehouses[this.editedIndex], this.editedItem);
      } else {
        // ADD

        axios
          .post(`https://backend.argussys.site/api/warehouses`, {
            name: warehouse.name,
            address: warehouse.address,
            phone: warehouse.phone,
          })
          .then((response) => {
            console.log(response.data);
            this.editItem = response.data.data;
            this.warehouses.push(this.editedItem);
            location.reload();
          })
          .catch((error) => {
            console.log("Error: ", error);
          });
      }
      this.close();
      
    },
    fetch() {
      axios
        .get("https://backend.argussys.site/api/warehouses")
        .then((response) => {
          console.log(response.data);
          this.warehouses = response.data.data;
        })
        .catch((error) => {
          console.log("Error: ", error.response.data);
        });
    },
  },
};
</script>
