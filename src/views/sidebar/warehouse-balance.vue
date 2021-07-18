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
    <warehouse-table />
  </div>
</template>
<script>
import WarehouseTable from "../../components/warehouse-balance/warehouse-table";
export default {
  components: {
    WarehouseTable,
  },
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
    };
  },
};
</script>
