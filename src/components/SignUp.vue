<template>
    <img class="signup" alt="Vue logo" src="../assets/cooking.png">
    <h1>Cadastro</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter your name" /><br />
        <input type="text" v-model="email" placeholder="Enter your email" /><br /> 
        <input type="password" v-model="password" placeholder="Enter your password" /><br />
        <button v-on:click="signUp">Confirmar cadastro</button>
        <p>
            <router-link class="router-link" to="/login">Fazer Login</router-link>
        </p>
    </div>
</template>
<script>

import axios from 'axios';

export default {
    name: 'SignUp',
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods:{
        async signUp()
        {
            if (!this.name || !this.email || !this.password) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        try {
            let result = await axios.post('http://localhost:3000/users', {
                name: this.name,
                email: this.email,
                password: this.password
            });

            if (result.status == 201) {
                alert("Usuário registrado com sucesso!");
                this.name = '';
                this.email = '';
                this.password = '';
                localStorage.setItem('user-info', JSON.stringify(result.data));
                this.$router.push({ name: 'Home-Page' });
            } else {
                alert("Erro ao registrar o usuário. Por favor, tente novamente.");
            }
        } catch (error) {
            alert("Ocorreu um erro ao registrar o usuário. Por favor, tente novamente.");
        }
    }
},
    mounted()
    {
        let user= localStorage.getItem('user-info');
        if(user)
        {
            this.$router.push({ name: 'Home-Page' });
        }
    }
}
</script>