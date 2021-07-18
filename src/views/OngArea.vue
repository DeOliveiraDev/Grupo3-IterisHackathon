<template>
  <v-card max-width="400" class="mx-auto">
    <div class="d-flex">
      <router-link to="/MemberMenu">
        <v-btn class="mx-3 mt-2" fab dark small color="teal lighten-1">
          <v-icon> mdi-arrow-left </v-icon>
        </v-btn>
      </router-link>
      <v-card-title>Lista de ONG's</v-card-title>
    </div>
    <v-container>
      <v-row dense>
        <v-col v-for="(ongs, i) in ongs" :key="i" cols="12">
          <v-card color="white" dark>
            <div>
              <div class="d-flex justify-center">
                <v-avatar class="mt-3 mb-3" height="auto" width="200" tile>
                  <v-img :src="ongs.logo" class="mb-5 mt-3"></v-img>
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
                        <strong> DESCRIÇÃO: </strong>
                        {{ ongs.descricao }}
                        <v-divider></v-divider>
                        <strong> NOME: </strong>
                        {{ ongs.nome }} <br />
                        <v-divider></v-divider>
                        <strong> ENDEREÇO: </strong>
                        {{ ongs.endereco }} <br />
                        <v-divider></v-divider>
                        <strong> CONTATO: </strong><br>
                        (00) 9 0000-0000 <br>
                        ongx@xmail.com
                        <v-btn class="ma-2" outlined color="teal lighten-1">
                          <a :href="ongs.site">Visitar Webpage</a>
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
      ongs: [],
    };
  },
  created() {
    fetch("https://it3-gdf-default-rtdb.firebaseio.com/alimentos/orgs.json")
      .then((resposta) => resposta.json())
      .then((json) => {
        this.ongs = json;
        console.log(this.ongs);
      });
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>