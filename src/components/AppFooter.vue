<template>
  <v-footer color="dark" dark>
    <v-col
      class="text-center"
      cols="12"
    >
      Iteris ❤️ Hackathon — {{ new Date().getFullYear() }}
    </v-col>
  </v-footer>
</template>

<script>
export default {
    name: "AppFooter"
}
</script>