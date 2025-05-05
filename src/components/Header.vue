<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/add-restaurant">Adicionar Restaurante</router-link>
        <a v-on:click="logout" href="#">Logout</a>
    </div>
</template>

<script>
export default {
    name: 'Header-Component',
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({name:'Login-Page'});
        }
    }
}
</script>

<style>

body {
    padding: 0;
    margin: 0;
}
.nav {
    background-color: #0e0e0e;
    overflow: hidden;
}
.nav a {
    text-decoration: none;
    float: left;
    color: #fff;
    padding: 14px 20px;
    display: block;
}

.nav a:hover {
    background-color: #494949;
}
</style>