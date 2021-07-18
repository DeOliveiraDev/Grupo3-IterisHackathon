<template>
  <v-card>
    <!-- BARRA DE MENU -->
    <v-app-bar color="dark" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Connect Ubuntu</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <!-- SIDEBAR CONFIG -->
    <v-navigation-drawer v-model="drawer" height="100vh" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="teal lighten-1">
          
          <!-- SIDEBAR ITEM -->
          <router-link to="/AreaFAQ">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-frequently-asked-questions</v-icon>
              </v-list-item-icon>
              <v-list-item-title>FAQ</v-list-item-title>
            </v-list-item>
          </router-link>
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