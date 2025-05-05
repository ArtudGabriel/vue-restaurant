<template>
    <Header />
    <h1>Olá {{name}}, bem-vindo(a)!</h1>
    <form class="add">
        <input type="text" name="name" placeholder="Enter restaurant name" v-model="restaurants.name"/><br/>
        <input type="text" name="address" placeholder="Enter restaurant address" v-model="restaurants.address"/><br />
        <input type="text" name="contact" placeholder="Enter restaurant contact" v-model="restaurants.contact"/><br/>
        <button type="button" v-on:click="addRestaurant">Adicionar um restaurante</button>
    </form>
</template>
<script>
import Header from './Header.vue';
import axios from 'axios';
export default {
    name: 'Add-Page',
    components: {
        Header
    },
    data() {
        return {
            restaurants: {
            name: '',
            address: '',
            contact: ''
        }
    }
    },
    methods: {
        async addRestaurant() {
            const result = await axios.post('http://localhost:3000/restaurants', {
                name: this.restaurants.name,
                address: this.restaurants.address,
                contact: this.restaurants.contact
            });
            if(result.status == 201) {
                this.$router.push({ name: 'Home-Page' });
            }
            console.warn(result);
        }
    },
    mounted()
    {
        let user= localStorage.getItem('user-info');
        if(!user)
        {
            this.$router.push({ name: 'SignUp' });
        }
    }
}
</script>

<style>
</style>