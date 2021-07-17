<template>
  <v-footer class="mt-2" color="dark" dark>
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
    name: "AppFooter"
}
</script>