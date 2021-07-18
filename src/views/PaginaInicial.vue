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


         
       
       
       
       
       
        </div>
    </div>


</template>

<script>
export default {
    name: "PaginaInicial",
}
</script>

