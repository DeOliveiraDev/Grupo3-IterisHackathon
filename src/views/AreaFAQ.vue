<template>
  <v-card>
    <div class="d-flex">
      <v-btn class="mx-3 mt-2" fab dark small color="teal lighten-1">
        <v-icon> mdi-arrow-left </v-icon>
      </v-btn>
      <v-card-title>FAQ</v-card-title>
    </div>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>
          Item
          <template v-slot:actions>
            <v-icon color="red"> $expand </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>

