<template>
  <v-card max-width="400" class="mx-auto">
    <v-container>
      <v-row dense>
        <v-col v-for="(empresas, i) in empresas" :key="i" cols="12">
          <v-card color="grey darken-1" dark>
            <div>
              <div class="d-flex justify-center">

                <v-avatar class="mt-3 mb-3" height="auto" width="200" tile>
                  <v-img :src="empresas.logo"></v-img>
                </v-avatar>

              </div>

                <v-card-actions>
                  <v-btn block>
                    Mais Informações
                  </v-btn>
                </v-card-actions>

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