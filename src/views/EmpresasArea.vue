<template>
  <v-card max-width="400" class="mx-auto">
    <div class="d-flex">
      <router-link to="/MemberMenu">
        <v-btn class="mx-3 mt-2" fab dark small color="teal lighten-1">
          <v-icon> mdi-arrow-left </v-icon>
        </v-btn>
      </router-link>
      <v-card-title>Lista de Empresas</v-card-title>
    </div>
    <v-container>
      <v-row dense>
        <v-col v-for="(empresas, i) in empresas" :key="i" cols="12">
          <v-card color="white" dark>
            <div>
              <div class="d-flex justify-center">
                <v-avatar class="mt-3 mb-3" height="auto" width="200" tile>
                  <v-img :src="empresas.logo" class="mb-5 mt-3"></v-img>
                </v-avatar>
              </div>
              <!-- TESTE POP-UP-->

              <template>
                <v-row justify="center">
                  <v-expansion-panels inset>
                    <v-expansion-panel>
                      <v-expansion-panel-header
                        color="teal lighten-1"
                        dark
                        class=""
                        >MAIS INFORMAÇÕES</v-expansion-panel-header
                      >
                      <v-expansion-panel-content>
                        <br />
                        <strong> NOME: </strong>
                        {{ empresas.nome }} <br />
                        <v-divider></v-divider>
                        <strong> ENDEREÇO: </strong>
                        {{ empresas.endereco }} <br />
                        <v-divider></v-divider>
                        <strong> CONTATOS </strong><br>
                        (00) 9 0000-0000<br>
                        empresax@xmail.com
                        <v-btn class="ma-2" outlined color="teal lighten-1">
                          <a :href="empresas.site">Visitar Webpage</a>
                        </v-btn>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-row>
              </template>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "EmpresasArea",
  data() {
    return {
      empresas: [],
    };
  },
  created() {
    fetch("https://it3-gdf-default-rtdb.firebaseio.com/alimentos/empresas.json")
      .then((resposta) => resposta.json())
      .then((json) => {
        this.empresas = json;
        console.log(this.empresas);
      });
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>