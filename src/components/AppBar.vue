<template>
  <v-card>
    <!-- BARRA DE MENU -->
    <v-app-bar color="dark" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Conectamos!</v-toolbar-title>
      <v-spacer></v-spacer>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <router-link to="/">
          <v-tab>EMPRESAS</v-tab>
          </router-link>

          <router-link to="/OngArea">
          <v-tab>ONG's</v-tab>
          </router-link>

        </v-tabs>
      </template>
    </v-app-bar>

    <!-- SIDEBAR CONFIG -->
    <v-navigation-drawer v-model="drawer" height="100vh" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="teal lighten-1">
          <!-- SIDEBAR ITEM 1 -->
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>

          <!-- SIDEBAR ITEM 2 -->
          <router-link to="/FAQ">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-frequently-asked-questions</v-icon>
              </v-list-item-icon>
              <v-list-item-title>FAQ</v-list-item-title>
            </v-list-item>
          </router-link>
          
          <!-- SIDEBAR ITEM 3 -->
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  name: "AppBar",
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style scoped>
  a {
    text-decoration: none;
  }
</style>