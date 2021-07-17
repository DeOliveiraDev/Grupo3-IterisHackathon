<template>
  <v-app>

    <AppBar/>
    <v-main>
      <EmpresasArea/>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar.vue';
import EmpresasArea from './components/EmpresasArea.vue';

export default {
  name: 'App',

  components: {
    AppBar,
    EmpresasArea
  },

  data: () => ({
    //
  }),
};
</script>
