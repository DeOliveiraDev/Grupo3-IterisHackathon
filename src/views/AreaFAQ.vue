<template>
  <v-card>
    <div class="d-flex">
      <router-link to="/MemberMenu">
        <v-btn class="mx-3 mt-2" fab dark small color="teal lighten-1">
          <v-icon> mdi-arrow-left </v-icon>
        </v-btn>
      </router-link>
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
          Mais Dúvidas? Envie-nos um email: connectubuntu@connectubuntu.com.br
          
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

