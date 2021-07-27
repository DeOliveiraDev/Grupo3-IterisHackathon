<template>
  <v-form>
    <v-container>
      <v-text-field label="Nome da ONG" required></v-text-field>

      <v-text-field label="Endereço" required></v-text-field>

      <v-text-field :rules="emailRules" label="E-mail" required></v-text-field>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
  }),
};
</script>