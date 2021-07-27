<template>
  <v-card>
    <!-- Título e Botão de Retorno -->
    <div class="d-flex">
      <router-link to="/MemberMenu">
        <v-btn class="mx-3 mt-2" fab dark small color="teal lighten-1">
          <v-icon> mdi-arrow-left </v-icon>
        </v-btn>
      </router-link>
      <v-card-title>FAQ</v-card-title>
    </div>

    <!-- Painel de Dúvidas -->
    <v-expansion-panels>
      <!--Dúvida 1-->
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h1>Sobre o que se trata a Connect Ubuntu?</h1>
          <template v-slot:actions>
            <v-icon color="teal lighten-1"> $expand </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Nosso principal objetivo é <strong>conectar</strong> ongs e empresas que desejam ajudar para que juntas possam ajudar cada vez mais pessoas.
        </v-expansion-panel-content>
      </v-expansion-panel>

      <!--Dúvida 2-->
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h1>Por que o nome Connect Ubuntu?</h1>
          <template v-slot:actions>
            <v-icon color="teal lighten-1"> $expand </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <strong>Connect</strong> vem do nosso objetivo que é conectar as empresas e as ong's, enquanto,
          <strong>Ubuntu</strong> É uma filosofia que representa o Respeito. Cortesia. Compartilhamento. Comunidade. Generosidade. Confiança. Desprendimento. Uma palavra pode ter muitos significados.
        </v-expansion-panel-content>
      </v-expansion-panel>

      <!--Dúvida 3-->
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h1>Outras Dúvidas?</h1>
          <template v-slot:actions>
            <v-icon color="teal lighten-1"> $expand </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Envie-nos um email: connectubuntu@connectubuntu.com.br
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
h1 {
  font-size: 17px;
}
</style>

