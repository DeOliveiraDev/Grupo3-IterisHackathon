<template>
  <v-card class="mx-auto" max-width="344" color="transparent">
    <!-- CARD LISTA DE EMPRESAS -->
    <v-card class="mx-auto mt-1" max-width="344">
      <v-img
        src="https://cdn-sites-images.46graus.com/files/photos/7a524ab2/0ad1ded0-ff07-40a0-8269-b57cd1f174b6/aerial-android-wallpaper-architectural-design-373912-1024x682.jpg"
        height="200px"
      ></v-img>

      <v-card-title> Empresas </v-card-title>

      <v-card-subtitle>
        Empresas parceiras que estão dispostas a contribuir
      </v-card-subtitle>

      <v-card-actions>
        <router-link to="EmpresasArea">
          <v-btn color="teal lighten-1" block> VER MAIS </v-btn>
        </router-link>

        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>

    <!-- CARD LISTA DE ONG's -->
    <v-card class="mx-auto mt-3" max-width="344">
      <v-img
        src="https://dtpr0iglcwflm.cloudfront.net/profissoes/wp-content/uploads/2018/10/trabalho-voluntario-no-cv-scaled-1600x900.jpg"
        height="200px"
      ></v-img>

      <v-card-title> ONG's </v-card-title>

      <v-card-subtitle>
        ONG's que precisam de apoio para ajudar ainda mais
      </v-card-subtitle>

      <v-card-actions>
        <router-link to="OngArea">
          <v-btn color="teal lighten-1" block> VER MAIS </v-btn>
        </router-link>

        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
    <!-- LOGOUT BUTTON -->
    <v-container>
      <router-link to="/">
        <v-btn color="red accent-2" dark block>
          <v-icon> mdi-logout </v-icon>
          LOGOUT
        </v-btn>
      </router-link>

      <v-spacer></v-spacer>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    show: false,
  }),
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>