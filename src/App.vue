<template>
  <v-app>
  <Login/>
  
    
    <v-main>
      <PaginaInicial/>
          </v-main>
  </v-app>
</template>

<script>
import Login from './components/Login';
import PaginaInicial from './components/PaginaInicial';

export default {
  name: "App",

  components: {
    PaginaInicial,
    Login,
    
    

    
  },

  data: () => ({
    //
  }),
};
</script>
