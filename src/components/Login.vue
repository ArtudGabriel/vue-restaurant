<template> 
<img class="signup" alt="Vue logo" src="../assets/cooking.png">
    <h1>Login</h1>
    <div class="login">
        <input type="text" v-model="email" placeholder="Enter your email" /><br /> 
        <input type="password" v-model="password" placeholder="Enter your password" /><br />
        <button v-on:click="login">Login</button>
        <p>
            <router-link class="router-link" to="/signup">Cadastre-se</router-link>
        </p>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Login-Page',
    data() 
    {
        return {
        email: '',
        password: ''
        }
    },
    methods:{
        async login() {
            {
            if (!this.email || !this.password) {
            alert("Por favor, preencha todos os campos.");
            return;
            }
            let result = await axios.get('http://localhost:3000/users', {
                params: {
                    email: this.email,
                    password: this.password
                }
            });
            if (result.status == 200 && result.data.length > 0) {
                localStorage.setItem('user-info', JSON.stringify(result.data[0]));
                this.$router.push({ name: 'Home-Page' });
            } else {
                this.password = '';
                alert("Invalid email or password. Please try again.");
            }
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
};
</script>

<style>

.router-link {
    text-decoration: none;
}

</style>