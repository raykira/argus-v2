<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="items"
      :items-per-page="5"
      class="elevation-0"
    >
      <template v-slot:item.action="{item}">
        <v-btn color="primary" dark @click="openDetails(item)"> Details </v-btn>
      </template>
    </v-data-table>

    <template>
      <v-dialog v-model="dialog" max-width="800">
        <template>
          <v-card>
            <v-card-text>
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
                    <v-container>
                      <v-row>
                        <v-col cols="6">
                          <v-card-text class="text--primary">
                            <v-row>
                              <div>
                                <v-text-field
                                  label="Item ID"
                                  :rules="rules"
                                  hide-details="auto"
                                  style="width: 300px"
                                  v-model="itemSelected.id"
                                ></v-text-field>
                              </div>
                            </v-row>
                            <v-row>
                              <div>
                                <v-text-field
                                  style="width: 300px"
                                  label="Item Name"
                                  v-model="itemSelected.name"
                                ></v-text-field>
                              </div>
                            </v-row>
                            <v-row>
                              <div>
                                <v-text-field
                                  style="width: 300px"
                                  label="Description"
                                  v-model="itemSelected.description"
                                ></v-text-field>
                              </div>
                            </v-row>
                            <v-row>
                              <div>
                                <v-text-field
                                  style="width: 300px"
                                  label="Price"
                                  v-model="itemSelected.price"
                                ></v-text-field>
                              </div>
                            </v-row>
                            <v-row>
                              <div>
                                <v-text-field
                                  style="width: 300px"
                                  label="Photo"
                                  
                                ></v-text-field>
                              </div>
                            </v-row>
                            <v-row>
                              <div>
                                <v-text-field
                                  style="width: 300px"
                                  label="Color"
                                  v-model="itemSelected.color"
                                ></v-text-field>
                              </div>
                            </v-row>
                          </v-card-text>
                        </v-col>
                        <v-col cols="6">
                          <v-row>
                            <v-img
                              class="white--text align-end"
                              height="200"
                              width="300"
                              src="../../assets/phone.jpg"
                            >
                              <v-card-title>Black Case</v-card-title>
                            </v-img>
                          </v-row>
                          <v-row>
                            <v-btn
                              color="#ea4642"
                              class="ma-3 white--text"
                            >
                              Upload Image
                              <v-icon right dark> mdi-cloud-upload </v-icon>
                            </v-btn>
                          </v-row>
                          <v-row>
                            <v-col cols="6">
                              <div>
                                <v-text-field label="Length" v-model="itemSelected.length"></v-text-field>
                              </div>
                            </v-col>
                            <v-col cols="6">
                              <div>
                                <v-text-field label="Weight" v-model="itemSelected.weight"></v-text-field>
                              </div>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col cols="6">
                              <div>
                                <v-text-field label="Height" v-model="itemSelected.height"></v-text-field>
                              </div>
                            </v-col>
                            <v-col cols="6">
                              <div>
                                <v-text-field label="Width" v-model="itemSelected.width"></v-text-field>
                              </div>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-container>

                    <v-card-actions>
                      <v-checkbox
                        label="Out Of Stock"
                        color="red"
                        value="red"
                        hide-details
                        style="padding-bottom: 30px"
                      ></v-checkbox>
                      <v-text-field style="padding: 0 35px" label="barcode">
                      </v-text-field>
                      <v-btn color="#fc9107" text class="ml-auto"> Add </v-btn>
                    </v-card-actions>
                  </v-card>
                </div>
              </div>
            </v-card-text>

            <v-card-actions> </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </template>

    <template>
      <v-btn color="green" dark @click.stop="dialog = true">
        Add New Item
      </v-btn>
    </template>
  </div>
</template>

<script>
// import AddItem from "../../components/add-item.vue";
import axios from "axios";

export default {
  // components: { AddItem },
  name: "Bills",
  data() {
    return {
      dialog: false,
      rules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 3) || "Min 3 characters",
      ],
      headers: [
        {
          text: "Item Id",
          align: "start",
          sortable: false,
          value: "id",
        },
        { text: "Item Name", value: "name" },
        { text: "Details", value: "action" },
      ],
      items: [],
      itemSelected: {
        "id": null,
        "name": "",
        "description": "",
        "price": "",
        "photo": null,
        "color": "",
        "outOfStock": "",
        "length": "",
        "width": "",
        "height": "",
        "weight": "",
        "Barcode": "",
      },
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    fetch() {
      axios
        .get(`https://backend.argussys.site/api/items`)
        .then((response) => {
          console.log(response.data);
          this.items = response.data.data;
        })
        .catch((error) => {
          console.log("Error: ", error.response.data);
        });
    },
    openDetails(item) {
      console.log("Cilcked....");
      this.dialog = true;
      console.log(item);  
      this.itemSelected = item;
    },
  },
};
</script>
