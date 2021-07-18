<template>
    <v-card max-width="400" class="mx-auto">
        <v-container>
            <v-row dense>
                <v-col v-for="(ongscadastro, i) in ongscadastro" :key="i" cols="12">
                    <v-card color="white" dark>
                        <div id="app">
                            <form @submit.prevent="login">
                                <div>
                                    <label for="username">Nome ONG</label>
                                    <input name="username" v-model="username" placeholder="nome ong">
                                </div>
                                <div>
                                    <label for="password">Senha</label>
                                    <input name="password" v-model="password" placeholder="senha" type="password">
                                </div>
                                <div>
                                    <label for="firstname">Nome Pessoa Responsável</label>
                                    <input name="firstname" v-model="firstName" placeholder="nome">
                                </div>
                                <div>
                                    <label for="lastname">Sobrenome Pessoa Responsável</label>
                                    <input name="lastname" v-model="lastName" placeholder="sobrenome">
                                </div>
                                <div>
                                    <label for="cnpj">CNPJ</label>
                                    <input name="cnpj" v-model="number" placeholder="cnpj" type="number">
                                </div>
                                <div>
                                    <label for="description">Descrição</label>
                                    <input name="description" v-model="description" placeholder="descrição" type="text">
                                </div>
                                <div>
                                    <label for="address">Endereço</label>
                                    <input name="address" v-model="address" placeholder="address">
                                </div>
                                <div>
                                    <label for="email">Email</label>
                                    <input name="email" v-model="email" placeholder="address">
                                </div>
                                 <div>
                                    <label for="phone">Telefone</label>
                                    <input name="phone" v-model="phone" placeholder="telefone">
                                </div>
                                <input type="submit" value="register">
                            </form>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      description:"",
      address: "",
      phone: "",
      cnpj: "",
      email: ""
    };
  },
  methods: {
    async login() {
      const { username, password, firstname, lastname, description, address, phone, cnpj, email } = this;
      const res = await fetch(
        "https://SomberHandsomePhysics--five-nine.repl.co/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username,
            password,
            firstname,
            lastname,
            description,
            address,
            phone,
            cnpj,
            email
          })
        }
      );
      const data = await res.json();
      console.log(data);
    }
  }
};
</script>