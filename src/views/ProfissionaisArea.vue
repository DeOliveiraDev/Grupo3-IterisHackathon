<template>
  <v-card max-width="400" class="mx-auto">
    <v-container>
      <v-row dense>
        <v-col v-for="(profissionais, i) in profissionais" :key="i" cols="12">
          <v-card color="white" dark>
            <div>
              <div class="d-flex justify-center">
                <v-avatar class="mt-3 mb-3" height="auto" width="200" tile>
                  <v-img :src="profissionais.imagem" class="mb-5 mt-3"></v-img>
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
                        {{profissionais.nome}} <br>
                        <v-divider></v-divider>
                        <strong> Local: </strong>
                        {{profissionais.local}} <br>
                        <v-divider></v-divider>
                        <strong> Serviços: </strong>
                        {{profissionais.servicos}} <br>
                        <v-divider></v-divider>
                        <strong> Contato: </strong>
                        <v-btn class="ma-2" outlined color="teal lighten-1">
                          <a :href="profissionais.site">Contato</a>
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
  name: "ProfissionaisArea",
  data() {
    return {
      profissionais: [],
    };
  },
  created() {
    fetch("https://it3-gdf-default-rtdb.firebaseio.com/saude/profissionais.json")
      .then((resposta) => resposta.json())
      .then((json) => {
        this.profissionais = json;
        console.log(this.profissionais);
      });
  },
};
</script>

<style scoped>
  a {
    text-decoration: none;
  }
</style>