<template>
  <div class="login" style="width: 100%; height: 100%">
    <v-card style="margin: auto; width: 100%; height: 100%; padding: 10%">
      <v-container style="width: 50%">
        <v-row>
          <v-col style="text-align: center">
            <h2>Account Login</h2>
          </v-col>
        </v-row>
        <v-row>
          <v-text-field
            v-model="email"
            :rules="[emailrules.required, emailrules.email]"
            label="E-mail"
          ></v-text-field>
        </v-row>
        <v-row>
          <v-text-field
            :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show3 ? 'text' : 'password'"
            name="input-10-2"
            hint="At least 8 characters"
            value="wqfasds"
            class="input-group--focused"
            @click:append="show3 = !show3"
            label="password"
          ></v-text-field>
        </v-row>
        <v-row>
          <v-col class="d-flex justify-center" style="text-align: cetner">
            <v-btn color="green" dark style="width: 200px"> login </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "login",
  data: () => ({
    show3: false,
    email: "",
    password: "Password",
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
      emailMatch: () => `The email and password you entered don't match`,
    },
    emailrules: {
      required: (value) => !!value || "Required.",
      counter: (value) => value.length <= 20 || "Max 20 characters",
      email: (value) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      },
    },
  }),
};
</script>
