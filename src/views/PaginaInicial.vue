<!-- App.vue -->

<template>
  <div classe="Pagina Inicial">
    <div class="logo">
        <v-img
            class="text-center"
            src="../assets/Flor.png"
            max-height="200"
            max-width="200"
            contain
        ></v-img>
    </div>
    <!-- login -->
    <div class="container">
        <div class="login">
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        </div>
        
        <!-- BOTÃO LOGIN -->
        <div class="text-center">
        <router-link to="MemberMenu">
        <v-btn rounded color="teal lighten-1" dark> LOGIN </v-btn>
        </router-link>
        </div>


        <div class="text-center">
            <p class="account-text">Ou, se você ainda não tem conta</p>
        <router-link to="RegisterMenu">
            <v-btn rounded color="dark" dark> Fazer Cadastro </v-btn>
        </router-link>
        </div>

    </div>

    <div class="sign-up">

      <!--  Nossa historia -->

      <div class="Nossa Historia">
        <h1>Nossa historia</h1>

        <p>
          Desde o início da pandemia, em 2020, estamos passando por um momento
          muito difícil. Acreditamos que as dificuldades podem ser amenizadas
          com solidariedade, união, trabalho, boa dose de coragem, aliada a uma
          gestão competente. Mesmo com as dificuldades impostas pela crise
          muitos setores tem se renovado com novas formas de realizar suas
          atividades, além de surgirem novas parcerias. Dentre esses setores
          temos empresas,Ong's e profissionais da saúde, arte cultura e outras
          áreas. Para contribuir melhor desenvolvimento desse cenário surge a
          Connect, que visa conctar artista, profissionais de varias áreas,
          ong's e empresas.
        </p>
        <!-- Missão,Visão e valores -->

        <h2>Missão</h2>
        <p>
          Realizando conexões, queremos combater a fome, o desemprego e outros
          problemas potencializados pela pandemia.
        </p>

        <h2>Visão</h2>
        <p>
          “Consolidar a nossa atuação como entidade de referência no nosso
          segmento, sendo também reconhecida em âmbito internacional,
          tornando-se autossuficiente com a participação da sociedade
          organizada”.
        </p>

        <h2>Valores</h2>
        <p>
          Atender as pessoas, profissionais, empresas e ong's com qualidade,
          eficácia e eficiência de forma a promover seus serviços e ações,
          minimizando vulnerabilidades sociais.
        </p>

        <!--O que nossa empresa oferece-->

        <h2>O que nossa empresa oferece</h2>

        <p>
          Oferecemos uma plataforma que facilita a conexão entre os setores ja
          citados, poupando tempo e recursos.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaginaInicial",
};
</script>


<style scoped>
.login {
  display: flex;
  flex-direction: column;
}
input[type="text"] {
    border: 2px solid #26A69A;
    border-radius: 15px;
    margin: 3px;
    max-width: 200px;
    margin-left: 68px;
    padding: 3px;
}
input[type="password"] {
    border: 2px solid #26A69A;
    border-radius: 15px;
    margin: 3px;
    max-width: 200px;
    margin-left: 68px;
    padding: 3px;
}
.logo {
    margin-left: 86px;
    margin-top: 30px;
}
a {
    text-decoration: none;
}
.account-text {
    margin-top: 17px;
    font-size: 18px;
}
</style>
