<template>
  <div class="addnewitem">
    <div class="ml-auto d-flex" width="800px" style="justify-content: center; padding:0">
      <v-card class="" max-width="" width="" style="maring:0">
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
                    ></v-text-field>
                  </div>
                </v-row>
                <v-row>
                  <div>
                    <v-text-field
                      style="width: 300px"
                      label="Item Name"
                    ></v-text-field>
                  </div>
                </v-row>
                <v-row>
                  <div>
                    <v-text-field
                      style="width: 300px"
                      label="Description"
                    ></v-text-field>
                  </div>
                </v-row>
                <v-row>
                  <div>
                    <v-text-field
                      style="width: 300px"
                      label="Price"
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
                  src="../assets/phone.jpg"
                >
                  <v-card-title>Black Case</v-card-title>
                </v-img>
              </v-row>
              <v-row>
                <v-btn
                  :loading="loading3"
                  :disabled="loading3"
                  color="#ea4642"
                  class="ma-3 white--text"
                  @click="loader = 'loading3'"
                >
                  Upload Image
                  <v-icon right dark> mdi-cloud-upload </v-icon>
                </v-btn>
              </v-row>
              <v-row>
                <v-col cols="6">
                  <div>
                    <v-text-field label="Length"></v-text-field>
                  </div>
                </v-col>
                <v-col cols="6">
                  <div>
                    <v-text-field label="Weight"></v-text-field>
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6">
                  <div>
                    <v-text-field label="Height"></v-text-field>
                  </div>
                </v-col>
                <v-col cols="6">
                  <div>
                    <v-text-field label="Width"></v-text-field>
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>

        <v-card-actions>
          <v-checkbox
            v-model="ex4"
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
</template>

<script>
export default {
  data: () => ({
    rules: [
      (value) => !!value || "Required.",
      (value) => (value && value.length >= 3) || "Min 3 characters",
    ],
  }),
};
</script>

<style></style>
