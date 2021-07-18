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
                <h1> Nossa historia</h1>

                
               <p class="text-justify pa-md-10 mx-lg-auto">Desde o início da pandemia, em 2020, estamos passando por um momento muito difícil.
                Acreditamos que as dificuldades podem ser amenizadas com solidariedade, união, trabalho, 
                boa dose de coragem, aliada a uma gestão competente.
                Mesmo com as dificuldades impostas pela crise muitos setores tem se renovado com 
                novas formas de realizar suas atividades, além de surgirem novas parcerias.
                Dentre esses setores temos empresas,Ong's e profissionais da saúde, arte cultura e outras áreas.                
                Para contribuir melhor desenvolvimento desse cenário surge a Connect, que visa conctar artista,
                 profissionais de varias áreas, ong's e empresas.</p>

                    <!-- Missão,Visão e valores -->

                
                <h2> Missão</h2>
                
                 <p class="linha">Realizando conexões, queremos combater a fome, o desemprego e outros problemas potencializados pela pandemia.
                </p>

                <h2> Visão</h2>
                
                <p class="linha">“Consolidar a nossa atuação como entidade de referência no nosso segmento, 
                sendo também reconhecida em âmbito internacional, tornando-se autossuficiente com a 
                participação da sociedade organizada”.</p>
            
                
                <h2> Valores</h2>
                <p class="linha">Atender as pessoas, profissionais, empresas e ong's com qualidade, eficácia e eficiência de forma a promover 
                  seus serviços e ações, minimizando vulnerabilidades sociais.</p>
            

                    <!--O que nossa empresa oferece-->
                
                <h2>O que nossa empresa oferece</h2>

                <p class="linha">Oferecemos uma plataforma que facilita a conexão entre os setores ja citados, poupando tempo e recursos.</p>
                
           </div>

       
       
       
       
        </div>
    </div>


</template>

<script>

export default {
    name: "PaginaInicial",
}
</script>

