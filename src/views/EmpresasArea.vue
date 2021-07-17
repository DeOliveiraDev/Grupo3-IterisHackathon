<template>
  <v-card max-width="400" class="mx-auto">
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
                      <v-expansion-panel-header color="teal lighten-1" dark class="">MAIS INFORMAÇÕES</v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <br>
                        <strong> Nome: </strong>
                        {{empresas.nome}} <br>
                        <v-divider></v-divider>
                        <strong> Endereço: </strong>
                        {{empresas.endereco}} <br>
                        <v-divider></v-divider>
                        <strong> WebSite: </strong>
                        {{empresas.site}}
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
</style>