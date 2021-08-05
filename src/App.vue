<template>
  <v-app id="apps">
    <div style="display: none">
      <login />
    </div>

    <div>
      <application />
    </div>
  </v-app>
</template>

<script>
import Application from "./components/Application.vue";
import Login from "./components/login.vue";
export default {
  components: { Application, Login },
  name: "App",

  data() {
    return {};
  },
};
</script>

<style scoped></style>
