<template>
  <v-card class="mx-auto" max-width="344" color="transparent">
    <!-- CARD REGISTRO EMPRESAS -->
    <v-card class="mx-auto mt-1" max-width="344">
      <v-img
        src="https://cdn-sites-images.46graus.com/files/photos/7a524ab2/0ad1ded0-ff07-40a0-8269-b57cd1f174b6/aerial-android-wallpaper-architectural-design-373912-1024x682.jpg"
        height="200px"
      ></v-img>

      <v-card-title> Empresas </v-card-title>

      <v-card-subtitle>
        Cadastre sua empresa
      </v-card-subtitle>

      <v-card-actions>
        <router-link to="EmpresaCadastro">
          <v-btn color="teal lighten-1" block> CADASTRO </v-btn>
        </router-link>

        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>

    <!-- CARD REGISTRO DE ONG's -->
    <v-card class="mx-auto mt-3" max-width="344">
      <v-img
        src="https://dtpr0iglcwflm.cloudfront.net/profissoes/wp-content/uploads/2018/10/trabalho-voluntario-no-cv-scaled-1600x900.jpg"
        height="200px"
      ></v-img>

      <v-card-title> ONG's </v-card-title>

      <v-card-subtitle>
        Cadastre sua ONG
      </v-card-subtitle>

      <v-card-actions>
        <router-link to="OngsCadastro">
          <v-btn color="teal lighten-1" block> CADASTRO </v-btn>
        </router-link>

        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>

    <!-- CARD LISTA DE PROFISSIONAIS -->
    <v-card class="mx-auto mt-3" max-width="344">
      <v-img
        src="https://images.pexels.com/photos/2479312/pexels-photo-2479312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        height="200px"
      ></v-img>

      <v-card-title> Profissionais Cultura <br> e Saúde/Bem estar </v-card-title>

      <v-card-subtitle>
        Cadastro de Profissionais de Cultura e Saúde/Bem estar 
      </v-card-subtitle>

      <v-card-actions>
        <router-link to="ProfissionaisCadastro">
          <v-btn color="teal lighten-1" block> CADASTRO </v-btn>
        </router-link>

        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
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