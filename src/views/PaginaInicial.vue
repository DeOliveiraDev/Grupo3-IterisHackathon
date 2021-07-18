<!-- App.vue -->

<template>
    <div classe="Pagina Inicial">

        <!-- login -->

        <div classe="login">
            <h1>Login</h1>
        
            <input type="text" placeholder="Email">
            <br>
            <input type="password" placeholder="Senha">
            <br>
            <div classe="btn-login">
                <router-link to="MemberMenu">
                    <button>Login</button>
                </router-link>
            </div>
            
            <p> 
                Você não tem conta?
                <span/>

                <a href="">Crie uma conta </a>
            </p>

        </div>


        <div class="sign-up">
            <h1>Crie uma conta</h1>
            <input type="text" placeholder="Email">
            <br>
            <input type="password" placeholder="Senha">
            <br>

            <input type="submit">

               <!--  Nossa historia -->

            <div class="Nossa Historia">
                <h2> Nossa historia</h2>
                <p>
                Com o início da pandemia, em 2020,estamospassndo por um momento muito difícil, mas pode ser amenizado com boa dose de coragem, aliada a uma gestão competente.
                mesmo com as dificuldades impostas pela crise,
                Com o início da pandemia, em 2020, muitos setores se viram em meio à crise devido ao isolamento social e lockdown em todos os estados e cidades do Brasil. Sendo assim, os comércios teve de se reinventar e se adaptar ao novo normal proposto, afinal, os clientes mudaram suas prioridades e hábitos de consumo, focando principalmente na esfera da saúde e alimentação.
                </p>

                    <!-- Missão,Visão e valores -->

                <h1> Misão</h1>
                <p>
                “Consolidar a nossa atuação como entidade de referência no nosso segmento, sendo também reconhecida em âmbito internacional, tornando-se autossuficiente com a participação da sociedade organizada”.
                </p>

                <h1> Visão</h1>
                <p>
                “Consolidar a nossa atuação como entidade de referência no nosso segmento, 
                sendo também reconhecida em âmbito internacional, tornando-se autossuficiente com a participação da sociedade organizada”.
                </p>

                
                <h1> Valore</h1>
                <p>
                Atender seus assistidos com qualidade, eficácia e eficiência promovendo e minimizando sua condição de vulnerabilidade social.
                </p>

                    <!--O que nossa empresa oferece-->
                <h1>O que nossa empresa oferece</h1>
           </div>

       
       
       
       
        </div>
    </div>


</template>

<script>
export default {
    name: "PaginaInicial",
}
</script>

