<!-- App.vue -->

<template>
    <div classe="login">
        <h1>Login</h1>
        
        <input type="text" placeholder="Email" required>
        <br>
        
        <input type="password" placeholder="Senha" required>
        <br>
        
        <div classe="btn-login">
            <botton>Login</botton>
        </div>
        
        <p> 
            Você não tem conta?
            <a href="">Crie uma conta </a>
        </p>
    </div>
</template>

             
                 
<script>
    export default {
        name: "login",
        data() {
            return{};
            },
        methods:{}
    };

</script>
                 
<style scoped>
                 
</style>>
                 
                 